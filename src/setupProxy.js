const { createProxyMiddleware } = require("http-proxy-middleware");

/* CORS 에러를 해결하는 방법 
1. 보통 서버에서 응답 헤더의 Access-Control-Allow-Origin 필드를 설정해서 해결해줌
2. 클라이언트에서 Proxy 설정해서 CORS 에러 우회하는 방법

이 코드는 (2)번 방법입니다.
여러분들의 학습을 위해 남겨놓겠슴둥...
*/
module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/", "/api"], {
      target: "http://3.34.143.154:8080",
      changeOrigin: true,
    })
  );
};
