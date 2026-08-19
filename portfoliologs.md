# Project Log

# React Portfolio

---

## Step 1 - Create React Portfolio Project

Created:

```text
portfolio-react/
```

Initialized a brand new React application that will become my personal portfolio website.

Goals for this project:

- Build a modern developer portfolio
- Consume my existing Node.js Portfolio API
- Showcase projects dynamically
- Make it fully responsive
- Deploy frontend and backend separately
- Use Bootstrap together with custom CSS
- Build everything component by component

---

## Step 2 - Project Planning

Before writing code, the entire portfolio was planned in Figma Make.

Designed screens:

- Desktop Homepage
- Mobile Homepage
- About
- Projects
- Skills
- Experience
- Contact
- Let's Talk page
- Footer

Decided to build the project one component at a time.

Workflow:

Design
↓

React Component
↓

Desktop Styling
↓

Responsive Styling
↓

Functionality
↓

Backend Integration

---

## Step 3 - Header Component

Created:

```text
src/components/Header.jsx
src/components/Header.css
```

Created the reusable Header component that will appear across the entire portfolio.

---

## Step 3.1 - Planned Header Structure

Before styling, planned the semantic HTML structure.

Used:

- header
- nav
- ul
- li
- a

Header contains three main sections:

- Personal Brand
- Navigation
- Call-to-action button

The navigation links include:

- Home
- Projects
- Skills
- About
- Experience
- Contact

---

## Step 3.2 - Created Brand

Added a reusable personal brand.

Brand contains:

- LS logo placeholder
- Love Sandhu text

The logo will later be replaced with the custom SVG logo designed for the portfolio.

---

## Step 3.3 - Desktop Navigation

Built the desktop navigation.

Added:

- Semantic unordered list
- Navigation links
- CTA button
- Flex layout

Navigation is currently using placeholder anchor links until all sections are built.

---

## Step 3.4 - Styled Desktop Header

Styled the desktop header.

Added:

- Dark navigation background
- Sticky positioning
- Header shadow
- Brand styling
- Logo styling
- Navigation styling
- CTA button styling

Designed the header to closely match the approved Figma design.

---

## Step 3.5 - Styled Brand

Styled the personal brand.

Added:

- Blue logo block
- White initials
- Rounded corners
- Blue shadow
- Typography
- Spacing

This is currently a placeholder before replacing it with the final SVG logo.

---

## Step 3.6 - Styled Navigation

Styled navigation links.

Added:

- Horizontal navigation
- Hover transitions
- Typography
- Navigation spacing
- Link colors

---

## Step 3.7 - Styled CTA Button

Created the "Let's Talk" button.

Added:

- Blue background
- Rounded corners
- White text
- Hover animation
- Blue shadow

---

## Step 3.8 - Sticky Header

Configured the header to remain visible while scrolling.

Used:

```css
position: sticky;
top: 0;
z-index: 1000;
```

This keeps the navigation accessible throughout the page.

---

## Step 3.9 - Added Mobile Navigation State

Imported React's useState.

```jsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

The state controls whether the mobile navigation is open or closed.

States:

false

- Mobile menu hidden

true

- Mobile menu visible

---

## Step 3.10 - Built Hamburger Menu

Created a reusable hamburger menu button.

Features:

- Three span elements
- Accessible button
- aria-expanded support
- Click event
- React state toggle

---

## Step 3.11 - Built Responsive Navigation

Added responsive behaviour using:

```css
@media (max-width:991px)
```

Desktop:

- Navigation visible
- CTA visible
- Hamburger hidden

Mobile:

- Navigation hidden
- CTA hidden
- Hamburger visible

---

## Step 3.12 - Built Mobile Dropdown Navigation

Created a mobile navigation drawer.

Used:

```css
position: absolute;
```

so the menu overlays the page instead of pushing content down.

Positioned the menu below the header using:

```css
top: calc(100% + 18px);
```

Centered the menu using:

```css
left: 50%;
transform: translateX(-50%);
```

Made the menu span the full screen using:

```css
width: 100vw;
```

Added:

- Dark background
- Padding
- Border
- Drop shadow

---

## Step 3.13 - Mobile Navigation Layout

Converted navigation links into a vertical layout.

Added:

- Column layout
- Touch-friendly spacing
- Hover effects
- Full-width links

---

## Step 3.14 - Mobile Call-to-Action

Added a separate mobile "Let's Talk" button.

Desktop:

- Desktop CTA displayed

Mobile:

- Desktop CTA hidden
- Mobile CTA displayed inside the navigation menu

This keeps the desktop navigation centered while still providing a CTA inside the mobile menu.

---

## Step 3.15 - Concepts Learned

During this component I learned:

React

- useState()
- Conditional class names
- Event handling
- Responsive component structure

CSS

- Sticky positioning
- Absolute positioning
- z-index
- Media queries
- Hover transitions
- Box shadows
- Responsive navigation
- Full viewport width (100vw)
- translateX(-50%)
- Flexbox layouts
- Mobile-first responsive design

---

## Step 3 Complete ✅

Completed:

✔ Responsive Header

✔ Desktop Navigation

✔ Mobile Navigation

✔ Hamburger Menu

✔ Sticky Header

✔ CTA Button

✔ Brand Component

✔ Hover Effects

✔ Responsive Dropdown Navigation

Next Step:

Build the Hero component.

---

---

## Step 4 - Hero Component

Created:

```text
src/components/Hero/Hero.jsx
src/components/Hero/Hero.css
```

Started building the Hero section for the homepage.

The Hero will follow the portfolio design created earlier, with one main change:

- The original profile image will be replaced with a hanging ID card
- The ID card will use my photo
- The lanyard will display `lovesandhu.com`
- Interactive/drag functionality will be added later

---

## Step 4.1 - Created Hero Component

Created the basic Hero component.

```jsx
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container">

            </div>
        </section>
    );
}
```

Imported the Hero stylesheet:

```jsx
import "./Hero.css";
```

Created the main Hero section:

```jsx
<section className="hero" id="home">
```

The `hero` class will be used for custom Hero styling.

The `id="home"` will later allow the Home navigation link to navigate directly to this section.

Added Bootstrap's container:

```jsx
<div className="container">
```

This keeps the Hero content aligned with the Header and provides responsive horizontal spacing.

The Hero is currently empty. Content and layout will be added one part at a time.

### Current Hero Structure

```text
Hero
└── Bootstrap Container
```

### Next

Create the two main areas of the Hero:

```text
Hero
└── Container
    ├── Hero Content
    └── ID Card Area
```

## Step 4.2 - Created Hero Layout

Updated the Hero container to use Bootstrap Flexbox.

```jsx
<div className="container d-flex align-items-center justify-content-between">

## Step 4.3 - Added Hero Eyebrow

Added the small portfolio label at the top of the Hero content.

```jsx
<p className="hero-label">PORTFOLIO 2026</p>
```

Used a `p` element because this is supporting text rather than a main heading.

Added the custom class:

```text
hero-label
```

This will later be used to style the text to match the small uppercase blue label in the design.

### Current Hero Content

```text
Hero Content
└── PORTFOLIO 2026
```

### Next

Add the main Hero introduction and developer name.

## Step 4.4 - Added Main Hero Heading

Added the main heading for the homepage.

```jsx
<h1 className="hero-title">
    <span>Hi, I&apos;m</span>
    <span>Lovepreet</span>
    <span>Sandhu</span>
</h1>
```

Used one `h1` because this is the main heading of the homepage.

Separated each line using `span` elements instead of `<br />`.

The spans will later be displayed as blocks using CSS. This keeps the line layout controlled through CSS instead of adding presentational line breaks to the HTML.

The separate spans also allow individual parts of the heading to be styled differently, such as making `Sandhu` blue.

### Current Hero Content

```text
PORTFOLIO 2026

Hi, I'm
Lovepreet
Sandhu
```

### Next

Add the developer role underneath the main heading.

## Step 4.5 - Added Developer Role

Added the developer role underneath the main Hero heading.

```jsx
<h2 className="hero-role">
    Full-Stack Developer
</h2>
```

The role is currently using `Full-Stack Developer` as a temporary static value.

Later, this section will be converted into a typing animation that cycles through:

```text
Full-Stack Developer
React Engineer
Node.js Developer
MERN Stack Developer
```

The typing functionality will be added after the basic Hero layout and styling are complete.

### Next

Add the short introduction paragraph underneath the developer role.

## Step 4.6 - Added Hero Description

Added a short introduction underneath the developer role.

```jsx
<p className="hero-description">
    I build responsive, full-stack web applications with a focus on clean code,
    practical solutions, and great user experiences.
</p>
```

Used a `p` element because this is supporting text describing the type of development work I do.

Added:

```text
hero-description
```

This class will later be used to control the text color, width, line height, spacing, and responsive styling.

### Next

Add the Hero call-to-action area.

## Step 4.7 - Added View My Work CTA

Created the Hero actions container.

```jsx
<div className="hero-actions">

</div>
```

The `hero-actions` wrapper will contain the main call-to-action links in the Hero and will later be styled using Flexbox.

Added the first call-to-action:

```jsx
<a href="#projects" className="hero-primary-btn">
    View My Work
</a>
```

Used an anchor element instead of a button because this action will navigate to another section of the page.

The link uses:

```text
#projects
```

This will connect to the Projects section once it is created with `id="projects"`.

### Current CTA Structure

```text
Hero Actions
└── View My Work
```

### Next

Add the Download CV action.

## Step 4.8 - Added Download CV CTA

Added the second call-to-action inside the Hero actions container.

```jsx
<a href="/resume.pdf" className="hero-secondary-btn">
    Download CV
</a>
```

Used an anchor element because this action will link to my résumé file.

The résumé will later be added to the project's `public` folder.

### Current CTA Structure

```text
Hero Actions
├── View My Work
└── Download CV
```

The two links will later be styled differently:

- `hero-primary-btn` - Primary blue CTA
- `hero-secondary-btn` - Secondary outlined CTA

### Next

Add the social links underneath the Hero actions.

## Step 4.9 - Added Bootstrap Icons

