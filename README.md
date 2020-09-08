## NEXT.JS

- 參考 example 實作 next redux, saga
- 使用 custom server: express.js 和 redis 並實作 passport 驗證
- 使用 display: grid 設計 layout 並實作 RWD
- 使用 react hooks
- 使用 dev-tool: eslint, prettier 和 flow

## HOW TO DEV

- 需要先開啟本地 redis
  - `docker pull redis`
  - `docker run -p 6379:6379 -d redis`
- `yarn dev`

## 遇到的困難

- 原本想要使用 fastify.js 而不是 express 實作 passport，但是基於 passport 本來就是 base on express 開發的，所以放棄使用 fastify
  - 雖然 fastify 可以使用 middleware 來實作 express.use 的功能(middie)，但是還是有問題，redis 沒辦法儲存 session
- NEXT 的\_app，可以使用 getInitialProps 在 server 端就拿取資訊，是不錯的設計。但是在實作的時候，因為要取使用者資訊時使用 axios 打 API，request 沒有帶上 user 的 session 資訊而會顯示錯誤訊息，導致會重複導向（而且 url 不能是`/xxxx`, 而是`http://localhost:3000/xxxx`）。
  - 只能在 client 端使用
- eslint 使用遷就 prettier，prettier 改的東西不多，像是不能改 arrow function 換行的問題，只能讓 eslint 遷就。
