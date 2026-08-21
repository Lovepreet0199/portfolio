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

## Step 14.21 - Made the Intro Responsive

After completing the desktop Intro animation, updated the Intro so it also works correctly on tablet and mobile screens.

The desktop design uses:

```css
.intro-name {
    font-size: 86px;
}
```

This size works on larger screens but is too large for smaller devices.

Added media queries to adjust the Intro typography and spacing.

---

### Tablet Styles

Added:

```css
/* Tablet */
@media (max-width: 991px) {

    .intro-name {
        font-size: 64px;
    }

    .intro-welcome {
        font-size: 12px;
        letter-spacing: 3px;
    }

    .intro-role {
        font-size: 12px;
        letter-spacing: 2px;
    }

    .intro-icons i {
        font-size: 24px;
    }
}
```

On tablet screens:

```text
Developer name
86px → 64px

Welcome text
13px → 12px

Role
13px → 12px

Icons
26px → 24px
```

The letter spacing was also reduced so the text fits better on narrower screens.

---

## Step 14.22 - Added Mobile Intro Styles

Added another media query for mobile screens.

```css
/* Mobile */
@media (max-width: 576px) {

    .intro-content {
        padding: 0 20px;
    }

    .intro-name {
        font-size: 42px;
        margin-bottom: 22px;
    }

    .intro-welcome {
        font-size: 10px;
        letter-spacing: 2px;
    }

    .intro-role {
        font-size: 11px;
        letter-spacing: 2px;
    }

    .intro-icons {
        margin-top: 16px;
    }

    .intro-icons i {
        font-size: 22px;
    }
}
```

Added:

```css
padding: 0 20px;
```

to the Intro content so the text does not sit directly against the edges of smaller screens.

The developer name is reduced to:

```css
font-size: 42px;
```

The supporting text, icons, spacing, and letter spacing are also reduced for mobile.

---

## Step 14.23 - Fixed Mobile Intro Viewport Height

During mobile testing, noticed that the Intro did not completely cover the screen.

Parts of the portfolio underneath could still be seen around the top or bottom of the Intro.

The original Intro used:

```css
height: 100vh;
```

Mobile browsers can change the visible viewport when their browser controls appear or disappear.

Updated the Intro height to:

```css
min-height: 100vh;
min-height: 100dvh;
```

The updated Intro container is:

```css
/* Full-screen welcome section displayed when the portfolio first loads. */
.intro {
    position: fixed;
    inset: 0;

    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;

    background: #081120;

    z-index: 9999;

    /* Slides the intro screen away after the content disappears. */
    animation: slideUp 900ms ease 4300ms forwards;
}
```

The first value:

```css
min-height: 100vh;
```

acts as the normal viewport-height value.

The second value:

```css
min-height: 100dvh;
```

uses the dynamic viewport height on supported browsers.

This helps the Intro cover the complete visible mobile screen.

---

## Step 14.24 - Completed Responsive Welcome Intro

The Welcome Intro is now complete for the current version.

Final animation sequence:

```text
Intro opens
↓
Welcome text fades upward
↓
Developer name fades upward
↓
Developer role fades upward
↓
Developer icons appear one after another
↓
Intro content fades upward
↓
Full Intro screen slides upward
↓
onAnimationEnd detects slideUp
↓
React sets showIntro to false
↓
Intro component is removed
↓
Portfolio becomes available
```

The Intro now combines:

```text
React
├── useState
├── onAnimationEnd
└── Conditional rendering

Bootstrap
├── Flexbox centering
├── Text alignment
└── Icon spacing

CSS
├── Keyframes
├── Animation delays
├── Staggered animations
├── Media queries
├── Responsive typography
└── Dynamic viewport height
```

---

## Step 14 - Final Status

Completed:

```text
Welcome Intro component ✅
Full-screen overlay ✅
Welcome animation ✅
Name animation ✅
Role animation ✅
Staggered icon animation ✅
Content exit animation ✅
Full-screen slide animation ✅
React removal after animation ✅
Reusable animations.css ✅
Tablet responsiveness ✅
Mobile responsiveness ✅
Mobile viewport-height fix ✅
Code comments ✅
```

---

## Git Checkpoint - Responsive Welcome Intro

The Welcome Intro feature is now complete.

```bash
git status
git add .
git commit -m "Add responsive animated portfolio intro"
git push
```

### Next

Start:

```text
Step 15 - Hero Entrance Animations
```

Planned order:

```text
Intro finishes
↓
Hero content enters
↓
Hero text and buttons animate
↓
Developer ID card enters
↓
ID card receives drop/swing animation
```

The next feature will continue using the reusable animations stored in:

```text
src/styles/animations.css
```

---

# Step 15 - Hero ID Card Entrance Animation

After completing the Welcome Intro, started connecting the Intro animation to the Hero section.

The goal was:

```text
Welcome Intro finishes
↓
Portfolio is revealed
↓
Hanging ID card drops from above
↓
Card swings slightly
↓
Card remains draggable
```

The important part was making the Hero animation start only after the Intro was actually finished.

---

## Step 15.1 - Added Intro Completion Communication

The Intro already knew when its final CSS animation finished because it was using:

```jsx
onAnimationEnd={handleAnimationEnd}
```

The final Intro animation is:

```text
slideUp
```

Updated the Intro component so it can notify its parent component when the animation finishes.

Changed:

```jsx
export default function Intro() {
```

to:

```jsx
export default function Intro({ onFinish }) {
```

`onFinish` is a prop.

The parent component can pass a function into the Intro using this prop.

Inside the animation-end handler:

```jsx
// Removes the intro after the final slide-up animation finishes.
function handleAnimationEnd(event) {

    if (event.animationName === "slideUp") {
        setShowIntro(false);

        // Tells the parent component that the intro has finished animation.
        onFinish();
    }
}
```

The Intro now performs two actions when `slideUp` finishes:

```text
1. Removes itself
2. Calls onFinish()
```

---

## Step 15.2 - Learned Function Props

The Intro receives:

```jsx
function Intro({ onFinish })
```

The `onFinish` prop does not create the function itself.

The parent provides the function.

Example:

```jsx
<Intro onFinish={() => setIntroFinished(true)} />
```

This means:

```text
Prop name:
onFinish

Prop value:
() => setIntroFinished(true)
```

Inside Intro:

```jsx
onFinish();
```

runs the function passed by the parent.

Concept:

```text
onFinish
→ reference to the function

onFinish()
→ runs the function
```

---

## Step 15.3 - Added Intro Finished State to App

Added React state inside `App.jsx`.

```jsx
const [introFinished, setIntroFinished] = useState(false);
```

Initial value:

```text
false
```

means:

```text
The Intro has not finished yet.
```

Connected Intro:

```jsx
<Intro onFinish={() => setIntroFinished(true)} />
```

When Intro calls:

```jsx
onFinish();
```

App runs:

```jsx
setIntroFinished(true);
```

The state then becomes:

```text
true
```

---

## Step 15.4 - Passed Intro State to Hero

The Hero needs to know when the Intro has finished so the ID card entrance does not run behind the Intro screen.

Passed the state into Hero:

```jsx
<Hero introFinished={introFinished} />
```

Hero receives it:

```jsx
export default function Hero({ introFinished }) {
```

This is a normal React prop.

The value can be:

```text
false
```

before the Intro finishes, or:

```text
true
```

after the Intro finishes.

Flow:

```text
App
introFinished = false
↓
Hero receives false

Intro finishes
↓
setIntroFinished(true)
↓
App rerenders
↓
Hero receives true
```

---

## Step 15.5 - Added Conditional Animation Class

Used the `introFinished` prop to add a CSS class only after the Intro finishes.

Created the hanging badge wrapper:

```jsx
<div className={`hanging-badge ${introFinished ? "badge-drop" : ""}`}>
```

The conditional expression:

```jsx
introFinished ? "badge-drop" : ""
```

means:

```text
If introFinished is true
→ add "badge-drop"

If introFinished is false
→ add nothing
```

Before the Intro finishes:

```html
class="hanging-badge"
```

After the Intro finishes:

```html
class="hanging-badge badge-drop"
```

This starts the CSS entrance animation at the correct time.

---

## Step 15.6 - Wrapped the Lanyard and Badge Together

Originally, only the ID card was being animated.

This looked unrealistic because the card moved while the lanyard was already visible in its final position.

Created a wrapper around both the lanyard and the card.

Structure:

```text
hanging-badge
├── lanyard
└── draggable badge
```

This allows the entire hanging system to drop together.

The wrapper controls the entrance motion.

---

## Step 15.7 - Added Badge Drop CSS

Added the starting position:

```css
.hanging-badge {
    transform: translateY(-700px);
}
```

This keeps the hanging system above the visible Hero before the Intro finishes.

Added the entrance animation class:

```css
.badge-drop {
    animation: cardDrop 900ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
```

The `cardDrop` keyframes are stored in the shared:

```text
src/styles/animations.css
```

This keeps reusable animations separate from Hero-specific styles.

---

## Step 15.8 - Improved the Drop Animation

The first drop animation used large vertical rebounds.

Example:

```text
80px
-80px
80px
```

This made the card feel more like a bouncing object than a real hanging badge.

Reduced the vertical bounce and adjusted the timing so the entrance feels more natural.

The entrance now focuses on:

```text
Fast downward movement
↓
Small overshoot
↓
Small correction
↓
Final resting position
```

---

## Step 15.9 - Added Badge Swing Animation

After the drop, added a small swinging motion.

The swing is intended to make the card behave more like a hanging object.

Created:

```text
badgeSwing
```

inside the reusable animation stylesheet.

The swing uses smaller rotation angles so it does not look exaggerated.

---

## Step 15.10 - Found CSS and Motion Transform Conflict

The existing ID card already uses Motion for dragging.

The draggable badge uses:

```jsx
style={{
    x: cardX,
    y: cardY,
    rotate: cardRotation
}}
```

Motion uses these values to control the element's CSS transform.

The swing animation was initially added directly to:

```text
.draggable-badge
```

This caused a problem because both:

```text
CSS animation
```

and:

```text
Motion
```

were trying to control `transform` on the same element.

Result:

```text
Dragging became visually broken.
```

---

## Step 15.11 - Added Separate Swing Wrapper

Fixed the transform conflict by creating another wrapper.

Final structure:

```text
hanging-badge
├── lanyard
└── badge-swing-wrapper
    └── draggable-badge
        ├── card clip
        └── ID card
```

The responsibilities are now separated.

```text
hanging-badge
→ drop animation

badge-swing-wrapper
→ CSS swing animation

draggable-badge
→ Motion drag and velocity rotation
```

Updated JSX:

```jsx
<div className={`hanging-badge ${introFinished ? "badge-drop" : ""}`}>

    {/* SVG lanyard that bends and follows the draggable card */}
    <div className="lanyard">

        <svg
            className="lanyard-svg"
            viewBox="0 0 600 500"
        >

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

    <div
        className={`badge-swing-wrapper ${
            introFinished ? "badge-swing" : ""
        }`}
    >

        <motion.div
            className="draggable-badge"
            drag
            style={{
                x: cardX,
                y: cardY,
                rotate: cardRotation
            }}
        >
            ...
        </motion.div>

    </div>

</div>
```

---

## Step 15.12 - Updated Hero CSS Responsibilities

The draggable badge now contains only its drag-related styling.

```css
.draggable-badge {
    cursor: grab;
}
```

The entrance wrapper controls the vertical position:

```css
.hanging-badge {
    transform: translateY(-700px);
}
```

The drop class controls the entrance:

```css
.badge-drop {
    animation: cardDrop 900ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
```

The swing wrapper defines the rotation origin:

```css
.badge-swing-wrapper {
    transform-origin: top center;
}
```

The swing class controls the swing animation:

```css
.badge-swing {
    animation: badgeSwing 2200ms ease-out forwards;
}
```

The swing duration was adjusted during testing to make the motion feel more natural.

---

## Step 15.13 - Preserved Existing Drag Functionality

The actual draggable element remains:

```jsx
<motion.div
    className="draggable-badge"
    drag
```

The existing Motion values are unchanged:

```jsx
style={{
    x: cardX,
    y: cardY,
    rotate: cardRotation
}}
```

The card still:

```text
Moves horizontally
Moves vertically
Rotates based on drag velocity
Returns using spring animation
Updates the SVG lanyard
```

This means the new entrance animation was added without removing the existing interactive behaviour.

---

## Step 15.14 - Final ID Card Entrance Flow

The current opening interaction is:

```text
Page loads
↓
Welcome Intro animation runs
↓
slideUp finishes
↓
Intro calls onFinish()
↓
App sets introFinished = true
↓
Hero receives true
↓
badge-drop class is added
↓
Lanyard + badge drop together
↓
badge-swing class runs on separate wrapper
↓
Badge settles
↓
Motion drag remains available
```

---

## Step 15 Current Status

Completed:

```text
Intro completion callback ✅
Function prop communication ✅
App introFinished state ✅
Hero introFinished prop ✅
Conditional animation class ✅
Whole lanyard + badge drop ✅
Badge swing ✅
Separate swing wrapper ✅
Motion/CSS transform conflict fixed ✅
Drag functionality preserved ✅
```

Next:

```text
Animate the Hero text and actions after the Intro finishes.
```

---

## Git Checkpoint - Hero ID Card Entrance

Completed the first Hero entrance interaction.

Run:

```bash
git status
git add .
git commit -m "Add hanging ID card entrance animation"
git push
```

Next:

```text
Step 16 - Hero Content Entrance Animations
```

---

# Step 16 - Hero Content Entrance Animations

After completing the hanging ID card entrance, added entrance animations to the left side of the Hero.

The goal was to make the Hero content appear gradually instead of displaying everything at once.

Planned order:

```text
Intro finishes
↓
Portfolio label appears
↓
Main title appears
↓
Developer role appears
↓
Description appears
↓
CTA buttons appear
↓
Social icons appear one by one
```

The existing reusable:

```css
@keyframes fadeUp
```

and:

```css
@keyframes fadeUpScale
```

animations were reused from:

```text
src/styles/animations.css
```

---

## Step 16.1 - Delayed Typing Effect Until Intro Finishes

The Hero typing effect originally started immediately when the page loaded.

Because the Intro covers the Hero for several seconds, the typing animation could already be halfway through before the Hero became visible.

Updated the existing `useEffect()` so it waits until:

```text
introFinished = true
```

Added:

```jsx
// Wait until the Intro animation is finished before starting typing effect.
if (!introFinished) {
    return;
}
```

The beginning of the effect is now:

```jsx
useEffect(() => {

    // Wait until the Intro animation is finished before starting typing effect.
    if (!introFinished) {
        return;
    }

    const currentRole = roles[roleIndex];

    // Remaining typing logic...

}, [charIndex, roleIndex, isDeleting, introFinished]);
```

Also added:

```jsx
introFinished
```

to the dependency array.

The new flow is:

```text
Page loads
↓
introFinished = false
↓
Typing effect waits
↓
Intro finishes
↓
introFinished = true
↓
Typing effect begins from the first role
```

This ensures the typing animation starts when the user can actually see it.

---

## Step 16.2 - Animated Portfolio Label

Updated:

```jsx
<p className="hero-label">
    PORTFOLIO 2026
</p>
```

to:

```jsx
<p className={`hero-label ${introFinished ? "hero-show" : ""}`}>
    PORTFOLIO 2026
</p>
```

Before the Intro finishes:

```text
hero-label
```

After the Intro finishes:

```text
hero-label hero-show
```

Added:

```css
.hero-label {
    opacity: 0;
}
```

and:

```css
.hero-label.hero-show {
    animation: fadeUp 700ms ease forwards;
}
```

The label is the first Hero text element to appear.

---

## Step 16.3 - Animated Main Hero Title

Updated the Hero title:

```jsx
<h1 className={`hero-title ${introFinished ? "hero-show" : ""}`}>
```

The title contains:

```text
Hi, I'm
Lovepreet
Sandhu
```

Added:

```css
.hero-title {
    margin-bottom: 14px;

    /* Keeps the title hidden until the Intro finishes. */
    opacity: 0;
}
```

Added the entrance animation:

```css
.hero-title.hero-show {
    animation: fadeUp 700ms ease 150ms forwards;
}
```

The `150ms` delay makes the title appear shortly after the portfolio label.

---

## Step 16.4 - Animated Developer Role

Updated:

```jsx
<h2 className="hero-role">
```

to:

```jsx
<h2 className={`hero-role ${introFinished ? "hero-show" : ""}`}>
    {displayedText}
</h2>
```

Added:

```css
.hero-role {
    opacity: 0;
}
```

Added:

```css
.hero-role.hero-show {
    animation: fadeUp 700ms ease 300ms forwards;
}
```

The role uses the same entrance style as the other Hero text to keep the animation consistent.

After appearing, the existing typing animation continues controlling:

```text
Full-Stack Developer
React Developer
Node.js Developer
MERN Stack Developer
ASP.NET Developer
```

---

## Step 16.5 - Animated Hero Description

Updated:

```jsx
<p className="hero-description">
```

to:

```jsx
<p className={`hero-description ${introFinished ? "hero-show" : ""}`}>
```

Added:

```css
.hero-description {
    opacity: 0;
}
```

Added:

```css
.hero-description.hero-show {
    animation: fadeUp 700ms ease 450ms forwards;
}
```

The description appears after the role.

---

## Step 16.6 - Animated Hero CTA Buttons

Updated:

```jsx
<div className="hero-actions">
```

to:

```jsx
<div className={`hero-actions ${introFinished ? "hero-actions-show" : ""}`}>
```

Added:

```css
.hero-actions {
    opacity: 0;
}
```

The buttons use the existing:

```text
fadeUpScale
```

animation instead of the normal text `fadeUp`.

Added:

```css
.hero-actions-show {
    animation: fadeUpScale 700ms ease 600ms forwards;
}
```

This gives the buttons a slightly different entrance because they are interactive elements.

The CTA buttons are:

```text
View My Work
Download CV
```

---

## Step 16.7 - Animated Social Icons

Updated:

```jsx
<div className="hero-socials">
```

to:

```jsx
<div className={`hero-socials ${introFinished ? "hero-socials-show" : ""}`}>
```

The social links are:

```text
GitHub
LinkedIn
Email
```

The container remains hidden before the Intro finishes.

```css
.hero-socials {
    opacity: 0;
}
```

After the Intro finishes:

```css
.hero-socials-show {
    opacity: 1;
}
```

Each icon then receives the reusable:

```text
fadeUpScale
```

animation.

```css
.hero-socials-show .icons {
    opacity: 0;
    animation: fadeUpScale 500ms ease forwards;
}
```

---

## Step 16.8 - Added Staggered Social Icon Timing

Used `:nth-child()` to make the social icons appear one at a time.

```css
.hero-socials-show .icons:nth-child(1) {
    animation-delay: 750ms;
}

.hero-socials-show .icons:nth-child(2) {
    animation-delay: 850ms;
}

.hero-socials-show .icons:nth-child(3) {
    animation-delay: 950ms;
}
```

The social entrance sequence is:

```text
GitHub
↓ 100ms
LinkedIn
↓ 100ms
Email
```

---

## Step 16.9 - Added Hero Button Hover Effects

Added hover feedback to the primary CTA button.

