# CEYEBER

![image](https://user-images.githubusercontent.com/48697281/97161243-723aca00-1775-11eb-9064-05ae5211ce54.png)

## Table of content

- [Intro](#Intro)
- [Team Roles](#Team-Roles)
- [Design Week](#Design-Week)
- [Built with](#Built-with)
- [Sprint One](#Sprint-One---Frontend)
- [Sprint Two](#Sprint-Two)
- [Installation](#Install-Locally-computer)
- [Project Status](#Project-status)
- [Bugs and Fixes](#Bugs-and-Fixes-requiring-attention-bug)

## Intro :wave:

[Link to Ceyeber Game](https://ceyeber.netlify.app/)

Web App for children between the ages of 8 - 16 years to test their critical thinking skills in cyber threats

## Team Roles

- Product Owner: Aqsa
- Scrum Facilitator: Jessica
- Quality: Jennifer
- UX/UI: My Hoa
- DevOps: Rihards

## Design Week

- [Miro](https://miro.com/app/board/o9J_kkNyd_Y=/)
- [Figma Prototype](https://www.figma.com/file/yaQqjJ4Erb8nineVf1r5SG/Ceyeber-Detective-App?node-id=176%3A434)

## Built with

- React
- JavaScript
- Miro
- Figma

### Dependencies

- Styled components
- React router

### Continous Integration

- CircleCI
- Codecov

### Tests

- Jest
- Cypress

## File Structure

- .cricleci - contains yml file with configurations for cintinouse integration
- cypress - contains end to end tests any new tests can be added to ./cypress/integration/examples path
- public - have folder which contains logo of the project which is displayed in a browser tab. Folder also contains index.html
- src
  - components - includes all the components of the game such as (forms, raiting bars, buttons, navigation menu, texts and themes)
  - images - contains all svg and jpg images of the project
  - pages - ladnig page, profile page and all the other pages goes here
  - app.js - holds all the routes and global hooks of the web app
  - app.css - have media queries, list styling and styling of images

## Sprint One - Frontend

1. Landing page - user is required to create alias, enter age and choose location
2. Rating page - user provides information about social media use and current critical thinking skills. Navigation bar with a link to training manual page and profile page and also point bar(shows current points).
3. There are three breefing pages containing instructions about a challenge
4. There are three challenges in the game
5. Badge page displays badge which user earned after succesfully resorvilng challange
6. Acceptance of the badge leads further to badgesWon page which displays avatar, all accomplished and upcoming challanges, earned badges
7. Try again page displays warning to user of what they have done wrong during the challange (user also recieves point reduction)
8. User reaches game over page if points drops below 0

### Routes

- [x] "/"
- [x] "/training-manual"
- [x] "/profile"
- [x] "/badgesWon"
- [x] "/first-case-intro"
- [x] "/first-case-task"
- [ ] "/second-case-intro"
- [x] "/second-case-task"
- [ ] "/third-case-intro"
- [x] "/third-case-task"
- [x] "/try-again"
- [x] "/badge"
- [x] "/game-over"

## Srint Two - Backend

_pending_

## Install Locally :computer:

1. Clone this repo
2. cd into repo folder
3. Run `npm install`
4. Run `npm start`

## Project status

Under development. Currently building back-end and fixing bugs

## Bugs and Fixes requiring attention :bug:

- Light/Dark background on task intro
- History state needs attention
- You can gain more than the maximum points
- Limiting lengths of inputs
- Linking all pages together
- Badges are currently hardcoded
- Task list in badgesWon page has to be styled in reverse order

## Acknowledgment

Thank you Gillian from FAC18 for helping us to improve our code base and helping us with the strategic decisions related to back end development.
