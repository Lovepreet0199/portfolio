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