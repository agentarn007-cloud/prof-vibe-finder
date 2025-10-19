import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import LoadingAnimation from "@/components/LoadingAnimation";
import { questions } from "@/data/questions";

const Test = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const grade = searchParams.get("grade");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Redirect if no grade parameter
    if (!grade || (grade !== "9" && grade !== "11")) {
      navigate("/");
      return;
    }

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [grade, navigate]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Test complete - navigate to results
      setTimeout(() => {
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

  const handleSkip = () => {
    handleAnswer("skipped");
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
      <ProgressBar
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />

      <div className="pt-32 pb-16 px-4 flex items-center justify-center min-h-screen">
        <QuestionCard
          question={currentQuestion.text}
          answers={currentQuestion.answers}
          onAnswer={handleAnswer}
          onBack={handleBack}
          onSkip={handleSkip}
          canGoBack={currentQuestionIndex > 0}
        />
      </div>
    </div>
  );
};

export default Test;