Installed Bootstrap Icons so icons can be reused throughout the portfolio.

Installed:

```bash
npm install bootstrap-icons
```

Imported the Bootstrap Icons stylesheet globally in `main.jsx`:

```jsx
import "bootstrap-icons/font/bootstrap-icons.css";
```

Bootstrap and Bootstrap Icons are separate packages.

Bootstrap is being used for layout and utility classes, while Bootstrap Icons will provide reusable icons throughout the portfolio.

### Next

Add the GitHub, LinkedIn, and Email social links to the Hero.

## Step 4.10 - Added GitHub Social Link

Added the first social link underneath the Hero CTA buttons.

```jsx
<a href="#" aria-label="GitHub">
    <i className="bi bi-github"></i>
</a>
```

Used an anchor element because the icon will link to my GitHub profile.

Added:

```jsx
aria-label="GitHub"
```

This provides an accessible description because the link contains an icon instead of visible text.

Used Bootstrap Icons:

```text
bi bi-github
```

The actual GitHub URL will be connected later when the portfolio links are finalized.

### Next

Add the LinkedIn social link.

## Step 4.11 - Added LinkedIn Social Link

Added the LinkedIn social link next to the GitHub icon.

```jsx
<a href="#" aria-label="LinkedIn">
    <i className="bi bi-linkedin"></i>
</a>
```

Used Bootstrap Icons:

```text
bi bi-linkedin
```

Added an `aria-label` so the icon-only link has an accessible description.

The actual LinkedIn profile URL will be connected later.

### Current Social Links

```text
Hero Socials
├── GitHub
└── LinkedIn
```

### Next

Add the Email social link.

## Step 4.11 - Added LinkedIn Social Link

Added the LinkedIn social link next to the GitHub icon.

```jsx
<a href="#" aria-label="LinkedIn">
    <i className="bi bi-linkedin"></i>
</a>
```

Used Bootstrap Icons:

```text
bi bi-linkedin
```

Added an `aria-label` so the icon-only link has an accessible description.

The actual LinkedIn profile URL will be connected later.

### Current Social Links

```text
Hero Socials
├── GitHub
└── LinkedIn
```

### Next

Add the Email social link.

## Git Checkpoint - Hero Content Structure

Completed the main content structure for the left side of the Hero.

Included:

- Portfolio label
- Main Hero heading
- Developer role placeholder
- Hero description
- View My Work CTA
- Download CV CTA
- GitHub icon
- LinkedIn icon
- Email icon
- Bootstrap Icons setup
- Initial ID card container

Created a Git checkpoint before beginning the ID card implementation.

```bash
git status
git add .
git commit -m "Built hero content structure"
```

Next:

Build the hanging developer ID card.

# Project Log

# React Portfolio

---

## Step 1 - Create React Portfolio Project

Created:

```text
portfolio-react/
```

Initialized a brand new React application that will become my personal portfolio website.

Goals for this project:

- Build a modern developer portfolio
- Consume my existing Node.js Portfolio API
- Showcase projects dynamically
- Make it fully responsive
- Deploy frontend and backend separately
- Use Bootstrap together with custom CSS
- Build everything component by component

---

## Step 2 - Project Planning

Before writing code, the entire portfolio was planned in Figma Make.

Designed screens:

- Desktop Homepage
- Mobile Homepage
- About
- Projects
- Skills
- Experience
- Contact
- Let's Talk page
- Footer

Decided to build the project one component at a time.

Workflow:

Design
↓

React Component
↓

Desktop Styling
↓

Responsive Styling
↓

Functionality
↓

Backend Integration

---

## Step 3 - Header Component

Created:

```text
src/components/Header.jsx
src/components/Header.css
```

Created the reusable Header component that will appear across the entire portfolio.

---

## Step 3.1 - Planned Header Structure

Before styling, planned the semantic HTML structure.

Used:

- header
- nav
- ul
- li
- a

Header contains three main sections:

- Personal Brand
- Navigation
- Call-to-action button

The navigation links include:

- Home
- Projects
- Skills
- About
- Experience
- Contact

---

## Step 3.2 - Created Brand

Added a reusable personal brand.

Brand contains:

- LS logo placeholder
- Love Sandhu text

The logo will later be replaced with the custom SVG logo designed for the portfolio.

---

## Step 3.3 - Desktop Navigation

Built the desktop navigation.

Added:

- Semantic unordered list
- Navigation links
- CTA button
- Flex layout

Navigation is currently using placeholder anchor links until all sections are built.

---

## Step 3.4 - Styled Desktop Header

Styled the desktop header.

Added:

- Dark navigation background
- Sticky positioning
- Header shadow
- Brand styling
- Logo styling
- Navigation styling
- CTA button styling

Designed the header to closely match the approved Figma design.

---

## Step 3.5 - Styled Brand

Styled the personal brand.

Added:

- Blue logo block
- White initials
- Rounded corners
- Blue shadow
- Typography
- Spacing

This is currently a placeholder before replacing it with the final SVG logo.

---

## Step 3.6 - Styled Navigation

Styled navigation links.

Added:

- Horizontal navigation
- Hover transitions
- Typography
- Navigation spacing
- Link colors

---

## Step 3.7 - Styled CTA Button

Created the "Let's Talk" button.

Added:

- Blue background
- Rounded corners
- White text
- Hover animation
- Blue shadow

---

## Step 3.8 - Sticky Header

Configured the header to remain visible while scrolling.

Used:

```css
position: sticky;
top: 0;
z-index: 1000;
```

This keeps the navigation accessible throughout the page.

---

## Step 3.9 - Added Mobile Navigation State

Imported React's useState.

```jsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

The state controls whether the mobile navigation is open or closed.

States:

false

- Mobile menu hidden

true

- Mobile menu visible

---

## Step 3.10 - Built Hamburger Menu

Created a reusable hamburger menu button.

Features:

- Three span elements
- Accessible button
- aria-expanded support
- Click event
- React state toggle

---

## Step 3.11 - Built Responsive Navigation

Added responsive behaviour using:

```css
@media (max-width:991px)
```

Desktop:

- Navigation visible
- CTA visible
- Hamburger hidden

Mobile:

- Navigation hidden
- CTA hidden
- Hamburger visible

---

## Step 3.12 - Built Mobile Dropdown Navigation

Created a mobile navigation drawer.

Used:

```css
position: absolute;
```

so the menu overlays the page instead of pushing content down.

Positioned the menu below the header using:

```css
top: calc(100% + 18px);
```

Centered the menu using:

```css
left: 50%;
transform: translateX(-50%);
```

Made the menu span the full screen using:

```css
width: 100vw;
```

Added:

- Dark background
- Padding
- Border
- Drop shadow

---

## Step 3.13 - Mobile Navigation Layout

Converted navigation links into a vertical layout.

Added:

- Column layout
- Touch-friendly spacing
- Hover effects
- Full-width links

---

## Step 3.14 - Mobile Call-to-Action

Added a separate mobile "Let's Talk" button.

Desktop:

- Desktop CTA displayed

Mobile:

- Desktop CTA hidden
- Mobile CTA displayed inside the navigation menu

This keeps the desktop navigation centered while still providing a CTA inside the mobile menu.

---

## Step 3.15 - Concepts Learned

During this component I learned:

React

- useState()
- Conditional class names
- Event handling
- Responsive component structure

CSS

- Sticky positioning
- Absolute positioning
- z-index
- Media queries
- Hover transitions
- Box shadows
- Responsive navigation
- Full viewport width (100vw)
- translateX(-50%)
- Flexbox layouts
- Mobile-first responsive design

---

## Step 3 Complete ✅

Completed:

✔ Responsive Header

✔ Desktop Navigation

✔ Mobile Navigation

✔ Hamburger Menu

✔ Sticky Header

✔ CTA Button

✔ Brand Component

✔ Hover Effects

✔ Responsive Dropdown Navigation

Next Step:

Build the Hero component.

---

---

## Step 4 - Hero Component

Created:

```text
src/components/Hero/Hero.jsx
src/components/Hero/Hero.css
```

Started building the Hero section for the homepage.

The Hero will follow the portfolio design created earlier, with one main change:

- The original profile image will be replaced with a hanging ID card
- The ID card will use my photo
- The lanyard will display `lovesandhu.com`
- Interactive/drag functionality will be added later

---

## Step 4.1 - Created Hero Component

Created the basic Hero component.

```jsx
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container">

            </div>
        </section>
    );
}
```

Imported the Hero stylesheet:

```jsx
import "./Hero.css";
```

Created the main Hero section:

```jsx
<section className="hero" id="home">
```

The `hero` class will be used for custom Hero styling.

The `id="home"` will later allow the Home navigation link to navigate directly to this section.

Added Bootstrap's container:

```jsx
<div className="container">
```

This keeps the Hero content aligned with the Header and provides responsive horizontal spacing.

The Hero is currently empty. Content and layout will be added one part at a time.

### Current Hero Structure

```text
Hero
└── Bootstrap Container
```

### Next

Create the two main areas of the Hero:

```text
Hero
└── Container
    ├── Hero Content
    └── ID Card Area
```

## Step 4.2 - Created Hero Layout

Updated the Hero container to use Bootstrap Flexbox.

```jsx
<div className="container d-flex align-items-center justify-content-between">

## Step 4.3 - Added Hero Eyebrow

Added the small portfolio label at the top of the Hero content.

```jsx
<p className="hero-label">PORTFOLIO 2026</p>
```

Used a `p` element because this is supporting text rather than a main heading.

Added the custom class:

```text
hero-label
```

This will later be used to style the text to match the small uppercase blue label in the design.

### Current Hero Content

```text
Hero Content
└── PORTFOLIO 2026
```

### Next

Add the main Hero introduction and developer name.

## Step 4.4 - Added Main Hero Heading

Added the main heading for the homepage.

```jsx
<h1 className="hero-title">
    <span>Hi, I&apos;m</span>
    <span>Lovepreet</span>
    <span>Sandhu</span>
</h1>
```

Used one `h1` because this is the main heading of the homepage.

Separated each line using `span` elements instead of `<br />`.

