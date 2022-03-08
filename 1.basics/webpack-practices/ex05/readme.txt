SASS 모듈 번들링하기

1. 설치패키지
    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader

2. SASS/SCSS Loader 설정(web.config.js)
    module: {
        rules:[{
            test: /\.(sa|sc|c)ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }

3.  개발서버 실행
    $ npm start