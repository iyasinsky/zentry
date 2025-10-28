import AnimatedTitle from './AnimatedTitle';
import Button from './Button';

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-ethereal-mist sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <div className="contact-clip-path-1">
            <img src="/img/contact-1.webp" alt="image" />
          </div>
          <div className="contact-clip-path-2 lg:translate-y-40 translate-y-60 ">
            <img src="/img/contact-2.webp" alt="image" />
          </div>
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <div className="absolute md:scale-125">
            <img src="/img/swordman-partial.webp" alt="image" />
          </div>
          <div className="sword-man-clip-path md:scale-125">
            <img src="/img/swordman.webp" alt="image" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-sm uppercase mb-10">Join Zentry</p>
          <AnimatedTitle externalClasses="pointer-events-none relative z-10">
            <div className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
              <span className="animated-word">let's</span>
              <span className="animated-word font-feature">build</span>
              <span className="animated-word">the</span>
            </div>

            <div className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
              <span className="animated-word font-feature">new</span>
              <span className="animated-word font-feature">era</span>
              <span className="animated-word">of</span>
            </div>

            <div className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
              <span className="animated-word">gaming</span>
              <span className="animated-word font-feature">together</span>
            </div>
          </AnimatedTitle>
        </div>
        <Button id="contact-btn" title="contact us" externalClasses="mt-10 bg-white m-auto" />
      </div>
    </div>
  );
};

export default Contact;