The spans will later be displayed as blocks using CSS. This keeps the line layout controlled through CSS instead of adding presentational line breaks to the HTML.

The separate spans also allow individual parts of the heading to be styled differently, such as making `Sandhu` blue.

### Current Hero Content

```text
PORTFOLIO 2026

Hi, I'm
Lovepreet
Sandhu
```

### Next

Add the developer role underneath the main heading.

## Step 4.5 - Added Developer Role

Added the developer role underneath the main Hero heading.

```jsx
<h2 className="hero-role">
    Full-Stack Developer
</h2>
```

The role is currently using `Full-Stack Developer` as a temporary static value.

Later, this section will be converted into a typing animation that cycles through:

```text
Full-Stack Developer
React Engineer
Node.js Developer
MERN Stack Developer
```

The typing functionality will be added after the basic Hero layout and styling are complete.

### Next

Add the short introduction paragraph underneath the developer role.

## Step 4.6 - Added Hero Description

Added a short introduction underneath the developer role.

```jsx
<p className="hero-description">
    I build responsive, full-stack web applications with a focus on clean code,
    practical solutions, and great user experiences.
</p>
```

Used a `p` element because this is supporting text describing the type of development work I do.

Added:

```text
hero-description
```

This class will later be used to control the text color, width, line height, spacing, and responsive styling.

### Next

Add the Hero call-to-action area.

## Step 4.7 - Added View My Work CTA

Created the Hero actions container.

```jsx
<div className="hero-actions">

</div>
```

The `hero-actions` wrapper will contain the main call-to-action links in the Hero and will later be styled using Flexbox.

Added the first call-to-action:

```jsx
<a href="#projects" className="hero-primary-btn">
    View My Work
</a>
```

Used an anchor element instead of a button because this action will navigate to another section of the page.

The link uses:

```text
#projects
```

This will connect to the Projects section once it is created with `id="projects"`.

### Current CTA Structure

```text
Hero Actions
└── View My Work
```

### Next

Add the Download CV action.

## Step 4.8 - Added Download CV CTA

Added the second call-to-action inside the Hero actions container.

```jsx
<a href="/resume.pdf" className="hero-secondary-btn">
    Download CV
</a>
```

Used an anchor element because this action will link to my résumé file.

The résumé will later be added to the project's `public` folder.

### Current CTA Structure

```text
Hero Actions
├── View My Work
└── Download CV
```

The two links will later be styled differently:

- `hero-primary-btn` - Primary blue CTA
- `hero-secondary-btn` - Secondary outlined CTA

### Next

Add the social links underneath the Hero actions.

## Step 4.9 - Added Bootstrap Icons

Installed Bootstrap Icons so icons can be reused throughout the portfolio.

Installed:

```bash
npm install bootstrap-icons
```

Imported the Bootstrap Icons stylesheet globally in `main.jsx`:

```jsx
import "bootstrap-icons/font/bootstrap-icons.css";
```

Bootstrap and Bootstrap Icons are separate packages.

Bootstrap is being used for layout and utility classes, while Bootstrap Icons will provide reusable icons throughout the portfolio.

### Next

Add the GitHub, LinkedIn, and Email social links to the Hero.

## Step 4.10 - Added GitHub Social Link

Added the first social link underneath the Hero CTA buttons.

```jsx
<a href="#" aria-label="GitHub">
    <i className="bi bi-github"></i>
</a>
```

Used an anchor element because the icon will link to my GitHub profile.

Added:

```jsx
aria-label="GitHub"
```

This provides an accessible description because the link contains an icon instead of visible text.

Used Bootstrap Icons:

```text
bi bi-github
```

The actual GitHub URL will be connected later when the portfolio links are finalized.

### Next

Add the LinkedIn social link.

## Step 4.11 - Added LinkedIn Social Link

Added the LinkedIn social link next to the GitHub icon.

```jsx
<a href="#" aria-label="LinkedIn">
    <i className="bi bi-linkedin"></i>
</a>
```

Used Bootstrap Icons:

```text
bi bi-linkedin
```

Added an `aria-label` so the icon-only link has an accessible description.

The actual LinkedIn profile URL will be connected later.

### Current Social Links

```text
Hero Socials
├── GitHub
└── LinkedIn
```

### Next

Add the Email social link.

## Step 4.11 - Added LinkedIn Social Link

Added the LinkedIn social link next to the GitHub icon.

```jsx
<a href="#" aria-label="LinkedIn">
    <i className="bi bi-linkedin"></i>
</a>
```

Used Bootstrap Icons:

```text
bi bi-linkedin
```

Added an `aria-label` so the icon-only link has an accessible description.

The actual LinkedIn profile URL will be connected later.

### Current Social Links

```text
Hero Socials
├── GitHub
└── LinkedIn
```

### Next

Add the Email social link.

## Git Checkpoint - Hero Content Structure

Completed the main content structure for the left side of the Hero.

Included:

- Portfolio label
- Main Hero heading
- Developer role placeholder
- Hero description
- View My Work CTA
- Download CV CTA
- GitHub icon
- LinkedIn icon
- Email icon
- Bootstrap Icons setup
- Initial ID card container

Created a Git checkpoint before beginning the ID card implementation.

```bash
git status
git add .
git commit -m "Built hero content structure"
```

Next:

Build the hanging developer ID card.

---

## Step 4.14 - Added Image to ID Card

Added my portfolio image to the ID card.

Stored the image inside:

```text
src/assets/images/hero/lovepreet.jpg
```

Imported the image into `Hero.jsx`:

```jsx
import lovepreetImage from "../../assets/images/hero/lovepreet.jpg";
```

Added the image inside the ID card:

```jsx
<div className="id-card">
    <img
        src={lovepreetImage}
        alt="Lovepreet Sandhu"
    />
</div>
```

Using an imported image allows Vite to include the image correctly when the React application is built.

Added descriptive `alt` text for accessibility.

### Current ID Card Structure

```text
Hero Card Area
└── ID Card
    └── Portfolio Image
```

### Next

Style the basic physical ID card before creating the lanyard.

---

## Step 4.15 - Styled the Basic ID Card

Styled the ID card container and image to create the appearance of a physical developer badge.

Added:

```css
.hero-title span {
    display: block;
}

.id-card {
    width: 250px;
    background-color: #fff;
    padding: 5px;
    border-radius: 12px;
    aspect-ratio: 3 / 4;
    transform: rotate(4deg);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
}

.id-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
    display: block;
}
```

### What These Styles Do

```css
width: 250px;
```

Sets the width of the ID card.

```css
background-color: #fff;
padding: 5px;
```

Creates the white outer frame around the image.

```css
border-radius: 12px;
```

Rounds the outside corners of the card.

```css
aspect-ratio: 3 / 4;
```

Keeps the card in a portrait ID-card shape.

```css
transform: rotate(4deg);
```

Rotates the card slightly so it does not look completely static.

```css
box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
```

Creates depth underneath the card.

For the image:

```css
object-fit: cover;
```

Allows the image to fill the card without stretching.

### Next

Build the lanyard and attachment point above the ID card.

---

## Step 4.16 - Built Hanging ID Card Structure

Expanded the Hero ID card so it could visually hang from a lanyard instead of appearing as a normal image card.

The card area was separated into parts representing:

```text
Lanyard
↓
Connector / attachment
↓
Developer ID card
```

This made it possible to style each part independently.

The Hero right side now acts as a visual feature instead of only displaying a profile image.

### Next

Style the lanyard so it visually connects the top of the Hero to the ID card.

---

## Step 4.17 - Styled the ID Card Lanyard

Styled the lanyard above the developer card.

The purpose of the lanyard is to make the card look like a physical badge hanging inside the Hero section.

The lanyard was positioned separately from the card so its length and placement could be adjusted without changing the card itself.

This also prepared the component for future movement and entrance animations.

### Current Hero Visual

```text
Hero
│
├── Left Side
│   ├── Portfolio label
│   ├── Heading
│   ├── Developer role
│   ├── Description
│   ├── CTA buttons
│   └── Social links
│
└── Right Side
    └── Hanging Developer ID
        ├── Lanyard
        ├── Connector
        └── ID Card
```

### Next

Add interaction to the ID card.

---

## Step 4.18 - Added Draggable ID Card

Made the developer ID card interactive so the user can drag it.

The goal was to make the Hero more memorable and interactive instead of using a completely static profile image.

The card can be moved by the user while remaining part of the Hero design.

This created one of the main interactive elements of the portfolio.

### Why the Interaction Was Added

The ID card represents my developer identity.

Making it draggable:

- Adds personality to the portfolio
- Gives the Hero an interactive element
- Makes the design more memorable
- Creates a stronger visual experience than a normal profile image

### Next

Make the lanyard respond correctly when the card moves.

---

## Step 4.19 - Made the Lanyard Dynamic

Updated the hanging badge so the lanyard visually responds to the position of the draggable card.

Instead of having a completely static line while the card moves, the lanyard remains visually connected to the badge.

This creates a more believable hanging-card interaction.

The Hero now includes:

```text
Developer ID Card
├── Draggable movement
├── Dynamic lanyard
└── Physical badge appearance
```

### Next

Finish responsive behaviour for the Hero and ID card.

---

## Step 4.20 - Completed Hero Responsive Layout

Adjusted the Hero layout for smaller screens.

The desktop layout uses two main sides:

```text
Hero
├── Content
└── ID Card
```

On smaller screens, the content and ID card adapt so the page remains readable and usable.

Responsive work included:

- Hero text sizing
- CTA layout
- Social link placement
- ID card sizing
- ID card positioning
- Spacing between Hero elements
- Mobile layout

The Hero now works on desktop and mobile layouts.

---

## Step 4.21 - Added Developer Role Typing Effect

Added a typing-style effect to the developer role in the Hero.

This gives the role text more movement and makes the Hero feel more like a developer portfolio.

The effect displays the developer role dynamically instead of leaving it completely static.

The Hero now contains both:

```text
Visual interaction
→ Draggable developer ID

Text interaction
→ Developer role typing effect
```

---

## Git Checkpoint - Completed Hero

Completed the main Hero section.

Included:

