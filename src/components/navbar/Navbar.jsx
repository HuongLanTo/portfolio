import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Navbar_Data from "../../data/navbar_data";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const [isScrolling, setIsScrolling] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) {
        const scrollPos = window.scrollY + window.innerHeight / 2;

        if (scrollPos >= document.getElementById("contact").offsetTop) {
          setMenu("contact");
        } else if (scrollPos >= document.getElementById("projects").offsetTop) {
          setMenu("projects");
        } else if (
          scrollPos >= document.getElementById("experience").offsetTop
        ) {
          setMenu("experience");
        } else if (scrollPos >= document.getElementById("about").offsetTop) {
          setMenu("about");
        } else {
          setMenu("home");
        }
      }

      // Handle navbar visibility
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleSetMenu = (href) => {
    setMenu(href);
    setIsScrolling(false);
    setTimeout(() => {
      setIsScrolling(true);
    }, 1000);
  };

  return (
    <div className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <img src={logo} alt="" style={{ width: "100px" }} />
      <img src={menu_open} alt="" className="nav-mob-open" onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt=""
          className="nav-mob-close"
          onClick={closeMenu}
        />
        {Navbar_Data.map((item, index) => {
          return (
            <li key={index}>
              <AnchorLink
                className="anchor-link"
                offset={item === "home" ? 0 : 50}
                href={`#${item.href}`}
              >
                <p onClick={() => handleSetMenu(item.href)}>{item.title}</p>
              </AnchorLink>
              {menu === item.href ? <img src={underline} /> : <></>}
            </li>
          );
        })}
      </ul>
      <AnchorLink className="anchor-link" offset={50} href="#contact">
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