```css
.hero-primary-btn {
    transition:
        transform 200ms ease,
        box-shadow 200ms ease;
}

.hero-primary-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(21, 93, 252, 0.3);
}
```

This slightly lifts the button and adds a blue shadow.

---

## Step 16.10 - Added Secondary Button Hover Effect

Added:

```css
.hero-secondary-btn {
    transition:
        transform 200ms ease,
        border-color 200ms ease;
}

.hero-secondary-btn:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.35);
}
```

The secondary button keeps its outlined design while responding to pointer interaction.

---

## Step 16.11 - Added Social Icon Hover Effects

Updated the `.icons` styling:

```css
.icons {
    color: #62748E;
    font-size: 20px;
    text-decoration: none;

    transition:
        transform 200ms ease,
        color 200ms ease;
}
```

Added:

```css
.icons:hover {
    transform: translateY(-3px);
    color: #51A2FF;
}
```

The social links now:

```text
Move upward slightly
+
Change to the portfolio blue color
```

when hovered.

---

## Step 16.12 - Final Hero Entrance Timing

The current Hero entrance sequence is:

```text
Intro finishes
↓
0ms
Portfolio label begins

150ms
Main title begins

300ms
Developer role begins

450ms
Description begins

600ms
CTA buttons begin

750ms
GitHub begins

850ms
LinkedIn begins

950ms
Email begins
```

At the same time, the hanging developer badge performs its own drop and swing entrance.

This makes the Hero feel active without giving every element a completely different animation style.

---

## Step 16.13 - Fixed Unused Import Warning

An accidental import was added:

```jsx
import { i } from "motion/react-client";
```

The variable was not used, which caused:

```text
'i' is defined but never used
```

Removed the import.

The HTML:

```jsx
<i className="bi bi-github"></i>
```

does not require importing `i`.

---

## Step 16 Status

Completed:

```text
Typing waits for Intro ✅
Portfolio label entrance ✅
Hero title entrance ✅
Developer role entrance ✅
Description entrance ✅
CTA entrance ✅
Social icon stagger ✅
Primary button hover ✅
Secondary button hover ✅
Social icon hover ✅
ID badge entrance still working ✅
ID badge dragging still working ✅
```

The Hero now has a complete opening sequence connected to the Welcome Intro.

---

## Git Checkpoint - Hero Content Entrance

Run:

```bash
git status
git add .
git commit -m "Add animated hero content entrance"
git push
```

### Next

Continue with the next portfolio improvement feature.

Possible next tasks:

```text
Project preview limit
View More Projects
Projects page
Project Details page
Scroll reveal animations
QR code
Final interaction polish
```

---

# Step 17 - Mobile Navigation Improvements

Improved the Header navigation so the mobile menu opens and closes smoothly and automatically closes after selecting a navigation item.

---

## Step 17.1 - Close Mobile Menu After Clicking a Navigation Link

Previously, the hamburger menu could be opened and closed using the menu button, but selecting a navigation item did not close the mobile navigation.

Each Header navigation link was updated to call:

```jsx
onClick={() => setIsMenuOpen(false)}
```

Example:

```jsx
<li>
    <a
        href="#about"
        onClick={() => setIsMenuOpen(false)}
    >
        About
    </a>
</li>
```

This changes:

```text
isMenuOpen = true
```

to:

```text
isMenuOpen = false
```

after a navigation item is selected.

The flow is:

```text
Open hamburger menu
↓
isMenuOpen = true
↓
Select navigation link
↓
setIsMenuOpen(false)
↓
Mobile navigation closes
```

The mobile Let's Talk button was also updated:

```jsx
<li>
    <a
        href="#contact"
        className="mobile-lets-talk-btn"
        onClick={() => setIsMenuOpen(false)}
    >
        Let&apos;s Talk
    </a>
</li>
```

The mobile Let's Talk link was placed inside an `<li>` so the `<ul>` keeps a correct HTML structure.

---

## Step 17.2 - Improved Hamburger Accessibility

The hamburger button already used:

```jsx
aria-expanded={isMenuOpen}
```

The accessibility label was updated so it describes the action the button will perform.

```jsx
aria-label={
    isMenuOpen
        ? "Close navigation menu"
        : "Open navigation menu"
}
```

When the menu is closed, the label is:

```text
Open navigation menu
```

When the menu is open, the label is:

```text
Close navigation menu
```

---

## Step 17.3 - Replace Instant Mobile Menu Opening

The mobile navigation previously used:

```css
.main-navigation {
    display: none;
}

.main-navigation--open {
    display: block;
}
```

This caused the navigation to instantly appear and disappear.

The `display` property cannot be smoothly animated.

The mobile navigation was changed to use:

```text
opacity
visibility
transform
```

instead.

---

## Step 17.4 - Add Mobile Navigation Slide Animation

Updated the mobile navigation:

```css
/* Mobile navigation menu positioned below the header. */
.main-navigation {
    position: absolute;
    top: calc(100% + 18px);
    left: 50%;

    width: 100vw;

    padding: 24px;
    background-color: #081120;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.35);

    /* Keeps the menu hidden and slightly above its final position. */
    opacity: 0;
    visibility: hidden;

    /* -50% keeps the menu horizontally centered.
       -20px moves it upward so it can slide down when opened. */
    transform: translate(-50%, -20px);

    /* Creates a smooth fade and slide when opening or closing the menu. */
    transition:
        opacity 300ms ease,
        transform 300ms ease,
        visibility 300ms ease;
}
```

The open state is:

```css
/* Applied when the hamburger button opens the mobile navigation. */
.main-navigation--open {
    opacity: 1;
    visibility: visible;

    /* Keeps the menu centered and moves it to its final vertical position. */
    transform: translate(-50%, 0);
}
```

Closed state:

```text
opacity: 0
visibility: hidden
translateY: -20px
```

Open state:

```text
opacity: 1
visibility: visible
translateY: 0
```

This creates a smooth slide-down and fade-in effect.

---

## Step 17.5 - Update Header Navigation Items

The Experience navigation item was removed because the portfolio currently does not have an Experience section.

It was replaced with:

```text
Guestbook
```

The Header navigation now contains:

```text
Home
Projects
Skills
About
Guestbook
Contact
```

The mobile navigation also contains:

```text
Let's Talk
```

---

# Step 18 - Portfolio Showcase Navigation With Shared State

The Skills Header navigation link was not working correctly.

The Skills component already contained:

```jsx
<div id="skills" className="skills">
```

However, the problem was caused by the Portfolio Showcase tab system.

The Portfolio Showcase conditionally renders its content:

```jsx
{activeTab === "projects" && <Projects />}

{activeTab === "skills" && <Skills />}

{activeTab === "certifications" && <Certifications />}
```

When:

```text
activeTab = "projects"
```

the Skills component is not currently rendered.

Therefore, trying to navigate directly to:

```text
#skills
```

does not work when the Skills component does not yet exist in the page.

---

## Step 18.1 - Give the Portfolio Showcase Its Own Navigation Target

The main Portfolio Showcase section uses:

```jsx
<section
    className="portfolio-showcase"
    id="showcase"
>
```

The ID:

```text
showcase
```

represents the entire Portfolio Showcase instead of a specific tab.

This is more accurate because the section contains:

```text
Projects
Skills
Certifications
```

The Header can therefore navigate to:

```text
#showcase
```

regardless of which Portfolio tab is currently selected.

---

## Step 18.2 - Lift Portfolio Tab State Into App.jsx

The Portfolio Showcase originally stored its own state:

```jsx
const [activeTab, setActiveTab] = useState("projects");
```

This worked for the buttons inside Portfolio Showcase, but Header could not control which tab was selected.

Both:

```text
Header
```

and:

```text
PortfolioShowcase
```

need access to the Portfolio tab state.

The state was therefore moved to their common parent:

```text
App.jsx
```

Added:

```jsx
const [activePortfolioTab, setActivePortfolioTab] = useState("projects");
```

The structure is now:

```text
                    App
                     |
          activePortfolioTab
                     |
          -----------------------
          |                     |
       Header          PortfolioShowcase
          |                     |
   changes the tab        displays the tab
```

This React pattern is called:

```text
Lifting State Up
```

---

## Step 18.3 - Pass Portfolio State to PortfolioShowcase

App passes the current selected tab and the function used to change it:

```jsx
<PortfolioShowcase
    activeTab={activePortfolioTab}
    setActiveTab={setActivePortfolioTab}
/>
```

The value:

```text
activeTab
```

represents the currently selected Portfolio tab.

Possible values are:

```text
projects
skills
certifications
```

The function:

```text
setActiveTab
```

allows PortfolioShowcase to change the currently selected tab.

---

## Step 18.4 - PortfolioShowcase Receives State Through Props

Previously:

```jsx
export default function PortfolioShowcase() {

    const [activeTab, setActiveTab] = useState("projects");
```

The local `useState` was removed.

PortfolioShowcase now receives both values through props:

```jsx
export default function PortfolioShowcase({ activeTab, setActiveTab }) {
```

The `useState` import was also removed because PortfolioShowcase no longer creates the tab state itself.

The top of the component is now:

```jsx
import "./PortfolioShowcase.css";

import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Certifications from "../Certifications/Certifications";

export default function PortfolioShowcase({ activeTab, setActiveTab }) {
```

---

## Step 18.5 - Portfolio Showcase Tab Buttons Continue to Work

The existing tab buttons continue to use:

```jsx
setActiveTab()
```

Projects:

```jsx
<button
    className={`portfolio-tab ${activeTab === "projects" ? "active" : ""}`}
    onClick={() => setActiveTab("projects")}
>
    <i className="bi bi-folder"></i>
    Projects
</button>
```

Skills:

```jsx
<button
    className={`portfolio-tab ${activeTab === "skills" ? "active" : ""}`}
    onClick={() => setActiveTab("skills")}
>
    <i className="bi bi-code-slash"></i>
    Skills
</button>
```

Certifications:

```jsx
<button
    className={`portfolio-tab ${activeTab === "certifications" ? "active" : ""}`}
    onClick={() => setActiveTab("certifications")}
>
    <i className="bi bi-award"></i>
    Certifications
</button>
```

---

## Step 18.6 - Pass Portfolio Setter to Header

App also passes the Portfolio state-changing function to Header:

```jsx
<Header
    setActivePortfolioTab={setActivePortfolioTab}
/>
```

Header receives it:

```jsx
export default function Header({ setActivePortfolioTab }) {
```

This allows the Header to change the Portfolio Showcase tab.

---

## Step 18.7 - Fix Projects Header Navigation

The Projects Header link now performs two jobs:

```jsx
<a
    href="#showcase"
    onClick={() => {
        setActivePortfolioTab("projects");
        setIsMenuOpen(false);
    }}
>
    Projects
</a>
```

When clicked:

```text
Projects
↓
setActivePortfolioTab("projects")
↓
Portfolio Showcase displays Projects
↓
Browser navigates to #showcase
↓
Mobile navigation closes
```

Using:

```jsx
href="#showcase"
```

is more accurate than using:

```jsx
href="#projects"
```

because `showcase` represents the entire Portfolio Showcase section.

---

## Step 18.8 - Fix Skills Header Navigation

The Skills Header link now uses:

```jsx
<a
    href="#showcase"
    onClick={() => {
        setActivePortfolioTab("skills");
        setIsMenuOpen(false);
    }}
>
    Skills
</a>
```

When Skills is clicked:

```text
Click Skills
↓
setActivePortfolioTab("skills")
↓
App updates activePortfolioTab
↓
PortfolioShowcase receives activeTab="skills"
↓
Skills component renders
↓
Browser navigates to #showcase
↓
Skills tab is displayed
↓
Mobile navigation closes
```

The Header no longer needs to navigate directly to:

```text
#skills
```

because the Skills component is conditionally rendered.

Instead, the Header always navigates to:

```text
#showcase
```

and React controls which tab appears.

---

## Step 18.9 - Shared State Flow

The final Portfolio navigation structure is:

```text
                    App.jsx
                       |
             activePortfolioTab
                       |
             -------------------
             |                 |
             ↓                 ↓
         Header         PortfolioShowcase
             |                 |
             |                 ↓
             |          activeTab controls
             |                 |
             |        ---------------------
             |        |         |         |
             |    Projects    Skills   Certifications
             |
             ↓
setActivePortfolioTab()
```

For example:

```text
Header Skills clicked
↓
setActivePortfolioTab("skills")
↓
App state changes
↓
PortfolioShowcase receives "skills"
↓
<Skills /> renders
```

This reinforces the same React parent/child communication concept used earlier for the Intro and Hero.

Intro flow:

```text
Intro
↓
App
↓
Hero
```

Portfolio navigation flow:

```text
Header
↓
App
↓
PortfolioShowcase
```

---

## Step 18.10 - Final Navigation Targets

The Header navigation now uses the actual sections available in the portfolio.

```text
Home        → Home/Hero
Projects    → #showcase + Projects tab
Skills      → #showcase + Skills tab
About       → #about
Guestbook   → #guestbook
Contact     → #contact
Let's Talk  → #contact
```

The Portfolio Showcase itself uses:

```jsx
id="showcase"
```

so Projects and Skills can share the same scroll destination while displaying different tab content.

---

## Step 18 Status

Completed:

```text
Mobile menu closes after selecting a link ✅
Mobile menu slides open ✅
Mobile menu slides closed ✅
Mobile menu fades in/out ✅
Hamburger accessibility improved ✅
Experience removed from navigation ✅
Guestbook added to navigation ✅
Portfolio Showcase changed to id="showcase" ✅
Skills navigation problem identified ✅
Portfolio tab state lifted to App ✅
Header can change Portfolio tab ✅
PortfolioShowcase receives state through props ✅
Projects navigates to #showcase + opens Projects ✅
Skills navigates to #showcase + opens Skills ✅
Mobile navigation closes after tab navigation ✅
```

---

## Git Checkpoint

Test:

```text
Desktop:
Projects → Skills → Projects

Mobile:
Open menu → Skills
Open menu → Projects
Open menu → Guestbook
Open menu → Contact
Hamburger open/close
```

Then run:

```bash
git status
git add .
git commit -m "Fix mobile navigation and portfolio tab links"
git push
```

---

# Step 19 - About Section Animations

After completing the Intro, Hero, ID card entrance, and navigation improvements, added scroll-based entrance animations and hover interactions to the About section.

The goal was to make the About section feel more dynamic when the user scrolls down the page.

The animation approach continues using only:

```text
React
→ useState
→ useEffect

CSS
→ @keyframes
→ animation
→ transition
→ transform
→ opacity
```

No additional scroll-animation library was added.

---

## Step 19.1 - Added About Animation State

Imported:

```jsx
import { useEffect, useState } from "react";
```

Created state:

```jsx
// Tracks whether the About section should start its animations.
const [aboutVisible, setAboutVisible] = useState(false);
```

The initial value is:

```text
false
```

which means the About entrance animations have not started yet.

---

## Step 19.2 - Added Scroll Detection With useEffect

Created a scroll listener inside `useEffect()`.

```jsx
useEffect(() => {

    // Runs whenever the user scrolls the page.
    function handleScroll() {

        // Starts the About animations once the user scrolls far enough down the page.
        if (window.scrollY > 500) {
            setAboutVisible(true);
        }
    }

    // Listen for scrolling on the browser window.
    window.addEventListener("scroll", handleScroll);

    // Removes the scroll listener when the component is removed.
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, []);
```

`window.scrollY` returns how many pixels the user has scrolled down from the top of the page.

The condition:

```jsx
if (window.scrollY > 500)
```

means:

```text
User scrolls more than 500px
↓
setAboutVisible(true)
↓
React rerenders About
↓
Animation classes are added
```

The cleanup function removes the scroll listener when the component is removed.

---

## Step 19.3 - Animated About Label

Updated:

```jsx
<p className="about-label">
```

to:

```jsx
<p className={`about-label ${aboutVisible ? "about-show-item" : ""}`}>
    ABOUT ME
</p>
```

The label is hidden before the animation starts:

```css
.about-label {
    color: #51A2FF;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2.4px;
    margin-bottom: 12px;

    /* Hide the About label before animations. */
    opacity: 0;
}
```

Added:

```css
/* Shows the About label when the user scrolls to the section. */
.about-label.about-show-item {
    animation: fadeUp 700ms ease forwards;
}
```

The About label is the first element to appear.

---

## Step 19.4 - Animated About Title

Updated:

```jsx
<h2 className="about-title">
```

to:

```jsx
<h2 className={`about-title ${aboutVisible ? "about-show-item" : ""}`}>
    Get to <span>know me</span>
</h2>
```

The title starts hidden:

```css
.about-title {
    color: #FFFFFF;
    font-family: "Manrope", sans-serif;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;

    opacity: 0;
}
```

Added:

```css
.about-title.about-show-item {
    animation: fadeUp 700ms ease 150ms forwards;
}
```

The title begins `150ms` after the label.

---

## Step 19.5 - Animated About Description

Updated:

```jsx
<p className="about-description">
```

to:

```jsx
<p className={`about-description ${aboutVisible ? "about-show-item" : ""}`}>
```

The description starts hidden:

```css
.about-description {
    color: #90A1B9;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    max-width: 560px;
    margin-bottom: 32px;

    opacity: 0;
}
```

Added:

```css
.about-description.about-show-item {
    animation: fadeUp 700ms ease 300ms forwards;
}
```

The description begins after the title.

---

## Step 19.6 - Animated About Information Rows

Each About information row was updated from:

```jsx
<div className="about-info-item">
```

to:

```jsx
<div className={`about-info-item ${aboutVisible ? "about-info-show" : ""}`}>
```

This was applied to:

```text
Name
Location
Email
Education
Availability
```

The rows start hidden:

```css
.about-info-item {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 16px;

    /* Keeps each information row hidden until its animation begins. */
    opacity: 0;
}
```

Added:

```css
/* Animates the information rows after the About description. */
.about-info-show {
    animation: fadeUp 600ms ease forwards;
}
```

---

## Step 19.7 - Added Staggered Info Row Delays

Used `:nth-child()` to animate the About information rows one at a time.

```css
.about-info-show:nth-child(1) {
    animation-delay: 450ms;
}

.about-info-show:nth-child(2) {
    animation-delay: 550ms;
}

.about-info-show:nth-child(3) {
    animation-delay: 650ms;
}

.about-info-show:nth-child(4) {
    animation-delay: 750ms;
}

.about-info-show:nth-child(5) {
    animation-delay: 850ms;
}
```

The sequence becomes:

```text
450ms
→ Name

550ms
→ Location

650ms
→ Email

750ms
→ Education

850ms
→ Availability
```

---

## Step 19.8 - Animated About Stats Cards

The three About stat columns were updated to receive an animation class.

Example:

```jsx
<div className={`col-12 col-md-4 ${aboutVisible ? "about-stat-show" : ""}`}>
```

This was applied to:

```text
Technologies
Projects Built
Certifications
```

The stat columns start hidden:

```css
/* Keeps the stat cards hidden until their entrance animation begins. */
.about-stats .col-12 {
    opacity: 0;
}
```

Added:

```css
/* Shows each stat card after the About information rows. */
.about-stat-show {
    animation: fadeUpScale 600ms ease forwards;
}
```

---

## Step 19.9 - Added Stat Card Stagger

