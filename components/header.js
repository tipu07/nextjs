import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import http from "../helpers/http";
import Text from "../components/text";
import { cmsFileUrl } from "../helpers/helpers";
import Image from "next/image";

export default function Header({ headerServices }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const ToggleAction = () => {
    setToggle(!toggle);
  };
  const closeToggle = () => {
    setToggle(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setToggle(false);
  };

  // ===========header visible or hide============

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = currentScrollPos > prevScrollPos;

      setVisible(scrollingDown ? false : true);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // ======end code=======================================
  return (
    <header>
      <div className="contain-fluid">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo.webp" alt="" />
          </Link>
        </div>
        <button
          type="button"
          className={toggle ? "toggle active" : "toggle"}
          onClick={ToggleAction}
        >
          <span></span>
        </button>
        <nav className={toggle ? "active" : ""}>
          <ul id="nav">
            <li>
              <Link href="/about" className="link" onClick={closeToggle}>
                <span>About</span>
              </Link>
            </li>
            <li
              className={`drop ${isDropdownOpen ? "open" : ""}`}
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              <Link href="#" className="link">
                <span>Services</span>
              </Link>
              <ul className="sub">
                {headerServices?.map((data, index) => {
                  return (
                    <li key={data?.id || index}>
                      <Link
                        href={`/service/${data?.slug}`}
                        onClick={closeDropdown}
                      >
                        <img
                          src={cmsFileUrl(data?.image1, "services")}
                          alt={data?.title}
                        />
                        <span>
                          <Text string={data?.title} />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <Link href="/portfolio" className="link" onClick={closeToggle}>
                <span>Work</span>
              </Link>
            </li>
            <li>
              <Link href="/careers" className="link" onClick={closeToggle}>
                <span>Careers</span>
              </Link>
            </li>
            <li className="btn_blk">
              <Link
                href="/project-request"
                className="site_btn simple round hover_prime"
                onClick={closeToggle}
              >
                Launch Project
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="overlay"></div>
    </header>
  );
}
