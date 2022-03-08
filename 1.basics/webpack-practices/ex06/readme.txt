이미지 모듈 번들링하기

1. 설치패키지
    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader

2. SASS/SCSS Loader 설정(web.config.js)
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    }

    module: {
        rules:[{
            test: /\.(sa|sc|c)ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|git|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }]
    }

3.  개발서버 실행
    $ npm start