```text
Hero layout
Hero heading
Developer role
Typing effect
Description
CTA buttons
Social links
Developer image
Physical ID card design
Hanging lanyard
Draggable ID card
Dynamic lanyard
Desktop layout
Mobile layout
```

Git checkpoint:

```bash
git status
git add .
git commit -m "Complete interactive hero section"
git push
```

---

# Step 5 - About Section

Started the About section underneath the Hero.

The purpose of this section is to provide more information about me beyond the short introduction shown in the Hero.

The section was designed to include:

```text
About
├── Section heading
├── Personal introduction
├── Developer background
└── Statistics
```

---

## Step 5.1 - Created About Component

Created the reusable About component and its stylesheet.

```text
src/components/About/About.jsx
src/components/About/About.css
```

The component was then added to the main portfolio page underneath the Hero.

This keeps the application component-based instead of placing the entire homepage inside `App.jsx`.

---

## Step 5.2 - Added About Content

Added the main About content explaining my background and development focus.

The section gives visitors more context about:

- Who I am
- My development background
- My current focus
- The technologies I work with
- My approach to building applications

The content was kept concise because the portfolio should be easy to scan.

---

## Step 5.3 - Added About Statistics

Added statistics to make the About section easier to scan visually.

The statistics provide quick information instead of requiring visitors to read the complete About text.

The section now contains both:

```text
Detailed information
+
Quick visual statistics
```

---

## Step 5.4 - Styled About Section

Styled the About section to match the existing portfolio design.

Maintained the same design system used in the Header and Hero:

```text
Dark background
Blue accent color
White primary text
Muted secondary text
Consistent spacing
Rounded UI elements
```

This keeps the website visually consistent.

---

## Step 5.5 - Completed About Responsive Layout

Adjusted the About section for desktop and mobile screens.

The layout changes depending on available screen width so the text and statistics remain readable.

### About Status

```text
About
├── Desktop layout ✅
├── Mobile layout ✅
├── Personal information ✅
└── Statistics ✅
```

---

## Git Checkpoint - About Section

Completed the About section.

```bash
git status
git add .
git commit -m "Build responsive about section"
git push
```

---

# Step 6 - Portfolio Showcase

Started the main Portfolio Showcase section.

Instead of creating completely separate large sections for Projects, Skills, and Certifications, they were grouped into one interactive showcase.

Planned structure:

```text
Portfolio Showcase
│
├── Section heading
│
├── Tab navigation
│
├── Projects
│
├── Skills
│
└── Certifications
```

This keeps the homepage shorter and allows visitors to switch between different types of portfolio information.

---

## Step 6.1 - Created Portfolio Showcase Component

Created the main component responsible for the portfolio tabs.

The component controls which portfolio category is currently visible.

Categories:

```text
Projects
Skills
Certifications
```

---

## Step 6.2 - Added Tab Navigation

Added buttons that allow the user to switch between the three showcase categories.

The tab system allows the page to display one category at a time instead of showing every card at once.

This makes the portfolio easier to browse.

---

## Step 6.3 - Added React State for Active Tab

Used React state to keep track of the currently selected tab.

The general structure uses:

```jsx
const [activeTab, setActiveTab] = useState("projects");
```

The initial value is:

```text
projects
```

so Projects are displayed when the showcase first loads.

When a user selects another tab, the state changes.

Example:

```jsx
onClick={() => setActiveTab("skills")}
```

React then rerenders the component using the newly selected category.

---

## Step 6.4 - Added Conditional Rendering

Used conditional rendering to display the correct component.

Example:

```jsx
{activeTab === "projects" && <Projects />}
```

This means:

```text
IF activeTab equals "projects"
↓
render the Projects component
```

The same approach is used for Skills and Certifications.

This keeps all three categories inside one showcase while only rendering the selected content.

---

## Step 6.5 - Created Projects Component

Created a dedicated component for displaying portfolio projects.

The Projects component is responsible for the project grid and project data.

Instead of writing every project directly inside the main Showcase component, project rendering was separated into its own component.

---

## Step 6.6 - Created Reusable ProjectCard Component

Created a reusable `ProjectCard` component.

Instead of manually creating the same HTML structure for every project, the card receives information using props.

The card can receive values such as:

```text
title
description
image
technologies
GitHub link
live link
```

This allows multiple project cards to share one design.

---

## Step 6.7 - Passed Project Information Using Props

Project information is passed into `ProjectCard`.

The component architecture follows:

```text
Projects
↓
ProjectCard
↓
Props
```

This avoids duplicating the complete card JSX for every project.

---

## Step 6.8 - Rendered Technologies Dynamically

Used `.map()` to display each technology belonging to a project.

Example:

```jsx
{technologies.map((technology) => (
    <span key={technology}>
        {technology}
    </span>
))}
```

This allows each project to have a different number of technologies.

For example:

```text
Project A
React
Node.js
MongoDB

Project B
ASP.NET
C#
PostgreSQL
```

The same card component can display both.

---

## Step 6.9 - Added Dynamic Project Links

The reusable project card supports project links.

These include:

```text
GitHub
Live Demo
```

The URLs can be different for every project because they are passed through props.

---

## Step 6.10 - Created Skills Component

Created a separate Skills component for the Skills tab.

The component displays technologies and development skills in a reusable grid.

---

## Step 6.11 - Created Reusable SkillCard Component

Created a reusable `SkillCard`.

Each card can receive different skill information while sharing the same structure and styling.

This avoids manually duplicating skill card markup.

---

## Step 6.12 - Created Certifications Component

Created the Certifications component for the third Portfolio Showcase tab.

This section is used to display certificates and credentials separately from projects and technical skills.

---

## Step 6.13 - Created Reusable CertificationCard Component

Created a reusable `CertificationCard`.

The card structure can display different certification information while keeping the same design.

The Portfolio Showcase now uses three reusable card components:

```text
ProjectCard
SkillCard
CertificationCard
```

---

## Step 6.14 - Completed Portfolio Showcase Component Architecture

At this stage, the showcase structure was:

```text
Portfolio Showcase
│
├── Tab Navigation
│
├── React Active State
│
├── Conditional Rendering
│
├── Projects
│   └── ProjectCard
│
├── Skills
│   └── SkillCard
│
└── Certifications
    └── CertificationCard
```

This creates a reusable and scalable structure for portfolio content.

---

## Git Checkpoint - Portfolio Showcase Components

Completed the reusable component architecture for Projects, Skills, and Certifications.

Included:

```text
Portfolio Showcase tab system
Projects component
ProjectCard component
ProjectCard props
Dynamic technology rendering
Dynamic project image
Dynamic GitHub link
Dynamic Live Demo link
Skills component
SkillCard component
SkillCard props
Skills grid
Certifications component
CertificationCard component
CertificationCard props
Certifications grid
Initial card styling
API-ready component structure
```

Git checkpoint:

```bash
git status
git add .
git commit -m "Build portfolio showcase card components"
git push
```

### Next

Continue Step 6 with:

```text
Real project data
API integration
Final card styling
Skills data
Certifications
Responsive showcase
```

---

## Step 6.15 - Added Real Project Data

Replaced placeholder project information with real project content.

The reusable `ProjectCard` component now receives real values such as:

```jsx
<ProjectCard
    title="PhotoScout Toronto"
    type="Full-Stack"
    description="..."
    technologies={["Node.js", "Express", "Pug", "REST APIs"]}
    image={photoScoutImage}
    githubLink="..."
    liveLink="..."
/>
```

This confirmed that the reusable card structure works correctly with actual portfolio data.

### Next

Connect Projects to the backend API so project data no longer needs to be hardcoded.

---

## Step 6.16 - Added Frontend API Environment Variable

Created a frontend environment variable for the backend URL.

Example:

```env
VITE_API_URL=http://localhost:8888
```

Vite environment variables used in the browser must begin with:

```text
VITE_
```

The value can then be accessed using:

```jsx
import.meta.env.VITE_API_URL
```

Example:

```jsx
fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
```

This avoids hardcoding the API address throughout the React components.

Important:

The URL should not end with `/`.

Correct:

```env
VITE_API_URL=http://localhost:8888
```

Incorrect:

```env
VITE_API_URL=http://localhost:8888/
```

Otherwise this:

```jsx
`${import.meta.env.VITE_API_URL}/api/contact`
```

would create:

```text
http://localhost:8888//api/contact
```

---

## Step 6.17 - Added Projects State

Imported:

```jsx
import { useState, useEffect } from "react";
```

Created state:

```jsx
const [projects, setProjects] = useState([]);
```

The `projects` state stores the array returned by the backend API.

Initial value:

```js
[]
```

After the API request completes:

```js
[
    {
        _id: "...",
        title: "...",
        description: "...",
        technologies: [...]
    }
]
```

---

## Step 6.18 - Fetched Projects from the Backend

Added a `useEffect()` inside the Projects component.

```jsx
useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
        .then((response) => response.json())
        .then((data) => {
            setProjects(data);
        });

}, []);
```

The empty array:

```jsx
[]
```

means the effect runs when the component first loads.

Project flow:

```text
Projects component loads
↓
useEffect()
↓
GET /api/projects
↓
Express backend
↓
MongoDB
↓
JSON response
↓
setProjects(data)
↓
React rerenders
```

---

## Step 6.19 - Rendered API Projects Using map()

Removed the hardcoded `ProjectCard` instances.

Used:

```jsx
{projects.map((project) => {

    return (
        <ProjectCard
            key={project._id}
            title={project.title}
            type={project.type}
            description={project.description}
            technologies={project.technologies}
            image={project.imageUrl}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
        />
    );

})}
```

`map()` creates one `ProjectCard` for every project returned by the API.

MongoDB `_id` is used as the React key:

```jsx
key={project._id}
```

The backend property is:

```js
imageUrl
```

while the card expects:

```js
image
```

so the value is passed using:

```jsx
image={project.imageUrl}
```

Projects are now dynamic.

---

## Step 6.20 - Added Cloudinary Image Hosting

Added Cloudinary to manage project and certification images.

Instead of storing image files directly inside MongoDB, Cloudinary stores the real image.

MongoDB stores only the returned image URL.

Image flow:

