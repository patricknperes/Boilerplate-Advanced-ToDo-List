# ✅ Advanced To-Do List

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"      title="React"     alt="React"     width="40" height="40" />&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/meteor/meteor-original.svg"             title="Meteor"    alt="Meteor"    width="40" height="40" />&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"  title="Mongo"     alt="Mongo"     width="40" height="40" />&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"     title="Material"  alt="Material"  width="40" height="40" />&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"     title="TS"        alt="TS"        width="40" height="40" />&nbsp;
</div>

<br/>

🌐 [Leia em Português](README.md)

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Run](#how-to-run)
- [Demo](#demo)
  - [Desktop](#desktop)
  - [Mobile](#mobile)

## About the Project

Advanced To-Do List is a web application for task management developed with Meteor and React, using the Synergia Boilerplate. The system offers task management with user authentication, categorization, and filters.

## Features

### Authentication and Security

- Complete login and password system
- Restricted access to authenticated users
- Permission management based on task ownership

### Welcome Screen

- Display of the 5 most recently added/updated tasks
- Quick access button to task list
- Navigation menu between modules

### Task Management

- Creation, editing, viewing, and deletion of tasks
- Marking tasks as completed or pending
- Option to set tasks as personal (visible only to the creator)

### Interface and Usability

- Search field for filtering tasks by description
- Responsive design adapted for mobile devices
- Modern interface using Material-UI
- Feedback notifications when performing operations

## Technologies Used

- [Meteor](https://www.meteor.com/) - Full-stack JavaScript framework
- [React](https://reactjs.org/) - Library for building interfaces
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Material-UI](https://material-ui.com/) - React components framework
- [MeteorReactBaseMUI](https://github.com/synergia-labs/MeteorReactBaseMUI) - Boilerplate for development with Meteor and React

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/GabrielFrazz/MeteorReactBaseMUI-Advanced-ToDo.git
cd MeteorReactBaseMUI-Advanced-ToDo
```

2. Install dependencies:

```bash
npm install
```

3. Start the application:

```bash
meteor run
```

4. Access the application in your browser:

```
http://localhost:3000
```

## Demo

### Desktop

![Advanced To-Do List Demo](assets/2025-04-29%2016-58-54.gif)

### Mobile

<table>
  <tr>
    <td width="320" align="center">
      <img src="assets/mobileview.gif" alt="Demonstração Mobile do Advanced To-Do List" width="280" />
    </td>
    <td>
       <p>The mobile version maintains all the functionality of the desktop application in an interface adapted for smaller screens, providing a fluid experience on smartphones and tablets.</p>
    </td>
  </tr>
</table>
