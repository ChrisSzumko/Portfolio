const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  publicPath: '/static/vue_app/', // Should be STATIC_URL + path/to/build
  outputDir: path.resolve(__dirname, '../static/vue_app/'), // Output to a directory in STATICFILES_DIRS
  filenameHashing: false, // Django will hash file names, not webpack
  runtimeCompiler: true, // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  devServer: {
    devMiddleware: {
      writeToDisk: true // Write files to disk in dev mode, so Django can serve the assets
    },
  }
})
