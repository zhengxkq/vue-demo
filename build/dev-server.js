var config = require('../config')
if(!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.NODE_ENV)
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

var port = process.env.PORT || config.dev.port

var server = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler,{
    publicPath:webpackConfig.output.publicPath,
    stats:{
        colors:true,
        chunks:false
    }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)

compiler.plugin('compilation', function(compilation){
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb){
        hotMiddleware.publish({
            action:'reload'
        })
        cb()
    })
})

var context = config.dev.context

switch(process.env.NODE_ENV){
    case 'local':
        var proxypath = 'http://localhost:8001';
        break;
    case 'online':
        var proxypath = 'http://cangdu.org:8001';
        break;
    default:
        var proxypath = config.dev.proxypath;
}

var options ={
    target:proxypath,
    changeOrigin:true
}

if(context.length){
    server.use(proxyMiddleware(context, options))
}

server.use(require('connect-history-api-fallback')())

server.use(devMiddleware)

server.use(hotMiddleware)

var staticPath = path.posix.join(config.dev.assetsPublicPath,config.dev.assetsSubDirectory)

server.use(staticPath, express.static('./static'))

module.exports = server.listen(port, function(err){
    if(err){
        console.log(err)
        return
    }

    var uri = 'http://localhost:' + port
    console.log('Listing at ' + uri + '\n')

    if(process.env.NODE_ENV !== 'testing'){
        opn(uri)
    }
})






















