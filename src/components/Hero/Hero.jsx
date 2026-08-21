import { useEffect, useState } from "react";
import { motion, useMotionValue, animate, useTransform, useVelocity, useSpring } from "motion/react";
import "./Hero.css";
import lovepreetImage from "../../assets/images/hero/lovepreetImage.jpeg";

// These are the developer roles that cycle through the typing effect.
const roles = [
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "ASP.NET Developer"
];

export default function Hero({ introFinished }) {

    // roleIndex tells me which role from the roles array is currently being used.
    const [roleIndex, setRoleIndex] = useState(0);

    // displayedText is the part of the role that is currently visible on screen.
    const [displayedText, setDisplayedText] = useState("");

    // charIndex keeps track of how many characters should currently be shown.
    const [charIndex, setCharIndex] = useState(0);

    // I use this to switch between typing the role and deleting it.
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {

        // I wait for the intro to finish before starting the typing animation. Otherwise the text would already be typing while the intro is still covering the Hero.
        if (!introFinished) {
            return;
        }

        // Gets the current role using the position stored in roleIndex.
        const currentRole = roles[roleIndex];


        // TYPING
        // If I am not deleting and there are still characters left, I show one more character from the current role.
        if (!isDeleting && charIndex < currentRole.length) {

            const timer = setTimeout(() => {

                // slice() gives me the text from the beginning up to the next character.
                setDisplayedText(currentRole.slice(0, charIndex + 1));

                // Move the character position forward by one.
                setCharIndex(charIndex + 1);

            }, 100);

            // Clear the timer if React runs the effect again before it finishes.
            return () => clearTimeout(timer);
        }


        // PAUSE AFTER TYPING
        // Once every character is visible, I leave the full role on screen for a short time before starting to delete it.
        if (!isDeleting && charIndex === currentRole.length) {

            const timer = setTimeout(() => {
                setIsDeleting(true);
            }, 1500);

            return () => clearTimeout(timer);
        }


        // DELETING
        // When deleting is true, I remove one character at a time.
        if (isDeleting && charIndex > 0) {

            const timer = setTimeout(() => {

                setDisplayedText(currentRole.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);

            }, 75);

            return () => clearTimeout(timer);
        }


        // NEXT ROLE
        // Once the role has been completely deleted, I stop deleting and move to the next item in the roles array.
        if (isDeleting && charIndex === 0) {

            const timer = setTimeout(() => {

                setIsDeleting(false);

                // The % keeps the index inside the roles array.
                // After the last role, it goes back to index 0.
                setRoleIndex((roleIndex + 1) % roles.length);

            }, 300);

            return () => clearTimeout(timer);
        }

    }, [charIndex, roleIndex, isDeleting, introFinished]);


    /*
        DRAGGABLE BADGE

        I wanted the ID badge to feel like it was actually hanging instead of only using a normal CSS animation.

        I learned Motion for React for this part.

        useMotionValue() stores a value that Motion can update continuously while the user is dragging something.

        cardX stores the horizontal position.
        cardY stores the vertical position.

        Both start at 0 because 0,0 is the card's original hanging position.
    */
    const cardX = useMotionValue(0);
    const cardY = useMotionValue(0);


    /*
        DYNAMIC LANYARD

        The badge can move, so I also needed the lanyard to move with it.

        useTransform() lets me create a new Motion value from other Motion values.

        Here it watches cardX and cardY.

        Whenever the user moves the badge, x or y changes and this function calculates a new SVG path for the lanyard.
    */
    const lanyardPath = useTransform(
        [cardX, cardY],
        ([x, y]) => {

            // The lanyard starts from the top-middle of the SVG.
            const startX = 300;
            const startY = 0;

            // The end position follows the badge.
            // I add the current drag position to its original location.
            const endX = 300 + x;
            const endY = 500 + y;


            /*
                SVG PATH

                M means Move To.
                It sets where the path starts.

                C means Cubic Bezier Curve.
                It lets me create a curved line instead of a straight line.

                The middle values control how the curve bends.

                Because x and y are included in these calculations, the curve changes while the card is being dragged.
            */
            return `
                M ${startX} ${startY}
                C ${startX} 160,
                  ${startX + x * 0.7} ${endY - 100},
                  ${endX} ${endY}
            `;
        }
    );


    /*
        BADGE VELOCITY

        useVelocity() watches how quickly another Motion value is changing.

        I only use cardX here because I wanted the badge to tilt based on how quickly it is being moved left or right.
    */
    const cardXVelocity = useVelocity(cardX);


    /*
        SMOOTHING THE MOVEMENT

        The raw velocity changes very quickly and made the rotation feel too sharp.

        useSpring() smooths that changing value.

        stiffness controls how strongly the spring reacts. damping controls how quickly the movement settles down.
    */
    const smoothVelocity = useSpring(cardXVelocity, {
        stiffness: 100,
        damping: 20
    });


    /*
        TURNING SPEED INTO ROTATION

        This useTransform() converts the horizontal speed into degrees.

        -1200 velocity  -> -15 degrees
        0 velocity      -> 0 degrees
        1200 velocity   -> 15 degrees

        This makes the badge tilt in the same direction as the drag.
    */
    const cardRotation = useTransform(
        smoothVelocity,
        [-1200, 0, 1200],
        [-15, 0, 15]
    );

    return (
        <section className="hero" id="home">

            <div className="container d-flex align-items-center justify-content-between">
                <div className="hero-content">

                    <div className="hero-mobile-image">
                        <img
                            src={lovepreetImage}
                            alt="Lovepreet Sandhu"
                        />
                        <span className="mobile-work-status">
                            <span className="status-dot"></span>
                            Open to Work
                        </span>
                    </div>

                    <p className={`hero-label ${introFinished ? "hero-show" : ""}`}>
                        PORTFOLIO 2026
                    </p>

                    <h1 className={`hero-title ${introFinished ? "hero-show" : ""}`}>
                        <span className="header-intro">Hi, I&apos;m</span>
                        <span className="hero-first-name">Lovepreet</span>
                        <span className="hero-last-name">Sandhu</span>
                    </h1>

                    <h2 className={`hero-role ${introFinished ? "hero-show" : ""}`}>{displayedText}</h2>

                    <p className={`hero-description ${introFinished ? "hero-show" : ""}`}>
                        I build <span className="hero-main-words">responsive</span>, <span className="hero-main-words">full-stack web applications</span> with a focus on <span className="hero-main-words">clean code</span>, <span className="hero-main-words">practical solutions</span>, and <span className="hero-main-words">great user experiences</span>.
                    </p>

                    <div className={`hero-actions ${introFinished ? "hero-actions-show" : ""}`}>

                        <a href="#projects" className="hero-primary-btn">
                            View My Work
                            <i className="bi bi-arrow-right-short"></i>
                        </a>

                        <a href="/resume.pdf"
                            className="hero-secondary-btn"
                            target="_blank"
                            rel="noopener noreferrer">
                            View Resume
                            <i className="bi bi-file-earmark-person-fill"></i>
                        </a>

                    </div>

                    <div className={`hero-socials ${introFinished ? "hero-socials-show" : ""}`}>

                        <a href="https://github.com/Lovepreet0199" target="_blank" rel="noopener noreferrer" className="icons" aria-label="Github">
                            <i className="bi bi-github"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/lovepreet-singh-sandhu-567345164/" target="_blank" rel="noopener noreferrer" className="icons" aria-label="LinkedIn">
                            <i className="bi bi-linkedin"></i>
                        </a>

                        <a href="mailto:Love.sandhu8@gmail.com" className="icons" aria-label="Email">
                            <i className="bi bi-envelope"></i>
                        </a>

                    </div>
                </div>

                <div className="hero-card-area">

                    <div className={`hanging-badge ${introFinished ? "badge-drop" : ""}`}>
                        {/* I use an SVG for the lanyard because I can change its path while the badge moves. This makes the rope bend instead of staying fixed. */}
                        <div className="lanyard">

                            <svg
                                className="lanyard-svg"
                                viewBox="0 0 600 500"
                                aria-hidden="true"
                            >

                                {/* Both lines use the same changing path. I use two paths so I can style a darker base and a lighter highlight in CSS and make the lanyard look less flat. */}
                                <motion.path
                                    className="lanyard-path lanyard-path-base"
                                    d={lanyardPath}
                                    fill="none"
                                />

                                <motion.path
                                    className="lanyard-path lanyard-path-highlight"
                                    d={lanyardPath}
                                    fill="none"
                                />

                            </svg>
                        </div>

                        <div className={`badge-swing-wrapper ${introFinished ? "badge-swing" : ""}`}>

                            {/* Motion.div works like a normal div but gives me Motion features.

                                The drag property lets the user move the badge with a mouse or touch.

                                cardX and cardY control its position, while cardRotation controls
                                how much it tilts based on the speed of the drag.

                                When the user releases the badge, onDragEnd runs and I animate the
                                position back to 0 so the badge returns to where it was hanging. */}
                            <motion.div
                                className="draggable-badge"
                                drag
                                style={{
                                    x: cardX,
                                    y: cardY,
                                    rotate: cardRotation
                                }}
                                whileDrag={{
                                    cursor: "grabbing"
                                }}
                                onDragEnd={(_, info) => {

                                    /*
                                        info.velocity.x gives me the horizontal speed when the
                                        user releases the badge. I pass that into the spring so
                                        the return animation keeps some of the drag momentum.
                                    */
                                    animate(cardX, 0, {
                                        type: "spring",
                                        stiffness: 35,
                                        damping: 6,
                                        mass: 1.8,
                                        velocity: info.velocity.x
                                    });

                                    // I do the same thing for the vertical movement.
                                    animate(cardY, 0, {
                                        type: "spring",
                                        stiffness: 30,
                                        damping: 5,
                                        mass: 2.2,
                                        velocity: info.velocity.y
                                    });

                                }}
                            >
                                <div className="card-clip">
                                    <div className="clip-hole"></div>
                                    <div className="clip-connector"></div>
                                </div>

                                <div className="id-card">
                                    <img
                                        src={lovepreetImage}
                                        alt="Image of Lovepreet Sandhu"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="hero-scroll">
                <span>SCROLL</span>
                <i className="bi bi-arrow-down"></i>
            </div>

        </section >
    );
}