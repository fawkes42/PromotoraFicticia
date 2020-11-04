import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  border: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

:root {
  --header: #e97b48;
  --darkSand: #35241d;
  --primary: #2A7AE4;
  --black: #000000;
  --blackLighter: #9E9E9E;
  --grayLight: #F5F5F5;
  --grayMedium: #e5e5e5;
  --darkBlue: #282c34;
  --white: #FFFFFF;
}

html,
body {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/*
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


*/
`;
