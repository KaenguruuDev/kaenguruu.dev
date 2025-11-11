"use client";

import React from "react";
import { useEffect } from "react";

const birthYear = 2007;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

const themes = [
  {
    text: "#ecf3f1",
    background: "#060b09ff",
    primary: "#9ad5c1",
    secondary: "#2c8667",
    accent: "#40cf9e",
  },
  {
    text: "#eee6f1",
    background: "#0a050c",
    primary: "#c893db",
    secondary: "#661f7f",
    accent: "#ae2cdd",
  },
  {
    text: "#ecf5f7",
    background: "#050d0fff",
    primary: "#89cfe1",
    secondary: "#1a7188",
    accent: "#23bae2",
  },
  {
    text: "#f7f1e9",
    background: "#0e0904ff",
    primary: "#e9bd81",
    secondary: "#985e0e",
    accent: "#fa9c1b",
  },
];

export default function Home() {
  useEffect(() => {
    const theme = themes[Math.floor(Math.random() * themes.length)];
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, []);

  return (
    <main className="min-h-screen bg-background text-text font-sans">
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <h1 className="text-6xl font-extrabold mb-4 relative inline-block">
          Kaenguruu Dev
          <span className="absolute left-0 bottom-0 w-full h-2 bg-accent rounded-full opacity-50 -z-10"></span>
        </h1>
        <div className="flex gap-8 mb-10">
          <a
            href="https://github.com/KaenguruuDev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-background px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all font-semibold mt-8"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kaenguruu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-background px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all font-semibold mt-8"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kaenguruu.dev@gmail.com"
            className="bg-primary text-background px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all font-semibold mt-8"
          >
            Email
          </a>
        </div>

        <p className="text-lg max-w-4xl text-justify">
          I’m a {age}-year-old solo developer passionate about technology,
          computer science, and physics. I have worked on projects ranging from
          full-stack web apps to video games. My experience includes a hands-on
          internship at Cronn, where I maintained and improved a large legacy
          codebase using OpenRewrite. I'm currently working on BeutelBot, a
          multifunctional Discord bot developed primarily in C#.
        </p>
        <a
          href="https://bot.kaenguruu.dev"
          className="bg-primary text-background px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all font-semibold mt-16"
        >
          Explore BeutelBot
        </a>
      </section>

      <section className="px-6 max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

        <ul className="space-y-10 relative">
          <li className="flex items-start">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 bg-primary rounded-full border-2 border-background"></div>
              <div className="flex-1 w-px bg-secondary mt-0.5"></div>
            </div>
            <div className="ml-6">
              <p className="font-semibold">
                Computer Engineering B.Sc. @ RWTH Aachen
              </p>
              <span className="text-sm text-gray-500">
                October 2025 - Present
              </span>
              <p>
                Currently pursuing a Bachelor's degree in Computer Engineering
                at the{" "}
                <a href="https://www.rwth-aachen.de" className="link">
                  RWTH Aachen University
                </a>
                , focusing on software development, hardware systems, and
                computer architecture.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 bg-primary rounded-full border-2 border-background"></div>
              <div className="flex-1 w-px bg-secondary mt-0.5"></div>
            </div>
            <div className="ml-6">
              <p className="font-semibold">Internship Cronn GmbH</p>
              <span className="text-sm text-gray-500">
                17.06.2025 - 26.09.2025
              </span>
              <p>
                3-Month paid internship at{" "}
                <a href="https://cronn.de" className="link">
                  Cronn
                </a>{" "}
                (Backend, CI/CD, Testing)
                <br />
                <a href="https://blog.cronn.de/en/" className="link">
                  Blog Post about OpenRewrite
                </a>
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 bg-primary rounded-full border-2 border-background"></div>
              <div className="flex-1 w-px bg-secondary mt-0.5"></div>
            </div>
            <div className="ml-6">
              <p className="font-semibold">Otto-Kühne-Schule Bad Godesberg</p>
              <span className="text-sm text-gray-500">2017 - 2025</span>
              <p>
                Completed secondary education at{" "}
                <a href="https://www.otto-kuehne-schule.de/" className="link">
                  Otto-Kühne-Schule
                </a>{" "}
                with advanced-level courses in mathematics and physics. Finished
                the Abitur (German university-entrance qualification) in July
                2025
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 bg-primary rounded-full border-2 border-background"></div>
            </div>
            <div className="ml-6">
              <p className="font-semibold">
                Cambridge English: Advanced (CAE), Level C2 - Grade A
              </p>
              <span className="text-sm text-gray-500">March 2024</span>
              <p>
                Achieved Grade A at Level C2, demonstrating near-native English
                proficiency.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
