1. 설치
  $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader
  $ npm i react react-dom

2. 설정
  config/babel.config.json
  config/webpack.config.js

3. npm 스크립팅
"scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
    "build": "npx webpack"
  },

4. 실행
  $ npm run debug