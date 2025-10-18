const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center z-50">
      <div className="flex gap-4">
        <div
          className="w-6 h-6 rounded-full animate-pulse"
          style={{
            backgroundColor: "hsl(var(--neon-blue))",
            animationDelay: "0s",
            animationDuration: "1.5s",
          }}
        />
        <div
          className="w-6 h-6 rounded-full animate-pulse"
          style={{
            backgroundColor: "hsl(var(--neon-pink))",
            animationDelay: "0.2s",
            animationDuration: "1.5s",
          }}
        />
        <div
          className="w-6 h-6 rounded-full animate-pulse"
          style={{
            backgroundColor: "hsl(var(--neon-green))",
            animationDelay: "0.4s",
            animationDuration: "1.5s",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingAnimation;
