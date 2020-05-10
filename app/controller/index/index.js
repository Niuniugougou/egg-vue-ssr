'use strict';
const egg = require('egg');
module.exports = class IndexController extends egg.Controller {

    async index() {
        // const { ctx } = this;
        // const pageSize = ctx.request.body.pageSize;
        // const pageNum = ctx.request.body.pageNum;
        // const article = await ctx.service.index.getArticle(pageSize,pageNum);
        //这里的值会直接传递给render的页面
        let result = {
            keywords: '关键词',
            description: '描述字段',
            title: 'tix1',
            article: '123'
        };
        await this.ctx.render('index/index.js', result);
    }
    async list() {
        this.ctx.body = this.service.index.getArtilceList();
    }

};