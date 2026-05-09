import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9997] bg-transparent">
      <div
        className="h-full transition-none"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, hsl(38,85%,55%), hsl(28,90%,65%))',
        }}
      />
    </div>
  );
};

export default ScrollProgress;