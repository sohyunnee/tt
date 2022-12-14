const Router = require('koa-router');
const posts = new Router();

const printInfo = ctx => {
    ctx.body = {
        method: ctx.method,
        path: ctx.path,
        params: ctx.params,
    };
};

posts.get('/', printInfo);
posts.post('/', printInfo);
posts.patch('/:id', printInfo);

module.exports = posts;