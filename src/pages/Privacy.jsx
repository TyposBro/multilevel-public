import React from "react";
import "../assets/Privacy.css"; // Adjust the path as necessary

const PrivacyPolicy = () => {
  // The SVG logo data from the original HTML
  const logoSvgData =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDFEMUQxIiBkPSJNNC4yODMgMjQuMTA3Yy0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY2LS43NjhoLS4wODVjLjA1Ny41MDIuMDg2Ljc5Mi4wODYuODd2Mi40MzRILjk4NXYtOC42NDhoMS4zMzJsLjIzMS43NzloLjA3NmMuMzgzLS41OTQuOTUtLjg5MiAxLjcwMi0uODkyLjcxIDAgMS4yNjQuMjc0IDEuNjY1LjgyMi40MDEuNTQ4LjYwMiAxLjMwOS42MDIgMi4yODMgMCAuNjQtLjA5NCAxLjE5OC0uMjgyIDEuNjctLjE4OC40NzMtLjQ1Ni44MzMtLjgwMyAxLjA4LS4zNDcuMjQ3LS43NTYuMzctMS4yMjUuMzd6TTMuOCAxOS4xOTNjLS40MDUgMC0uNy4xMjQtLjg4Ni4zNzMtLjE4Ny4yNDktLjI4My42Ni0uMjkgMS4yMzN2LjE3N2MwIC42NDUuMDk1IDEuMTA3LjI4NyAxLjM4Ni4xOTIuMjguNDk1LjQxOS45MS40MTkuNzM0IDAgMS4xMDEtLjYwNSAxLjEwMS0xLjgxNiAwLS41OTAtLjA5LTEuMDM0LS4yNy0xLjMyOS0uMTgyLS4yOTUtLjQ2NS0uNDQzLjg1Mi0uNDQzem01LjU3IDEuNzk0YzAgLjU5NC4wOTggMS4wNDQuMjkzIDEuMzQ4LjE5Ni4zMDQuNTEzLjQ1Ny45NTQuNDU3LjQzNyAwIC43NS0uMTUyLjk0Mi0uNDU0LjE5Mi0uMzAzLjI4OC0uNzUzLjI4OC0xLjM1MSAwLS41OTUtLjA5Ny0xLjA0LS4yOS0xLjMzOC0uMTk0LS4yOTctLjUxLS40NDUtLjk1LS40NDUtLjQzOCAwLS43NTMuMTQ3LS45NDYuNDQzLS4xOTQuMjk1LS4yOS43NDItLjI5IDEuMzR6bTQuMTUzIDBjMCAuOTc3LS4yNTggMS43NDItLjc3NCAyLjI5My0uNTE1LjU1Mi0xLjIzMy44MjctMi4xNTQuODI3LS41NzYgMC0xLjA4NS0uMTI2LTEuNTI1LS4zNzhhMi41MiAyLjUyIDAgMCAxLTEuMDE1LTEuMDg4Yy0uMjM3LS40NzMtLjM1NS0xLjAyNC0uMzU1LTEuNjU0IDAtLjk4MS4yNTYtMS43NDQuNzY4LTIuMjg4LjUxMi0uNTQ1IDEuMjMyLS44MTcgMi4xNi0uODE3LjU3NiAwIDEuMDg1LjEyNiAxLjUyNS4zNzYuNDQuMjUxLjc3OS42MSAxLjAxNSAxLjA4LjIzNi40NjkuMzU1IDEuMDE5LjM1NSAxLjY0OXpNMTkuNzEgMjRsLS40NjItMi4xLS42MjMtMi42NTNoLS4wMzdMMTcuNDkzIDI0SDE1LjczbC0xLjcwOC02LjAwNWgxLjYzM2wuNjkzIDIuNjU5Yy4xMS40NzYuMjI0IDEuMTMzLjMzOCAxLjk3MWguMDMyYy4wMTUtLjI3Mi4wNzctLjcwNC4xODgtMS4yOTRsLjA4Ni0uNDU3Ljc0Mi0yLjg3OWgxLjgwNGwuNzA0IDIuODc5Yy4wMTQuMDc5LjAzNy4xOTUuMDY3LjM1YTIwLjk5OCAyMC45OTggMCAwIDEgLjE2NyAxLjAwMmMuMDIzLjE2NS4wMzYuMjk5LjA0LjM5OWguMDMyYy4wMzItLjI1OC4wOS0uNjExLjE3Mi0xLjA2LjA4Mi0uNDUuMTQxLS43NTQuMTc3LS45MTFsLjcyLTIuNjU5aDEuNjA2TDIxLjQ5NCAyNGgtMS43ODN6bTcuMDg2LTQuOTUyYy0uMzQ4IDAtLjYyLjExLS44MTcuMzMtLjE5Ny4yMi0uMzEuNTMzLS4zMzguOTM3aDIuMjk5Yy0uMDA4LS40MDQtLjExMy0uNzE3LS4zMTctLjkzNy0uMjA0LS4yMi0uNDgtLjMzLS44MjctLjMzem0uMjMgNS4wNmMtLjk2NiAwLTEuNzIyLS4yNjctMi4yNjYtLjgtLjU0NC0uNTM0LS44MTYtMS4yOS0uODE2LTIuMjY3IDAtMS4wMDcuMjUxLTEuNzg1Ljc1NC0yLjMzNC41MDMtLjU1IDEuMTk5LS44MjUgMi4wODctLjgyNS44NDggMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDcyLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MSAwIC43MDMtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45Mi4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTEuMTA0em03LjI1My02LjIyNmMuMjIyIDAgLjQwNi4wMTYuNTUzLjA0OWwtLjEyNCAxLjUzNmExLjg3NyAxLjg3NyAwIDAgMC0uNDgzLS4wNTRjLS41MjMgMC0uOTMuMTM0LTEuMjIyLjQwMy0uMjkyLjI2OC0uNDM4LjY0NC0uNDM4IDEuMTI4VjI0aC0xLjYzOHYtNi4wMDVoMS4yNGwuMjQyIDEuMDFoLjA4Yy4xODctLjMzNy40MzktLjYwOC43NTYtLjgxNGExLjg2IDEuODYgMCAwIDEgMS4wMzQtLjMwOXptNC4wMjkgMS4xNjZjLS4zNDcgMC0uNjIuMTEtLjgxNy4zMy0uMTk3LjIyLS4zMS41MzMtLjMzOC45MzdoMi4yOTljLS4wMDctLjQwNC0uMTEzLS43MTctLjMxNy0uOTM3LS4yMDQtLjIyLS40OC0uMzMtLjgyNy0uMzN6bS4yMyA1LjA2Yy0uOTY2IDAtMS43MjItLjI2Ny0yLjI2Ni0uOC0uNTQ0LS41MzQtLjgxNi0xLjI5LS44MTYtMi4yNjcgMC0xLjAwNy4yNTEtMS43ODUuNzU0LTIuMzM0LjUwNC0uNTUgMS4yLS44MjUgMi4wODctLjgyNS44NDkgMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDczLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MiAwIC43MDQtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45MTkuMzJhNS43OSA1Ljc5IDAgMCAxLTEuMTkyLjEwNHptNS44MDMgMGMtLjcwNiAwLTEuMjYtLjI3NS0xLjY2My0uODIyLS40MDMtLjU0OC0uNjA0LTEuMzA3LS42MDQtMi4yNzggMC0uOTg0LjIwNS0xLjc1Mi42MTUtMi4zMDEuNDEtLjU1Ljk3NS0uODI1IDEuNjk1LS44MjUuNzU1IDAgMS4zMzIuMjk0IDEuNzI5Ljg4MWguMDU0YTYuNjk3IDYuNjk3IDAgMCAxLS4xMjQtMS4xOTh2LTEuOTIyaDEuNjQ0VjI0SDQ2LjQzbC0uMzE3LS43NzloLS4wN2MtLjM3Mi41OTEtLjk0Ljg4Ni0xLjcwMi44ODZ6bS41NzQtMS4zMDZjLjQyIDAgLjcyNi0uMTIxLjkyMS0uMzY1LjE5Ni0uMjQzLjMwMi0uNjU3LjMyLTEuMjR2LS4xNzhjMC0uNjQ0LS4xLTEuMTA2LS4yOTgtMS4zODYtLjE5OS0uMjc5LS41MjItLjQxOS0uOTctLjQxOWEuOTYyLjk2MiAwIDAgMC0uODUuNDY1Yy0uMjAzLjMxLS4zMDQuNzYtLjMwNCAxLjM1IDAgLjU5Mi4xMDIgMS4wMzUuMzA2IDEuMzMuMjA0LjI5Ni40OTYuNDQzLjg3NS40NDN6bTEwLjkyMi00LjkyYy43MDkgMCAxLjI2NC4yNzcgMS42NjUuODMuNC41NTMuNjAxIDEuMzEyLjYwMSAyLjI3NSAwIC45OTItLjIwNiAxLjc2LS42MiAyLjMwNC0uNDE0LjU0NC0uOTc3LjgxNi0xLjY5LjgxNi0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY1OS0uNzY4aC0uMTEzbC0uMjc0LjY2MWgtMS4yNTF2LTguMzU3aDEuNjM4djEuOTQ0YzAgLjI0Ny0uMDIxLjY0My0uMDY0IDEuMTg3aC4wNjRjLjM4My0uNTk0Ljk1LS44OTIgMS43MDMtLjg5MnptLS41MjcgMS4zMWMtLjQwNCAwLS43LjEyNS0uODg2LjM3NC0uMTg2LjI0OS0uMjgzLjY2LS4yOSAxLjIzM3YuMTc3YzAgLjY0NS4wOTYgMS4xMDcuMjg3IDEuMzg2LjE5Mi4yOC40OTUuNDE5LjkxLjQxOS4zMzcgMCAuNjA1LS4xNTUuODA0LS40NjUuMTk5LS4zMS4yOTgtLjc2LjI5OC0xLjM1IDAtLjU5MS0uMS0xLjAzNS0uMy0xLjMzYS45NDMuOTQzIDAgMCAwLS44MjMtLjQ0M3ptMy4xODYtMS4xOTdoMS43OTRsMS4xMzQgMy4zNzljLjA5Ni4yOTMuMTYzLjY0LjE5OCAxLjA0MmguMDMzYy4wMzktLjM3LjExNi0uNzE3LjIzLTEuMDQybDEuMTEyLTMuMzc5aDEuNzU3bC0yLjU0IDYuNzczYy0uMjM0LjYyNy0uNTY2IDEuMDk2LS45OTcgMS40MDctLjQzMi4zMTItLjkzNi40NjgtMS41MTIuNDY4LS4yODMgMC0uNTYtLjAzLS44MzMtLjA5MnYtMS4zYTIuOCAyLjggMCAwIDAgLjY0NS4wN2MuMjkgMCAuNTQzLS4wODguNzYtLjI2Ni4yMTctLjE3Ny4zODYtLjQ0NC41MDgtLjgwM2wuMDk2LS4yOTUtMi4zODUtNS45NjJ6Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMpIj4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMTkiIGN5PSIxOSIgcj0iMTkiIGZpbGw9IiNFMEUwRTAiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIyLjQ3NCAxNS40NDNoNS4xNjJMMTIuNDM2IDMwLjRWMTAuMzYzaDE1LjJsLTUuMTYyIDUuMDh6Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNEMkQyRDIiIGQ9Ik0xMjEuNTQ0IDE0LjU2di0xLjcyOGg4LjI3MnYxLjcyOGgtMy4wMjRWMjRoLTIuMjR2LTkuNDRoLTMuMDA4em0xMy43NDQgOS41NjhjLTEuMjkgMC0yLjM0MS0uNDE5LTMuMTUyLTEuMjU2LS44MS0uODM3LTEuMjE2LTEuOTQ0LTEuMjE2LTMuMzJzLjQwOC0yLjQ3NyAxLjIyNC0zLjMwNGMuODE2LS44MjcgMS44NzItMS4yNCAzLjE2OC0xLjI0czIuMzYuNDAzIDMuMTkyIDEuMjA4Yy44MzIuODA1IDEuMjQ4IDEuODggMS4yNDggMy4yMjQgMCAuMzEtLjAyMS41OTctLjA2NC44NjRoLTYuNDY0Yy4wNTMuNTc2LjI2NyAxLjA0LjY0IDEuMzkyLjM3My4zNTIuODQ4LjUyOCAxLjQyNC41MjguNzc5IDAgMS4zNTUtLjMyIDEuNzI4LS45NmgyLjQzMmEzLjg5MSAzLjg5MSAwIDAgMS0xLjQ4OCAyLjA2NGMtLjczNi41MzMtMS42MjcuOC0yLjY3Mi44em0xLjQ4LTYuNjg4Yy0uNC0uMzUyLS44ODMtLjUyOC0xLjQ0OC0uNTI4cy0xLjAzNy4xNzYtMS40MTYuNTI4Yy0uMzc5LjM1Mi0uNjA1LjgyMS0uNjggMS40MDhoNC4xOTJjLS4wMzItLjU4Ny0uMjQ4LTEuMDU2LS42NDgtMS40MDh6bTcuMDE2LTIuMzA0djEuNTY4Yy41OTctMS4xMyAxLjQ2MS0xLjY5NiAyLjU5Mi0xLjY5NnYyLjMwNGgtLjU2Yy0uNjcyIDAtMS4xNzkuMTY4LTEuNTIuNTA0LS4zNDEuMzM2LS41MTIuOTE1LS41MTIgMS43MzZWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnptNi40NDggMHYxLjMyOGMuNTY1LS45NyAxLjQ4My0xLjQ1NiAyLjc1Mi0xLjQ1Ni42NzIgMCAxLjI3Mi4xNTUgMS44LjQ2NC41MjguMzEuOTM2Ljc1MiAxLjIyNCAxLjMyOC4zMS0uNTU1LjczMy0uOTkyIDEuMjcyLTEuMzEyYTMuNDg4IDMuNDg4IDAgMCAxIDEuODE2LS40OGMxLjA1NiAwIDEuOTA3LjMzIDIuNTUyLjk5Mi42NDUuNjYxLjk2OCAxLjU5Ljk2OCAyLjc4NFYyNGgtMi4yNHYtNC44OTZjMC0uNjkzLS4xNzYtMS4yMjQtLjUyOC0xLjU5Mi0uMzUyLS4zNjgtLjgzMi0uNTUyLTEuNDQtLjU1MnMtMS4wOS4xODQtMS40NDguNTUyYy0uMzU3LjM2OC0uNTM2Ljg5OS0uNTM2IDEuNTkyVjI0aC0yLjI0di00Ljg5NmMwLS42OTMtLjE3Ni0xLjIyNC0uNTI4LTEuNTkyLS4zNTItLjM2OC0uODMyLS41NTItMS40NC0uNTUycy0xLjA5LjE4NC0xLjQ0OC41NTJjLS4zNTcuMzY4LS41MzYuODk5LS41MzYgMS41OTJWMjRoLTIuMjU2di04Ljg2NGgyLjI1NnpNMTY0LjkzNiAyNFYxMi4xNmgyLjI1NlYyNGgtMi4yNTZ6bTcuMDQtLjE2bC0zLjQ3Mi04LjcwNGgyLjUyOGwyLjI1NiA2LjMwNCAyLjM4NC02LjMwNGgyLjM1MmwtNS41MzYgMTMuMDU2aC0yLjM1MmwxLjg0LTQuMzUyeiIvPgogICAgPC9nPgo8L3N2Zz4K";

  return (
    <div className="privacy-policy-container body">
      <img src={logoSvgData} alt="Multilevel Inc. Logo" className="logo" />

      <h1 className="title">PRIVACY POLICY</h1>
      <p className="subtitle">
        <strong>Last updated June 19, 2025</strong>
      </p>

      <p className="bodyText">
        This Privacy Notice for Multilevel Inc. ("<strong>we</strong>," "<strong>us</strong>," or "
        <strong>our</strong>"), describes how and why we might access, collect, store, use, and/or
        share ("<strong>process</strong>") your personal information when you use our services ("
        <strong>Services</strong>"), including when you:
      </p>
      <ul>
        <li className="bodyText">
          Download and use our mobile application (Multilevel), or any other application of ours
          that links to this Privacy Notice
        </li>
        <li className="bodyText">
          Use Multilevel. A multi-level English learning and practice application.
        </li>
        <li className="bodyText">
          Engage with us in other related ways, including any sales, marketing, or events
        </li>
      </ul>

      <p className="bodyText">
        <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand
        your privacy rights and choices. We are responsible for making decisions about how your
        personal information is processed. If you do not agree with our policies and practices,
        please do not use our Services. If you still have any questions or concerns, please contact
        us at typosbro@proton.me.
      </p>

      <h2 className="heading1" id="summary">
        SUMMARY OF KEY POINTS
      </h2>
      <p className="bodyText">
        <strong>
          <em>
            This summary provides key points from our Privacy Notice, but you can find out more
            details about any of these topics by clicking the link following each key point or by
            using our{" "}
            <a href="#toc" className="link">
              table of contents
            </a>{" "}
            below to find the section you are looking for.
          </em>
        </strong>
      </p>

      <p className="bodyText">
        <strong>What personal information do we process?</strong> When you visit, use, or navigate
        our Services, we may process personal information depending on how you interact with us and
        the Services, the choices you make, and the products and features you use. Learn more about{" "}
        <a href="#personalinfo" className="link">
          personal information you disclose to us
        </a>
        .
      </p>

      <p className="bodyText">
        <strong>Do we process any sensitive personal information?</strong> Some of the information
        may be considered "special" or "sensitive" in certain jurisdictions, for example your racial
        or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive
        personal information.
      </p>

      <p className="bodyText">
        <strong>Do we collect any information from third parties?</strong> We do not collect any
        information from third parties.
      </p>

      <p className="bodyText">
        <strong>How do we process your information?</strong> We process your information to provide,
        improve, and administer our Services, communicate with you, for security and fraud
        prevention, and to comply with law. We may also process your information for other purposes
        with your consent. We process your information only when we have a valid legal reason to do
        so. Learn more about{" "}
        <a href="#infouse" className="link">
          how we process your information
        </a>
        .
      </p>

      <p className="bodyText">
        <strong>In what situations and with which parties do we share personal information?</strong>{" "}
        We may share information in specific situations and with specific third parties. Learn more
        about{" "}
        <a href="#whoshare" className="link">
          when and with whom we share your personal information
        </a>
        .
      </p>

      <p className="bodyText">
        <strong>How do we keep your information safe?</strong> We have adequate organizational and
        technical processes and procedures in place to protect your personal information. However,
        no electronic transmission over the internet or information storage technology can be
        guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
        cybercriminals, or other unauthorized third parties will not be able to defeat our security
        and improperly collect, access, steal, or modify your information. Learn more about{" "}
        <a href="#infosafe" className="link">
          how we keep your information safe
        </a>
        .
      </p>

      <p className="bodyText">
        <strong>What are your rights?</strong> Depending on where you are located geographically,
        the applicable privacy law may mean you have certain rights regarding your personal
        information. Learn more about{" "}
        <a href="#privacyrights" className="link">
          your privacy rights
        </a>
        .
      </p>

      <p className="bodyText">
        <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is
        by submitting a{" "}
        <a
          href="https://app.termly.io/notify/f3ae58d2-98e4-49c2-a1fc-1d831cba672e"
          rel="noopener noreferrer"
          target="_blank"
          className="link"
        >
          data subject access request
        </a>
        , or by contacting us. We will consider and act upon any request in accordance with
        applicable data protection laws.
      </p>

      <p className="bodyText">
        Want to learn more about what we do with any information we collect?{" "}
        <a href="#toc" className="link">
          Review the Privacy Notice in full
        </a>
        .
      </p>

      <div id="toc">
        <h2 className="heading1">TABLE OF CONTENTS</h2>
        <nav>
          <ol>
            <li>
              <a href="#infocollect" className="link">
                1. WHAT INFORMATION DO WE COLLECT?
              </a>
            </li>
            <li>
              <a href="#infouse" className="link">
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a href="#whoshare" className="link">
                3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </a>
            </li>
            <li>
              <a href="#cookies" className="link">
                4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </a>
            </li>
            <li>
              <a href="#ai" className="link">
                5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
              </a>
            </li>
            <li>
              <a href="#sociallogins" className="link">
                6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </a>
            </li>
            <li>
              <a href="#inforetain" className="link">
                7. HOW LONG DO WE KEEP YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a href="#infosafe" className="link">
                8. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </a>
            </li>
            <li>
              <a href="#privacyrights" className="link">
                9. WHAT ARE YOUR PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <a href="#DNT" className="link">
                10. CONTROLS FOR DO-NOT-TRACK FEATURES
              </a>
            </li>
            <li>
              <a href="#policyupdates" className="link">
                11. DO WE MAKE UPDATES TO THIS NOTICE?
              </a>
            </li>
            <li>
              <a href="#contact" className="link">
                12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </a>
            </li>
            <li>
              <a href="#request" className="link">
                13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <section id="infocollect">
        <h2 className="heading1">1. WHAT INFORMATION DO WE COLLECT?</h2>
        <h3 className="heading2" id="personalinfo">
          Personal information you disclose to us
        </h3>
        <p className="bodyText">
          <strong>
            <em>In Short:</em>
          </strong>
          <em> We collect personal information that you provide to us.</em>
        </p>
        <p className="bodyText">
          We collect personal information that you voluntarily provide to us when you register on
          the Services, express an interest in obtaining information about us or our products and
          Services, when you participate in activities on the Services, or otherwise when you
          contact us.
        </p>
        <p className="bodyText">
          <strong>Personal Information Provided by You.</strong> The personal information that we
          collect depends on the context of your interactions with us and the Services, the choices
          you make, and the products and features you use. The personal information we collect may
          include the following:
        </p>
        <ul>
          <li className="bodyText">email addresses</li>
          <li className="bodyText">usernames</li>
          <li className="bodyText">passwords</li>
        </ul>
        <p className="bodyText" id="sensitiveinfo">
          <strong>Sensitive Information.</strong> We do not process sensitive information.
        </p>
        <p className="bodyText">
          <strong>Payment Data.</strong> We may collect data necessary to process your payment if
          you choose to make purchases, such as your payment instrument number, and the security
          code associated with your payment instrument. All payment data is handled and stored by
          Google Play. You may find their privacy notice link(s) here:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            https://policies.google.com/privacy
          </a>
          .
        </p>
        <p className="bodyText">
          <strong>Social Media Login Data.</strong> We may provide you with the option to register
          with us using your existing social media account details, like your Facebook, X, or other
          social media account. If you choose to register in this way, we will collect certain
          profile information about you from the social media provider, as described in the section
          called "
          <a href="#sociallogins" className="link">
            HOW DO WE HANDLE YOUR SOCIAL LOGINS?
          </a>
          " below.
        </p>
        <p className="bodyText">
          <strong>Application Data.</strong> If you use our application(s), we also may collect the
          following information if you choose to provide us with access or permission:
        </p>
        <ul>
          <li className="bodyText">
            <em>Mobile Device Access.</em> We may request access or permission to certain features
            from your mobile device, including your mobile device's microphone, storage, and other
            features. If you wish to change our access or permissions, you may do so in your
            device's settings.
          </li>
          <li className="bodyText">
            <em>Mobile Device Data.</em> We automatically collect device information (such as your
            mobile device ID, model, and manufacturer), operating system, version information and
            system configuration information, device and application identification numbers, browser
            type and version, hardware model Internet service provider and/or mobile carrier, and
            Internet Protocol (IP) address (or proxy server). If you are using our application(s),
            we may also collect information about the phone network associated with your mobile
            device, your mobile device’s operating system or platform, the type of mobile device you
            use, your mobile device’s unique device ID, and information about the features of our
            application(s) you accessed.
          </li>
          <li className="bodyText">
            <em>Push Notifications.</em> We may request to send you push notifications regarding
            your account or certain features of the application(s). If you wish to opt out from
            receiving these types of communications, you may turn them off in your device's
            settings.
          </li>
        </ul>
        <p className="bodyText">
          This information is primarily needed to maintain the security and operation of our
          application(s), for troubleshooting, and for our internal analytics and reporting
          purposes.
        </p>
        <p className="bodyText">
          All personal information that you provide to us must be true, complete, and accurate, and
          you must notify us of any changes to such personal information.
        </p>

        <h3 className="heading2">Information automatically collected</h3>
        <p className="bodyText">
          <strong>
            <em>In Short:</em>
          </strong>
          <em>
            {" "}
            Some information — such as your Internet Protocol (IP) address and/or browser and device
            characteristics — is collected automatically when you visit our Services.
          </em>
        </p>
        <p className="bodyText">
          We automatically collect certain information when you visit, use, or navigate the
          Services. This information does not reveal your specific identity (like your name or
          contact information) but may include device and usage information, such as your IP
          address, browser and device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how and when you use our
          Services, and other technical information. This information is primarily needed to
          maintain the security and operation of our Services, and for our internal analytics and
          reporting purposes.
        </p>
        <p className="bodyText">The information we collect includes:</p>
        <ul>
          <li className="bodyText">
            <em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage,
            and performance information our servers automatically collect when you access or use our
            Services and which we record in log files. Depending on how you interact with us, this
            log data may include your IP address, device information, browser type, and settings and
            information about your activity in the Services (such as the date/time stamps associated
            with your usage, pages and files viewed, searches, and other actions you take such as
            which features you use), device event information (such as system activity, error
            reports (sometimes called "crash dumps"), and hardware settings).
          </li>
          <li className="bodyText">
            <em>Device Data.</em> We collect device data such as information about your computer,
            phone, tablet, or other device you use to access the Services. Depending on the device
            used, this device data may include information such as your IP address (or proxy
            server), device and application identification numbers, location, browser type, hardware
            model, Internet service provider and/or mobile carrier, operating system, and system
            configuration information.
          </li>
          <li className="bodyText">
            <em>Location Data.</em> We collect location data such as information about your device's
            location, which can be either precise or imprecise. How much information we collect
            depends on the type and settings of the device you use to access the Services. For
            example, we may use GPS and other technologies to collect geolocation data that tells us
            your current location (based on your IP address). You can opt out of allowing us to
            collect this information either by refusing access to the information or by disabling
            your Location setting on your device. However, if you choose to opt out, you may not be
            able to use certain aspects of the Services.
          </li>
        </ul>

        <h3 className="heading2">Google API</h3>
        <p className="bodyText">
          Our use of information received from Google APIs will adhere to{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            Google API Services User Data Policy
          </a>
          , including the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            Limited Use requirements
          </a>
          .
        </p>
      </section>

      <section id="infouse">
        <h2 className="heading1">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p className="bodyText">
          <strong>
            <em>In Short:</em>
          </strong>
          <em>
            {" "}
            We process your information to provide, improve, and administer our Services,
            communicate with you, for security and fraud prevention, and to comply with law. We may
            also process your information for other purposes with your consent.
          </em>
        </p>
        <p className="bodyText">
          <strong>
            We process your personal information for a variety of reasons, depending on how you
            interact with our Services, including:
          </strong>
        </p>
        <ul>
          <li className="bodyText">
            <strong>
              To facilitate account creation and authentication and otherwise manage user accounts.
            </strong>{" "}
            We may process your information so you can create and log in to your account, as well as
            keep your account in working order.
          </li>
          <li className="bodyText">
            <strong>To deliver and facilitate delivery of services to the user.</strong> We may
            process your information to provide you with the requested service.
          </li>
          <li className="bodyText">
            <strong>To protect our Services.</strong> We may process your information as part of our
            efforts to keep our Services safe and secure, including fraud monitoring and prevention.
          </li>
          <li className="bodyText">
            <strong>
              To evaluate and improve our Services, products, marketing, and your experience.
            </strong>{" "}
            We may process your information when we believe it is necessary to identify usage
            trends, determine the effectiveness of our promotional campaigns, and to evaluate and
            improve our Services, products, marketing, and your experience.
          </li>
          <li className="bodyText">
            <strong>To identify usage trends.</strong> We may process information about how you use
            our Services to better understand how they are being used so we can improve them.
          </li>
        </ul>
      </section>

      <section id="whoshare">
        <h2 className="heading1">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <p className="bodyText">
          <strong>
            <em>In Short:</em>
          </strong>
          <em>
            {" "}
            We may share information in specific situations described in this section and/or with
            the following third parties.
          </em>
        </p>
        <p className="bodyText">
          We may need to share your personal information in the following situations:
        </p>
        <ul>
          <li className="bodyText">
            <strong>Business Transfers.</strong> We may share or transfer your information in
            connection with, or during negotiations of, any merger, sale of company assets,
            financing, or acquisition of all or a portion of our business to another company.
          </li>
        </ul>
      </section>

      <section id="cookies">
        <h2 className="heading1">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p className="bodyText">
          <strong>
            <em>In Short:</em>
          </strong>
          <em>
            {" "}
            We may use cookies and other tracking technologies to collect and store your
            information.
          </em>
        </p>
        <p className="bodyText">
          We may use cookies and similar tracking technologies (like web beacons and pixels) to
          gather information when you interact with our Services. Some online tracking technologies
          help us maintain the security of our Services and your account, prevent crashes, fix bugs,
          save your preferences, and assist with basic site functions.
        </p>
        <p className="bodyText">
          We also permit third parties and service providers to use online tracking technologies on
          our Services for analytics and advertising, including to help manage and display
          advertisements, to tailor advertisements to your interests, or to send abandoned shopping
          cart reminders (depending on your communication preferences). The third parties and
          service providers use their technology to provide advertising about products and services
          tailored to your interests which may appear either on our Services or on other websites.
        </p>
        <p className="bodyText">
          Specific information about how we use such technologies and how you can refuse certain
          cookies is set out in our Cookie Notice.
        </p>
        <h3 className="heading2">Google Analytics</h3>
        <p className="bodyText">
          We may share your information with Google Analytics to track and analyze the use of the
          Services. The Google Analytics Advertising Features that we may use include: Google
          Analytics Demographics and Interests Reporting. To opt out of being tracked by Google
          Analytics across the Services, visit{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            https://tools.google.com/dlpage/gaoptout
          </a>
          . You can opt out of Google Analytics Advertising Features through{" "}
          <a
            href="https://adssettings.google.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            Ads Settings
          </a>{" "}
          and Ad Settings for mobile apps. Other opt out means include{" "}
          <a
            href="http://optout.networkadvertising.org/"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            http://optout.networkadvertising.org/
          </a>{" "}
          and{" "}
          <a
            href="http://www.networkadvertising.org/mobile-choice"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            http://www.networkadvertising.org/mobile-choice
          </a>
          . For more information on the privacy practices of Google, please visit the{" "}
          <a
            href="https://policies.google.com/privacy"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            Google Privacy & Terms page
          </a>
          .
        </p>
      </section>

      <section id="ai">
        <h2 className="heading1">5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
        <p className="bodyText">
          <strong>
            <em>In Short:</em>
          </strong>
          <em>
            {" "}
            We offer products, features, or tools powered by artificial intelligence, machine
            learning, or similar technologies.
          </em>
        </p>
        <p className="bodyText">
          As part of our Services, we offer products, features, or tools powered by artificial
          intelligence, machine learning, or similar technologies (collectively, "AI Products").
          These tools are designed to enhance your experience and provide you with innovative
          solutions. The terms in this Privacy Notice govern your use of the AI Products within our
          Services.
        </p>
        <p className="bodyText">
          <strong>Use of AI Technologies</strong>
        </p>
        <p className="bodyText">
          We provide the AI Products through third-party service providers ("AI Service Providers"),
          including Google Cloud AI. As outlined in this Privacy Notice, your input, output, and
          personal information will be shared with and processed by these AI Service Providers to
          enable your use of our AI Products for purposes outlined in "
          <a href="#whoshare" className="link">
            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </a>
          " You must not use the AI Products in any way that violates the terms or policies of any
          AI Service Provider.
        </p>
        <p className="bodyText">
          <strong>Our AI Products</strong>
        </p>
        <p className="bodyText">Our AI Products are designed for the following functions:</p>
        <ul>
          <li className="bodyText">Natural language processing</li>
          <li className="bodyText">Text analysis</li>
          <li className="bodyText">AI applications</li>
        </ul>
        <p className="bodyText">
          <strong>How We Process Your Data Using AI</strong>
        </p>
        <p className="bodyText">
          All personal information processed using our AI Products is handled in line with our
          Privacy Notice and our agreement with third parties. This ensures high security and
          safeguards your personal information throughout the process, giving you peace of mind
          about your data's safety.
        </p>
      </section>

      <section id="sociallogins">
        <h2 className="heading1">6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
        <p className="bodyText">
          <strong>
            <em>In Short:</em>
          </strong>
          <em>
            {" "}
            If you choose to register or log in to our Services using a social media account, we may
            have access to certain information about you.
          </em>
        </p>
        <p className="bodyText">
          Our Services offer you the ability to register and log in using your third-party social
          media account details (like your Facebook or X logins). Where you choose to do this, we
          will receive certain profile information about you from your social media provider. The
          profile information we receive may vary depending on the social media provider concerned,
          but will often include your name, email address, friends list, and profile picture, as
          well as other information you choose to make public on such a social media platform.
        </p>
        <p className="bodyText">
          We will use the information we receive only for the purposes that are described in this
          Privacy Notice or that are otherwise made clear to you on the relevant Services. Please
          note that we do not control, and are not responsible for, other uses of your personal
          information by your third-party social media provider. We recommend that you review their
          privacy notice to understand how they collect, use, and share your personal information,
          and how you can set your privacy preferences on their sites and apps.
        </p>
      </section>

      <section id="inforetain">
        <h2 className="heading1">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p className="bodyText">
          <strong>
            <em>In Short:</em>
          </strong>
          <em>
            {" "}
            We keep your information for as long as necessary to fulfill the purposes outlined in
            this Privacy Notice unless otherwise required by law.
          </em>
        </p>
        <p className="bodyText">
          We will only keep your personal information for as long as it is necessary for the
          purposes set out in this Privacy Notice, unless a longer retention period is required or
          permitted by law (such as tax, accounting, or other legal requirements). No purpose in
          this notice will require us keeping your personal information for longer than the period
          of time in which users have an account with us.
        </p>
        <p className="bodyText">
          When we have no ongoing legitimate business need to process your personal information, we
          will either delete or anonymize such information, or, if this is not possible (for
          example, because your personal information has been stored in backup archives), then we
          will securely store your personal information and isolate it from any further processing
          until deletion is possible.
        </p>
      </section>

      <section id="infosafe">
        <h2 className="heading1">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p className="bodyText">
          <strong>
            <em>In Short:</em>
          </strong>
          <em>
            {" "}
            We aim to protect your personal information through a system of organizational and
            technical security measures.
          </em>
        </p>
        <p className="bodyText">
          We have implemented appropriate and reasonable technical and organizational security
          measures designed to protect the security of any personal information we process. However,
          despite our safeguards and efforts to secure your information, no electronic transmission
          over the Internet or information storage technology can be guaranteed to be 100% secure,
          so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized
          third parties will not be able to defeat our security and improperly collect, access,
          steal, or modify your information. Although we will do our best to protect your personal
          information, transmission of personal information to and from our Services is at your own
          risk. You should only access the Services within a secure environment.
        </p>
      </section>

      <section id="privacyrights">
        <h2 className="heading1">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p className="bodyText">
          <strong>
            <em>In Short:</em>
          </strong>
          <em>
            {" "}
            You may review, change, or terminate your account at any time, depending on your
            country, province, or state of residence.
          </em>
        </p>
        <p id="withdrawconsent" className="bodyText">
          <strong>
            <u>Withdrawing your consent:</u>
          </strong>{" "}
          If we are relying on your consent to process your personal information, which may be
          express and/or implied consent depending on the applicable law, you have the right to
          withdraw your consent at any time. You can withdraw your consent at any time by contacting
          us by using the contact details provided in the section "
          <a href="#contact" className="link">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </a>
          " below.
        </p>
        <p className="bodyText">
          However, please note that this will not affect the lawfulness of the processing before its
          withdrawal nor, when applicable law allows, will it affect the processing of your personal
          information conducted in reliance on lawful processing grounds other than consent.
        </p>
        <h3 className="heading2">Account Information</h3>
        <p className="bodyText">
          If you would at any time like to review or change the information in your account or
          terminate your account, you can:
        </p>
        <ul>
          <li className="bodyText">Contact us using the contact information provided.</li>
          <li className="bodyText">
            Log in to your account settings and update your user account.
          </li>
        </ul>
        <p className="bodyText">
          Upon your request to terminate your account, we will deactivate or delete your account and
          information from our active databases. However, we may retain some information in our
          files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our
          legal terms and/or comply with applicable legal requirements.
        </p>
        <p className="bodyText">
          If you have questions or comments about your privacy rights, you may email us at
          typosbro@proton.me.
        </p>
      </section>

      <section id="DNT">
        <h2 className="heading1">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p className="bodyText">
          Most web browsers and some mobile operating systems and mobile applications include a
          Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference
          not to have data about your online browsing activities monitored and collected. At this
          stage, no uniform technology standard for recognizing and implementing DNT signals has
          been finalized. As such, we do not currently respond to DNT browser signals or any other
          mechanism that automatically communicates your choice not to be tracked online. If a
          standard for online tracking is adopted that we must follow in the future, we will inform
          you about that practice in a revised version of this Privacy Notice.
        </p>
      </section>

      <section id="policyupdates">
        <h2 className="heading1">11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p className="bodyText">
          <strong>
            <em>In Short:</em>
          </strong>
          <em>
            {" "}
            Yes, we will update this notice as necessary to stay compliant with relevant laws.
          </em>
        </p>
        <p className="bodyText">
          We may update this Privacy Notice from time to time. The updated version will be indicated
          by an updated "Revised" date at the top of this Privacy Notice. If we make material
          changes to this Privacy Notice, we may notify you either by prominently posting a notice
          of such changes or by directly sending you a notification. We encourage you to review this
          Privacy Notice frequently to be informed of how we are protecting your information.
        </p>
      </section>

      <section id="contact">
        <h2 className="heading1">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p className="bodyText">
          If you have questions or comments about this notice, you may email us at
          typosbro@proton.me or contact us by post at:
        </p>
        <p className="bodyText">
          Multilevel Inc.
          <br />
          Rishtan, Fergana Region, Uzbekistan
          <br />
          Rishtan, Fergana Region
          <br />
          Uzbekistan
        </p>
      </section>

      <section id="request">
        <h2 className="heading1">
          13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
        </h2>
        <p className="bodyText">
          Based on the applicable laws of your country, you may have the right to request access to
          the personal information we collect from you, details about how we have processed it,
          correct inaccuracies, or delete your personal information. You may also have the right to
          withdraw your consent to our processing of your personal information. These rights may be
          limited in some circumstances by applicable law. To request to review, update, or delete
          your personal information, please fill out and submit a{" "}
          <a
            href="https://app.termly.io/notify/f3ae58d2-98e4-49c2-a1fc-1d831cba672e"
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >
            data subject access request
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
