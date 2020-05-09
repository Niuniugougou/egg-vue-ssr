/*
 * @Author: your name
 * @Date: 2020-04-18 23:31:45
 * @LastEditTime: 2020-04-18 23:38:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \egg\config\config.default.js
 */
'use strict';
const path = require('path');
const fs = require('fs');
module.exports = app => {
    const exports = {};

    exports.siteFile = {
        '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
    };

    exports.vuessr = {
        layout: path.join(app.baseDir, 'app/web/view/layout.html'),
        renderOptions: {
            basedir: path.join(app.baseDir, 'app/view')
        },
        injectRes: [

        ]
    };

    exports.logger = {
        consoleLevel: 'DEBUG',
        dir: path.join(app.baseDir, 'logs')
    };

    exports.static = {
        prefix: '/public/',
        dir: path.join(app.baseDir, 'public')
    };

    exports.keys = '123456';

    exports.middleware = [
        'appInit'
    ];

    exports.security = {
        csrf: {
            ignoreJSON: false,
            cookieName: 'csrfToken',
            sessionName: 'csrfToken',
            headerName: 'x-csrf-token'
        },
        xframe: {
            enable: false,
        },
    };

    // 配置单个数据库的连接情况
    exports.mysql = {
        client: {
        host: '139.196.83', //自己数据库地址
        port: '3306',//端口号
        user: 'niuniugougou',//用户名
        password: 'niuniugougou',//密码
        database: 'niuniugougou'//数据库
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    }

    return exports;
};