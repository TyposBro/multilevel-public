import React from 'react';
import '../assets/PrivacyPolicy.css'; // We will create this new CSS file

const PrivacyPolicy = () => {
  return (
    <div className="static-page-container">
      <div className="privacy-policy-content">
        {/* The logo is now a separate div with a CSS background */}
        <div className="privacy-logo"></div>

        <h1 className="title">PRIVACY POLICY</h1>
        <p className="subtitle">Last updated June 19, 2025</p>

        <p className="body-text">
          This Privacy Notice for Multilevel Inc. ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), describes how and why we might access, collect, store, use, and/or share ("<strong>process</strong>") your personal information when you use our services ("<strong>Services</strong>"), including when you:
        </p>
        <ul>
          <li className="body-text">Download and use our mobile application (Multilevel), or any other application of ours that links to this Privacy Notice</li>
          <li className="body-text">Use Multilevel. A multi-level English learning and practice application.</li>
          <li className="body-text">Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>
        <p className="body-text">
          <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:typosbro@proton.me" className="link">typosbro@proton.me</a>.
        </p>

        <h2 className="heading-1">SUMMARY OF KEY POINTS</h2>
        <p className="body-text">
          <strong><em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by using our table of contents below to find the section you are looking for.</em></strong>
        </p>
        {/* ... Continue translating the rest of your HTML content into JSX ... */}
        {/* For example: */}
        <p className="body-text"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a className="link" href="#personalinfo">personal information you disclose to us</a>.</p>
        
        {/* ... and so on for the rest of the document. */}
        {/* It is tedious but necessary for security and compatibility. */}
        
        <h2 className="heading-1" id="toc">TABLE OF CONTENTS</h2>
        <ol>
          <li><a href="#infocollect" className="link">WHAT INFORMATION DO WE COLLECT?</a></li>
          <li><a href="#infouse" className="link">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
          {/* ... Add all other TOC items */}
        </ol>

        <h2 className="heading-1" id="infocollect">1. WHAT INFORMATION DO WE COLLECT?</h2>
        <h3 className="heading-2" id="personalinfo">Personal information you disclose to us</h3>
        <p className="body-text">
          <strong><em>In Short:</em></strong> <em>We collect personal information that you provide to us.</em>
        </p>
        <p className="body-text">
          We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
        </p>
        {/* Continue adding all sections of your privacy policy here */}

      </div>
    </div>
  );
};

export default PrivacyPolicy;