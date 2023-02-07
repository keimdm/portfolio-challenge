# portfolio-challenge

## Description

This Portfolio Challenge was created as part of the requirements for a Full Stack Development boot camp. Additionally, it is intended to demonstrate my abilities in HTML and CSS to potential future employers, and to contain a repository of other relevant links and information.

The Portfolio consists of 5 sections: a header, a home page, a bio, a work sectiono (the portfolio), and a contact form.

## Usage

Navigate to the deployed portfolio with the following link:

### Header
The header consists of a thin bar at the top of the window with links to the other four sections of the portfolio. When the window width is greater than 768px, the bar disappears from the top of the window and larger links appear in the home page section. In that case, once the user scrolls past the home page section and the links are no longer visible, the regular header bar reappears for easy access to the links. 

All appearances/disappearances of the header bar are animated. Additionally, the links that appear in the home page section fade to dark blue when hovered over. These links also increase in font size if the window width extends past 992 px.

### Home Page
The home page is a simple introduction to the portfolio with my name and a brief tagline, as well as the links mentioned in the previous section. The photo is displayed on a white card with rounded edges with a box shadow. There are two different formats depending on the width of the screen: when the width is less than 768 px, the tagline is broken up into bullets and postioned in the opposite corner from the title, otherwise, the tagline appears under the header with the corner space occupied by the navigation links. The font size of the tagline also increases if the window width extends past 992px.

### Bio
The Bio section consists of a photo of myself with some text. At a window width less than 768 px, these are arranged vertically and centered horizontally, with the photo expanding to a max width of 350 px. At a window width greater than 768 px, the text is positioned to the right of the photo, with the font size increasing to fill the space (and again at 992px).

### Work (Portfolio)
The Work section contains 5 links to some of my other GitHub repositories. The following are currently included:

* Music Sequencer - an application where the user can add notes to a grid and play back the result
* Table Tennis - a simple table tennis game with animation and sound effects
* Tic-Tac-Toe - a simple tic-tac-toe game incorporating JavaScript logic and a simple interface
* Pocket Calculator - a calculator program that can handle the four basic arithmetic functions and show the result in a simple display
* Blank - a placeholder for a fifth project

These links are shown as images of each of the applications and displayed on white cards with rounded corners and shadows (similar to the above Bio picture). When the user hovers over the cards, an additional tab reading "More Info" will appear - this is a placeholder for now, more information will be added in the future. This tab is animated as well on its appearance and disappearance.

The cards are arranged vertically when the window width is less than 768 px, and horizontally (with wrapping) when greater than 768 px. Additionally the first card (the Music Sequencer) is doubled in width when the cards are arranged horizontally.

### Contact

The Contact section contains a simple form to collect a user's contact information and a message. First Name, Last Name, Email Address and a Message are collected, and a Send button is shown as well.