Added delays:

```css
.about-stat-show:nth-child(1) {
    animation-delay: 1000ms;
}

.about-stat-show:nth-child(2) {
    animation-delay: 1100ms;
}

.about-stat-show:nth-child(3) {
    animation-delay: 1200ms;
}
```

The stats appear one after another.

---

## Step 19.10 - Animated About Image

Updated:

```jsx
<div className="about-image">
```

to:

```jsx
<div className={`about-image ${aboutVisible ? "about-image-show" : ""}`}>
```

The image starts hidden:

```css
.about-image {
    width: 100%;
    max-width: 430px;

    display: flex;
    align-items: center;
    justify-content: center;

    /* Keeps the image hidden until its entrance animation begins. */
    opacity: 0;
}
```

Created a reusable right-side entrance animation inside:

```text
src/styles/animations.css
```

```css
/* Brings an element into view from the right side. */
@keyframes fadeInRight {

    from {
        opacity: 0;
        transform: translateX(40px) scale(0.96);
    }

    to {
        opacity: 1;
        transform: translateX(0) scale(1);
    }
}
```

Applied it:

```css
/* Shows the About image when the About section animation starts. */
.about-image.about-image-show {
    animation: fadeInRight 900ms ease 400ms forwards;
}
```

The image enters from the right while the About text begins appearing.

---

## Step 19.11 - Added About Info Hover Movement

Added hover interaction to the About information rows.

Updated:

```css
.about-info-item {
    transition: transform 200ms ease;
}
```

Added:

```css
.about-info-item:hover {
    transform: translateX(5px);
}
```

When hovered, the information row moves slightly to the right.

---

## Step 19.12 - Added Info Icon Hover Scale

Updated the About information icons:

```css
.about-info-icon {
    color: #2B7FFF;
    font-size: 20px;
    width: 24px;

    transition: transform 200ms ease;
}
```

Added:

```css
.about-info-item:hover .about-info-icon {
    transform: scale(1.15);
}
```

When the user hovers over an information row, the icon grows slightly.

---

## Step 19.13 - Added Stat Card Hover Interaction

The stat cards already use a hover effect:

```css
.about-stat-card {
    transition:
        transform 250ms ease,
        border-color 250ms ease,
        box-shadow 250ms ease;
}
```

Added:

```css
.about-stat-card:hover {
    transform: translateY(-5px);
    border-color: rgba(81, 162, 255, 0.35);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}
```

When hovered, the card:

```text
Moves upward
+
Gets a brighter border
+
Adds a shadow
```

The entrance animation is applied to the outer Bootstrap column while the hover transform is applied to the inner card.

This prevents the entrance animation and hover transform from conflicting.

---

## Step 19.14 - Final About Animation Sequence

The current sequence is:

```text
User scrolls past 500px
↓
aboutVisible becomes true

0ms
→ ABOUT ME label

150ms
→ About title

300ms
→ Description

400ms
→ About image

450ms
→ Name

550ms
→ Location

650ms
→ Email

750ms
→ Education

850ms
→ Availability

1000ms
→ Technologies stat

1100ms
→ Projects Built stat

1200ms
→ Certifications stat
```

The About section now combines:

```text
Scroll entrance animations
+
Staggered content
+
Image entrance
+
Hover interactions
```

---

## Step 19 Status

Completed:

```text
About scroll state ✅
Scroll listener ✅
About label entrance ✅
About title entrance ✅
Description entrance ✅
Info row stagger ✅
Image entrance ✅
Stat card stagger ✅
Info hover movement ✅
Icon hover scale ✅
Stat card hover effect ✅
```

---

## Git Checkpoint - About Animations

Run:

```bash
git status
git add .
git commit -m "Add animated about section"
git push
```

### Next

Start:

```text
Step 20 - Portfolio Showcase Animations
```

Planned animation areas:

```text
Showcase label
Showcase heading
Description
Tab buttons
Project cards
Skill cards
Certification cards
Hover effects
```

---

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

## Step 14.21 - Made the Intro Responsive

After completing the desktop Intro animation, updated the Intro so it also works correctly on tablet and mobile screens.

The desktop design uses:

```css
.intro-name {
    font-size: 86px;
}
```

This size works on larger screens but is too large for smaller devices.

Added media queries to adjust the Intro typography and spacing.

---

### Tablet Styles

Added:

```css
/* Tablet */
@media (max-width: 991px) {

    .intro-name {
        font-size: 64px;
    }

    .intro-welcome {
        font-size: 12px;
        letter-spacing: 3px;
    }

    .intro-role {
        font-size: 12px;
        letter-spacing: 2px;
    }

    .intro-icons i {
        font-size: 24px;
    }
}
```

On tablet screens:

```text
Developer name
86px → 64px

Welcome text
13px → 12px

Role
13px → 12px

Icons
26px → 24px
```

The letter spacing was also reduced so the text fits better on narrower screens.

---

## Step 14.22 - Added Mobile Intro Styles

Added another media query for mobile screens.

```css
/* Mobile */
@media (max-width: 576px) {

    .intro-content {
        padding: 0 20px;
    }

    .intro-name {
        font-size: 42px;
        margin-bottom: 22px;
    }

    .intro-welcome {
        font-size: 10px;
        letter-spacing: 2px;
    }

    .intro-role {
        font-size: 11px;
        letter-spacing: 2px;
    }

    .intro-icons {
        margin-top: 16px;
    }

    .intro-icons i {
        font-size: 22px;
    }
}
```

Added:

```css
padding: 0 20px;
```

to the Intro content so the text does not sit directly against the edges of smaller screens.

The developer name is reduced to:

```css
font-size: 42px;
```

The supporting text, icons, spacing, and letter spacing are also reduced for mobile.

---

## Step 14.23 - Fixed Mobile Intro Viewport Height

During mobile testing, noticed that the Intro did not completely cover the screen.

Parts of the portfolio underneath could still be seen around the top or bottom of the Intro.

The original Intro used:

```css
height: 100vh;
```

Mobile browsers can change the visible viewport when their browser controls appear or disappear.

Updated the Intro height to:

```css
min-height: 100vh;
min-height: 100dvh;
```

The updated Intro container is:

```css
/* Full-screen welcome section displayed when the portfolio first loads. */
.intro {
    position: fixed;
    inset: 0;

    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;

    background: #081120;

    z-index: 9999;

    /* Slides the intro screen away after the content disappears. */
    animation: slideUp 900ms ease 4300ms forwards;
}
```

The first value:

```css
min-height: 100vh;
```

acts as the normal viewport-height value.

The second value:

```css
min-height: 100dvh;
```

uses the dynamic viewport height on supported browsers.

This helps the Intro cover the complete visible mobile screen.

---

## Step 14.24 - Completed Responsive Welcome Intro

The Welcome Intro is now complete for the current version.

Final animation sequence:

```text
Intro opens
↓
Welcome text fades upward
↓
Developer name fades upward
↓
Developer role fades upward
↓
Developer icons appear one after another
↓
Intro content fades upward
↓
Full Intro screen slides upward
↓
onAnimationEnd detects slideUp
↓
React sets showIntro to false
↓
Intro component is removed
↓
Portfolio becomes available
```

The Intro now combines:

```text
React
├── useState
├── onAnimationEnd
└── Conditional rendering

Bootstrap
├── Flexbox centering
├── Text alignment
└── Icon spacing

CSS
├── Keyframes
├── Animation delays
├── Staggered animations
├── Media queries
├── Responsive typography
└── Dynamic viewport height
```

---

## Step 14 - Final Status

Completed:

```text
Welcome Intro component ✅
Full-screen overlay ✅
Welcome animation ✅
Name animation ✅
Role animation ✅
Staggered icon animation ✅
Content exit animation ✅
Full-screen slide animation ✅
React removal after animation ✅
Reusable animations.css ✅
Tablet responsiveness ✅
Mobile responsiveness ✅
Mobile viewport-height fix ✅
Code comments ✅
```

---

## Git Checkpoint - Responsive Welcome Intro

The Welcome Intro feature is now complete.

```bash
git status
git add .
git commit -m "Add responsive animated portfolio intro"
git push
```

### Next

Start:

```text
Step 15 - Hero Entrance Animations
```

Planned order:

```text
Intro finishes
↓
Hero content enters
↓
Hero text and buttons animate
↓
Developer ID card enters
↓
ID card receives drop/swing animation
```

The next feature will continue using the reusable animations stored in:

```text
src/styles/animations.css
```

---

# Step 15 - Hero ID Card Entrance Animation

After completing the Welcome Intro, started connecting the Intro animation to the Hero section.

The goal was:

```text
Welcome Intro finishes
↓
Portfolio is revealed
↓
Hanging ID card drops from above
↓
Card swings slightly
↓
Card remains draggable
```

The important part was making the Hero animation start only after the Intro was actually finished.

---

## Step 15.1 - Added Intro Completion Communication

The Intro already knew when its final CSS animation finished because it was using:

```jsx
onAnimationEnd={handleAnimationEnd}
```

The final Intro animation is:

```text
slideUp
```

Updated the Intro component so it can notify its parent component when the animation finishes.

Changed:

```jsx
export default function Intro() {
```

to:

```jsx
export default function Intro({ onFinish }) {
```

`onFinish` is a prop.

The parent component can pass a function into the Intro using this prop.

Inside the animation-end handler:

```jsx
// Removes the intro after the final slide-up animation finishes.
function handleAnimationEnd(event) {

    if (event.animationName === "slideUp") {
        setShowIntro(false);

        // Tells the parent component that the intro has finished animation.
        onFinish();
    }
}
```

The Intro now performs two actions when `slideUp` finishes:

```text
1. Removes itself
2. Calls onFinish()
```

---

## Step 15.2 - Learned Function Props

The Intro receives:

```jsx
function Intro({ onFinish })
```

The `onFinish` prop does not create the function itself.

The parent provides the function.

Example:

```jsx
<Intro onFinish={() => setIntroFinished(true)} />
```

This means:

```text
Prop name:
onFinish

Prop value:
() => setIntroFinished(true)
```

Inside Intro:

```jsx
onFinish();
```

runs the function passed by the parent.

Concept:

```text
onFinish
→ reference to the function

onFinish()
→ runs the function
```

---

## Step 15.3 - Added Intro Finished State to App

Added React state inside `App.jsx`.

```jsx
const [introFinished, setIntroFinished] = useState(false);
```

Initial value:

```text
false
```

means:

```text
The Intro has not finished yet.
```

Connected Intro:

```jsx
<Intro onFinish={() => setIntroFinished(true)} />
```

When Intro calls:

```jsx
onFinish();
```

App runs:

```jsx
setIntroFinished(true);
```

The state then becomes:

```text
true
```

---

## Step 15.4 - Passed Intro State to Hero

The Hero needs to know when the Intro has finished so the ID card entrance does not run behind the Intro screen.

Passed the state into Hero:

```jsx
<Hero introFinished={introFinished} />
```

Hero receives it:

```jsx
export default function Hero({ introFinished }) {
```

This is a normal React prop.

The value can be:

```text
false
```

before the Intro finishes, or:

```text
true
```

after the Intro finishes.

Flow:

```text
App
introFinished = false
↓
Hero receives false

Intro finishes
↓
setIntroFinished(true)
↓
App rerenders
↓
Hero receives true
```

---

## Step 15.5 - Added Conditional Animation Class

Used the `introFinished` prop to add a CSS class only after the Intro finishes.

Created the hanging badge wrapper:

```jsx
<div className={`hanging-badge ${introFinished ? "badge-drop" : ""}`}>
```

The conditional expression:

```jsx
introFinished ? "badge-drop" : ""
```

means:

```text
If introFinished is true
→ add "badge-drop"

If introFinished is false
→ add nothing
```

Before the Intro finishes:

```html
class="hanging-badge"
```

After the Intro finishes:

```html
class="hanging-badge badge-drop"
```

This starts the CSS entrance animation at the correct time.

---

## Step 15.6 - Wrapped the Lanyard and Badge Together

Originally, only the ID card was being animated.

This looked unrealistic because the card moved while the lanyard was already visible in its final position.

Created a wrapper around both the lanyard and the card.

Structure:

```text
hanging-badge
├── lanyard
└── draggable badge
```

This allows the entire hanging system to drop together.

The wrapper controls the entrance motion.

---

## Step 15.7 - Added Badge Drop CSS

Added the starting position:

```css
.hanging-badge {
    transform: translateY(-700px);
}
```

This keeps the hanging system above the visible Hero before the Intro finishes.

Added the entrance animation class:

```css
.badge-drop {
    animation: cardDrop 900ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
```

The `cardDrop` keyframes are stored in the shared:

```text
src/styles/animations.css
```

This keeps reusable animations separate from Hero-specific styles.

---

## Step 15.8 - Improved the Drop Animation

The first drop animation used large vertical rebounds.

Example:

```text
80px
-80px
80px
```

This made the card feel more like a bouncing object than a real hanging badge.

Reduced the vertical bounce and adjusted the timing so the entrance feels more natural.

The entrance now focuses on:

```text
Fast downward movement
↓
Small overshoot
↓
Small correction
↓
Final resting position
```

---

## Step 15.9 - Added Badge Swing Animation

After the drop, added a small swinging motion.

The swing is intended to make the card behave more like a hanging object.

Created:

```text
badgeSwing
```

inside the reusable animation stylesheet.

The swing uses smaller rotation angles so it does not look exaggerated.

---

## Step 15.10 - Found CSS and Motion Transform Conflict

The existing ID card already uses Motion for dragging.

The draggable badge uses:

```jsx
style={{
    x: cardX,
    y: cardY,
    rotate: cardRotation
}}
```

Motion uses these values to control the element's CSS transform.

The swing animation was initially added directly to:

```text
.draggable-badge
```

This caused a problem because both:

```text
CSS animation
```

and:

```text
Motion
```

were trying to control `transform` on the same element.

Result:

```text
Dragging became visually broken.
```

---

## Step 15.11 - Added Separate Swing Wrapper

Fixed the transform conflict by creating another wrapper.

Final structure:

```text
hanging-badge
├── lanyard
└── badge-swing-wrapper
    └── draggable-badge
        ├── card clip
        └── ID card
```

The responsibilities are now separated.

```text
hanging-badge
→ drop animation

badge-swing-wrapper
→ CSS swing animation

draggable-badge
→ Motion drag and velocity rotation
```

Updated JSX:

```jsx
<div className={`hanging-badge ${introFinished ? "badge-drop" : ""}`}>

    {/* SVG lanyard that bends and follows the draggable card */}
    <div className="lanyard">

        <svg
            className="lanyard-svg"
            viewBox="0 0 600 500"
        >

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

    <div
        className={`badge-swing-wrapper ${
            introFinished ? "badge-swing" : ""
        }`}
    >

        <motion.div
            className="draggable-badge"
            drag
            style={{
                x: cardX,
                y: cardY,
                rotate: cardRotation
            }}
        >
            ...
        </motion.div>

    </div>

</div>
```

---

## Step 15.12 - Updated Hero CSS Responsibilities

The draggable badge now contains only its drag-related styling.

```css
.draggable-badge {
    cursor: grab;
}
```

The entrance wrapper controls the vertical position:

```css
.hanging-badge {
    transform: translateY(-700px);
}
```

The drop class controls the entrance:

```css
.badge-drop {
    animation: cardDrop 900ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
```

The swing wrapper defines the rotation origin:

```css
.badge-swing-wrapper {
    transform-origin: top center;
}
```

The swing class controls the swing animation:

```css
.badge-swing {
    animation: badgeSwing 2200ms ease-out forwards;
}
```

The swing duration was adjusted during testing to make the motion feel more natural.

---

## Step 15.13 - Preserved Existing Drag Functionality

The actual draggable element remains:

```jsx
<motion.div
    className="draggable-badge"
    drag
```

The existing Motion values are unchanged:

```jsx
style={{
    x: cardX,
    y: cardY,
    rotate: cardRotation
}}
```

The card still:

```text
Moves horizontally
Moves vertically
Rotates based on drag velocity
Returns using spring animation
Updates the SVG lanyard
```

This means the new entrance animation was added without removing the existing interactive behaviour.

---

## Step 15.14 - Final ID Card Entrance Flow

The current opening interaction is:

```text
Page loads
↓
Welcome Intro animation runs
↓
slideUp finishes
↓
Intro calls onFinish()
↓
App sets introFinished = true
↓
Hero receives true
↓
badge-drop class is added
↓
Lanyard + badge drop together
↓
badge-swing class runs on separate wrapper
↓
Badge settles
↓
Motion drag remains available
```

---

## Step 15 Current Status

Completed:

```text
Intro completion callback ✅
Function prop communication ✅
App introFinished state ✅
Hero introFinished prop ✅
Conditional animation class ✅
Whole lanyard + badge drop ✅
Badge swing ✅
Separate swing wrapper ✅
Motion/CSS transform conflict fixed ✅
Drag functionality preserved ✅
```

Next:

```text
Animate the Hero text and actions after the Intro finishes.
```

---

## Git Checkpoint - Hero ID Card Entrance

Completed the first Hero entrance interaction.

Run:

```bash
git status
git add .
git commit -m "Add hanging ID card entrance animation"
git push
```

Next:

```text
Step 16 - Hero Content Entrance Animations
```

---

# Step 16 - Hero Content Entrance Animations

After completing the hanging ID card entrance, added entrance animations to the left side of the Hero.

The goal was to make the Hero content appear gradually instead of displaying everything at once.

Planned order:

```text
Intro finishes
↓
Portfolio label appears
↓
Main title appears
↓
Developer role appears
↓
Description appears
↓
CTA buttons appear
↓
Social icons appear one by one
```

The existing reusable:

```css
@keyframes fadeUp
```

and:

```css
@keyframes fadeUpScale
```

animations were reused from:

```text
src/styles/animations.css
```

---

## Step 16.1 - Delayed Typing Effect Until Intro Finishes

The Hero typing effect originally started immediately when the page loaded.

Because the Intro covers the Hero for several seconds, the typing animation could already be halfway through before the Hero became visible.

Updated the existing `useEffect()` so it waits until:

```text
introFinished = true
```

Added:

```jsx
// Wait until the Intro animation is finished before starting typing effect.
if (!introFinished) {
    return;
}
```

The beginning of the effect is now:

```jsx
useEffect(() => {

    // Wait until the Intro animation is finished before starting typing effect.
    if (!introFinished) {
        return;
    }

    const currentRole = roles[roleIndex];

    // Remaining typing logic...

}, [charIndex, roleIndex, isDeleting, introFinished]);
```

Also added:

```jsx
introFinished
```

to the dependency array.

The new flow is:

```text
Page loads
↓
introFinished = false
↓
Typing effect waits
↓
Intro finishes
↓
introFinished = true
↓
Typing effect begins from the first role
```

This ensures the typing animation starts when the user can actually see it.

---

## Step 16.2 - Animated Portfolio Label

Updated:

```jsx
<p className="hero-label">
    PORTFOLIO 2026
</p>
```

to:

```jsx
<p className={`hero-label ${introFinished ? "hero-show" : ""}`}>
    PORTFOLIO 2026
</p>
```

Before the Intro finishes:

```text
hero-label
```

After the Intro finishes:

```text
hero-label hero-show
```

