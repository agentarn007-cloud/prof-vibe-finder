import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import LoadingAnimation from "@/components/LoadingAnimation";
import type { Question } from "@/data/questions";

const Test = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const grade = searchParams.get("grade");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Redirect if no grade parameter
    if (!grade || (grade !== "9" && grade !== "11")) {
      navigate("/");
      return;
    }

    // Load questions JSON dynamically based on grade
    const controller = new AbortController();
    const load = async () => {
      try {
        setIsLoading(true);
        const file = grade === "11" ? "/data/tests/test_11_class.json" : "/data/tests/test_9_class.json";
        const res = await fetch(file, { signal: controller.signal });
        if (!res.ok) throw new Error(`Failed to load ${file}`);
        const data = await res.json();
        // Transform JSON to Question[]
        const qs: Question[] = (data?.questions ?? []).map((q: any) => {
          const mapWeights = (letter: "a" | "b" | "c" | "d") => {
            const w = q.weights?.[letter];
            // Map JSON "Creativity" to our "Creative"
            if (w === "Creativity") return "Creative";
            return w as "IT" | "Creative" | "Social" | "Technical" | undefined;
          };
          return {
            id: q.id,
            text: q.question as string,
            answers: [
              { letter: "a", text: q.answers?.a as string, category: mapWeights("a") },
              { letter: "b", text: q.answers?.b as string, category: mapWeights("b") },
              { letter: "c", text: q.answers?.c as string, category: mapWeights("c") },
              { letter: "d", text: q.answers?.d as string, category: mapWeights("d") },
            ],
          } satisfies Question;
        });
        setSelectedQuestions(qs);
      } catch (e) {
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };
    load();
    return () => controller.abort();
  }, [grade, navigate]);

  // currentQuestion is derived only after questions are loaded

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setTimeout(() => {
        try {
          // Compute counts from all answers to handle back/changes robustly
          const computed = { IT: 0, Creative: 0, Social: 0, Technical: 0 } as Record<
            "IT" | "Creative" | "Social" | "Technical",
            number
          >;
          newAnswers.forEach((ans, idx) => {
            if (ans === "skipped") return;
            const cat = selectedQuestions[idx].answers.find((a) => a.letter === (ans as any))?.category as
              | "IT"
              | "Creative"
              | "Social"
              | "Technical"
              | undefined;
            if (cat) computed[cat]++;
          });
          const total = computed.IT + computed.Creative + computed.Social + computed.Technical;
          const payload = {
            grade,
            counts: computed,
            total,
            answers: newAnswers,
            ts: Date.now(),
          };
          localStorage.setItem("pvfResults", JSON.stringify(payload));
        } catch {}
        navigate("/results");
      }, 500);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  if (isLoading || selectedQuestions.length === 0) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
      {/** Safe to read currentQuestion now */}
      {(() => {
        // define currentQuestion in a local IIFE scope before JSX usage
        const currentQuestion = selectedQuestions[currentQuestionIndex];
        return (
          <>
            <ProgressBar
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={selectedQuestions.length}
            />

            <div className="pt-32 pb-16 px-4 flex items-center justify-center min-h-screen">
              <QuestionCard
                question={currentQuestion.text}
                answers={currentQuestion.answers}
                onAnswer={handleAnswer}
                onBack={handleBack}
                canGoBack={currentQuestionIndex > 0}
              />
            </div>
          </>
        );
      })()}
    </div>
  );
};

export default Test;
