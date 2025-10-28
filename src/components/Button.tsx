import { ReactNode } from 'react';

interface ButtonProps {
  id: string;
  title: string;
  icon?: ReactNode;
  externalClasses?: string;
}

const Button = ({ id, title, icon, externalClasses }: ButtonProps) => {
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
