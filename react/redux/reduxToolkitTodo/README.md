# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Setup

* Install vite 
    - npm create vite@latest 
    -    change project name 
    -    choose react 
    -    choose javascript
    - cd `project_name`  

### Install basic react dependencies

* npm install 
* npm run dev (project is live)

## Install redux using following

1) `npm install @reduxjs/toolkit`

2)  `npm install react-redux`

#### Redux inside configuration

- create new app directory and create store.js file
- now configureStore import inside store.js `import {configureStore} from '@reduxjs/toolkit';`

- create reducers called as slices 

