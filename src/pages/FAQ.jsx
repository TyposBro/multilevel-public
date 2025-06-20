import React from "react";

const FAQ = () => {
  return (
    <div className="static-page-container">
      <h1>Frequently Asked Questions (FAQ)</h1>

      <div className="static-page-section">
        <h2>General Questions</h2>
        <p>
          <strong>Q: What is this platform?</strong>
        </p>
        <p>
          A: This is an English speaking practice platform designed to simulate a multilevel exam
          format.
        </p>

        <p>
          <strong>Q: Who is this for?</strong>
        </p>
        <p>
          A: It's for anyone looking to improve their English speaking skills in a structured,
          test-like environment.
        </p>
      </div>

      <div className="static-page-section">
        <h2>Technical Questions</h2>
        <p>
          <strong>Q: What do I need to use the app?</strong>
        </p>
        <p>
          A: You need a modern web browser (like Chrome or Firefox), a stable internet connection,
          and a working microphone.
        </p>

        <p>
          <strong>Q: My recording is not working. What should I do?</strong>
        </p>
        <p>
          A: First, ensure you have given microphone permissions to your browser for our website.
          Second, check your system's microphone settings to make sure it is selected as the default
          input device.
        </p>
      </div>

      {/* Add more questions and answers as needed */}
    </div>
  );
};

export default FAQ;
