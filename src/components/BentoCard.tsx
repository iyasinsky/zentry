interface BentoCardProps {
  src: string;
  title: string;
  description?: string;
}

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        className="absolute inset-0 size-full object-cover object-center"
        loop
        muted
        autoPlay
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-ethereal-mist">
        <div>
          <h1 className="uppercase text-4xl md:text-6xl font-zentry font-feature font-black">
            {title}
          </h1>
          {description && <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
