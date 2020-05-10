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
            list:[
                {summary:'summary',title:"hello",url:'www.baidu.com',total:'20'}
            ]
        }

    }
}
module.exports = IndexService;