```text
Admin selects image
↓
Multer receives file
↓
Cloudinary uploads image
↓
Cloudinary returns secure URL
↓
MongoDB stores URL
↓
React displays image
```

---

## Step 6.21 - Added Cloudinary Configuration

Created a reusable Cloudinary configuration file.

```text
components/portfolio/cloudinary.js
```

Added:

```js
import { v2 as cloudinary } from "cloudinary";

export default cloudinary;
```

Cloudinary credentials are stored using environment variables.

---

## Step 6.22 - Added Multer File Upload Support

Added Multer so the admin forms can receive uploaded files.

Forms that upload images use:

```html
multipart/form-data
```

Example:

```pug
form.adminForm(
    action="/projects/add"
    method="post"
    enctype="multipart/form-data"
)
```

Project image field:

```pug
input(
    type="file"
    id="projectImage"
    name="projectImage"
    accept="image/*"
    required
)
```

Backend middleware:

```js
upload.single("projectImage")
```

The uploaded image becomes available through:

```js
request.file
```

---

## Step 6.23 - Uploaded Project Images to Cloudinary

Used a Cloudinary upload stream to upload the file.

```js
const uploadResult = await new Promise((resolve, reject) => {

    const uploadStream = cloudinary.uploader.upload_stream(
        {
            folder: "portfolio/projects"
        },
        (error, result) => {

            if (error) {
                reject(error);
                return;
            }

            resolve(result);
        }
    );

    uploadStream.end(request.file.buffer);
});
```

Cloudinary returns:

```js
uploadResult.secure_url
```

Stored the returned URL:

```js
request.body.imageUrl = uploadResult.secure_url;

await db.addProject(request.body);
```

Final flow:

```text
Project form
↓
Multer
↓
Cloudinary
↓
secure_url
↓
MongoDB
```

---

## Step 6.24 - Added Optional Image Replacement During Edit

Editing a project does not require uploading the image again.

Started with the current project image:

```js
const project = await db.getProjectById(
    request.body.projectId
);

let imageUrl = project.imageUrl;
```

Checked whether a new image was uploaded:

```js
if (request.file) {
```

If a new image exists:

```js
imageUrl = uploadResult.secure_url;
```

Then:

```js
request.body.imageUrl = imageUrl;
```

This creates two possible edit paths:

```text
No new image
→ keep existing image

New image selected
→ upload new image
→ replace image URL
```

---

## Step 6.25 - Added Cloudinary Support to Certifications

Applied the same file-upload approach to certifications.

Certification file field:

```pug
input(
    type="file"
    id="certificateImage"
    name="certificateImage"
    accept="image/*"
    required
)
```

Middleware:

```js
upload.single("certificateImage")
```

Cloudinary folder:

```js
folder: "portfolio/certifications"
```

The image URL is stored as:

```js
imageUrl
```

The Edit Certification page also allows optional image replacement.

---

## Step 6.26 - Connected Certifications API

Created state:

```jsx
const [certifications, setCertifications] = useState([]);
```

Fetched certification data:

```jsx
useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/api/certifications`)
        .then((response) => response.json())
        .then((data) => {
            setCertifications(data);
        });

}, []);
```

Rendered cards:

```jsx
{certifications.map((certification) => {

    return (
        <CertificationCard
            key={certification._id}
            title={certification.title}
            issuer={certification.issuer}
            date={certification.date}
            image={certification.imageUrl}
            credentialLink={certification.credentialLink}
        />
    );

})}
```

Certifications are now dynamically controlled by the backend.

---

## Step 6.27 - Connected Skills API

Created:

```jsx
const [skills, setSkills] = useState([]);
```

Fetched skills:

```jsx
useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/api/skills`)
        .then((response) => response.json())
        .then((data) => {
            setSkills(data);
        });

}, []);
```

The database categories are:

```text
Front-End
Back-End
Database
Tools
```

---

## Step 6.28 - Filtered Skills by Category

Used `filter()` before `map()`.

Frontend example:

```jsx
{skills
    .filter((skill) => skill.category === "Front-End")
    .map((skill) => {

        return (
            <SkillCard
                key={skill._id}
                name={skill.name}
                category={skill.category}
                icon={skill.icon}
            />
        );

    })}
```

Backend:

```jsx
.filter((skill) => skill.category === "Back-End")
```

Database:

```jsx
.filter((skill) => skill.category === "Database")
```

Tools:

```jsx
.filter((skill) => skill.category === "Tools")
```

Flow:

```text
All skills
↓
filter()
↓
Selected category
↓
map()
↓
SkillCard
```

---

## Step 6.29 - Added Devicon Technology Icons

Added Devicon for technology-specific icons.

Loaded the Devicon stylesheet globally.

Example icon classes:

```text
devicon-html5-plain colored
devicon-css3-plain colored
devicon-javascript-plain colored
devicon-nodejs-plain colored
devicon-csharp-plain colored
devicon-dotnetcore-plain colored
devicon-php-plain colored
devicon-mysql-original colored
devicon-mongodb-plain colored
devicon-github-original colored
```

The icon class is stored in the database.

The `SkillCard` displays it using:

```jsx
<i className={icon}></i>
```

This means skill icons can be changed from the backend without editing React.

---

## Step 6.30 - Completed Dynamic Portfolio Showcase

The Portfolio Showcase is now connected to real backend data.

Current structure:

```text
Portfolio Showcase
│
├── Projects
│   ├── API data
│   ├── MongoDB
│   ├── Cloudinary images
│   └── ProjectCard
│
├── Skills
│   ├── API data
│   ├── Database categories
│   ├── Devicon
│   └── SkillCard
│
└── Certifications
    ├── API data
    ├── Cloudinary images
    └── CertificationCard
```

---

## Git Checkpoint - Dynamic Portfolio Showcase

Completed:

```text
Projects API
Skills API
Certifications API
Cloudinary project images
Cloudinary certificate images
Dynamic skill icons
Reusable cards
Database-driven portfolio content
```

Git commands:

```bash
git status
git add .
git commit -m "Connect portfolio showcase to backend APIs"
git push
```

---

# Step 7 - Guestbook

Started building a public Guestbook section.

The Guestbook allows portfolio visitors to:

```text
Read messages
+
Submit messages
```

This requires both:

```text
GET /api/guestbook
POST /api/guestbook
```

---

## Step 7.1 - Created Guestbook Form State

Created:

```jsx
const [guestData, setGuestData] = useState({
    guestName: "",
    guestMessage: ""
});
```

This state stores the current visitor input.

Also created:

```jsx
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
```

These values control the form feedback messages.

---

## Step 7.2 - Added handleChange()

Created:

```jsx
function handleChange(event) {

    setGuestData({
        ...guestData,
        [event.target.name]: event.target.value
    });
}
```

The same function handles both Guestbook fields.

The input `name` determines which state property is updated.

---

## Step 7.3 - Added Guestbook Entries State

Created:

```jsx
const [guestbookEntries, setGuestbookEntries] = useState([]);
```

This is separate from `guestData`.

```text
guestData
→ current form input

guestbookEntries
→ saved messages from MongoDB
```

---

## Step 7.4 - Loaded Guestbook Messages

Added:

```jsx
useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/api/guestbook`)
        .then((response) => response.json())
        .then((data) => {
            setGuestbookEntries(data);
        });

}, []);
```

The Guestbook now loads real messages when the component mounts.

---

## Step 7.5 - Added Dynamic Message Count

Added:

```jsx
{guestbookEntries.length}
{" "}
{guestbookEntries.length === 1 ? "Message" : "Messages"}
```

Examples:

```text
1 Message
2 Messages
10 Messages
```

---

## Step 7.6 - Rendered Guestbook Cards

Used:

```jsx
{guestbookEntries.map((entry) => {

    return (
        <GuestbookCard
            key={entry._id}
            name={entry.guestName}
            message={entry.guestMessage}
            date={new Date(entry.createdAt).toLocaleDateString()}
        />
    );

})}
```

MongoDB dates are converted using:

```js
new Date(entry.createdAt).toLocaleDateString()
```

---

## Step 7.7 - Connected Guestbook POST Request

Changed the submit handler to:

```jsx
async function handleSubmit(event)
```

Sent the form data:

```jsx
const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/guestbook`,
    {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(guestData)
    }
);
```

`JSON.stringify()` converts the JavaScript object into JSON text.

---

## Step 7.8 - Handled Guestbook API Responses

Read the backend response:

```js
const data = await response.json();
```

Handled errors:

```js
if (!response.ok) {
    setError(data.message);
    setSuccess("");
    return;
}
```

Handled success:

```js
setError("");
setSuccess(data.message);
```

Cleared the form:

```js
setGuestData({
    guestName: "",
    guestMessage: ""
});
```

---

## Step 7.9 - Reloaded Guestbook After Submission

After a new message is created, Guestbook data is requested again.

```js
const guestbookResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/api/guestbook`
);

const guestbookData =
    await guestbookResponse.json();

