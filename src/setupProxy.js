const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://sheets.googleapis.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        })
    );
};
