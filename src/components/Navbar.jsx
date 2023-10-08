import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex h-36 lg:h-24 items-center justify-between">
      <div className="ml-16 mt-7 lg:ml-32 w-3/4 sm:w-full sm:ml-16">
        <h1 className="font-jjk text-6xl">
          Jujur Kasian
        </h1>
      </div>
      <div className="md:flex mt-7 mr-32 justify-around w-1/4 hidden">
        <a
          href="https://www.linkedin.com/in/imam-rizaldi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="src/assets/linkedin-logo.png"
            className="w-7 h-7"
            alt="linkedin"
          />
        </a>
        <a
          href="https://github.com/rzldimam28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="src/assets/github-logo.png"
            className="w-7 h-7"
            alt="github"
          />
        </a>
        <a
          href="https://www.instagram.com/rzldimam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="src/assets/instagram-logo.png"
            className="w-7 h-7"
            alt="instagram"
          />
        </a>
      </div>
      <div className="flex flex-col h-36 mr-10 md:hidden mt-32">
        <img
          src={toggle ? "src/assets/close.png" : "src/assets/hamburger.png"}
          className={`w-7 h-7 my-3 transform ${toggle ? 'rotate-90' : 'rotate-0'} transition-transform ease-in-out duration-300`}
          alt="hamburger"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={toggle ? "flex flex-col w-10" : "hidden"}>
          <a
            href="https://www.linkedin.com/in/imam-rizaldi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/linkedin-logo.png"
              className="w-7 h-7 my-3"
              alt="linkedin"
            />
          </a>
          <a
            href="https://github.com/rzldimam28"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/github-logo.png"
              className="w-7 h-7 my-3"
              alt="github"
            />
          </a>
          <a
            href="https://www.instagram.com/rzldimam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/instagram-logo.png"
              className="w-7 h-7 my-3"
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
