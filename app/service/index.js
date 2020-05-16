const Service = require('egg').Service;
class IndexService extends Service {
    //文章列表
    async getArtilceList(limitSize,page) {
        let { app } = this;
        let page_from = (page-1)*limitSize;
        const total = await app.mysql.query(`select COUNT(*) as total from tb_article`);
        const dataList = await app.mysql.query(`select * from tb_article where id >=(select id from tb_article order by id limit ${page_from},1) order by create_time desc limit ${limitSize};`);
        return {
            code: 200,
            status: "success",
            page,
            limitSize,
            total: total[0].total,
            list: dataList
        };
    }
    async getRankList() {
        let { app } = this;
        const ranklist = await app.mysql.query(`select * from tb_article order by see_num desc limit 0,10`);
    }
}
module.exports = IndexService;