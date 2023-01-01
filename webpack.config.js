const path = require('path');

module.exports = {
    entry: './src/gameLoop.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};