import "./Intro.css";
import { useState } from "react";

export default function Intro({ onFinish }) {

    // I use this state to remove the Intro after its final animation finishes.
    const [showIntro, setShowIntro] = useState(true);

    function handleAnimationEnd(event) {

        // I only finish the Intro when the final slideUp animation ends.
        if (event.animationName === "slideUp") {
            setShowIntro(false);

            // This tells App that the Intro is finished so the Hero animations can start.
            onFinish();
        }
    }

    // Once the Intro is finished, I stop rendering it completely.
    if (!showIntro) {
        return null;
    }

    return (
        // Full-screen welcome section shown before the portfolio.
        <div
            className="intro d-flex justify-content-center align-items-center"
            onAnimationEnd={handleAnimationEnd}
        >

            {/* Content container for the welcome text and icons. */}
            <div className="intro-content text-center">

                {/* Small welcome message shown first. */}
                <p className="intro-welcome">
                    WELCOME TO MY PORTFOLIO WEBSITE
                </p>

                {/* Developer name displayed as the main focus of the intro. */}
                <h1 className="intro-name">
                    Lovepreet <span>Sandhu</span>
                </h1>

                {/* Developer role displayed below the name. */}
                <p className="intro-role">
                    FULL-STACK DEVELOPER
                </p>

                {/* Developer-related icons shown under the role. */}
                <div className="intro-icons d-flex justify-content-center gap-3">

                    <i className="bi bi-globe2" aria-hidden="true"></i>
                    <i className="bi bi-code-slash" aria-hidden="true"></i>
                    <i className="bi bi-terminal" aria-hidden="true"></i>
                    <i className="bi bi-braces" aria-hidden="true"></i>
                    <i className="bi bi-git" aria-hidden="true"></i>


                </div>

            </div>

        </div>
    );
}