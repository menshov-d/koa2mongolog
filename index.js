"use strict";

const onFinished = require("on-finished");
const mongoClient = require('mongodb').MongoClient;


/**
 * 
 * koa2 request/response logger function
 * @param {Object} options object containing the parameters
 * @param {String} options.url mongodb connection string
 * @param {String} options.db mongodb log database name
 * @param {String} options.collection mongodb log collection name
 */
module.exports = function(options) {
    var url = options.url || 'mongodb://localhost:27017/';
    var db = options.db || 'logs';
    var collection = options.collection || 'httplogs';
    return async function logger(ctx,next) {
        var err;
        try {
            await next();
        } catch (e) {
            err = e;
        } finally {
            onFinished(ctx.response,async () => {
                var logObj = {
                    url: ctx.request.href,
                    method: ctx.request.method,
                    status: ctx.status,
                    request: ctx.request.body,
                    response: ctx.response.body,
                    user_agent: ctx.header['user-agent'],
                    event_time: new Date()
                };

                if (typeof ctx.header['remoteip'] != undefined) {
                    logObj['remote_addr'] = ctx.header['remoteip'];
                } else if (ctx.get('X-Forwarded-For') != '') {
                    let forwardedIpsStr = ctx.get('X-Forwarded-For');
                    let forwardedIp = forwardedIpsStr.split(',')[0];
                    logObj['remote_addr'] = forwardedIp;
                }
                var client = await mongoClient.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true });
                var dbo = await client.db(db);
                await dbo.collection(collection).insertOne(logObj);
                await client.close();
            });
        }

        if (err) {
            throw err;
        }
    }
};
