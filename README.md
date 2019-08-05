# React Exercise - Full Stack JavaScript Techdegree

### Scoreboard application
This project is built using React to create a simple scoreboard application.

***

## View project
:mag: Live version available at [nickhericks.github.io/reactScoreboard/](https://nickhericks.github.io/reactScoreboard/)

<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1565020756/portfolio/scoreboard.png" width="899px">

<!-- ## Project objective
This project was built as I was learning about the Express web framework and the Pug templating engine. Through this project I learned about the request and response objects, body-parser, routes, templates, middleware, cookies (cookie-parser) redirects, error handling, modularizing routes, route parameters and query strings, serving static assets with a static server, and much more. :) -->

<!-- ## Techniques and concepts
- Express web framework
- Pug templating engine -->

## Code example
```javascript
import React from 'react';
import Stats from './Stats';
import Stopwatch from "./Stopwatch";

const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};

export default Header;
```

## Acknowledgements
This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:
