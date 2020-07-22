const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/genre", {
      target: "https://api.deezer.com/",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/user", {
      target: "https://api.deezer.com/",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/oauth/", {
      target: "https://connect.deezer.com",
      changeOrigin: true,
    })
  );
};
