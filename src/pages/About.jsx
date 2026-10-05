import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About | Team Directory";
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        This is a React Team Directory application demonstrating React Router,
        reusable components, props, useState, useEffect, search, favorites,
        and dark mode.
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>React Router for page navigation</li>
        <li>Reusable components with props</li>
        <li>useState for search, favorites, and dark mode</li>
        <li>useEffect for loading data and updating the document title</li>
        <li>Local user data only</li>
      </ul>
    </div>
  );
}

export default About;