Added:

```css
.hero-label {
    opacity: 0;
}
```

and:

```css
.hero-label.hero-show {
    animation: fadeUp 700ms ease forwards;
}
```

The label is the first Hero text element to appear.

---

## Step 16.3 - Animated Main Hero Title

Updated the Hero title:

```jsx
<h1 className={`hero-title ${introFinished ? "hero-show" : ""}`}>
```

The title contains:

```text
Hi, I'm
Lovepreet
Sandhu
```

Added:

```css
.hero-title {
    margin-bottom: 14px;

    /* Keeps the title hidden until the Intro finishes. */
    opacity: 0;
}
```

Added the entrance animation:

```css
.hero-title.hero-show {
    animation: fadeUp 700ms ease 150ms forwards;
}
```

The `150ms` delay makes the title appear shortly after the portfolio label.

---

## Step 16.4 - Animated Developer Role

Updated:

```jsx
<h2 className="hero-role">
```

to:

```jsx
<h2 className={`hero-role ${introFinished ? "hero-show" : ""}`}>
    {displayedText}
</h2>
```

Added:

```css
.hero-role {
    opacity: 0;
}
```

Added:

```css
.hero-role.hero-show {
    animation: fadeUp 700ms ease 300ms forwards;
}
```

The role uses the same entrance style as the other Hero text to keep the animation consistent.

After appearing, the existing typing animation continues controlling:

```text
Full-Stack Developer
React Developer
Node.js Developer
MERN Stack Developer
ASP.NET Developer
```

---

## Step 16.5 - Animated Hero Description

Updated:

```jsx
<p className="hero-description">
```

to:

```jsx
<p className={`hero-description ${introFinished ? "hero-show" : ""}`}>
```

Added:

```css
.hero-description {
    opacity: 0;
}
```

Added:

```css
.hero-description.hero-show {
    animation: fadeUp 700ms ease 450ms forwards;
}
```

The description appears after the role.

---

## Step 16.6 - Animated Hero CTA Buttons

Updated:

```jsx
<div className="hero-actions">
```

to:

```jsx
<div className={`hero-actions ${introFinished ? "hero-actions-show" : ""}`}>
```

Added:

```css
.hero-actions {
    opacity: 0;
}
```

The buttons use the existing:

```text
fadeUpScale
```

animation instead of the normal text `fadeUp`.

Added:

```css
.hero-actions-show {
    animation: fadeUpScale 700ms ease 600ms forwards;
}
```

This gives the buttons a slightly different entrance because they are interactive elements.

The CTA buttons are:

```text
View My Work
Download CV
```

---

## Step 16.7 - Animated Social Icons

Updated:

```jsx
<div className="hero-socials">
```

to:

```jsx
<div className={`hero-socials ${introFinished ? "hero-socials-show" : ""}`}>
```

The social links are:

```text
GitHub
LinkedIn
Email
```

The container remains hidden before the Intro finishes.

```css
.hero-socials {
    opacity: 0;
}
```

After the Intro finishes:

```css
.hero-socials-show {
    opacity: 1;
}
```

Each icon then receives the reusable:

```text
fadeUpScale
```

animation.

```css
.hero-socials-show .icons {
    opacity: 0;
    animation: fadeUpScale 500ms ease forwards;
}
```

---

## Step 16.8 - Added Staggered Social Icon Timing

Used `:nth-child()` to make the social icons appear one at a time.

```css
.hero-socials-show .icons:nth-child(1) {
    animation-delay: 750ms;
}

.hero-socials-show .icons:nth-child(2) {
    animation-delay: 850ms;
}

.hero-socials-show .icons:nth-child(3) {
    animation-delay: 950ms;
}
```

The social entrance sequence is:

```text
GitHub
↓ 100ms
LinkedIn
↓ 100ms
Email
```

---

## Step 16.9 - Added Hero Button Hover Effects

Added hover feedback to the primary CTA button.

```css
.hero-primary-btn {
    transition:
        transform 200ms ease,
        box-shadow 200ms ease;
}

.hero-primary-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(21, 93, 252, 0.3);
}
```

This slightly lifts the button and adds a blue shadow.

---

## Step 16.10 - Added Secondary Button Hover Effect

Added:

```css
.hero-secondary-btn {
    transition:
        transform 200ms ease,
        border-color 200ms ease;
}

.hero-secondary-btn:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.35);
}
```

The secondary button keeps its outlined design while responding to pointer interaction.

---

## Step 16.11 - Added Social Icon Hover Effects

Updated the `.icons` styling:

```css
.icons {
    color: #62748E;
    font-size: 20px;
    text-decoration: none;

    transition:
        transform 200ms ease,
        color 200ms ease;
}
```

Added:

```css
.icons:hover {
    transform: translateY(-3px);
    color: #51A2FF;
}
```

The social links now:

```text
Move upward slightly
+
Change to the portfolio blue color
```

when hovered.

---

## Step 16.12 - Final Hero Entrance Timing

The current Hero entrance sequence is:

```text
Intro finishes
↓
0ms
Portfolio label begins

150ms
Main title begins

300ms
Developer role begins

450ms
Description begins

600ms
CTA buttons begin

750ms
GitHub begins

850ms
LinkedIn begins

950ms
Email begins
```

At the same time, the hanging developer badge performs its own drop and swing entrance.

This makes the Hero feel active without giving every element a completely different animation style.

---

## Step 16.13 - Fixed Unused Import Warning

An accidental import was added:

```jsx
import { i } from "motion/react-client";
```

The variable was not used, which caused:

```text
'i' is defined but never used
```

Removed the import.

The HTML:

```jsx
<i className="bi bi-github"></i>
```

does not require importing `i`.

---

## Step 16 Status

Completed:

```text
Typing waits for Intro ✅
Portfolio label entrance ✅
Hero title entrance ✅
Developer role entrance ✅
Description entrance ✅
CTA entrance ✅
Social icon stagger ✅
Primary button hover ✅
Secondary button hover ✅
Social icon hover ✅
ID badge entrance still working ✅
ID badge dragging still working ✅
```

The Hero now has a complete opening sequence connected to the Welcome Intro.

---

## Git Checkpoint - Hero Content Entrance

Run:

```bash
git status
git add .
git commit -m "Add animated hero content entrance"
git push
```

### Next

Continue with the next portfolio improvement feature.

Possible next tasks:

```text
Project preview limit
View More Projects
Projects page
Project Details page
Scroll reveal animations
QR code
Final interaction polish
```

---

# Step 17 - Mobile Navigation Improvements

Improved the Header navigation so the mobile menu opens and closes smoothly and automatically closes after selecting a navigation item.

---

## Step 17.1 - Close Mobile Menu After Clicking a Navigation Link

Previously, the hamburger menu could be opened and closed using the menu button, but selecting a navigation item did not close the mobile navigation.

Each Header navigation link was updated to call:

```jsx
onClick={() => setIsMenuOpen(false)}
```

Example:

```jsx
<li>
    <a
        href="#about"
        onClick={() => setIsMenuOpen(false)}
    >
        About
    </a>
</li>
```

This changes:

```text
isMenuOpen = true
```

to:

```text
isMenuOpen = false
```

after a navigation item is selected.

The flow is:

```text
Open hamburger menu
↓
isMenuOpen = true
↓
Select navigation link
↓
setIsMenuOpen(false)
↓
Mobile navigation closes
```

The mobile Let's Talk button was also updated:

```jsx
<li>
    <a
        href="#contact"
        className="mobile-lets-talk-btn"
        onClick={() => setIsMenuOpen(false)}
    >
        Let&apos;s Talk
    </a>
</li>
```

The mobile Let's Talk link was placed inside an `<li>` so the `<ul>` keeps a correct HTML structure.

---

## Step 17.2 - Improved Hamburger Accessibility

The hamburger button already used:

```jsx
aria-expanded={isMenuOpen}
```

The accessibility label was updated so it describes the action the button will perform.

```jsx
aria-label={
    isMenuOpen
        ? "Close navigation menu"
        : "Open navigation menu"
}
```

When the menu is closed, the label is:

```text
Open navigation menu
```

When the menu is open, the label is:

```text
Close navigation menu
```

---

## Step 17.3 - Replace Instant Mobile Menu Opening

The mobile navigation previously used:

```css
.main-navigation {
    display: none;
}

.main-navigation--open {
    display: block;
}
```

This caused the navigation to instantly appear and disappear.

The `display` property cannot be smoothly animated.

The mobile navigation was changed to use:

```text
opacity
visibility
transform
```

instead.

---

## Step 17.4 - Add Mobile Navigation Slide Animation

Updated the mobile navigation:

```css
/* Mobile navigation menu positioned below the header. */
.main-navigation {
    position: absolute;
    top: calc(100% + 18px);
    left: 50%;

    width: 100vw;

    padding: 24px;
    background-color: #081120;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.35);

    /* Keeps the menu hidden and slightly above its final position. */
    opacity: 0;
    visibility: hidden;

    /* -50% keeps the menu horizontally centered.
       -20px moves it upward so it can slide down when opened. */
    transform: translate(-50%, -20px);

    /* Creates a smooth fade and slide when opening or closing the menu. */
    transition:
        opacity 300ms ease,
        transform 300ms ease,
        visibility 300ms ease;
}
```

The open state is:

```css
/* Applied when the hamburger button opens the mobile navigation. */
.main-navigation--open {
    opacity: 1;
    visibility: visible;

    /* Keeps the menu centered and moves it to its final vertical position. */
    transform: translate(-50%, 0);
}
```

Closed state:

```text
opacity: 0
visibility: hidden
translateY: -20px
```

Open state:

```text
opacity: 1
visibility: visible
translateY: 0
```

This creates a smooth slide-down and fade-in effect.

---

## Step 17.5 - Update Header Navigation Items

The Experience navigation item was removed because the portfolio currently does not have an Experience section.

It was replaced with:

```text
Guestbook
```

The Header navigation now contains:

```text
Home
Projects
Skills
About
Guestbook
Contact
```

The mobile navigation also contains:

```text
Let's Talk
```

---

# Step 18 - Portfolio Showcase Navigation With Shared State

The Skills Header navigation link was not working correctly.

The Skills component already contained:

```jsx
<div id="skills" className="skills">
```

However, the problem was caused by the Portfolio Showcase tab system.

The Portfolio Showcase conditionally renders its content:

```jsx
{activeTab === "projects" && <Projects />}

{activeTab === "skills" && <Skills />}

{activeTab === "certifications" && <Certifications />}
```

When:

```text
activeTab = "projects"
```

the Skills component is not currently rendered.

Therefore, trying to navigate directly to:

```text
#skills
```

does not work when the Skills component does not yet exist in the page.

---

## Step 18.1 - Give the Portfolio Showcase Its Own Navigation Target

The main Portfolio Showcase section uses:

```jsx
<section
    className="portfolio-showcase"
    id="showcase"
>
```

The ID:

```text
showcase
```

represents the entire Portfolio Showcase instead of a specific tab.

This is more accurate because the section contains:

```text
Projects
Skills
Certifications
```

The Header can therefore navigate to:

```text
#showcase
```

regardless of which Portfolio tab is currently selected.

---

## Step 18.2 - Lift Portfolio Tab State Into App.jsx

The Portfolio Showcase originally stored its own state:

```jsx
const [activeTab, setActiveTab] = useState("projects");
```

This worked for the buttons inside Portfolio Showcase, but Header could not control which tab was selected.

Both:

```text
Header
```

and:

```text
PortfolioShowcase
```

need access to the Portfolio tab state.

The state was therefore moved to their common parent:

```text
App.jsx
```

Added:

```jsx
const [activePortfolioTab, setActivePortfolioTab] = useState("projects");
```

The structure is now:

```text
                    App
                     |
          activePortfolioTab
                     |
          -----------------------
          |                     |
       Header          PortfolioShowcase
          |                     |
   changes the tab        displays the tab
```

This React pattern is called:

```text
Lifting State Up
```

---

## Step 18.3 - Pass Portfolio State to PortfolioShowcase

App passes the current selected tab and the function used to change it:

```jsx
<PortfolioShowcase
    activeTab={activePortfolioTab}
    setActiveTab={setActivePortfolioTab}
/>
```

The value:

```text
activeTab
```

represents the currently selected Portfolio tab.

Possible values are:

```text
projects
skills
certifications
```

The function:

```text
setActiveTab
```

allows PortfolioShowcase to change the currently selected tab.

---

## Step 18.4 - PortfolioShowcase Receives State Through Props

Previously:

```jsx
export default function PortfolioShowcase() {

    const [activeTab, setActiveTab] = useState("projects");
```

The local `useState` was removed.

PortfolioShowcase now receives both values through props:

```jsx
export default function PortfolioShowcase({ activeTab, setActiveTab }) {
```

The `useState` import was also removed because PortfolioShowcase no longer creates the tab state itself.

The top of the component is now:

```jsx
import "./PortfolioShowcase.css";

import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Certifications from "../Certifications/Certifications";

export default function PortfolioShowcase({ activeTab, setActiveTab }) {
```

---

## Step 18.5 - Portfolio Showcase Tab Buttons Continue to Work

The existing tab buttons continue to use:

```jsx
setActiveTab()
```

Projects:

```jsx
<button
    className={`portfolio-tab ${activeTab === "projects" ? "active" : ""}`}
    onClick={() => setActiveTab("projects")}
>
    <i className="bi bi-folder"></i>
    Projects
</button>
```

Skills:

```jsx
<button
    className={`portfolio-tab ${activeTab === "skills" ? "active" : ""}`}
    onClick={() => setActiveTab("skills")}
>
    <i className="bi bi-code-slash"></i>
    Skills
</button>
```

Certifications:

```jsx
<button
    className={`portfolio-tab ${activeTab === "certifications" ? "active" : ""}`}
    onClick={() => setActiveTab("certifications")}
>
    <i className="bi bi-award"></i>
    Certifications
</button>
```

---

## Step 18.6 - Pass Portfolio Setter to Header

App also passes the Portfolio state-changing function to Header:

```jsx
<Header
    setActivePortfolioTab={setActivePortfolioTab}
/>
```

Header receives it:

```jsx
export default function Header({ setActivePortfolioTab }) {
```

This allows the Header to change the Portfolio Showcase tab.

---

## Step 18.7 - Fix Projects Header Navigation

The Projects Header link now performs two jobs:

```jsx
<a
    href="#showcase"
    onClick={() => {
        setActivePortfolioTab("projects");
        setIsMenuOpen(false);
    }}
>
    Projects
</a>
```

When clicked:

```text
Projects
↓
setActivePortfolioTab("projects")
↓
Portfolio Showcase displays Projects
↓
Browser navigates to #showcase
↓
Mobile navigation closes
```

Using:

```jsx
href="#showcase"
```

is more accurate than using:

```jsx
href="#projects"
```

because `showcase` represents the entire Portfolio Showcase section.

---

## Step 18.8 - Fix Skills Header Navigation

The Skills Header link now uses:

```jsx
<a
    href="#showcase"
    onClick={() => {
        setActivePortfolioTab("skills");
        setIsMenuOpen(false);
    }}
>
    Skills
</a>
```

When Skills is clicked:

```text
Click Skills
↓
setActivePortfolioTab("skills")
↓
App updates activePortfolioTab
↓
PortfolioShowcase receives activeTab="skills"
↓
Skills component renders
↓
Browser navigates to #showcase
↓
Skills tab is displayed
↓
Mobile navigation closes
```

The Header no longer needs to navigate directly to:

```text
#skills
```

because the Skills component is conditionally rendered.

Instead, the Header always navigates to:

```text
#showcase
```

and React controls which tab appears.

---

## Step 18.9 - Shared State Flow

The final Portfolio navigation structure is:

```text
                    App.jsx
                       |
             activePortfolioTab
                       |
             -------------------
             |                 |
             ↓                 ↓
         Header         PortfolioShowcase
             |                 |
             |                 ↓
             |          activeTab controls
             |                 |
             |        ---------------------
             |        |         |         |
             |    Projects    Skills   Certifications
             |
             ↓
setActivePortfolioTab()
```

For example:

```text
Header Skills clicked
↓
setActivePortfolioTab("skills")
↓
App state changes
↓
PortfolioShowcase receives "skills"
↓
<Skills /> renders
```

This reinforces the same React parent/child communication concept used earlier for the Intro and Hero.

Intro flow:

```text
Intro
↓
App
↓
Hero
```

Portfolio navigation flow:

```text
Header
↓
App
↓
PortfolioShowcase
```

---

## Step 18.10 - Final Navigation Targets

The Header navigation now uses the actual sections available in the portfolio.

```text
Home        → Home/Hero
Projects    → #showcase + Projects tab
Skills      → #showcase + Skills tab
About       → #about
Guestbook   → #guestbook
Contact     → #contact
Let's Talk  → #contact
```

The Portfolio Showcase itself uses:

```jsx
id="showcase"
```

so Projects and Skills can share the same scroll destination while displaying different tab content.

---

## Step 18 Status

Completed:

```text
Mobile menu closes after selecting a link ✅
Mobile menu slides open ✅
Mobile menu slides closed ✅
Mobile menu fades in/out ✅
Hamburger accessibility improved ✅
Experience removed from navigation ✅
Guestbook added to navigation ✅
Portfolio Showcase changed to id="showcase" ✅
Skills navigation problem identified ✅
Portfolio tab state lifted to App ✅
Header can change Portfolio tab ✅
PortfolioShowcase receives state through props ✅
Projects navigates to #showcase + opens Projects ✅
Skills navigates to #showcase + opens Skills ✅
Mobile navigation closes after tab navigation ✅
```

---

## Git Checkpoint

Test:

```text
Desktop:
Projects → Skills → Projects

Mobile:
Open menu → Skills
Open menu → Projects
Open menu → Guestbook
Open menu → Contact
Hamburger open/close
```

Then run:

```bash
git status
git add .
git commit -m "Fix mobile navigation and portfolio tab links"
git push
```

---

# Step 19 - About Section Animations

After completing the Intro, Hero, ID card entrance, and navigation improvements, added scroll-based entrance animations and hover interactions to the About section.

The goal was to make the About section feel more dynamic when the user scrolls down the page.

The animation approach continues using only:

```text
React
→ useState
→ useEffect

CSS
→ @keyframes
→ animation
→ transition
→ transform
→ opacity
```

No additional scroll-animation library was added.

---

## Step 19.1 - Added About Animation State

Imported:

```jsx
import { useEffect, useState } from "react";
```

Created state:

```jsx
// Tracks whether the About section should start its animations.
const [aboutVisible, setAboutVisible] = useState(false);
```

The initial value is:

```text
false
```

which means the About entrance animations have not started yet.

---

## Step 19.2 - Added Scroll Detection With useEffect

Created a scroll listener inside `useEffect()`.

```jsx
useEffect(() => {

    // Runs whenever the user scrolls the page.
    function handleScroll() {

        // Starts the About animations once the user scrolls far enough down the page.
        if (window.scrollY > 500) {
            setAboutVisible(true);
        }
    }

    // Listen for scrolling on the browser window.
    window.addEventListener("scroll", handleScroll);

    // Removes the scroll listener when the component is removed.
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, []);
```

`window.scrollY` returns how many pixels the user has scrolled down from the top of the page.

