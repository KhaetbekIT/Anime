const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        admin: './admin.js',
        anime_details: './anime-details.js',
        categories: './categories.js',
        index: "./index.js",
        login: "./login.js",
        ["sign-up"]: "./sign-up.js"

    },
    output: {
        filename: './js/[name].js',
        path: path.resolve(__dirname, './')
    },
    devServer: {
        hot: true,
        static: {
            directory: './',
            watch: true
        }
    }
};