setGuestbookEntries(guestbookData);
```

This makes the new message appear without refreshing the browser.

---

## Step 7.10 - Added Guestbook Error Handling

Wrapped the submission in `try/catch`.

```js
try {

    // API request

} catch {

    setError(
        "Unable to submit Guestbook entry."
    );

    setSuccess("");
}
```

This handles network or server connection failures.

---

# Step 8 - Public API Security

Because Guestbook and Contact contain public forms, backend security was improved.

---

## Step 8.1 - Added Helmet

Imported:

```js
import helmet from "helmet";
```

Applied:

```js
app.use(helmet());
```

Helmet adds common security-related HTTP headers.

---

## Step 8.2 - Added CORS

Imported:

```js
import cors from "cors";
```

Initially allowed the local React frontend:

```js
app.use(
    cors({
        origin: "http://localhost:5173"
    })
);
```

Later this was expanded for the production domain.

---

## Step 8.3 - Added Rate Limiting

Imported:

```js
import { rateLimit } from "express-rate-limit";
```

Guestbook limiter:

```js
const guestbookLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,

    message: {
        message:
            "Too many Guestbook submissions. Please try again later."
    }
});
```

Applied to:

```text
POST /api/guestbook
```

A separate Contact limiter was also added later.

This reduces repeated spam submissions.

---

## Step 8.4 - Added Render Proxy Configuration

Render runs the Express application behind a proxy.

Added:

```js
app.set("trust proxy", 1);
```

This allows Express and `express-rate-limit` to correctly use forwarded visitor IP information.

Production request path:

```text
Visitor
↓
Render Proxy
↓
Express
↓
Rate Limiter
```

---

## Step 8.5 - Added Guestbook Backend Validation

Read only the expected fields:

```js
const guestName = request.body.guestName;
const guestMessage = request.body.guestMessage;
```

Validated data types:

```js
if (
    typeof guestName !== "string" ||
    typeof guestMessage !== "string"
) {
    return response.status(400).json({
        message: "Invalid input."
    });
}
```

Trimmed values:

```js
const cleanName = guestName.trim();
const cleanMessage = guestMessage.trim();
```

Rejected empty values:

```js
if (
    cleanName === "" ||
    cleanMessage === ""
) {
    return response.status(400).json({
        message: "Name and message are required."
    });
}
```

Rejected HTML tags:

```js
const htmlPattern = /<[^>]*>/;
```

Validated lengths before saving.

Only the cleaned values are stored in MongoDB.

---

## Git Checkpoint - Guestbook and Public API Security

Completed:

```text
Guestbook GET API
Guestbook POST API
Guestbook React state
Guestbook dynamic cards
Guestbook count
Backend validation
Helmet
CORS
Rate limiting
Render proxy support
```

Git commands:

```bash
git status
git add .
git commit -m "Add dynamic guestbook and public API security"
git push
```

---

# Step 9 - Contact System

Started converting the Contact section from a frontend-only form into a real full-stack Contact system.

The Contact feature needs to:

```text
Visitor submits form
↓
Backend validates data
↓
MongoDB stores message
↓
Admin can view message
↓
Email notification is sent
```

---

## Step 9.1 - Created Contact Form State

Created:

```jsx
const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
});
```

Also created:

```jsx
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
```

---

## Step 9.2 - Added Contact Frontend Validation

Checked all fields:

```jsx
if (
    formData.name === "" ||
    formData.email === "" ||
    formData.subject === "" ||
    formData.message === ""
) {
    setError("Please fill in all fields");
    return;
}
```

Added email validation:

```js
const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

Used:

```js
if (!emailPattern.test(formData.email)) {
    setError(
        "Please enter a valid email address."
    );

    return;
}
```

---

## Step 9.3 - Added Contact Database Functions

Created:

```js
async function getContactMessages() {
    return await Contact.find({})
        .sort({ createdAt: -1 });
}
```

Created:

```js
async function addContactMessage(contactData) {

    await Contact.create({
        name: contactData.name,
        email: contactData.email,
        subject: contactData.subject,
        message: contactData.message
    });
}
```

Created:

```js
async function deleteContactMessage(id) {

    await Contact.deleteOne({
        _id: id
    });
}
```

No Update function is needed because Contact messages should not be edited.

---

## Step 9.4 - Created Protected Admin Contact Page

Created a protected route for viewing Contact messages.

```js
app.get(
    "/contact-messages",
    requireLogin,
    async (request, response) => {

        const messages =
            await db.getContactMessages();

        response.render(
            "contact-messages",
            {
                messages: messages
            }
        );
    }
);
```

The route uses:

```js
requireLogin
```

so Contact messages are only visible to the authenticated admin.

---

## Step 9.5 - Added Contact Delete Function

Created a protected delete route.

```js
app.get(
    "/contact-messages/delete",
    requireLogin,
    async (request, response) => {

        await db.deleteContactMessage(
            request.query.messageId
        );

        response.redirect(
            "/contact-messages"
        );
    }
);
```

This allows old Contact messages to be removed from the admin dashboard.

---

## Step 9.6 - Added Contact Count to Admin Dashboard

Loaded Contact messages in the dashboard route.

```js
let contactMessages =
    await db.getContactMessages();
```

Passed:

```js
contactMessageCount:
    contactMessages.length
```

The dashboard can now show the total number of Contact messages.

---

## Step 9.7 - Created Contact POST API

Created:

```text
POST /api/contact
```

Applied the Contact rate limiter.

The API accepts:

```text
name
email
subject
message
```

---

## Step 9.8 - Added Contact Backend Validation

Checked types:

```js
if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
) {

    return response.status(400).json({
        message: "Invalid input."
    });
}
```

Trimmed values:

```js
const cleanName = name.trim();
const cleanEmail = email.trim();
const cleanSubject = subject.trim();
const cleanMessage = message.trim();
```

Checked empty values:

```js
if (
    cleanName === "" ||
    cleanEmail === "" ||
    cleanSubject === "" ||
    cleanMessage === ""
) {

    return response.status(400).json({
        message:
            "All fields are required."
    });
}
```

Validated email format.

Rejected HTML tags.

Validated minimum and maximum lengths.

---

## Step 9.9 - Connected React Contact Form to API

Changed:

```js
function handleSubmit(event)
```

to:

```js
async function handleSubmit(event)
```

Sent the request:

```js
const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/contact`,
    {
        method: "POST",

        headers: {
            "Content-Type":
                "application/json"
        },

        body:
            JSON.stringify(formData)
    }
);
```

Read the response:

```js
const data =
    await response.json();
```

Handled backend errors:

```js
if (!response.ok) {

    setError(data.message);
    setSuccess("");

    return;
}
```

Handled success:

```js
setError("");
setSuccess(data.message);
```

Cleared the form after success.

---

## Step 9.10 - Fixed Local API Double-Slash Error

During local testing, React sent:

```text
http://localhost:8888//api/contact
```

This caused:

```text
404 Not Found
```

and React then produced:

```text
Unexpected token '<'
"<!DOCTYPE" is not valid JSON
```

The problem was the frontend environment variable ending with `/`.

Changed:

```env
VITE_API_URL=http://localhost:8888/
```

to:

```env
VITE_API_URL=http://localhost:8888
```

The final request became:

```text
http://localhost:8888/api/contact
```

and the Contact API worked locally.

---

## Git Checkpoint - Contact System

Completed:

```text
Contact form
Frontend validation
Contact database model
Contact database functions
Protected admin Contact page
Delete Contact message
Dashboard Contact count
POST /api/contact
Backend validation
React API integration
```

Git commands:

```bash
git status
git add .
git commit -m "Build full stack contact messaging system"
git push
```

---

### Next

Continue with:

```text
Contact email notifications
Resend
Production deployment
Cloudflare
Production CORS
Custom domain
Animation branch
Welcome Intro
```

---

# Step 10 - Contact Email Notifications

After the Contact form was successfully saving messages to MongoDB, the next goal was to receive an email notification whenever somebody submitted the form.

The required flow became:

```text
Visitor submits Contact form
↓
React sends POST request
↓
Backend validates the request
↓
MongoDB stores the Contact message
↓
Email notification is sent
↓
React receives success response
```

---

## Step 10.1 - First Email Approach with Nodemailer

Initially, Nodemailer was used to send email notifications through Gmail SMTP.

Installed:

```bash
npm install nodemailer
```

Created a separate mail configuration file so the email setup would not be placed directly inside the main server file.

Created:

```text
components/portfolio/mailer.js
```

The goal was to keep email configuration reusable and separate from the Contact route.

Local testing confirmed that the Gmail SMTP connection worked.

The server displayed:

```text
Email server is ready.
```

This confirmed that the Nodemailer configuration and Gmail credentials were working locally.

---

## Step 10.2 - Added Email Notification to Contact Route

After a Contact message was saved to MongoDB, the backend attempted to send an email notification.

The intended order was:

```text
Validate Contact form
↓
Save Contact message
↓
Send email
↓
Return 201 success
```

Keeping the database save before the email notification ensures the Contact message is stored in the admin system.

---

## Step 10.3 - Encountered SMTP Problems on Render

The email system worked locally but failed after deploying the backend to Render.

Production errors included SMTP connection problems on ports such as:

```text
465
587
```

The important discovery was:

```text
Local computer
→ Gmail SMTP worked

Render backend
→ Gmail SMTP connection failed
```

Changing the SMTP port did not solve the problem.

Because the Contact message was already reaching MongoDB, the Contact API itself was working.

The problem was specifically the hosted SMTP connection.

---

# Step 11 - Replaced Nodemailer with Resend

Instead of continuing to troubleshoot SMTP ports, the email system was changed to Resend.

Resend uses an HTTPS API instead of a direct SMTP connection.

This made it a better fit for the hosted Render backend.

---

## Step 11.1 - Installed Resend

Installed:

```bash
npm install resend
```

Added an environment variable:

```env
RESEND_API_KEY=...
```

The API key is stored in `.env` locally and in Render environment variables for production.

It is not stored directly inside the source code.

---

## Step 11.2 - Updated mailer.js

Removed the Nodemailer transporter and created a Resend client instead.

Updated:

```text
components/portfolio/mailer.js
```

to:

```js
import { Resend } from "resend";

// Creates the Resend client using the API key stored in the environment.
const resend = new Resend(process.env.RESEND_API_KEY);

