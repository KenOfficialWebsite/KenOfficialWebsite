module.exports = {
    outputDir: 'docs',
    publicPath: process.env.NODE_ENV === "production" ? "/KenOfficialWebsite" : "/"
}
module.exports = {
  devServer: {
    disableHostCheck: true
  }
}