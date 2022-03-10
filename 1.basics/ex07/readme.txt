ex07 : ex00.cra Reconfiguration(내가 직접 설정)

1.  설치
    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader
    $ npm i react react-dom
    $ npm i -D @babel/core @babel/cli @babel/preset-env @babel/preset-react
    $ npm i -D babel-loader

2. babel.config.json 설정
    webpack.config.js 설정

3. npm 스크립팅
 "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack "
  },

4. 실행
  $ 