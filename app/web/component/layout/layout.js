/*
 * @Author: your name
 * @Date: 2020-04-18 23:31:45
 * @LastEditTime: 2020-04-19 19:06:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \egg\app\web\component\layout\layout.js
 */
export default function createLayout(name, components, tpl) {
    return {
        name,
        props: ['title', 'description', 'keywords'],
        components,
        computed: {
            vTitle() {
                return this.$root.title || this.title || 'IBlog';
            },
            vKeywords() {
                return this.$root.keywords || this.keywords || 'egg, typescript, vue, webpack, server side render';
            },
            vDescription() {
                return this.$root.description || this.description || 'IBlog';
            },
            baseClass() {
                return this.$root.baseClass;
            }
        },
        template: EASY_ENV_IS_BROWSER ? tpl : `<!DOCTYPE html>
                  <html lang="en">
                    <head>
                      <title>{{vTitle}}</title>
                      <meta charset="utf-8">
                      <meta http-equiv="X-UA-Compatible" content="IE=edge">
                      <meta name="keywords" :content="vKeywords">
                      <meta name="description" :content="vDescription">
                      <meta http-equiv="content-type" content="text/html;charset=utf-8">
                      <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
                      <!-- Add to home screen for Windows -->
                      <meta name="msapplication-TileImage" content="images/icons/icon-144x144.png">
                      <meta name="msapplication-TileColor" content="#2F3BA2">
                      <!-- Add to home screen for Safari on iOS -->
                      <meta name="apple-mobile-web-app-capable" content="yes">
                      <meta name="apple-mobile-web-app-status-bar-style" content="black">
                      <meta name="apple-mobile-web-app-title" content="Weather PWA">
                      <link rel="apple-touch-icon" href="/images/logo.png">
					  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
					  <link href="/public/asset/webui/pintuer-2.0.min.css?v=1" rel="stylesheet" type="text/css" />
					  <script src="/public/asset/webui/jquery-3.4.1.min.js?v=1"></script>	
                    </head>
                    <body :class="baseClass">
					  ${tpl}
					  <script src="/public/asset/webui/pintuer-2.0.min.js?v=1"></script>
                    </body>
                  </html>`,
        install(vue, options) {
            //
        }
    };
}