import { useRef } from 'react';
import gsap from 'gsap';
import AnimatedTitle from './AnimatedTitle';
import Button from './Button';

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut',
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: 'power1.inOut',
      });
    }
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-ethereal-mist">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-base uppercase md:text-xs">the multiversal ip world</p>

        <div className="relative size-full">
          <AnimatedTitle externalClasses="mt-5 pointer-events-none mix-blend-difference relative z-10">
            <div className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
              <span className="animated-word">the</span>
              <span className="animated-word font-feature">story</span>
              <span className="animated-word">of</span>
            </div>

            <div className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
              <span className="animated-word">a</span>
              <span className="animated-word">hidden</span>
              <span className="animated-word font-feature">realm</span>
            </div>
          </AnimatedTitle>

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and
              shape your fate amidst infinite opportunities.
            </p>

            <Button id="realm-btn" title="discover prologue" externalClasses="mt-5 bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