export default resend;
```

Imported the client into the backend:

```js
import resend from "./components/portfolio/mailer.js";
```

This replaced the previous Nodemailer transporter import.

---

## Step 11.3 - Added Resend to Contact API

Inside the Contact route, the database message is saved first.

```js
await db.addContactMessage({
    name: cleanName,
    email: cleanEmail,
    subject: cleanSubject,
    message: cleanMessage
});
```

Then an email notification is sent.

```js
const { error } = await resend.emails.send({

    from: "Portfolio <onboarding@resend.dev>",

    to: process.env.EMAIL_USER,

    subject: `Portfolio Contact: ${cleanSubject}`,

    text: `New portfolio contact message

Name: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject}

Message:
${cleanMessage}`
});
```

The notification contains:

```text
Visitor Name
Visitor Email
Subject
Message
```

This makes it possible to know immediately when somebody contacts me through the portfolio.

---

## Step 11.4 - Handled Resend Errors

Resend returns an error value if the message cannot be sent.

Added:

```js
if (error) {
    throw new Error(error.message);
}
```

The Contact route already uses a `try/catch`, so the thrown error is handled by the existing error response.

Example structure:

```js
try {

    await db.addContactMessage({
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage
    });

    const { error } = await resend.emails.send({
        // email settings
    });

    if (error) {
        throw new Error(error.message);
    }

    response.status(201).json({
        message: "Message sent successfully."
    });

} catch (error) {

    console.log("Contact submission error:");
    console.log(error);

    response.status(500).json({
        message: "Unable to send message right now."
    });
}
```

---

## Step 11.5 - Tested Resend Locally

Tested the Contact form with the local React frontend and local backend.

Verified:

```text
React Contact submission ✅
MongoDB Contact save ✅
Admin Contact page ✅
Resend email ✅
React success message ✅
```

The Contact system was now working end-to-end locally.

---

## Step 11.6 - Added Production Environment Variables

Added the Resend API key to Render.

Required:

```env
RESEND_API_KEY=...
```

The application also still requires:

```env
EMAIL_USER=...
```

The purpose of `EMAIL_USER` changed.

Previously it was part of the Gmail SMTP configuration.

Now it is simply used as the email recipient:

```js
to: process.env.EMAIL_USER
```

The old Gmail App Password is no longer required.

---

## Step 11.7 - Fixed Missing Recipient Error

After deploying the new Resend system, Render returned:

```text
Missing `to` field.
```

The reason was that `EMAIL_USER` had been removed from the Render environment variables.

Because this code uses:

```js
to: process.env.EMAIL_USER
```

the missing variable became:

```js
undefined
```

Restored:

```env
EMAIL_USER=...
```

to Render.

After redeploying, the Contact email notification worked in production.

---

## Step 11.8 - Completed Production Contact Flow

Final Contact flow:

```text
Visitor
↓
React Contact Form
↓
Frontend Validation
↓
POST /api/contact
↓
Rate Limiter
↓
Backend Validation
↓
MongoDB
↓
Contact Message Saved
↓
Resend API
↓
Email Notification
↓
201 Created
↓
React Success Message
```

Verified:

```text
Contact form works ✅
MongoDB save works ✅
Admin messages work ✅
Delete works ✅
Dashboard count works ✅
Resend notification works ✅
Production backend works ✅
```

---

## Git Checkpoint - Contact Email Notifications

Completed:

```text
Contact MongoDB storage
Contact admin page
Contact API
Contact validation
Email notifications
Resend integration
Production environment variables
Production email testing
```

Git commands:

```bash
git status
git add .
git commit -m "Add contact email notifications with Resend"
git push
```

---

# Step 12 - Portfolio Deployment

After the main React portfolio and backend functionality were working, the next step was to deploy the React frontend.

The backend was already hosted separately.

Architecture:

```text
React Portfolio
→ Cloudflare

Node / Express Admin + API
→ Render

Database
→ MongoDB

Images
→ Cloudinary

Email
→ Resend
```

---

## Step 12.1 - Connected GitHub Repository to Cloudflare

Connected the React portfolio GitHub repository to Cloudflare.

The production branch is:

```text
main
```

Configured the build command:

```bash
npm run build
```

Vite builds the production site into:

```text
dist/
```

---

## Step 12.2 - Configured Cloudflare Deploy Command

Cloudflare was using the Workers Git deployment flow.

Configured:

```bash
npx wrangler deploy --assets ./dist/
```

The first deployment failed because Wrangler required a compatibility date.

Error:

```text
A compatibility_date is required when uploading a Worker.
```

Updated the command to:

```bash
npx wrangler deploy --assets ./dist/ --compatibility-date 2026-08-13
```

The deployment then completed successfully.

---

## Step 12.3 - Added Production API Environment Variable

Added the frontend production environment variable in Cloudflare:

```env
VITE_API_URL=https://admin.lovesandhu.com
```

This allows the deployed React application to communicate with the hosted backend.

Because this is a Vite frontend variable, it is available during the production build.

---

## Step 12.4 - Connected Custom Domain

Connected the portfolio Worker to:

```text
lovesandhu.com
```

The domain is used as the main public portfolio URL.

Final structure:

```text
lovesandhu.com
→ React Portfolio

admin.lovesandhu.com
→ Backend / Admin
```

---

## Step 12.5 - Configured www Redirect

Configured:

```text
www.lovesandhu.com
```

to redirect permanently to:

```text
https://lovesandhu.com
```

Created a Cloudflare Redirect Rule.

Request:

```text
https://www.lovesandhu.com/*
```

Target:

```text
https://lovesandhu.com/${1}
```

Status:

```text
301 Permanent Redirect
```

A proxied DNS entry for `www` was used so Cloudflare could process the redirect.

Final domain flow:

```text
www.lovesandhu.com
↓
301 redirect
↓
lovesandhu.com
```

---

## Step 12.6 - Updated Production CORS

After deploying the React portfolio, dynamic data such as Projects was initially empty.

The backend CORS configuration was only allowing:

```text
http://localhost:5173
```

Updated CORS to also allow the production portfolio domains.

```js
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://lovesandhu.com",
            "https://www.lovesandhu.com"
        ]
    })
);
```

This allows:

```text
Local React development ✅
Production portfolio ✅
www portfolio domain ✅
```

After redeploying the backend, dynamic data loaded correctly on the production website.

---

## Step 12.7 - Verified Production APIs

Tested the live site and confirmed that dynamic sections were loading.

Verified:

```text
Projects ✅
Skills ✅
Certifications ✅
Guestbook ✅
Contact ✅
```

The frontend and backend were now communicating successfully in production.

---

## Step 12.8 - Final Production Architecture

Current application architecture:

```text
                    Portfolio Admin
                          ↓
                       MongoDB
                          ↓
                  Node.js + Express
                          ↓
          ┌───────────────┼────────────────┐
          ↓               ↓                ↓
      Cloudinary        Resend          Public API
        Images           Email              ↓
                                            ↓
                                      React Portfolio
                                            ↓
                                       Cloudflare
                                            ↓
                                   lovesandhu.com
```

---

## Git Checkpoint - Production Deployment

Completed:

```text
Cloudflare deployment
Vite production build
Production environment variable
Custom domain
www redirect
Production CORS
Live API testing
```

Git commands:

```bash
git status
git add .
git commit -m "Configure production portfolio deployment"
git push
```

---

# Step 13 - Portfolio Version 2 Planning

After the first working version was deployed, started planning a second improvement phase.

The goal is to improve the visual experience without breaking the working production website.

Planned improvements:

```text
Welcome intro
Hero entrance animation
Falling ID card animation
Smooth section animations
Project preview limit
View More Projects
Projects page
Project Detail pages
Page transitions
QR code
Loading states
Responsive animation testing
Final performance pass
```

---

## Step 13.1 - Created Development Branch

Because the working portfolio is already deployed from `main`, created a separate branch for the animation and improvement work.

The purpose is to keep the live production version stable while new features are developed.

Branch workflow:

```text
main
→ stable production portfolio

feature/portfolio-v2-polish
→ new animations and improvements
```

This allows new work to be tested before merging into production.

Example:

```bash
git checkout -b feature/portfolio-v2-polish
```

---

# Step 14 - Welcome Intro

Started building a full-screen welcome screen that appears before the main portfolio.

The goal is to create a smoother first impression when the website loads.

Planned sequence:

```text
Portfolio opens
↓
Welcome screen appears
↓
Welcome text animates
↓
Developer name animates
↓
Developer role animates
↓
Developer icons animate
↓
Content fades away
↓
Full intro screen slides upward
↓
Portfolio is revealed
```

Originally tested an animation library, but decided to rebuild this intro using CSS keyframes and simple React state so the logic remains easier to understand and explain.

---

## Step 14.1 - Created Intro Component

Created:

```text
src/components/Intro/Intro.jsx
src/components/Intro/Intro.css
```

Started with a basic full-screen component.

```jsx
import "./Intro.css";

export default function Intro() {

    return (
        <div className="intro">

        </div>
    );
}
```

---

## Step 14.2 - Created Full-Screen Intro Layout

Used Bootstrap for layout and centering.

```jsx
<div className="intro d-flex justify-content-center align-items-center">
```

Bootstrap utilities:

```text
d-flex
→ Flexbox

justify-content-center
→ horizontal centering

align-items-center
→ vertical centering
```

Custom CSS controls the Intro appearance.

```css
/* Full-screen welcome section displayed when the portfolio first loads. */
.intro {
    position: fixed;
    inset: 0;

    width: 100%;
    height: 100vh;

    background: #081120;

    z-index: 9999;
}
```

---

## Step 14.3 - Added Intro Content

Added the centered content container.

```jsx
{/* Content container for the welcome text and icons. */}
<div className="intro-content text-center">
```

Added the welcome text:

```jsx
{/* Small welcome message shown first. */}
<p className="intro-welcome">
    WELCOME TO MY PORTFOLIO WEBSITE
</p>
```

Added the developer name:

```jsx
{/* Developer name displayed as the main focus of the intro. */}
<h1 className="intro-name">
    Lovepreet <span>Sandhu</span>
</h1>
```

Added the developer role:

```jsx
{/* Developer role displayed below the name. */}
<p className="intro-role">
    FULL-STACK WEB DEVELOPER
