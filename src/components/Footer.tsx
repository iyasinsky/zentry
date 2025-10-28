import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-screen bg-arcane-violet py-4 text-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        <p className="text-sm font-light text-center md:text-left">
          &copy; Nova 2024. All rights reserved
        </p>
        <div className="flex gap-4 justify-center md:justify-start md:-translate-x-14">
          {[<FaDiscord />, <FaTwitter />, <FaYoutube />, <FaMedium />].map((icon, index) => (
            <a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-250 ease-in-out hover:text-white"
            >
              {icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-sm font-light hover:underline text-center md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
