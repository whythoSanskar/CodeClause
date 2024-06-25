"use client";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import AvatarImg from "@/assets/my-avatar.png";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { PiGithubLogoLight, PiLinkedinLogoLight } from "react-icons/pi";
const Aside = () => {
  const sidebarRef = useRef<HTMLElement>(null);
  const toggleSidebar = () => {
    sidebarRef.current?.classList.toggle("active");
  };

  const CONTACTS_LIST = [
    {
      title: "Email",
      link: "mailto:mishrasanskar60@gmail.com",
      icon: <CiMail />,
      value: "mishrasanskar60kar@gmail.com",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/sanskar-mishra0",
      icon: <PiLinkedinLogoLight />,
      value: "Sanskar Mishra",
    },
    {
      title: "Github",
      link: "https://www.github.com/whythoSanskar",
      icon: <PiGithubLogoLight />,
      value: "whythoSanskar",
    },
  ];
  const SOCIAK_LINKS = [
    {
      title: "Twitter",
      link: "https://www.twitter.com/whythoSanskar",
      icon: <FaXTwitter />,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/whythosanskar",
      icon: <CiInstagram />,
    },
  ];

  return (
    <aside className="sidebar" data-sidebar ref={sidebarRef}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image src={AvatarImg} placeholder="blur" alt="Sanskar" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Sanskar Mishra
          </h1>

          <p className="title">Web Developer</p>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={toggleSidebar}
        >
          <span>Show Contacts</span>
          <FaChevronDown className="" />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          {CONTACTS_LIST.map((contact, index) => (
            <li className="contact-item"key={index}>
              <div className="icon-box">{contact.icon}</div>

              <div className="contact-info">
                <p className="contact-title">{contact.title}</p>

                <Link href={contact.link} className="contact-link">
                  {contact.value}
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {SOCIAK_LINKS.map((social) => (
            <li className="social-item" key={social.title}>
              <a href={social.link} className="social-link">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default Aside;
