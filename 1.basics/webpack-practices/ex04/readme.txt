css 모듈 번들링하기

1. 설치패키지
    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader

2. css Loader 설정(web.config.js)
    module: {
        rules:[{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }]
    }

3.  개발서버 실행
    $ npm start