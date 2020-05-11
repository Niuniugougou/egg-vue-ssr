const Service = require('egg').Service;
class IndexService extends Service {
    //文章列表
    async getArticle(limitSize,page) {
        let { app } = this;
        const total = await app.mysql.query(`select COUNT(*) as total from tb_article`);
        const dataList = await app.mysql.query(`select * from tb_article where id in (select id from tb_article order by id) limit ${limitSize};`);
        return {
            code: 200,
            status: "success",
            dataList,
            page,
            limitSize,
            total: total[0].total
        };
    }
    getArtilceList() {
        return {
            total:'20',
            list:[
                {
                    id:'11011',
                    title:"一份关于vue-cli3项目常用项配置",
                    url:'www.baidu.com',
                    author: 'tix',
                    date: '2020年4月29日 22:43',
                    articleType: '前端学习',
                    imgurl: ''
                },
                {
                    id:'11012',
                    title:"一份关于vue-cli3项目常用项配置",
                    url:'www.baidu.com',
                    author: 'tix',
                    date: '2020年4月29日 22:43',
                    articleType: '前端学习',
                    imgurl: ''
                }
            ]
        }

    }
}
module.exports = IndexService;