import { TiLocationArrow } from 'react-icons/ti';
import BentoCard from './BentoCard';
import BentoTilt from './BentoTilt';

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular text-ethereal-mist text-lg ">Into the Metagame Layer</p>
          <p className="font-circular text-ethereal-mist/50 text-lg max-w-md">
            Immerse yourself in a rich and ever-expanding universe where a vibrant array of products
            converge into an interconnected overlay experience on your world.
          </p>
        </div>

        <BentoTilt className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-72">
          <BentoCard
            src="videos/feature-1.mp4"
            title="radiant"
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="relative border border-white/20 col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title="zigma"
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>
          <BentoTilt className="relative border border-white/20 col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title="nexus"
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </BentoTilt>
          <BentoTilt className="relative border border-white/20 col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title="azul"
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </BentoTilt>

          <BentoTilt className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
            <div className="flex size-full flex-col justify-between bg-arcane-violet p-5">
              <h3 className="uppercase md:text-6xl text-4xl font-black font-zentry font-feature max-w-64">
                More coming soon
              </h3>
              <TiLocationArrow className="m-5 scale-[5] ml-auto" />
            </div>
          </BentoTilt>
          <BentoTilt className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
            <video
              className="size-full object-cover object-center"
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
