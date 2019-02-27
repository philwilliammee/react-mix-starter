# setup laravel mix standalone project

[Stand-Alone Project docs](https://laravel-mix.com/docs/4.0/installation), [additional info](https://myprogramming.blog/posts/setting-up-laravel-mix-for-a-react-project)

~~~bash
npm init -y
npm install --save-dev cross-env laravel-mix
cp node_modules/laravel-mix/setup/webpack.mix.js ./
~~~

You should now have the following directory structure:

* node_modules/
* package.json
* webpack.mix.js

add react dependencies

`npm install --save-dev react react-dom prop-types`

`mkdir src && touch src/app.{js,scss}`

add scripts to package.json

~~~json
 "dev": "npm run development",
      "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
      "watch": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
      "watch-poll": "npm run watch -- --watch-poll",
      "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
      "prod": "npm run production",
      "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
~~~

`npm run dev` will run and you will install additional packages

`?Finished. Please run Mix again.`

run again

`npm run dev`

You should now see:

```tree
dist/app.css
dist/app.js
dist/mix-manifest.json (Your asset dump file, which we'll discuss later.)
```

`touch index.html` and add

~~~html
<!doctype html>
<html>
    <body>
        <div id="root"></div>
        <script type="text/javascript" src="js/app.js"></script>
    </body>
</html>
~~~

add linter

`npm install --save-dev babel-eslint babel-preset-react eslint eslint-friendly-formatter eslint-loader eslint-plugin-react`

`touch eslintrc.js`

~~~js
// Pull in Laravel Mix
var mix = require('laravel-mix')

// Configure what it does
mix
  // This is required for hot reloading
  .setPublicPath('./dist')
  // Add eslint to .jsx, .js and .vue files
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.(jsx|js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          exclude: /(node_modules)/,
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        }
      ]
    },
  })
  // This will copy files from static folder
  // directly into dist folder
  .copy('src/static', 'dist')
  // This will process our entry point (app.js)
  // into the dist/js folder
  .react('src/app.js', 'dist/');
  ~~~

add .editorconfig, .gitattributes

to install
`source <(curl -s -L https://gist.githubusercontent.com/philwilliammee/5e5e8f06c8c5cd1dc820b74ef8187b88/raw/ed77ed502079145383e1ef1a2d86cf18306b39bd/rest_mix_starter_install.sh)`

maybe add eslint --init