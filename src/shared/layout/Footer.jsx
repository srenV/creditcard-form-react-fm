import { GithubLogoIcon, CopyrightIcon } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center flex flex-row items-center justify-between w-full">
      <div className="mx-2 transition-transform flex flex-row items-center gap-1">
        <CopyrightIcon size={20} /> 2026 Soeren Timo Voigt
      </div>
      <div className="mx-2 transition-transform flex flex-row items-center gap-2">
        <a
          href="https://github.com/srenV"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105"
          aria-label="Open GitHub profile"
        >
          <GithubLogoIcon size={32} />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/srenV"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-3xl hover:scale-105"
          aria-label="Open Frontend Mentor profile"
        >
          FM
        </a>
      </div>
      <div className="mx-2 transition-transform flex flex-col">
        <a
          href="https://srenv.vercel.app/impressum"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105"
          aria-label="Open legal notice"
        >
          Legal notice
        </a>
        <a
          href="https://srenv.vercel.app/legal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105"
          aria-label="Open privacy policy"
        >
          Privacy policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
