import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Links = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://github.com", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-screen py-4 text-black bg-violet-300">
      <div className="container flex flex-col items-center justify-between gap-4 px-10 mx-auto md:flex-row">
        <p className="text-sm text-center md:text-left">
          &copy; Heang 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {Links.map((link) => (
            <a
              key={link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-sm text-center hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
