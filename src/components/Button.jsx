const Button = ({ id, title, icon, externalClasses }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 flex justify-center items-center w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black gap-1 ${externalClasses}`}
    >
      {icon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        {title}
      </span>
    </button>
  );
};

export default Button;
