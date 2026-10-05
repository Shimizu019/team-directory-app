import { useEffect } from "react";
import Avatar from "../components/Avatar";

function About() {
  useEffect(() => {
    document.title = "About | Team Directory";
  }, []);

  const topics = [
    ["React Router", "Page navigation across Home, Users, details, and About."],
    ["Reusable components", "Navbar, cards, buttons, loader, and error messages with props."],
    ["useState", "Search text, favorites list, and dark mode state."],
    ["useEffect", "Simulated data loading and per-page document titles."],
    ["Local user data", "All members come from src/data/users.js — no API."],
  ];

  return (
    <div className="page-enter mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
        About
      </p>
      <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
        A student-built team directory
      </h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
        This is a React Team Directory application demonstrating React Router,
        reusable components, props, useState, useEffect, search, favorites,
        and dark mode.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {topics.map(([title, text]) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <h2 className="font-bold">{title}</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:flex-row sm:items-center">
        <Avatar name="Benju Guzman" size="lg" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Developer
          </p>
          <h2 className="text-xl font-extrabold tracking-tight">Benju Guzman</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            BSIT 3-6 · 3rd Year
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
