import {
  GithubOutlined,
  LinkedinOutlined,
  MoonFilled,
  SunFilled,
} from "@ant-design/icons";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Landing() {
  const [mainTheme, setMainTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mainTheme);
  }, [mainTheme]);

  const toggleTheme = () => {
    setMainTheme(mainTheme === "light" ? "dark" : "light");
  };
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 button-background rounded-full p-3"
      >
        {mainTheme === "light" ? (
          <MoonFilled style={{ fontSize: "35px" }} />
        ) : (
          <SunFilled
            style={{ fontSize: "35px", color: "var(--button-color)" }}
          />
        )}
      </button>
      <main className="flex flex-col gap-8 row-start-2 justify-center">
        <h1 className="text-8xl text-center sm:text-left font-[family-name:var(--font-playfair-display)] self-center">
          Hello! I&apos;m Mohan.
        </h1>
        <p className="text-2xl text-center self-center font-[family-name:var(--font-source-sans-3)]">
          I&apos;m a software engineer working in the field of Finance.
        </p>
        <div className="flex justify-center gap-4">
          <button className="button-background rounded-full p-2">
            <a href="https://github.com/MohanVashist1" target="_blank">
              <GithubOutlined
                style={{ color: "var(--button-color)", fontSize: "35px" }}
              />
            </a>
          </button>
          <button className="button-background rounded-full p-2">
            <a
              href="https://www.linkedin.com/in/mohan-vashist-781513170/"
              target="_blank"
            >
              <LinkedinOutlined
                style={{ color: "var(--button-color)", fontSize: "35px" }}
              />
            </a>
          </button>
          <button className="button-background rounded-full p-2">
            <a href="Mohan_Vashist_Resume.pdf" target="_blank">
              <Image
                src="/resume.svg"
                alt="Resume"
                width={30}
                height={30}
                priority
              />
            </a>
          </button>
        </div>
      </main>
      <div className="m-auto">
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
    </div>
  );
}
