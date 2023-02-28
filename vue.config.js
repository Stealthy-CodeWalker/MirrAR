const { defineConfig } = require('@vue/cli-service')
module.exports=defineConfig({
    transpileDependencies: true
})
module.exports= {
    devServer:{
        host:'80',
        port: 443,
        https: true,
        host: dev.srm.com
    }
}