</p>
```

---

## Step 14.4 - Created Global Animation Stylesheet

Because similar animations will be reused throughout the portfolio, created one shared file instead of defining the same keyframes repeatedly.

Created:

```text
src/styles/animations.css
```

Imported it globally in `main.jsx`.

```jsx
import "./styles/animations.css";
```

This allows any component to reuse the animations.

---

## Step 14.5 - Created fadeUp Animation

Added:

```css
/* Fade in while moving it upwards. */
@keyframes fadeUp {

    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

This starts the element:

```text
invisible
+
20px lower
```

and finishes:

```text
visible
+
at its normal position
```

---

## Step 14.6 - Animated Welcome Text

Styled:

```css
/* Small welcome text displayed above the developer name. */
.intro-welcome {
    margin: 0 0 10px 0;

    font-size: 13px;
    font-weight: 600;
    letter-spacing: 4px;

    color: #90A1B9;

    /* Run the fade-up animation when the intro loads. */
    animation: fadeUp 800ms ease forwards;
}
```

The welcome animation begins immediately.

---

## Step 14.7 - Animated Developer Name

Styled:

```css
/* Main developer name displayed after the welcome message. */
.intro-name {
    margin: 0 0 30px 0;

    font-size: 86px;
    font-weight: 700;

    color: #FFFFFF;

    /* Keeps the name hidden until its animation begins. */
    opacity: 0;

    /* ORDER - NAME DURATION EASING DELAY FILL-MODE */
    animation: fadeUp 800ms ease 750ms forwards;
}
```

Styled the surname separately:

```css
.intro-name span {
    color: #51A2FF;
}
```

The animation shorthand means:

```text
fadeUp
→ animation name

800ms
→ duration

ease
→ easing

750ms
→ delay

forwards
→ keep final state
```

---

## Step 14.8 - Animated Developer Role

Added:

```css
/* Developer role displayed after the developer name. */
.intro-role {
    margin: 0;

    font-size: 13px;
    letter-spacing: 3px;

    color: #90A1B9;

    /* Keeps the role hidden until its animation begins. */
    opacity: 0;

    animation: fadeUp 600ms ease 1630ms forwards;
}
```

The timing is:

```text
Welcome
0ms → 800ms

Name
750ms → 1550ms

Role
1630ms → 2230ms
```

---

## Step 14.9 - Added Developer Icons

Added developer-related Bootstrap Icons.

```jsx
{/* Developer-related icons shown under the role. */}
<div className="intro-icons d-flex justify-content-center gap-3">

    <i className="bi bi-globe2"></i>
    <i className="bi bi-code-slash"></i>
    <i className="bi bi-terminal"></i>
    <i className="bi bi-braces"></i>
    <i className="bi bi-git"></i>

</div>
```

The icons represent:

```text
Web
Code
Terminal
Programming
Git
```

Used Bootstrap for row layout and spacing.

---

## Step 14.10 - Created fadeUpScale Animation

Added another reusable animation:

```css
/* Fades an element in while moving upward and growing to its normal size. */
@keyframes fadeUpScale {

    from {
        opacity: 0;
        transform: translateY(15px) scale(0.7);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
```

This makes icons fade in, move upward, and grow slightly.

---

## Step 14.11 - Added Staggered Icon Animation

Styled the icons:

```css
/* Developer icons displayed below the role. */
.intro-icons {
    margin-top: 20px;
}

/* Controls the size and color of all the intro icons. */
.intro-icons i {
    font-size: 26px;
    color: #90A1B9;

    /* Keeps each icon hidden until its animation begins. */
    opacity: 0;

    animation: fadeUpScale 600ms ease forwards;
}
```

Used `:nth-child()` to create staggered delays.

```css
.intro-icons i:nth-child(1) {
    animation-delay: 2300ms;
}

.intro-icons i:nth-child(2) {
    animation-delay: 2400ms;
}

.intro-icons i:nth-child(3) {
    animation-delay: 2500ms;
}

.intro-icons i:nth-child(4) {
    animation-delay: 2600ms;
}

.intro-icons i:nth-child(5) {
    animation-delay: 2700ms;
}
```

Each icon begins `100ms` after the previous icon.

---

## Step 14.12 - Added Intro Content Exit Animation

Created:

```css
/* Fades an element out while moving it slightly upward. */
@keyframes fadeOutUp {

    from {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: 0;
        transform: translateY(-20px);
    }
}
```

Applied it:

```css
/* Fades all intro content out after the entrance animations finish. */
.intro-content {
    animation: fadeOutUp 600ms ease 3700ms forwards;
}
```

This gives the user a short moment to see the complete intro before it disappears.

---

## Step 14.13 - Added Intro Slide-Up Animation

Created:

```css
/* Moves an element upward until it leaves the screen. */
@keyframes slideUp {

    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-100%);
    }
}
```

Applied it to the full Intro:

```css
.intro {
    animation: slideUp 900ms ease 4300ms forwards;
}
```

The Intro moves upward by its own full height.

This reveals the portfolio underneath.

---

## Step 14.14 - Added React State to Remove Intro

CSS moves the intro away visually, but the React component would still exist.

Imported:

```jsx
import { useState } from "react";
```

Created:

```jsx
const [showIntro, setShowIntro] = useState(true);
```

When:

```text
showIntro = true
```

the Intro is displayed.

When:

```text
showIntro = false
```

the component is removed.

---

## Step 14.15 - Added onAnimationEnd

Created:

```jsx
// Removes the intro after the final slide-up animation finishes.
function handleAnimationEnd(event) {

    if (event.animationName === "slideUp") {
        setShowIntro(false);
    }
}
```

Added the event:

```jsx
<div
    className="intro d-flex justify-content-center align-items-center"
    onAnimationEnd={handleAnimationEnd}
>
```

The handler checks:

```js
event.animationName
```

so it only removes the Intro after:

```text
slideUp
```

has finished.

---

## Step 14.16 - Added Conditional Rendering

Added:

```jsx
// Stops rendering the intro after the animation is complete.
if (!showIntro) {
    return null;
}
```

Flow:

```text
Intro loads
↓
CSS animations run
↓
slideUp finishes
↓
onAnimationEnd fires
↓
setShowIntro(false)
↓
React rerenders
↓
return null
↓
Intro is removed
```

---

## Step 14.17 - Current Intro.jsx

```jsx
import "./Intro.css";
import { useState } from "react";

export default function Intro() {

    const [showIntro, setShowIntro] = useState(true);

    // Removes the intro after the final slide-up animation finishes.
    function handleAnimationEnd(event) {

        if (event.animationName === "slideUp") {
            setShowIntro(false);
        }
    }

    // Stops rendering the intro after the animation is complete.
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
```

---

## Step 14.18 - Current Intro.css

```css
/* Full-screen welcome section displayed when the portfolio first loads. */
.intro {
    position: fixed;
    inset: 0;

    width: 100%;
    height: 100vh;

    background: #081120;

    z-index: 9999;

    /* Slides the intro screen away after the content disappears. */
    animation: slideUp 900ms ease 4300ms forwards;
}

/* Small welcome text displayed above the developer name. */
.intro-welcome {
    margin: 0 0 10px 0;

    font-size: 13px;
    font-weight: 600;
    letter-spacing: 4px;

    color: #90A1B9;

    /* Run the fade-up animation when the intro loads. */
    animation: fadeUp 800ms ease forwards;
}

/* Main developer name displayed after the welcome message. */
.intro-name {
    margin: 0 0 30px 0;

    font-size: 86px;
    font-weight: 700;

    color: #FFFFFF;

    /* Keeps the name hidden until its animation begins. */
    opacity: 0;

    /* ORDER - NAME DURATION EASING DELAY FILL-MODE */
    animation: fadeUp 800ms ease 750ms forwards;
}

.intro-name span {
    color: #51A2FF;
}

/* Developer role displayed after the developer name. */
.intro-role {
    margin: 0;

    font-size: 13px;
    letter-spacing: 3px;

    color: #90A1B9;

    /* Keeps the role hidden until its animation begins. */
    opacity: 0;

    animation: fadeUp 600ms ease 1630ms forwards;
}

/* Developer icons displayed below the role. */
.intro-icons {
    margin-top: 20px;
}

/* Controls the size and color of all the intro icons. */
.intro-icons i {
    font-size: 26px;
    color: #90A1B9;

    /* Keeps each icon hidden until its animation begins. */
    opacity: 0;

    animation: fadeUpScale 600ms ease forwards;
}

.intro-icons i:nth-child(1) {
    animation-delay: 2300ms;
}

.intro-icons i:nth-child(2) {
    animation-delay: 2400ms;
}

.intro-icons i:nth-child(3) {
    animation-delay: 2500ms;
}

.intro-icons i:nth-child(4) {
    animation-delay: 2600ms;
}

.intro-icons i:nth-child(5) {
    animation-delay: 2700ms;
}

/* Fades all intro content out after the entrance animations finish. */
.intro-content {
    animation: fadeOutUp 600ms ease 3700ms forwards;
}
```

---

## Step 14.19 - Intro Animation Timeline

Current animation sequence:

```text
0ms
→ Welcome starts

750ms
→ Name starts

1550ms
→ Name finishes

1630ms
→ Role starts

2230ms
→ Role finishes

2300ms
→ Icon 1 starts

2400ms
→ Icon 2 starts

2500ms
→ Icon 3 starts

2600ms
→ Icon 4 starts

2700ms
→ Icon 5 starts

3300ms
→ Last icon finishes

3700ms
→ Intro content fades out

4300ms
→ Intro starts sliding up

5200ms
→ slideUp finishes
→ React removes Intro
```

---

## Step 14.20 - Concepts Learned

During the Intro component I learned:

### CSS

```text
@keyframes
animation
animation duration
animation delay
animation easing
animation fill mode
opacity
translateY()
scale()
:nth-child()
staggered animation timing
position: fixed
inset
100vh
z-index
```

### Bootstrap

```text
d-flex
justify-content-center
align-items-center
text-center
gap-3
```

### React

```text
useState()
onAnimationEnd
event.animationName
conditional rendering
return null
```

---

## Step 14 Status

Completed:

```text
Full-screen Intro ✅
Welcome animation ✅
Name animation ✅
Role animation ✅
Developer icons ✅
Staggered icons ✅
Content fade-out ✅
Intro slide-up ✅
React component removal ✅
Reusable animations.css ✅
Code comments ✅
```

Still required:

```text
Responsive Intro sizing
Mobile testing
Tablet testing
Reduced-motion accessibility
Hero entrance animation
ID card drop animation
```

---

## Git Checkpoint - Welcome Intro

Completed the first Portfolio V2 animation feature.

Git commands:

```bash
git status
git add .
git commit -m "Add animated portfolio welcome intro"
git push
```

Next:

```text
Make the Intro responsive.
Then begin the Hero and ID card entrance animations.
```

---