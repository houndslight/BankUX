# BankUX

## Overview

BankUX is a UX design project aimed at improving the user experience for a banking application. The project includes design research, prototyping, and implementation of a front-end prototype using standard web technologies (HTML, CSS, JavaScript).

## Table of Contents

- [Problem Statement](#problem-statement)  
- [Goals](#goals)  
- [Scope](#scope)  
- [Design Process](#design-process)  
- [Prototype](#prototype)  
- [Technologies](#technologies)  
- [How to Run](#how-to-run)  
- [Structure](#structure)  
- [Next Steps](#next-steps)  
- [Credits](#credits)  

## Problem Statement

Modern banking apps often suffer from overly complex navigation, inconsistent feedback to the user, and unclear visual hierarchy. This impedes usability, especially for non-tech-savvy users, or for tasks that are less frequently used. The BankUX project seeks to address these issues by creating a more intuitive, accessible, and streamlined UX.

## Goals

- Simplify key banking tasks (e.g. checking balance, transferring funds, viewing transaction history).  
- Improve clarity in navigation and feedback.  
- Ensure consistency in visual design (typography, color, layout).  
- Enhance accessibility (legible fonts, color contrast, keyboard navigation).  
- Prototype efficiently to test usability before committing to full implementation.

## Scope

This UX case study includes:

- User research (interviews / surveys or assumed personas).  
- Wireframes and mockups of the core flows.  
- Front-end prototype implementing selected flows.  
- Usability testing insights (if applicable).  

Out of scope for now:

- Full back-end / database integration.  
- Advanced security features beyond design considerations.  
- Mobile app implementation (focus is web prototype).

## Design Process

1. **User Research & Personas** – gathering user needs and pain points, defining target personas.  
2. **Journey Mapping** – mapping out the user steps for important tasks.  
3. **Wireframes** – low fidelity sketches to try different layouts.  
4. **Mockups / Visual Design** – applying branding, typography, color, iconography.  
5. **Prototype** – implementing interactive front-end prototype to simulate real flows.  
6. **Usability Testing** – collecting feedback from users to iterate (optional / future).  

## Prototype

The prototype demonstrates the following user flows:

- User login / authentication flow  
- Dashboard overview (balances, recent transactions)  
- Transfer funds flow  
- Viewing transaction history  
- Other auxiliary features (e.g. settings, profile)

Screens / interactions are built in HTML/CSS/JavaScript; transitions and feedback are mocked as needed to simulate realistic usage.

## Technologies

- HTML5  
- CSS3  
- JavaScript  
- Design tools used for mockups / wireframes (e.g. Figma, Sketch)  

## How to Run

To run the prototype locally:

```bash
# clone repository
git clone https://github.com/houndslight/BankUX.git

# change directory
cd BankUX

# install dependencies
npm install

# start local server
npm start
```

## Structure

```BankUX/
├── public/                # static assets, icons, images
├── src/                   # source files
│   ├── css/               # stylesheets
│   ├── js/                # scripts
│   ├── components/        # reusable UI components
│   └── pages/             # different page / view files
├── package.json           # dependencies and scripts
└── README.md              # this document
```
## Next Steps

- Conduct usability testing with real users and iterate based on feedback.

- Improve responsive design for mobile / tablet views.

- Expand design system to include more components.

- Add accessibility audit and improvements.

- Consider implementing more realistic data and interactions (e.g. API integration).

## Credits

- Design by 

- Zachary T. (houndslight)

<img width="1240" height="400" alt="sig2" src="https://github.com/user-attachments/assets/c1d86eb0-34d3-45e5-86c3-981da773c721" />