The condition:

```jsx
if (window.scrollY > 500)
```

means:

```text
User scrolls more than 500px
↓
setAboutVisible(true)
↓
React rerenders About
↓
Animation classes are added
```

The cleanup function removes the scroll listener when the component is removed.

---

## Step 19.3 - Animated About Label

Updated:

```jsx
<p className="about-label">
```

to:

```jsx
<p className={`about-label ${aboutVisible ? "about-show-item" : ""}`}>
    ABOUT ME
</p>
```

The label is hidden before the animation starts:

```css
.about-label {
    color: #51A2FF;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2.4px;
    margin-bottom: 12px;

    /* Hide the About label before animations. */
    opacity: 0;
}
```

Added:

```css
/* Shows the About label when the user scrolls to the section. */
.about-label.about-show-item {
    animation: fadeUp 700ms ease forwards;
}
```

The About label is the first element to appear.

---

## Step 19.4 - Animated About Title

Updated:

```jsx
<h2 className="about-title">
```

to:

```jsx
<h2 className={`about-title ${aboutVisible ? "about-show-item" : ""}`}>
    Get to <span>know me</span>
</h2>
```

The title starts hidden:

```css
.about-title {
    color: #FFFFFF;
    font-family: "Manrope", sans-serif;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;

    opacity: 0;
}
```

Added:

```css
.about-title.about-show-item {
    animation: fadeUp 700ms ease 150ms forwards;
}
```

The title begins `150ms` after the label.

---

## Step 19.5 - Animated About Description

Updated:

```jsx
<p className="about-description">
```

to:

```jsx
<p className={`about-description ${aboutVisible ? "about-show-item" : ""}`}>
```

The description starts hidden:

```css
.about-description {
    color: #90A1B9;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    max-width: 560px;
    margin-bottom: 32px;

    opacity: 0;
}
```

Added:

```css
.about-description.about-show-item {
    animation: fadeUp 700ms ease 300ms forwards;
}
```

The description begins after the title.

---

## Step 19.6 - Animated About Information Rows

Each About information row was updated from:

```jsx
<div className="about-info-item">
```

to:

```jsx
<div className={`about-info-item ${aboutVisible ? "about-info-show" : ""}`}>
```

This was applied to:

```text
Name
Location
Email
Education
Availability
```

The rows start hidden:

```css
.about-info-item {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 16px;

    /* Keeps each information row hidden until its animation begins. */
    opacity: 0;
}
```

Added:

```css
/* Animates the information rows after the About description. */
.about-info-show {
    animation: fadeUp 600ms ease forwards;
}
```

---

## Step 19.7 - Added Staggered Info Row Delays

Used `:nth-child()` to animate the About information rows one at a time.

```css
.about-info-show:nth-child(1) {
    animation-delay: 450ms;
}

.about-info-show:nth-child(2) {
    animation-delay: 550ms;
}

.about-info-show:nth-child(3) {
    animation-delay: 650ms;
}

.about-info-show:nth-child(4) {
    animation-delay: 750ms;
}

.about-info-show:nth-child(5) {
    animation-delay: 850ms;
}
```

The sequence becomes:

```text
450ms
→ Name

550ms
→ Location

650ms
→ Email

750ms
→ Education

850ms
→ Availability
```

---

## Step 19.8 - Animated About Stats Cards

The three About stat columns were updated to receive an animation class.

Example:

```jsx
<div className={`col-12 col-md-4 ${aboutVisible ? "about-stat-show" : ""}`}>
```

This was applied to:

```text
Technologies
Projects Built
Certifications
```

The stat columns start hidden:

```css
/* Keeps the stat cards hidden until their entrance animation begins. */
.about-stats .col-12 {
    opacity: 0;
}
```

Added:

```css
/* Shows each stat card after the About information rows. */
.about-stat-show {
    animation: fadeUpScale 600ms ease forwards;
}
```

---

## Step 19.9 - Added Stat Card Stagger

Added delays:

```css
.about-stat-show:nth-child(1) {
    animation-delay: 1000ms;
}

.about-stat-show:nth-child(2) {
    animation-delay: 1100ms;
}

.about-stat-show:nth-child(3) {
    animation-delay: 1200ms;
}
```

The stats appear one after another.

---

## Step 19.10 - Animated About Image

Updated:

```jsx
<div className="about-image">
```

to:

```jsx
<div className={`about-image ${aboutVisible ? "about-image-show" : ""}`}>
```

The image starts hidden:

```css
.about-image {
    width: 100%;
    max-width: 430px;

    display: flex;
    align-items: center;
    justify-content: center;

    /* Keeps the image hidden until its entrance animation begins. */
    opacity: 0;
}
```

Created a reusable right-side entrance animation inside:

```text
src/styles/animations.css
```

```css
/* Brings an element into view from the right side. */
@keyframes fadeInRight {

    from {
        opacity: 0;
        transform: translateX(40px) scale(0.96);
    }

    to {
        opacity: 1;
        transform: translateX(0) scale(1);
    }
}
```

Applied it:

```css
/* Shows the About image when the About section animation starts. */
.about-image.about-image-show {
    animation: fadeInRight 900ms ease 400ms forwards;
}
```

The image enters from the right while the About text begins appearing.

---

## Step 19.11 - Added About Info Hover Movement

Added hover interaction to the About information rows.

Updated:

```css
.about-info-item {
    transition: transform 200ms ease;
}
```

Added:

```css
.about-info-item:hover {
    transform: translateX(5px);
}
```

When hovered, the information row moves slightly to the right.

---

## Step 19.12 - Added Info Icon Hover Scale

Updated the About information icons:

```css
.about-info-icon {
    color: #2B7FFF;
    font-size: 20px;
    width: 24px;

    transition: transform 200ms ease;
}
```

Added:

```css
.about-info-item:hover .about-info-icon {
    transform: scale(1.15);
}
```

When the user hovers over an information row, the icon grows slightly.

---

## Step 19.13 - Added Stat Card Hover Interaction

The stat cards already use a hover effect:

```css
.about-stat-card {
    transition:
        transform 250ms ease,
        border-color 250ms ease,
        box-shadow 250ms ease;
}
```

Added:

```css
.about-stat-card:hover {
    transform: translateY(-5px);
    border-color: rgba(81, 162, 255, 0.35);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}
```

When hovered, the card:

```text
Moves upward
+
Gets a brighter border
+
Adds a shadow
```

The entrance animation is applied to the outer Bootstrap column while the hover transform is applied to the inner card.

This prevents the entrance animation and hover transform from conflicting.

---

## Step 19.14 - Final About Animation Sequence

The current sequence is:

```text
User scrolls past 500px
↓
aboutVisible becomes true

0ms
→ ABOUT ME label

150ms
→ About title

300ms
→ Description

400ms
→ About image

450ms
→ Name

550ms
→ Location

650ms
→ Email

750ms
→ Education

850ms
→ Availability

1000ms
→ Technologies stat

1100ms
→ Projects Built stat

1200ms
→ Certifications stat
```

The About section now combines:

```text
Scroll entrance animations
+
Staggered content
+
Image entrance
+
Hover interactions
```

---

## Step 19 Status

Completed:

```text
About scroll state ✅
Scroll listener ✅
About label entrance ✅
About title entrance ✅
Description entrance ✅
Info row stagger ✅
Image entrance ✅
Stat card stagger ✅
Info hover movement ✅
Icon hover scale ✅
Stat card hover effect ✅
```

---

## Git Checkpoint - About Animations

Run:

```bash
git status
git add .
git commit -m "Add animated about section"
git push
```

### Next

Start:

```text
Step 20 - Portfolio Showcase Animations
```

Planned animation areas:

```text
Showcase label
Showcase heading
Description
Tab buttons
Project cards
Skill cards
Certification cards
Hover effects
```

---

# Step 20 - Portfolio Showcase Animations and Interactions

After completing the About section animations, started improving the Portfolio Showcase.

The goals were to:

```text
Animate the Showcase when it enters the screen
Animate tab changes
Make the active tab move smoothly
Connect Header navigation to Showcase tabs
Show only 2 Projects initially
Show only 2 Certifications initially
Add View More / Show Less
Improve scrolling between sections
```

The animation system continued using:

```text
React
→ useState
→ useEffect

CSS
→ opacity
→ transform
→ transition
→ animation
→ @keyframes
```

No additional animation library was added for the Showcase.

---

## Step 20.1 - Added Portfolio Showcase Animation State

Imported:

```jsx
import { useState, useEffect } from "react";
```

Created:

```jsx
// Tracks whether the Portfolio Showcase should start its animations.
const [showcaseVisible, setShowcaseVisible] = useState(false);
```

The initial value is:

```text
false
```

This keeps the Showcase entrance animations from starting immediately when the application loads.

---

## Step 20.2 - Added Initial Showcase Scroll Detection

Initially used a scroll position to decide when the Showcase animations should start.

```jsx
useEffect(() => {

    // Runs whenever the user scrolls the page.
    function handleScroll() {

        // Starts the Showcase animations once the user scrolls far enough down.
        if (window.scrollY > 1200) {
            setShowcaseVisible(true);
        }
    }

    // Listen for scrolling on the browser window.
    window.addEventListener("scroll", handleScroll);

    // Removes the scroll listener when the component is removed.
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, []);
```

Flow:

```text
User scrolls
↓
window.scrollY > 1200
↓
setShowcaseVisible(true)
↓
Showcase animation classes are added
```

This scroll system was later improved so animations can replay when the user returns to the section.

---

## Step 20.3 - Animated Showcase Label

Updated:

```jsx
<p className="portfolio-showcase-label">
    MY WORK
</p>
```

to:

```jsx
<p className={`portfolio-showcase-label ${showcaseVisible ? "showcase-show-item" : ""}`}>
    MY WORK
</p>
```

The element starts hidden:

```css
.portfolio-showcase-label {
    opacity: 0;
}
```

Added:

```css
.portfolio-showcase-label.showcase-show-item {
    animation: fadeUp 700ms ease forwards;
}
```

The `MY WORK` label is the first Showcase element to appear.

---

## Step 20.4 - Animated Showcase Title

Updated:

```jsx
<h2 className="portfolio-showcase-title">
    Portfolio <span>Showcase</span>
</h2>
```

to:

```jsx
<h2 className={`portfolio-showcase-title ${showcaseVisible ? "showcase-show-item" : ""}`}>
    Portfolio <span>Showcase</span>
</h2>
```

The title begins hidden:

```css
.portfolio-showcase-title {
    opacity: 0;
}
```

Added:

```css
.portfolio-showcase-title.showcase-show-item {
    animation: fadeUp 700ms ease 150ms forwards;
}
```

Sequence:

```text
0ms
→ MY WORK

150ms
→ Portfolio Showcase
```

---

## Step 20.5 - Animated Showcase Description

Updated:

```jsx
<p className="portfolio-showcase-description">
    Explore my projects, skills, and certifications.
</p>
```

to:

```jsx
<p className={`portfolio-showcase-description ${showcaseVisible ? "showcase-show-item" : ""}`}>
    Explore my projects, skills, and certifications.
</p>
```

Added:

```css
.portfolio-showcase-description {
    opacity: 0;
}
```

Then:

```css
.portfolio-showcase-description.showcase-show-item {
    animation: fadeUp 700ms ease 300ms forwards;
}
```

The sequence became:

```text
0ms
→ MY WORK

150ms
→ Portfolio Showcase

300ms
→ Description
```

---

## Step 20.6 - Animated Showcase Tabs

Updated:

```jsx
<div className="portfolio-tabs">
```

to:

```jsx
<div className={`portfolio-tabs ${showcaseVisible ? "showcase-tabs-show" : ""}`}>
```

The tabs begin hidden:

```css
.portfolio-tabs {
    opacity: 0;
}
```

Added:

```css
.portfolio-tabs.showcase-tabs-show {
    animation: fadeUp 700ms ease 450ms forwards;
}
```

The initial entrance sequence became:

```text
MY WORK
↓
Portfolio Showcase
↓
Description
↓
Projects / Skills / Certifications tabs
```

---

## Step 20.7 - Fixed Showcase Content Appearing Before Animation

The Projects content was already rendered while the heading and tabs were still animating.

The content wrapper originally always contained:

```jsx
showcase-content-show
```

Changed the wrapper so the animation class is only added when the Showcase is visible:

```jsx
<div
    key={activePortfolioTab}
    className={`portfolio-content ${
        showcaseVisible ? "showcase-content-show" : ""
    }`}
>
```

Added:

```css
.portfolio-content {
    opacity: 0;
}
```

Then:

```css
.portfolio-content.showcase-content-show {
    animation: fadeUp 700ms ease 600ms forwards;
}
```

The initial Showcase load now follows:

```text
MY WORK
↓
Title
↓
Description
↓
Tabs
↓
Projects
```

instead of showing the project cards immediately.

---

## Step 20.8 - Added Animation When Switching Showcase Tabs

Added:

```jsx
key={activePortfolioTab}
```

to the content wrapper.

```jsx
<div
    key={activePortfolioTab}
    className={`portfolio-content ${
        showcaseVisible ? "showcase-content-show" : ""
    }`}
>
```

The selected content is rendered using:

```jsx
{activePortfolioTab === "projects" && <Projects />}

{activePortfolioTab === "skills" && <Skills />}

{activePortfolioTab === "certifications" && <Certifications />}
```

When:

```text
projects
```

changes to:

```text
skills
```

the key also changes.

React creates a new wrapper and the existing `fadeUp` animation runs again.

This keeps the animation system simple and reuses the animation already used throughout the portfolio.

---

## Step 20.9 - Lifted Showcase Tab State Into App.jsx

Originally the Portfolio Showcase stored its own active tab state.

The Header also needed to control:

```text
Projects
Skills
Certifications
```

so the state was moved into `App.jsx`.

Created:

```jsx
const [activePortfolioTab, setActivePortfolioTab] = useState("projects");
```

`projects` remains the default tab.

---

## Step 20.10 - Passed Showcase State to PortfolioShowcase

Added:

```jsx
<PortfolioShowcase
    activePortfolioTab={activePortfolioTab}
    setActivePortfolioTab={setActivePortfolioTab}
/>
```

The component receives:

```jsx
export default function PortfolioShowcase({
    activePortfolioTab,
    setActivePortfolioTab
}) {
```

This allows PortfolioShowcase to read the selected tab and change it.

---

## Step 20.11 - Passed Tab Setter to Header

Added:

```jsx
<Header setActivePortfolioTab={setActivePortfolioTab} />
```

The Header can now change the same Showcase state.

This creates:

```text
App.jsx
↓
activePortfolioTab

Header
↕
PortfolioShowcase
```

Both components now control the same state.

---

## Step 20.12 - Fixed Portfolio Prop Name Mismatch

There was a prop mismatch.

`PortfolioShowcase.jsx` expected:

```jsx
activePortfolioTab
```

but `App.jsx` was temporarily passing:

```jsx
activeTab={activePortfolioTab}
```

Updated it to:

```jsx
<PortfolioShowcase
    activePortfolioTab={activePortfolioTab}
    setActivePortfolioTab={setActivePortfolioTab}
/>
```

This fixed the Showcase tabs not responding when clicked.

---

## Step 20.13 - Updated Showcase Navigation Target

The main Showcase section uses:

```jsx
<section className="portfolio-showcase" id="showcase">
```

Navigation links can now scroll to:

```text
#showcase
```

instead of depending on content that may not currently be rendered.

This is important because Skills and Certifications use conditional rendering.

---

## Step 20.14 - Added Sliding Active Tab Indicator

The active tab originally changed background immediately.

Added one blue element that physically moves between the tabs.

Added inside `.portfolio-tabs`:

```jsx
<div
    className={`portfolio-tab-slider slider-${activePortfolioTab}`}
></div>
```

Possible classes become:

```text
slider-projects
slider-skills
slider-certifications
```

---

## Step 20.15 - Styled Sliding Tab Background

Made the tab container relative:

```css
.portfolio-tabs {
    position: relative;
}
```

Created:

```css
/* Blue background that slides behind the active Showcase tab. */
.portfolio-tab-slider {
    position: absolute;

    top: 8px;
    left: 8px;

    width: calc((100% - 16px) / 3);
    height: calc(100% - 16px);

    background-color: #155DFC;
    border-radius: 12px;

    transition: transform 350ms ease;
}
```

The available area is divided into three equal tab positions.

---

## Step 20.16 - Added Slider Positions

Projects:

```css
.slider-projects {
    transform: translateX(0);
}
```

Skills:

```css
.slider-skills {
    transform: translateX(100%);
}
```

Certifications:

```css
.slider-certifications {
    transform: translateX(200%);
}
```

Flow:

```text
Projects
→ 0%

Skills
→ 100%

Certifications
→ 200%
```

The same blue element now moves horizontally across the tab bar.

---

## Step 20.17 - Kept Tab Buttons Above Slider

Added:

```css
.portfolio-tab {
    position: relative;
    z-index: 1;
}
```

The buttons use:

```css
background-color: transparent;
```

because the sliding indicator now provides the blue active background.

---

## Step 20.18 - Added Active Tab Text Transition

The selected button uses:

```css
.portfolio-tab.active {
    color: #FFFFFF;
}
```

Added:

```css
.portfolio-tab {
    transition: color 300ms ease;
}
```

The tab interaction now combines:

```text
Blue slider movement
+
Smooth text color change
```

---

## Step 20.19 - Added Mobile Tab Slider

The mobile tab container uses:

```css
padding: 6px;
```

so the slider also needed smaller offsets.

Added inside the mobile media query:

```css
.portfolio-tab-slider {
    top: 6px;
    left: 6px;

    width: calc((100% - 12px) / 3);
    height: calc(100% - 12px);
}
```

The active slider now aligns correctly on mobile.

---

## Step 20.20 - Limited Projects to Two Initially

Added:

```jsx
const [showAllProjects, setShowAllProjects] = useState(false);
```

When:

```text
showAllProjects = false
```

only two Projects are shown.

When:

```text
showAllProjects = true
```

all Projects are displayed.

Used the project array with `slice()` to limit the initial results.

Example:

```jsx
{projects
    .slice(
        0,
        showAllProjects
            ? projects.length
            : 2
    )
    .map((project) => {
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

---

## Step 20.21 - Added Project View More / Show Less

Added a button that changes the Project display state.

```jsx
{projects.length > 2 && (
    <button
        type="button"
        className="projects-view-more-btn"
        onClick={() => setShowAllProjects(!showAllProjects)}
    >
        {showAllProjects
            ? "Show Less"
            : "View More Projects"}
    </button>
)}
```

The button only appears when more than two Projects exist.

Flow:

```text
2 Projects
↓
View More Projects
↓
All Projects
↓
Show Less
↓
2 Projects
```

---

## Step 20.22 - Added Project Expansion Animation

Added a conditional expanded class to the Project grid.

Example:

```jsx
<div
    className={`projects-grid ${
        showAllProjects ? "projects-grid-expanded" : ""
    }`}
>
```

Added:

```css
.projects-grid-expanded {
    animation: fadeUp 500ms ease forwards;
}
```

Now clicking View More does not make additional cards appear completely instantly.

---

## Step 20.23 - Added Project View More Icon

Updated the button to visually show whether the section can expand or collapse.

Example:

```jsx
<i
    className={`bi ${
        showAllProjects
            ? "bi-chevron-up"
            : "bi-chevron-down"
    }`}
