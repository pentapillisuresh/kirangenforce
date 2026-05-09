import { useEffect, useRef } from 'react';

const AnimatedCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      animId = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      ring.style.width = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = 'hsl(38 85% 55%)';
      ring.style.backgroundColor = 'hsl(38 85% 55% / 0.1)';
    };

    const onMouseLeaveLink = () => {
      ring.style.width = '40px';
      ring.style.height = '40px';
      ring.style.borderColor = 'hsl(38 85% 55% / 0.6)';
      ring.style.backgroundColor = 'transparent';
    };

    document.addEventListener('mousemove', onMouseMove);
    animId = requestAnimationFrame(animate);

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      links.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[hsl(38,85%,55%)] pointer-events-none z-[9999] transition-none"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 pointer-events-none z-[9998]"
        style={{
          borderColor: 'hsl(38 85% 55% / 0.6)',
          willChange: 'transform',
          transition: 'width 0.2s, height 0.2s, border-color 0.2s, background-color 0.2s',
        }}
      />
    </>
  );
};

export default AnimatedCursor;