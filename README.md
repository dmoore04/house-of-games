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

### Software

**Node.js [14.8.1](https://nodejs.org/en/download/) >=**

### User dependencies

```yaml
"dependencies":
  {
    "@emotion/react": "^11.5.0",
    "@emotion/styled": "^11.3.0",
    "@mui/material": "^5.0.4",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.23.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "react-spinners": "^0.11.0",
    "web-vitals": "^1.1.2",
  }
```