></i>
```

Interaction:

```text
View More Projects ↓

Show Less ↑
```

---

## Step 20.24 - Limited Certifications to Two Initially

Added:

```jsx
const [showAllCertifications, setShowAllCertifications] = useState(false);
```

Updated the Certification rendering:

```jsx
{certifications
    .slice(
        0,
        showAllCertifications
            ? certifications.length
            : 2
    )
    .map((certification) => {
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

Initially:

```text
2 Certifications
```

After expanding:

```text
All Certifications
```

---

## Step 20.25 - Added Certification View More / Show Less

Added:

```jsx
{certifications.length > 2 && (
    <button
        type="button"
        className="certifications-view-more-btn"
        onClick={() =>
            setShowAllCertifications(!showAllCertifications)
        }
    >
        {showAllCertifications
            ? "Show Less"
            : "View More Certifications"}
    </button>
)}
```

The Projects and Certifications sections now behave consistently.

---

## Step 20.26 - Added Certification Expansion Animation

Updated the grid:

```jsx
<div
    className={`certifications-grid ${
        showAllCertifications
            ? "certifications-grid-expanded"
            : ""
    }`}
>
```

Added:

```css
.certifications-grid-expanded {
    animation: fadeUp 500ms ease forwards;
}
```

Additional certifications now appear with a small entrance animation.

---

## Step 20.27 - Added Certification View More Icon

Added:

```jsx
<i
    className={`bi ${
        showAllCertifications
            ? "bi-chevron-up"
            : "bi-chevron-down"
    }`}
></i>
```

Result:

```text
View More Certifications ↓

Show Less ↑
```

---

## Step 20.28 - Added Smooth Website Scrolling

Added globally:

```css
html {
    scroll-behavior: smooth;
}
```

Anchor navigation now scrolls smoothly instead of jumping immediately.

Example:

```text
Home
↓
About
↓
Showcase
↓
Contact
↓
Guestbook
```

---

## Step 20 Status

Completed:

```text
Showcase scroll animation state ✅
Showcase label animation ✅
Showcase title animation ✅
Showcase description animation ✅
Tab entrance animation ✅
Showcase content entrance animation ✅
Tab content animation ✅
Shared Showcase state ✅
Header tab control ✅
Showcase tab control ✅
Prop mismatch fixed ✅
Showcase navigation target ✅
Sliding tab indicator ✅
Smooth slider transition ✅
Mobile tab slider ✅
Projects limited to two ✅
Project View More / Show Less ✅
Project expansion animation ✅
Certifications limited to two ✅
Certification View More / Show Less ✅
Certification expansion animation ✅
Smooth website scrolling ✅
```

---

# Step 21 - Contact Section Animations

After completing the Portfolio Showcase, added entrance and interaction animations to the Contact section.

---

## Step 21.1 - Added Contact Animation State

Updated the import:

```jsx
import { useEffect, useState } from "react";
```

Added:

```jsx
// Tracks whether the Contact section should start its animations.
const [contactVisible, setContactVisible] = useState(false);
```

---

## Step 21.2 - Added Initial Contact Scroll Detection

Initially used:

```jsx
useEffect(() => {

    // Runs whenever the user scrolls the page.
    function handleScroll() {

        // Starts the Contact animations once the user scrolls far enough down.
        if (window.scrollY > 2000) {
            setContactVisible(true);
        }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, []);
```

This was later improved using the actual Contact section position.

---

## Step 21.3 - Animated Contact Label

Updated:

```jsx
<p className={`contact-label ${contactVisible ? "contact-show-item" : ""}`}>
    CONTACT
</p>
```

Added:

```css
.contact-label,
.contact-title,
.contact-description {
    opacity: 0;
}
```

Then:

```css
.contact-label.contact-show-item {
    animation: fadeUp 700ms ease forwards;
}
```

---

## Step 21.4 - Animated Contact Title

Updated:

```jsx
<h2 className={`contact-title ${contactVisible ? "contact-show-item" : ""}`}>
    Let&apos;s <span>work together</span>
</h2>
```

Added:

```css
.contact-title.contact-show-item {
    animation: fadeUp 700ms ease 150ms forwards;
}
```

---

## Step 21.5 - Animated Contact Description

Updated:

```jsx
<p className={`contact-description ${contactVisible ? "contact-show-item" : ""}`}>
    Have a project, opportunity, or idea in mind? Send me a message.
</p>
```

Added:

```css
.contact-description.contact-show-item {
    animation: fadeUp 700ms ease 300ms forwards;
}
```

---

## Step 21.6 - Animated Contact Information Card

Updated:

```jsx
<div className={`contact-info ${contactVisible ? "contact-info-show" : ""}`}>
```

Added:

```css
.contact-info,
.contact-form-area {
    opacity: 0;
}
```

Then:

```css
.contact-info.contact-info-show {
    animation: contactSlideLeft 700ms ease 450ms forwards;
}
```

Created:

```css
@keyframes contactSlideLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

---

## Step 21.7 - Animated Contact Form

Updated:

```jsx
<div className={`contact-form-area ${contactVisible ? "contact-form-show" : ""}`}>
```

Added:

```css
.contact-form-area.contact-form-show {
    animation: contactSlideRight 700ms ease 450ms forwards;
}
```

Created:

```css
@keyframes contactSlideRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

The Contact sequence became:

```text
CONTACT
↓
Let's work together
↓
Description
↓
Contact Information ←     → Contact Form
```

---

## Step 21.8 - Added Contact Detail Hover

Added:

```css
.contact-detail {
    transition: transform 250ms ease;
}
```

Then:

```css
.contact-detail:hover {
    transform: translateX(5px);
}
```

---

## Step 21.9 - Added Contact Icon Hover

Added:

```css
.contact-detail i {
    transition:
        transform 250ms ease,
        background-color 250ms ease;
}
```

Then:

```css
.contact-detail:hover i {
    transform: scale(1.08);
    background-color: rgba(21, 93, 252, 0.2);
}
```

---

## Step 21.10 - Improved Social Link Hover

Added:

```css
.contact-socials a {
    transition:
        transform 250ms ease,
        color 250ms ease,
        border-color 250ms ease;
}
```

Updated:

```css
.contact-socials a:hover {
    color: #51A2FF;
    border-color: rgba(81, 162, 255, 0.35);
    transform: translateY(-4px);
}
```

---

## Step 21.11 - Improved Form Input Focus

Added:

```css
.contact-form input,
.contact-form textarea {
    transition:
        border-color 250ms ease,
        box-shadow 250ms ease;
}
```

Updated:

```css
.contact-form input:focus,
.contact-form textarea:focus {
    border-color: #155DFC;
    box-shadow: 0 0 0 3px rgba(21, 93, 252, 0.12);
}
```

---

## Step 21.12 - Added Send Message Hover

Added:

```css
.contact-submit {
    transition:
        transform 250ms ease,
        box-shadow 250ms ease;
}
```

Then:

```css
.contact-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(21, 93, 252, 0.3);
}
```

---

## Step 21 Status

Completed:

```text
Contact animation state ✅
Contact heading stagger ✅
Contact information slide-in ✅
Contact form slide-in ✅
Contact detail hover ✅
Contact icon hover ✅
Social link hover ✅
Input focus glow ✅
Send Message hover ✅
```

---

# Step 22 - Guestbook Section Animations

Added entrance and interaction animations to the Guestbook section.

---

## Step 22.1 - Added Guestbook Animation State

The Guestbook already imports:

```jsx
import { useState, useEffect } from "react";
```

Added:

```jsx
// Tracks whether the Guestbook section should start its animations.
const [guestbookVisible, setGuestbookVisible] = useState(false);
```

---

## Step 22.2 - Added Initial Guestbook Scroll Detection

Initially added:

```jsx
useEffect(() => {

    function handleScroll() {

        if (window.scrollY > 2800) {
            setGuestbookVisible(true);
        }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, []);
```

This was later replaced with actual section position detection.

---

## Step 22.3 - Animated Guestbook Label

Updated:

```jsx
<p className={`guestbook-label ${guestbookVisible ? "guestbook-show-item" : ""}`}>
    GUESTBOOK
</p>
```

Added:

```css
.guestbook-label,
.guestbook-title,
.guestbook-description {
    opacity: 0;
}
```

Then:

```css
.guestbook-label.guestbook-show-item {
    animation: fadeUp 700ms ease forwards;
}
```

---

## Step 22.4 - Animated Guestbook Title

Updated:

```jsx
<h2 className={`guestbook-title ${guestbookVisible ? "guestbook-show-item" : ""}`}>
    Sign the <span>Guestbook</span>
</h2>
```

Added:

```css
.guestbook-title.guestbook-show-item {
    animation: fadeUp 700ms ease 150ms forwards;
}
```

---

## Step 22.5 - Animated Guestbook Description

Updated:

```jsx
<p className={`guestbook-description ${guestbookVisible ? "guestbook-show-item" : ""}`}>
    Say hello, share feedback, or leave a message.
</p>
```

Added:

```css
.guestbook-description.guestbook-show-item {
    animation: fadeUp 700ms ease 300ms forwards;
}
```

---

## Step 22.6 - Animated Guestbook Form

Updated:

```jsx
<div className={`guestbook-form-area ${guestbookVisible ? "guestbook-form-show" : ""}`}>
```

Added:

```css
.guestbook-form-area,
.guestbook-comments {
    opacity: 0;
}
```

Then:

```css
.guestbook-form-area.guestbook-form-show {
    animation: guestbookSlideLeft 700ms ease 450ms forwards;
}
```

Created:

```css
@keyframes guestbookSlideLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

---

## Step 22.7 - Animated Recent Guestbook Messages

Updated:

```jsx
<div className={`guestbook-comments ${guestbookVisible ? "guestbook-comments-show" : ""}`}>
```

Added:

```css
.guestbook-comments.guestbook-comments-show {
    animation: guestbookSlideRight 700ms ease 550ms forwards;
}
```

Created:

```css
@keyframes guestbookSlideRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

The entrance sequence became:

```text
GUESTBOOK
↓
Sign the Guestbook
↓
Description
↓
Form ←          → Recent Messages
```

---

## Step 22.8 - Improved Guestbook Input Focus

Added:

```css
.guestbook-form-group input,
.guestbook-form-group textarea {
    transition:
        border-color 250ms ease,
        box-shadow 250ms ease;
}
```

Updated:

```css
.guestbook-form-group input:focus,
.guestbook-form-group textarea:focus {
    border-color: #51A2FF;
    box-shadow: 0 0 0 3px rgba(81, 162, 255, 0.12);
}
```

---

## Step 22.9 - Improved Sign Guestbook Button

Added:

```css
.guestbook-submit {
    transition:
        transform 250ms ease,
        background-color 250ms ease,
        box-shadow 250ms ease;
}
```

Updated:

```css
.guestbook-submit:hover {
    background-color: #1447E6;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(21, 93, 252, 0.3);
}
```

---

## Step 22.10 - Added Guestbook Message Card Hover

Added:

```css
.guestbook-card {
    transition:
        transform 250ms ease,
        border-color 250ms ease,
        box-shadow 250ms ease;
}
```

Then:

```css
.guestbook-card:hover {
    transform: translateY(-4px);
    border-color: rgba(81, 162, 255, 0.3);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
```

---

## Step 22 Status

Completed:

```text
Guestbook animation state ✅
Guestbook heading animation ✅
Guestbook form entrance ✅
Recent Messages entrance ✅
Input focus animation ✅
Submit button animation ✅
Guestbook message hover ✅
```

---

# Step 23 - Portfolio Background and Navigation Visual Polish

The portfolio used dark navy backgrounds, but the large sections felt slightly plain.

Added a subtle technical grid, blue background glows, a Scroll indicator, and redesigned the Header into a floating navbar.

---

## Step 23.1 - Added Technical Grid to Hero

Updated the Hero background:

```css
.hero {
    background-color: #081120;

    background-image:
        radial-gradient(
            circle at 15% 50%,
            rgba(21, 93, 252, 0.10),
            transparent 35%
        ),
        linear-gradient(
            rgba(255, 255, 255, 0.025) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.025) 1px,
            transparent 1px
        );

    background-size:
        100% 100%,
        32px 32px,
        32px 32px;
}
```

The background combines:

```text
Navy base
+
Subtle blue radial glow
+
Horizontal grid
+
Vertical grid
```

---

## Step 23.2 - Added Softer Grid to About

Used:

```css
.about {
    background-color: #0B1422;

    background-image:
        linear-gradient(
            rgba(255, 255, 255, 0.018) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.018) 1px,
            transparent 1px
        );

    background-size: 32px 32px;
}
```

The lighter About background keeps a softer grid than the Hero.

---

## Step 23.3 - Added Grid and Glow to Showcase

Updated:

```css
.portfolio-showcase {
    background-color: #081120;

    background-image:
        radial-gradient(
            circle at 85% 30%,
            rgba(21, 93, 252, 0.07),
            transparent 30%
        ),
        linear-gradient(
            rgba(255, 255, 255, 0.02) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.02) 1px,
            transparent 1px
        );

    background-size:
        100% 100%,
        32px 32px,
        32px 32px;
}
```

---

## Step 23.4 - Added Grid to Contact

Updated:

```css
.contact {
    background-color: #0B1422;

    background-image:
        linear-gradient(
            rgba(255, 255, 255, 0.018) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.018) 1px,
            transparent 1px
        );

    background-size: 32px 32px;
}
```

---

## Step 23.5 - Added Grid and Glow to Guestbook

Updated:

```css
.guestbook {
    background-color: #081120;

    background-image:
        radial-gradient(
            circle at 15% 70%,
            rgba(21, 93, 252, 0.06),
            transparent 30%
        ),
        linear-gradient(
            rgba(255, 255, 255, 0.02) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.02) 1px,
            transparent 1px
        );

    background-size:
        100% 100%,
        32px 32px,
        32px 32px;
}
```

---

## Step 23.6 - Added Hero Scroll Indicator

Added inside `Hero.jsx`:

```jsx
<div className="hero-scroll">
    <span>SCROLL</span>
    <i className="bi bi-arrow-down"></i>
</div>
```

Made Hero relative:

```css
.hero {
    position: relative;
}
```

Styled:

```css
.hero-scroll {
    position: absolute;
    bottom: 24px;
    left: 50%;

    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    color: #62748E;

    font-family: "Inter", sans-serif;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 2px;
}
```

---

## Step 23.7 - Animated Scroll Arrow

Added:

```css
.hero-scroll i {
    font-size: 16px;

    animation: scrollArrow 1.5s ease-in-out infinite;
}
```

Created:

```css
@keyframes scrollArrow {
    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(6px);
    }
}
```

The arrow gently moves down and back up to indicate that more content exists below the Hero.

---

## Step 23.8 - Redesigned Header Into Floating Navbar

Changed the outer Header:

```css
.site-header {
    background-color: transparent;
    padding: 14px 0;
    width: 100%;

    font-family: "Inter", sans-serif;

    position: sticky;
    top: 0;
    z-index: 1000;
}
```

Removed the old full-width solid Header appearance.

---

## Step 23.9 - Styled Floating Navbar Container

Styled the Bootstrap container itself as the visible navigation bar.

```css
/* Floating rounded navigation container. */
.site-header .container {
    position: relative;
    max-width: 95%;

    padding: 12px 22px;

    background-color: rgba(8, 17, 32, 0.92);

    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: 28px;

    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.22);

    backdrop-filter: blur(12px);

    transition:
        border-color 300ms ease,
        box-shadow 300ms ease;
}
```

Using:

```css
max-width: 95%;
```

creates a small gap between the navbar and the browser edges.

---

## Step 23.10 - Added Navbar Container Hover

Added:

```css
.site-header .container:hover {
    border-color: rgba(81, 162, 255, 0.20);
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.28);
}
```

The navbar gets slightly more depth without physically moving.

---

## Step 23.11 - Improved Navigation Link Hover

Updated:

```css
.nav-list a {
    display: inline-block;

    color: #90A1B9;
    font-size: 14px;
    font-weight: 500;

    transition:
        color 250ms ease,
        transform 250ms ease;
}
```

Updated hover:

```css
.nav-list a:hover {
    color: #FFFFFF;
    transform: translateY(-2px);
}
```

---

## Step 23.12 - Added Logo Hover Interaction

Added:

```css
.logo-icon {
    transition:
        transform 250ms ease,
        box-shadow 250ms ease;
}
```

Then:

```css
.header-brand:hover .logo-icon {
    transform: rotate(-5deg) scale(1.06);
    box-shadow: 0 6px 14px rgba(21, 93, 252, 0.55);
}
```

Added:

```css
.logo-name {
    transition: color 250ms ease;
}
```

Then:

```css
.header-brand:hover .logo-name {
    color: #FFFFFF;
}
```

---

## Step 23.13 - Improved Let's Talk Button Hover

Updated:

```css
.lets-talk-btn {
    background-color: #155DFC;
    border-radius: 8px;
    color: white;

    padding: 8px 20px;
    font-size: 14px;

    box-shadow: 0 4px 8px rgba(21, 93, 252, 0.4);

    transition:
        transform 250ms ease,
        background-color 250ms ease,
        box-shadow 250ms ease;
}
```

Updated hover:

```css
.lets-talk-btn:hover {
    color: #FFFFFF;
    background-color: #2B7FFF;

    transform: translateY(-2px);

    box-shadow: 0 8px 20px rgba(21, 93, 252, 0.45);
}
```

The previous black hover text was removed.

---

## Step 23.14 - Improved Hamburger Hover

Added:

```css
.menu-toggle {
    cursor: pointer;

    transition:
        border-color 250ms ease,
        background-color 250ms ease;
}
```

Added:

```css
.menu-toggle:hover {
    border-color: rgba(81, 162, 255, 0.4);
    background-color: rgba(81, 162, 255, 0.08);
}
```

Updated:

```css
.menu-toggle span {
    transition: transform 250ms ease;
}
```

Then:

```css
.menu-toggle:hover span {
    transform: scaleX(0.85);
}
```

---

# Step 24 - Replay Section Animations When Re-entering the Screen

The earlier scroll animation logic only changed state from:

```text
false
→ true
```

Once an animation ran, the state remained true.

This meant returning to the section did not replay the animation.

The new goal was:

```text
Section enters screen
→ true
→ animation

Section leaves screen
→ false

Section enters again
→ true
→ animation again
```

The Hero was intentionally left unchanged because the Hero animation is connected to the Intro sequence.

---

## Step 24.1 - Replaced Fixed About Scroll Number

The previous About logic used:

```jsx
if (window.scrollY > 500) {
    setAboutVisible(true);
}
```

Replaced it with:

```jsx
useEffect(() => {

    // Runs whenever the user scrolls the page.
    function handleScroll() {

        const aboutSection = document.getElementById("about");

        if (!aboutSection) {
            return;
        }

        const sectionPosition = aboutSection.getBoundingClientRect();

        // Starts the animation when the section enters the visible screen.
        if (
            sectionPosition.top < window.innerHeight * 0.8 &&
            sectionPosition.bottom > 0
        ) {
            setAboutVisible(true);
        } else {
            setAboutVisible(false);
        }
    }

    window.addEventListener("scroll", handleScroll);

    // Checks the section once when the component first loads.
    handleScroll();

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, []);
```

---

## Step 24.2 - Used getBoundingClientRect()

Used:

```jsx
aboutSection.getBoundingClientRect();
```

This gives the current section position relative to the browser window.

Important values:

```text
top
→ position of the section's top edge

bottom
→ position of the section's bottom edge
```

---

## Step 24.3 - Used Browser Height as Animation Trigger

Used:

```jsx
window.innerHeight
```

to determine the height of the visible browser area.

The condition:

```jsx
sectionPosition.top < window.innerHeight * 0.8
```

means the animation starts before the section reaches the very top of the browser.

Also used:

```jsx
sectionPosition.bottom > 0
```

so the animation state resets once the section completely leaves the top of the screen.

---

## Step 24.4 - Updated Portfolio Showcase Re-entry Animation

Replaced the fixed Showcase scroll value with:

```jsx
useEffect(() => {

    function handleScroll() {

        const showcaseSection =
            document.getElementById("showcase");

        if (!showcaseSection) {
            return;
        }

        const sectionPosition =
            showcaseSection.getBoundingClientRect();

        if (
            sectionPosition.top < window.innerHeight * 0.8 &&
            sectionPosition.bottom > 0
        ) {
            setShowcaseVisible(true);
        } else {
            setShowcaseVisible(false);
        }
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, []);
```

The Showcase animations can now replay when returning to the section.

---

## Step 24.5 - Updated Contact Re-entry Animation

Replaced the fixed Contact scroll position with:

```jsx
useEffect(() => {

    function handleScroll() {

        const contactSection =
            document.getElementById("contact");

        if (!contactSection) {
            return;
        }

        const sectionPosition =
            contactSection.getBoundingClientRect();

        if (
            sectionPosition.top < window.innerHeight * 0.8 &&
            sectionPosition.bottom > 0
        ) {
            setContactVisible(true);
        } else {
            setContactVisible(false);
        }
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, []);
```

---

## Step 24.6 - Updated Guestbook Re-entry Animation

Replaced the fixed Guestbook scroll number with:

```jsx
useEffect(() => {

    function handleScroll() {

        const guestbookSection =
            document.getElementById("guestbook");

        if (!guestbookSection) {
            return;
        }

        const sectionPosition =
            guestbookSection.getBoundingClientRect();

        if (
            sectionPosition.top < window.innerHeight * 0.8 &&
            sectionPosition.bottom > 0
        ) {
            setGuestbookVisible(true);
        } else {
            setGuestbookVisible(false);
        }
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, []);
```

---

## Step 24.7 - Final Scroll Animation Behaviour

The current site animation behaviour is:

```text
HERO
→ Intro-triggered animation only

ABOUT
→ Animates when entering
→ Resets when leaving
→ Animates again when returning

PORTFOLIO SHOWCASE
→ Animates when entering
→ Resets when leaving
→ Animates again when returning

CONTACT
→ Animates when entering
→ Resets when leaving
→ Animates again when returning

GUESTBOOK
→ Animates when entering
→ Resets when leaving
→ Animates again when returning
```

---

# Step 24 Status

Completed:

```text
Removed fixed About scroll trigger ✅
Removed fixed Showcase scroll trigger ✅
Removed fixed Contact scroll trigger ✅
Removed fixed Guestbook scroll trigger ✅
Added getBoundingClientRect() ✅
Added viewport-based animation detection ✅
Added animation reset when sections leave ✅
Added replay when sections return ✅
Kept Hero Intro animation separate ✅
```

---

# Current Portfolio Visual / Animation Status

```text
INTRO
✅ Welcome screen
✅ Intro animation
✅ Hero transition

HEADER
✅ Floating rounded navbar
✅ Transparent outer Header
✅ Glass-style background
✅ Rounded border
✅ Navbar hover
✅ Nav link hover
✅ Logo hover
✅ Let's Talk hover
✅ Animated mobile menu

HERO
✅ Grid background
✅ Blue glow
✅ Animated text entrance
✅ Typing developer roles
✅ Hanging ID card
✅ Dynamic lanyard
✅ Draggable badge
✅ Badge drop
✅ Badge swing
✅ Scroll indicator
✅ Animated Scroll arrow

ABOUT
✅ Entrance animation
✅ Staggered text
✅ Image entrance
✅ Info row entrance
✅ Statistics entrance
✅ Hover interactions
✅ Replays when returning

PORTFOLIO SHOWCASE
✅ Entrance animation
✅ Shared tab state
✅ Header-controlled tabs
✅ Sliding active tab
✅ Tab content animation
✅ Projects View More
✅ Certifications View More
✅ Expansion animation
✅ Mobile slider
✅ Replays when returning

CONTACT
✅ Entrance animation
✅ Left/right card movement
✅ Detail hover
✅ Social hover
✅ Input focus
✅ Submit hover
✅ Replays when returning

GUESTBOOK
✅ Entrance animation
✅ Form movement
✅ Recent Messages movement
✅ Input focus
✅ Submit hover
✅ Guestbook card hover
✅ Replays when returning

BACKGROUND
✅ Alternating navy shades
✅ Technical grid
✅ Subtle radial blue glows
✅ More visual depth
```

---

## Git Checkpoint - Portfolio Animation and Visual Polish

Run:

```bash
git status
git add .
git commit -m "Polish portfolio animations and visual design"
git push
```

---

## Concepts Practiced

React:

```text
useState()
useEffect()
Shared state
Lifting state up
Props
Conditional rendering
Conditional class names
Array map()
Array slice()
React key
DOM element selection
getBoundingClientRect()
```

CSS:

```text
@keyframes
animation
animation-delay
opacity
transform
translateX()
translateY()
scale()
rotate()
transition
radial-gradient()
linear-gradient()
background-size
backdrop-filter
z-index
absolute positioning
relative positioning
responsive media queries
scroll-behavior
```

---

### Next

Continue with the final portfolio cleanup:

```text
Footer polish
Real GitHub link
Real LinkedIn link
Email links
Resume / CV file
Final mobile testing
API loading states
API error states
Accessibility check
Deployment preparation
Final README update
```

# Step 25 - Projects API Loading and Error Handling

## Goal

Improve the Projects section so the UI properly handles all API states:

```text
Loading
Success
Error
Empty projects
```

Previously, the Projects component fetched project data from the API but did not clearly handle loading or failed requests.

---

# Projects API

The portfolio Projects section loads its project data from the deployed backend API.

Environment variable:

```env
VITE_API_URL=<portfolio-api-url>
```

API request:

```js
fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
```

This keeps the API URL outside the component and allows different URLs to be used for development and production.

---

# Projects State

The component now uses four pieces of state:

```jsx
const [projects, setProjects] = useState([]);
const [showAllProjects, setShowAllProjects] = useState(false);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
```

Purpose:

```text
projects
Stores the projects returned by the API.

showAllProjects
Controls whether the first two projects or all projects are displayed.

loading
Tracks whether the API request is still running.

error
Stores a user-friendly message if loading the projects fails.
```

---

# Loading State

Added:

```jsx
const [loading, setLoading] = useState(true);
```

It starts as:

```js
true
```

because when the component first loads, the API request has not finished yet.

The UI checks:

```jsx
{loading && (
    <p className="projects-status">
        Loading Projects...
    </p>
)}
```

Meaning:

```text
If loading is true
→ display "Loading Projects..."
```

---

# Error State

Added:

```jsx
const [error, setError] = useState("");
```

An empty string means there is currently no error.

If the API request fails:

```jsx
setError("Unable to load projects");
```

The UI checks:

```jsx
{error && (
    <p className="projects-status projects-error">
        {error}
    </p>
)}
```

Meaning:

```text
If error contains a value
→ display the error message
```

---

# Fetch Request

The Projects API request is run inside `useEffect()`:

```jsx
useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)

        .then((response) => {

            if (!response.ok) {
                throw new Error("Unable to load projects.");
            }

            return response.json();
        })

        .then((data) => {
            setProjects(data);
        })

        .catch((error) => {

            console.error("Projects fetch error: ", error);

            setError("Unable to load projects");
        })

        .finally(() => {
            setLoading(false);
        });

}, []);
```

---

# Checking `response.ok`

`fetch()` does not automatically treat HTTP errors such as:

```text
404
500
503
```

as rejected Promises.

Because of this, the response must be checked manually:

```jsx
if (!response.ok) {
    throw new Error("Unable to load projects.");
}
```

`response.ok` is true for successful HTTP responses.

The `!` means NOT.

Therefore:

```js
!response.ok
```

means:

```text
The response was NOT successful.
```

When this happens:

```jsx
throw new Error("Unable to load projects.");
```

stops the normal Promise chain and transfers control to `.catch()`.

---

# Converting JSON

After a successful response:

```jsx
return response.json();
```

converts the JSON returned by the API into JavaScript data.

That data is passed to the next `.then()`:

```jsx
.then((data) => {
    setProjects(data);
})
```

The API project array is therefore stored inside React state.

---

# Catching API Errors

Added:

```jsx
.catch((error) => {

    console.error("Projects fetch error: ", error);

    setError("Unable to load projects");
})
```

Two different things happen here.

Developer debugging:

```jsx
console.error("Projects fetch error: ", error);
```

This allows the real JavaScript/API error to be inspected in the browser console.

User feedback:

```jsx
setError("Unable to load projects");
```

This gives visitors a simple message instead of displaying technical error information.

---

# `.finally()`

Added:

```jsx
.finally(() => {
    setLoading(false);
});
```

`.finally()` runs whether the request:

```text
Succeeds
or
Fails
```

Therefore loading always ends after the request finishes.

Flow:

```text
Component loads
↓
loading = true
↓
API request starts
↓
Request succeeds OR fails
↓
.finally()
↓
loading = false
```

---

# Successful Projects Rendering

Normal project content should only appear when:

```text
The request is finished
AND
there is no error
```

Added:

```jsx
{!loading && !error && (
    <>
        ...
    </>
)}
```

Meaning:

```text
!loading
→ loading is false

!error
→ there is no error

&&
→ both conditions must be true
```

Therefore:

```text
Not loading AND no error
→ display Projects UI
```

---

# React Fragment

The successful state contains both:

```text
Projects grid
View More button
```

They need to be grouped together.

Instead of adding an unnecessary `<div>`, a React Fragment is used:

```jsx
<>
    ...
</>
```

A Fragment groups multiple JSX elements without creating another HTML element in the DOM.

Example:

```jsx
<>
    <div className="projects-grid">
        ...
    </div>

    <button>
        View More
    </button>
</>
```

---

# Project Array Rendering

Projects are rendered using:

```jsx
{projects
    .slice(0, showAllProjects ? projects.length : 2)
    .map((project) => {
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

The logic has two main stages:

```text
.slice()
↓
Select which projects should be displayed

.map()
↓
Turn every selected project into a ProjectCard
```

---

# `.slice()`

Used:

```jsx
.slice(0, showAllProjects ? projects.length : 2)
```

When:

```js
showAllProjects === false
```

the expression becomes:

```jsx
.slice(0, 2)
```

Only the first two projects are selected.

When:

```js
showAllProjects === true
```

it becomes:

```jsx
.slice(0, projects.length)
```

All projects are selected.

---

# `.map()`

After `.slice()` chooses the projects, `.map()` loops through them.

```jsx
.map((project) => {
```

`project` represents the current project object.

Example:

```js
project = {
    _id: "...",
    title: "PhotoScout",
    description: "...",
    technologies: [...]
}
```

Properties are accessed using:

```js
project.title
project.description
project.technologies
```

They are passed to `ProjectCard` as props:

```jsx
<ProjectCard
    title={project.title}
    description={project.description}
/>
```

Flow:

```text
API
↓
projects array
↓
slice selected projects
↓
map each project
↓
create ProjectCard
↓
pass project properties as props
```

---

# React Key

Each mapped component receives:

```jsx
key={project._id}
```

MongoDB `_id` values are unique.

React uses the key to identify each rendered ProjectCard.

This becomes important when projects are:

```text
Added
Removed
Changed
Reordered
```

---

# View More Button Condition

The View More button should only exist when there are more than two projects.

Added:

```jsx
{projects.length > 2 && (
    <button>
        ...
    </button>
)}
```

Meaning:

```text
If projects.length > 2
→ display button

Otherwise
→ display nothing
```

Example:

```text
2 projects
2 > 2 = false
No View More button

5 projects
5 > 2 = true
Show View More button
```

---

# View More Toggle

Button:

```jsx
onClick={() => setShowAllProjects(!showAllProjects)}
```

The `!` changes the Boolean to its opposite.

```text
false → true
true → false
```

Initially:

```js
showAllProjects = false
```

Click:

```js
setShowAllProjects(!false);
```

becomes:

```js
setShowAllProjects(true);
```

React re-renders.

The `.slice()` expression now sees:

```js
showAllProjects = true
```

and displays all projects.

Clicking again changes:

```text
true → false
```

and the list returns to the first two projects.

---

# Dynamic Button Text

Added:

```jsx
{showAllProjects
    ? "Show Less"
    : "View More Projects"}
```

Meaning:

```text
showAllProjects = false
→ View More Projects

showAllProjects = true
→ Show Less
```

---

# Dynamic Chevron

Added:

```jsx
<i
    className={`bi ${
        showAllProjects
            ? "bi-chevron-up"
            : "bi-chevron-down"
    }`}
></i>
```

When collapsed:

```text
View More Projects ↓
```

When expanded:

```text
Show Less ↑
```

---

# Dynamic Projects Grid Class

The grid uses:

```jsx
<div
    className={`projects-grid ${
        showAllProjects
            ? "projects-grid-expanded"
            : ""
    }`}
>
```

Collapsed:

```html
<div class="projects-grid">
```

Expanded:

```html
<div class="projects-grid projects-grid-expanded">
```

This allows CSS to apply different animation/layout behaviour when the project list expands.

---

# Empty Projects State

A successful API request could return:

```js
[]
```

In that case:

```js
projects.length === 0
```

Instead of displaying an empty section, show:

```jsx
{!loading && !error && projects.length === 0 && (
    <p className="projects-status">
        No projects available right now.
    </p>
)}
```

The normal grid should then check:

```jsx
!loading && !error && projects.length > 0
```

This gives the Projects component four clear UI states:

```text
1. Loading
2. Error
3. Empty
4. Success
```

---

# Final Projects.jsx

```jsx
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useState, useEffect } from "react";

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [showAllProjects, setShowAllProjects] = useState(false);

    // Track whether the projects are still being loaded from the API.
    const [loading, setLoading] = useState(true);

    // Stores an error message if the API request fails.
    const [error, setError] = useState("");

    useEffect(() => {

        // Sends a GET request to the Projects API.
        fetch(`${import.meta.env.VITE_API_URL}/api/projects`)

            // Runs when the server sends back a response.
            .then((response) => {

                // Checks if the HTTP response was unsuccessful such as 404, 500, etc.
                if (!response.ok) {

                    // Stops the normal Promise chain and sends the error to .catch().
                    throw new Error("Unable to load projects.");
                }

                // Converts the JSON response into JavaScript data
                // and passes it to the next .then().
                return response.json();
            })

            // Runs after the JSON has been successfully converted.
            .then((data) => {

                // Stores the projects returned by the API in React state.
                setProjects(data);
            })

            // Runs if the API request or any previous step fails.
            .catch((error) => {

                // Displays the actual error in the browser console for debugging.
                console.error("Projects fetch error: ", error);

                // Stores a user-friendly error message in React state.
                setError("Unable to load projects");
            })

            // Runs after the request finishes whether it succeeded or failed.
            .finally(() => {

                // Tells React that the API request is no longer loading.
                setLoading(false);
            });

    }, []);

    return (
        <div className="projects" id="projects">

            {/* Shows a message while projects are being fetched from the API. */}
            {loading && (
                <p className="projects-status">
                    Loading Projects...
                </p>
            )}

            {/* Shows an error message if the API request fails. */}
            {error && (
                <p className="projects-status projects-error">
                    {error}
                </p>
            )}

            {/* Shows a message if the API works but there are no projects. */}
            {!loading && !error && projects.length === 0 && (
                <p className="projects-status">
                    No projects available right now.
                </p>
            )}

            {/* Shows the projects after loading succeeds. */}
            {!loading && !error && projects.length > 0 && (
                <>
                    <div
                        className={`projects-grid ${
                            showAllProjects
                                ? "projects-grid-expanded"
                                : ""
                        }`}
                    >

                        {projects
                            .slice(
                                0,
                                showAllProjects
                                    ? projects.length
                                    : 2
                            )
                            .map((project) => {
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

                    </div>

                    {/* Only shows the button when there are more than 2 projects. */}
                    {projects.length > 2 && (
                        <button
                            type="button"
                            className="projects-view-more-btn"
                            onClick={() =>
                                setShowAllProjects(!showAllProjects)
                            }
                        >
                            {showAllProjects
                                ? "Show Less"
                                : "View More Projects"}

                            <i
                                className={`bi ${
                                    showAllProjects
                                        ? "bi-chevron-up"
                                        : "bi-chevron-down"
                                }`}
                            ></i>
                        </button>
                    )}
                </>
            )}

        </div>
    );
}
```

---

# Step 25 Status

```text
Projects API integration ✅

Environment API URL ✅

Projects state ✅

Loading state ✅

HTTP response checking ✅

response.ok handling ✅

JSON conversion ✅

API error catching ✅

Developer console error ✅

User-friendly error message ✅

.finally() loading reset ✅

Success-state conditional rendering ✅

Empty-state handling ✅

React Fragment ✅

Projects array mapping ✅

Projects array slicing ✅

ProjectCard props ✅

React key using MongoDB _id ✅

View More conditional rendering ✅

View More / Show Less state toggle ✅

Dynamic button label ✅

Dynamic chevron ✅

Expanded grid class ✅
```

---

# API State Flow

```text
Projects component mounts
        ↓
loading = true
        ↓
GET /api/projects
        ↓
        ├── Success
        │      ↓
        │ response.json()
        │      ↓
        │ setProjects(data)
        │      ↓
        │ .finally()
        │      ↓
        │ loading = false
        │      ↓
        │ Projects render
        │
        └── Failure
               ↓
          throw Error / fetch error
               ↓
            .catch()
               ↓
        setError("Unable to load projects")
               ↓
            .finally()
               ↓
          loading = false
               ↓
        Error message renders
```

---

# Concepts Practiced

```text
useState()

useEffect()

fetch()

Promises

.then()

.catch()

.finally()

response.ok

throw new Error()

response.json()

Environment variables

Conditional rendering

&& operator

! operator

Ternary operator

React Fragments

Array .slice()

Array .map()

React keys

Component props

State-driven UI

API loading states

API error states

API empty states
```

---

# Git Checkpoint - Projects API Error Handling

Before committing:

```bash
git status
```

Then:

```bash
git add .
```

Commit:

```bash
git commit -m "Add project API loading and error states"
```

Push:

```bash
git push
```

---

# Current Portfolio Final Cleanup

```text
Footer polish
Real GitHub link
Real LinkedIn link
Email links
Resume / CV file
Final mobile testing
Projects API loading state ✅
Projects API error state ✅
Projects API empty state ✅
Other API loading/error states
Accessibility check
Deployment preparation
Final README update
```

# Step 25.1 - Projects API Status Styling

Added CSS styling for the Projects API loading, error, and empty states.

---

## Projects Status Message

Added a shared class:

```css
/* Shared message style for loading, error, and empty project states. */
.projects-status {
    margin: 32px 0;
    padding: 16px 20px;

    color: #CBD5E1;
    background: rgba(15, 23, 42, 0.7);

    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 12px;

    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;

    text-align: center;
}
```

This class is shared by:

```text
Loading Projects...
No projects available right now.
Unable to load projects
```

The loading and empty states use the normal status appearance.

---

## Projects Error Styling

Added an additional error class:

```css
/* Extra styling only when the Projects API fails. */
.projects-error {
    color: #FCA5A5;
    background: rgba(127, 29, 29, 0.18);
    border-color: rgba(248, 113, 113, 0.3);
}
```

The JSX uses both classes:

```jsx
<p className="projects-status projects-error">
    {error}
</p>
```

This means:

```text
projects-status
↓
Provides the base status styling

projects-error
↓
Overrides the colors for an error
```

The error therefore receives a subtle red appearance while still matching the dark portfolio design.

---

## Class Name Fix

Made sure the loading state also uses:

```jsx
className="projects-status"
```

instead of:

```jsx
className="project-status"
```

This keeps the loading, error, and empty states consistent.

---

# Projects API UI States

The Projects section now visually supports all four API states:

```text
1. Loading
   ↓
   Neutral status message

2. Error
   ↓
   Red error status message

3. Empty
   ↓
   Neutral "No projects available" message

4. Success
   ↓
   Project cards + View More functionality
```

---

# Step 25.1 Status

```text
Projects loading styling ✅
Projects error styling ✅
Projects empty-state styling ✅
Shared projects-status class ✅
Error-specific projects-error class ✅
Status class naming corrected ✅
Dark portfolio styling maintained ✅
```

---

# Files Updated

```text
Projects.jsx
Projects.css
```

---

# Git Checkpoint

```bash
git status
git add .
git commit -m "Add project API loading and error states"
git push
```

# Step 26 - Skills API Loading and Error Handling

## Goal

Add complete API state handling to the Skills section so the portfolio can properly display:

```text
Loading
Success
Error
Empty skills
```

Previously, the Skills component fetched data from the API but did not handle failed requests or loading states.

---

# Skills State

The Skills component already stored API data using:

```jsx
const [skills, setSkills] = useState([]);
```

Added:

```jsx
// Tracks whether the skills are still being loaded from the API.
const [loading, setLoading] = useState(true);

// Stores an error message if the Skills API request fails.
const [error, setError] = useState("");
```

Purpose:

```text
skills
→ Stores the skills returned by the API.

loading
→ Tracks whether the API request is still running.

error
→ Stores a user-friendly message if the request fails.
```

---

# Skills API Request

The Skills API request runs inside `useEffect()`:

```jsx
useEffect(() => {

    // Sends a GET request to the Skills API.
    fetch(`${import.meta.env.VITE_API_URL}/api/skills`)

        // Runs when the server sends back a response.
        .then((response) => {

            // Checks whether the HTTP response was unsuccessful.
            if (!response.ok) {

                // Stops the normal Promise chain and sends the error to .catch().
                throw new Error("Unable to load skills.");
            }

            // Converts the JSON response into JavaScript data.
            return response.json();
        })

        // Runs after the JSON has been successfully converted.
        .then((data) => {

            // Stores the skills returned by the API in React state.
            setSkills(data);
        })

        // Runs if the API request or any previous step fails.
        .catch((error) => {

            // Shows the actual error in the browser console for debugging.
            console.error("Skills fetch error: ", error);

            // Stores a user-friendly error message.
            setError("Unable to load skills");
        })

        // Runs whether the request succeeds or fails.
        .finally(() => {

            // Tells React that loading is finished.
            setLoading(false);
        });

}, []);
```

---

# HTTP Response Check

Added:

```jsx
if (!response.ok) {
    throw new Error("Unable to load skills.");
}
```

`fetch()` does not automatically reject HTTP errors such as:

```text
404
500
503
```

Because of this, `response.ok` is checked manually.

```text
response.ok = true
→ request was successful

!response.ok = true
→ request was unsuccessful
```

If the response fails:

```jsx
throw new Error("Unable to load skills.");
```

sends the request flow to `.catch()`.

---

# Successful Response

After a successful response:

```jsx
return response.json();
```

converts the API JSON into JavaScript data.

The next `.then()` receives that data:

```jsx
.then((data) => {
    setSkills(data);
})
```

The skills array is then stored in React state.

---

# Error Handling

Added:

```jsx
.catch((error) => {

    console.error("Skills fetch error: ", error);

    setError("Unable to load skills");
})
```

Two different error outputs are used:

```text
console.error()
→ Gives the developer the real technical error.

setError()
→ Gives the portfolio visitor a clean user-friendly message.
```

---

# Loading Completion

Added:

```jsx
.finally(() => {
    setLoading(false);
});
```

`.finally()` runs whether the request:

```text
Succeeds
or
Fails
```

Flow:

```text
Component loads
↓
loading = true
↓
Skills API request
↓
Success OR Failure
↓
.finally()
↓
loading = false
```

---

# Loading State UI

Added:

```jsx
{loading && (
    <p className="skills-status">
        Loading Skills...
    </p>
)}
```

Meaning:

```text
If loading is true
→ show Loading Skills...
```

---

# Error State UI

Added:

```jsx
{error && (
    <p className="skills-status skills-error">
        {error}
    </p>
)}
```

This displays:

```text
Unable to load skills
```

when the API request fails.

---

# Empty Skills State

Added:

```jsx
{!loading && !error && skills.length === 0 && (
    <p className="skills-status">
        No skills available right now.
    </p>
)}
```

This handles the case where:

```text
API request succeeds
BUT
the API returns an empty array []
```

Instead of showing an empty section, the visitor sees a useful message.

---

# Successful Skills Rendering

The four skill categories should only render when:

```text
Loading is finished
No error exists
Skills exist
```

Added:

```jsx
{!loading && !error && skills.length > 0 && (
    <>
        ...
    </>
)}
```

Meaning:

```text
!loading
→ loading is false

!error
→ no error exists

skills.length > 0
→ at least one skill exists
```

All three conditions must be true.

---

# React Fragment

The successful state contains four sibling sections:

```text
Frontend
Backend
Databases
Tools
```

They are grouped using a Fragment:

```jsx
<>
    ...
</>
```

This allows multiple JSX elements to be grouped without adding an unnecessary `<div>` to the DOM.

---

# Skills Filtering and Mapping

The existing Skills rendering was kept.

Example:

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

Flow:

```text
skills array
↓
.filter()
↓
Select skills belonging to a category
↓
.map()
↓
Turn each skill object into a SkillCard
```

Example:

```text
Front-End
↓
Filter only Front-End skills
↓
React
JavaScript
HTML
CSS
↓
Create SkillCard for each
```

---

# Skills API Status Styling

Added shared status styling:

```css
/* Shared message style for loading, error, and empty Skills API states. */
.skills-status {
    margin: 32px 0;
    padding: 16px 20px;

    color: #CBD5E1;
    background: rgba(15, 23, 42, 0.7);

    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 12px;

    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;

    text-align: center;
}
```

This style is shared by:

```text
Loading Skills...
No skills available right now.
```

---

# Skills Error Styling

Added:

```css
/* Extra styling only when the Skills API fails. */
.skills-error {
    color: #FCA5A5;
    background: rgba(127, 29, 29, 0.18);
    border-color: rgba(248, 113, 113, 0.3);
}
```

The JSX uses:

```jsx
<p className="skills-status skills-error">
    {error}
</p>
```

Meaning:

```text
skills-status
→ Base API status styling

skills-error
→ Adds the red error appearance
```

---

# Skills API UI Flow

```text
Skills component mounts
        ↓
loading = true
        ↓
GET /api/skills
        ↓
        ├── Success
        │      ↓
        │ response.json()
        │      ↓
        │ setSkills(data)
        │      ↓
        │ .finally()
        │      ↓
        │ loading = false
        │      ↓
        │
        │ skills.length > 0
        │      ↓
        │ Render skill categories
        │
        │ OR
        │
        │ skills.length === 0
        │      ↓
        │ Show empty message
        │
        └── Failure
               ↓
          throw Error / fetch error
               ↓
             .catch()
               ↓
       setError("Unable to load skills")
               ↓
             .finally()
               ↓
          loading = false
               ↓
         Show error message
```

---

# Skills API States

```text
1. Loading
   ↓
   Loading Skills...

2. Error
   ↓
   Unable to load skills

3. Empty
   ↓
   No skills available right now.

4. Success
   ↓
   Frontend
   Backend
   Databases
   Tools
```

---

# Step 26 Status

```text
Skills API integration ✅
Skills loading state ✅
Skills error state ✅
Skills empty state ✅
response.ok check ✅
HTTP error handling ✅
throw new Error() ✅
.catch() ✅
.finally() ✅
Developer console error ✅
User-friendly error message ✅
Conditional rendering ✅
Success-state rendering ✅
React Fragment ✅
Existing filter() logic maintained ✅
Existing map() logic maintained ✅
Skills loading styling ✅
Skills error styling ✅
Skills empty-state styling ✅
```

---

# Projects Small Fix

Also completed the missing Projects empty API state:

```jsx
{!loading && !error && projects.length === 0 && (
    <p className="projects-status">
        No projects available right now.
    </p>
)}
```

Projects now also support:

```text
Loading ✅
Error ✅
Empty ✅
Success ✅
```

---

# Files Updated

```text
Projects.jsx
Projects.css
Skills.jsx
Skills.css
```

---

# Concepts Practiced

```text
useState()
useEffect()
fetch()
Promises
.then()
.catch()
.finally()
response.ok
throw new Error()
response.json()
Conditional rendering
&& operator
! operator
React Fragments
Array filter()
Array map()
React keys
API loading states
API error states
API empty states
State-driven UI
```

---

# Git Checkpoint - Projects and Skills API States

Run:

```bash
git status
```

Then:

```bash
git add .
```

Commit:

```bash
git commit -m "Add API loading and error states"
```

Push:

```bash
git push
```

---

# Current Final Cleanup

```text
Projects API loading state ✅
Projects API error state ✅
Projects API empty state ✅

Skills API loading state ✅
Skills API error state ✅
Skills API empty state ✅

Remaining API-driven sections
Footer polish
Real GitHub link
Real LinkedIn link
Email links
Resume / CV file
Final mobile testing
Accessibility check
Deployment preparation
Final README update
```

# Step 27 - Certifications API Loading and Error Handling

## Goal

Add complete API state handling to the Certifications section.

The Certifications component now handles:

```text
Loading
Error
Empty
Success
```

---

# Certifications State

Existing state:

```jsx
const [certifications, setCertifications] = useState([]);
const [showAllCertifications, setShowAllCertifications] = useState(false);
```

Added:

```jsx
// Tracks whether certifications are still being loaded from the API.
const [loading, setLoading] = useState(true);

// Stores an error message if the Certifications API request fails.
const [error, setError] = useState("");
```

Purpose:

```text
certifications
→ Stores certification data returned by the API.

showAllCertifications
→ Controls whether 2 or all certifications are displayed.

loading
→ Tracks whether the API request is still running.

error
→ Stores a user-friendly error message.
```

---

# Certifications API Request

Updated the existing `fetch()` request:

```jsx
useEffect(() => {

    // Sends a GET request to the Certifications API.
    fetch(`${import.meta.env.VITE_API_URL}/api/certifications`)

        // Runs when the server sends back a response.
        .then((response) => {

            // Checks whether the HTTP response was unsuccessful.
            if (!response.ok) {

                // Stops the normal Promise chain and sends the error to .catch().
                throw new Error("Unable to load certifications.");
            }

            // Converts the JSON response into JavaScript data.
            return response.json();
        })

        // Runs after the JSON has been successfully converted.
        .then((data) => {

            // Stores certifications returned by the API in React state.
            setCertifications(data);
        })

        // Runs if the API request or any previous step fails.
        .catch((error) => {

            // Shows the actual error in the console for debugging.
            console.error("Certifications fetch error: ", error);

            // Stores a user-friendly error message.
            setError("Unable to load certifications");
        })

        // Runs whether the request succeeds or fails.
        .finally(() => {

            // Tells React that loading is finished.
            setLoading(false);
        });

}, []);
```

---

# HTTP Error Check

Added:

```jsx
if (!response.ok) {
    throw new Error("Unable to load certifications.");
}
```

`fetch()` does not automatically reject HTTP errors such as:

```text
404
500
503
```

Therefore the response is manually checked.

```text
response.ok
→ successful HTTP response

!response.ok
→ unsuccessful HTTP response
```

If unsuccessful:

```jsx
throw new Error("Unable to load certifications.");
```

moves execution to `.catch()`.

---

# Successful API Response

After a successful response:

```jsx
return response.json();
```

converts the JSON response into JavaScript data.

Then:

```jsx
.then((data) => {
    setCertifications(data);
})
```

stores the returned certifications in state.

Flow:

```text
API response
↓
response.json()
↓
data
↓
setCertifications(data)
↓
React re-render
```

---

# Error Handling

Added:

```jsx
.catch((error) => {

    console.error("Certifications fetch error: ", error);

    setError("Unable to load certifications");
})
```

Two error outputs are used:

```text
console.error()
→ Technical information for development/debugging.

setError()
→ Simple error message for the portfolio visitor.
```

---

# Loading Completion

Added:

```jsx
.finally(() => {
    setLoading(false);
});
```

`.finally()` runs whether the request succeeds or fails.

```text
Request starts
↓
loading = true
↓
Success OR Error
↓
.finally()
↓
loading = false
```

---

# Loading UI

Added:

```jsx
{loading && (
    <p className="certifications-status">
        Loading Certifications...
    </p>
)}
```

While the API request is running:

```text
Loading Certifications...
```

is displayed.

---

# Error UI

Added:

```jsx
{error && (
    <p className="certifications-status certifications-error">
        {error}
    </p>
)}
```

If the API fails, the visitor sees:

```text
Unable to load certifications
```

---

# Empty Certifications State

Added:

```jsx
{!loading && !error && certifications.length === 0 && (
    <p className="certifications-status">
        No certifications available right now.
    </p>
)}
```

This handles a successful API request that returns:

```js
[]
```

Instead of leaving the section blank, the portfolio displays:

```text
No certifications available right now.
```

---

# Successful Certifications Rendering

The normal Certifications UI now only renders when:

```jsx
!loading && !error && certifications.length > 0
```

Used:

```jsx
{!loading && !error && certifications.length > 0 && (
    <>
        ...
    </>
)}
```

All three conditions must be true:

```text
Loading finished
AND
No error
AND
At least one certification exists
```

---

# React Fragment

The successful state contains two sibling elements:

```text
Certifications grid
View More button
```

They are grouped using:

```jsx
<>
    ...
</>
```

The Fragment groups multiple JSX elements without adding an unnecessary HTML wrapper to the DOM.

---

# Certifications Slice and Map

Existing rendering logic was maintained:

```jsx
{certifications
    .slice(
        0,
        showAllCertifications
            ? certifications.length
            : 2
    )
    .map((certification) => {
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

Flow:

```text
certifications array
↓
.slice()
↓
Choose 2 or all certifications
↓
.map()
↓
Turn each certification into a CertificationCard
```

---

# View More Logic

The button continues to render only when:

```jsx
certifications.length > 2
```

Used:

```jsx
{certifications.length > 2 && (
    <button>
        ...
    </button>
)}
```

The button toggles:

```jsx
setShowAllCertifications(!showAllCertifications)
```

Flow:

```text
false
↓
Show first 2 certifications
↓
Click View More
↓
true
↓
Show all certifications
↓
Click Show Less
↓
false
↓
Show first 2 again
```

---

# Certifications Status CSS

Added:

```css
/* Shared message style for loading, error, and empty Certifications API states. */
.certifications-status {
    margin: 32px 0;
    padding: 16px 20px;

    color: #CBD5E1;
    background: rgba(15, 23, 42, 0.7);

    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 12px;

    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;

    text-align: center;
}
```

Used for:

```text
Loading Certifications...
No certifications available right now.
```

---

# Certifications Error CSS

Added:

```css
/* Extra styling only when the Certifications API fails. */
.certifications-error {
    color: #FCA5A5;
    background: rgba(127, 29, 29, 0.18);
    border-color: rgba(248, 113, 113, 0.3);
}
```

The error element receives both:

```jsx
className="certifications-status certifications-error"
```

Meaning:

```text
certifications-status
→ Base status appearance

certifications-error
→ Error-specific color overrides
```

---

# Certifications API Flow

```text
Certifications component mounts
        ↓
loading = true
        ↓
GET /api/certifications
        ↓
        ├── SUCCESS
        │      ↓
        │ response.ok
        │      ↓
        │ response.json()
        │      ↓
        │ setCertifications(data)
        │      ↓
        │ .finally()
        │      ↓
        │ loading = false
        │      ↓
        │
        │ certifications.length > 0
        │      ↓
        │ Show certification cards
        │
        │ OR
        │
        │ certifications.length === 0
        │      ↓
        │ Show empty message
        │
        └── FAILURE
               ↓
         !response.ok / network error
               ↓
         throw new Error()
               ↓
             .catch()
               ↓
       setError("Unable to load certifications")
               ↓
             .finally()
               ↓
          loading = false
               ↓
          Show error message
```

---

# Consistent GET API Handling

All three portfolio GET API sections now use the same pattern:

```text
PROJECTS
├── Loading ✅
├── Error ✅
├── Empty ✅
└── Success ✅

SKILLS
├── Loading ✅
├── Error ✅
├── Empty ✅
└── Success ✅

CERTIFICATIONS
├── Loading ✅
├── Error ✅
├── Empty ✅
└── Success ✅
```

---

# Step 27 Status

```text
Certifications loading state ✅
Certifications error state ✅
Certifications empty state ✅
response.ok check ✅
throw new Error() ✅
.catch() ✅
.finally() ✅
Developer console error ✅
User-friendly error message ✅
Conditional rendering ✅
React Fragment ✅
Existing slice() logic maintained ✅
Existing map() logic maintained ✅
Existing View More functionality maintained ✅
Status CSS ✅
Error CSS ✅
Consistent API state design ✅
```

---

# Files Updated

```text
Certifications.jsx
Certifications.css
```

---

# Concepts Reinforced

```text
useState()
useEffect()
fetch()
response.ok
response.json()
Promises
.then()
.catch()
.finally()
throw new Error()
Conditional rendering
&& operator
! operator
React Fragment
Array slice()
Array map()
React keys
API loading states
API error states
API empty states
State-driven UI
```

---

# Git Checkpoint

Check changes:

```bash
git status
```

Stage:

```bash
git add .
```

Commit:

```bash
git commit -m "Add certification API loading and error states"
```

Push:

```bash
git push
```

---

# Current API Handling Status

```text
Projects GET API ✅
Skills GET API ✅
Certifications GET API ✅

Next:
Contact POST API
Guestbook GET/POST API
```