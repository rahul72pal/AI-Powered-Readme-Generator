import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const URL = import.meta.env.VITE_REACT_URL;

const App = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [fullText, setFullText] = useState(null);
  const [copied, setCopied] = useState(false);

  const [repoLink, setRepoLink] = useState("");
  const [projectOverview, setProjectOverview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!fullText) return;
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 10);
    return () => clearInterval(interval);
  }, [fullText]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("URL:", URL);
    setLoading(true);
    setDisplayedText(""); // reset before showing markdown

    axios
      .post(`${URL}/get-repo-info`, {
        repoLink,
        projectOverview,
      })
      .then((response) => {
        console.log("Response:", response.data);
        setFullText(response.data?.readme || "No README found");
        setLoading(false); // move here
      })
      .catch((error) => {
        console.error("Error fetching repo info:", error);
        setFullText("Error fetching README. Please try again.");
        setLoading(false); // move here too
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4">
      <h1 className="text-3xl font-bold text-gray-400 mb-14">
        {loading ? "⏳ Wait a moment..." : "📄AI-README File Generator ✨"}{" "}
      </h1>

      {fullText ? (
        <>
          <div className="w-full max-w-4xl bg-[#1e1e1e] rounded-lg shadow-lg overflow-hidden relative">
            {/* Fake window header */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-[#444]">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="absolute top-0.5 right-4 bg-gray-700 text-white px-3 py-1 rounded text-xs hover:bg-gray-600 transition"
            >
              {copied ? "Copied!" : "Copy"}
            </button>

            {/* Markdown-rendered code area */}
            <div className="p-4 text-green-400 font-mono text-sm h-[70vh] overflow-auto prose prose-invert prose-pre:text-green-400">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {displayedText}
              </ReactMarkdown>
            </div>
          </div>
          <div>
            <button
              onClick={() => setFullText(null)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Generate Another
            </button>
          </div>
        </>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-lg p-6 w-full max-w-md shadow-lg"
        >
          <h2 className="text-xl font-bold mb-4 text-gray-300">
            Submit Project Info
          </h2>
          <div className="mb-4">
            <label className="block mb-1 font-semibold text-gray-500">
              GitHub Repo Link
            </label>
            <input
              type="text"
              value={repoLink}
              onChange={(e) => setRepoLink(e.target.value)}
              className="w-full px-3 py-2 border rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold text-gray-500">
              Project Overview
            </label>
            <textarea
              value={projectOverview}
              onChange={(e) => setProjectOverview(e.target.value)}
              className="w-full px-3 py-2 border text-gray-300 rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Generate Markdown
          </button>
        </form>
      )}
    </div>
  );
};

export default App;
