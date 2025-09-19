import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import SoundIndicator from './SoundIndicator';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const NavBar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);

  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavBarVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setIsNavBarVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavBarVisible(true);
      navContainerRef.current.classList.add('floating-nav');
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavBarVisible ? 0 : -100,
      opacity: isNavBarVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavBarVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              icon={<TiLocationArrow />}
              externalClasses="bg-ethereal-mist md:flex flex-row-reverse hidden"
            />
          </div>
          <div className="flex h-full items-center gap-10">
            <div className="hidden md:block">
              <a href="#nexus" className="nav-hover-btn">
                Nexus
              </a>
              <a href="#vault" className="nav-hover-btn">
                Vault
              </a>
              <a href="#prologue" className="nav-hover-btn">
                Prologue
              </a>
              <a href="#about" className="nav-hover-btn">
                About
              </a>
              <a href="#contact" className="nav-hover-btn">
                Contact
              </a>
            </div>
            <SoundIndicator />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
