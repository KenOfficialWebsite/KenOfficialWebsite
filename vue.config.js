module.exports = {
    outputDir: 'docs',
    publicPath: process.env.NODE_ENV === "production" ? "/SHELTER-ZONE" : "/"
}
module.exports = {
  devServer: {
    disableHostCheck: true
  }
}