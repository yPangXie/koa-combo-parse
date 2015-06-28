/*
 * Author: yPangXie <pangxie.wdy@gmail.com>
 * Date: 2015-06-28
 * Des: 压缩css
 */

"use strict";

const qs = require('querystring');
const cleanCSS = require('clean-css');
const bluebird = require('bluebird');
const debug = require('debug')('koa-combo-parse:miniCSS');
const CleanCSSInstance = new cleanCSS();

module.exports = function *(source) {
    return yield new bluebird(function (resolve, reject) {
        CleanCSSInstance.minify(source, function (errors, minified) {
            if(errors) {
                return reject('');
            }
            return resolve(minified.styles);
        });
    });
};