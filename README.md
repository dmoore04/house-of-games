# House of Games React Web App 🏠

## Overview

House of Games is an interactive board game review web app. It dynamically pulls and renders data from a dedicated [PostgreSQL](https://www.postgresql.org/) database using requests to its [Back-End API](https://github.com/dmoore04/house-of-games-API). Users are able to browse, talk about and vote on reviews posted by others.

</br>

The app is built with [React](https://reactjs.org/) and implements [React Router](https://reactrouter.com/web/guides/quick-start) to deliver a responsive single-page application (SPA). Our data fetching was handled by the [Axios](https://axios-http.com/) HTTP library. The majority of the sites styling was implemented using [CSS Modules](https://github.com/css-modules/css-modules). [Google's Material UI](https://mui.com/) (MUI) was used in places to animate component transitions.

</br>

[View the site here!](https://gamehaus.netlify.app/)

---

## Technologies

_Combined with its back-end, this project implements the [PERN stack](https://www.geeksforgeeks.org/what-is-pern-stack/)._
| Technology | Description |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Node.js** | Our JavaScript runtime enviroment. Enables package integrations with [npm](https://www.npmjs.com/). |
| **React** | Our framework for building front-end user interfaces. Simplifies the development of interactive web pages. |
| **Axios** | HTTP client which connects our app to the outside world. Allows us to dynaimcally fetch data for responsive rendering. |

---

## Requirements

_Needed to run the project locally on your machine._

### Software

**Node.js [14.8.1](https://nodejs.org/en/download/) >=**

```shell
~$ node --version
v14.8.1
```

### Dependencies

```yaml
"dependencies":
  {
    "@emotion/react": "^11.5.0",
    "@emotion/styled": "^11.3.0",
    "@mui/material": "^5.0.4",
    "axios": "^0.23.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "react-spinners": "^0.11.0",
  }
```

---

## Setting it up

_If you are planning to add to this app, first fork a copy of this repo to your own GitHub account so you can push changes. Execute any commands pointing to the repo with your new URL._

### Cloning and dependencies

1. Clone the repo to your local machine </br>
   _This will create and navigate to the folder **`house-of-games`**_

```shell
~$ git clone https://github.com/dmoore04/house-of-games.git && cd house-of-games
Cloning into 'house-of-games'...
```

</br>

2. Install the npm dependencies </br>

```shell
~$ npm install

added 1950 packages, and audited 1951 packages in 16s

found 0 vulnerabilities
```

</br>

### Running the app

After installing the dependencies you now start the app locally. After doing so navigate to [localhost:3000](http://localhost:3000) to see the live app.</br>
_You can kill the site at any point using `CTRL+C`_

```shell
~$ npm start

Compiled successfully!

You can now view house-of-games in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.179:3000

_
```

</br>

## **_Thank you!_**
