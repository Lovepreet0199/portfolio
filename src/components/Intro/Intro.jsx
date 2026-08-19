import "./Intro.css";
import { useState } from "react";

export default function Intro() {
    const [showIntro, setShowIntro] = useState(true);

    //Remove the intro after the final slide-up animation finishes.
    function handleAnimationEnd(event) {

        if (event.animationName === "slideUp") {
            setShowIntro(false);
        }
    }

    //Stops rendering the intro after the animation is complete.
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
                    FULL-STACK WEB DEVELOPER
                </p>

                {/* Developer-related icons shown under the role. */}
                <div className="intro-icons d-flex justify-content-center gap-3">

                    <i className="bi bi-globe2"></i>
                    <i className="bi bi-code-slash"></i>
                    <i className="bi bi-terminal"></i>
                    <i className="bi bi-braces"></i>
                    <i className="bi bi-git"></i>
                </div>
            </div>
        </div>
    );
}