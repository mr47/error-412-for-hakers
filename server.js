const serve = require('serve');
const path = require('path');

const server = serve(path.resolve(__dirname, './build/'), {
    port: 1337,
    ignore: ['node_modules']
});