# vue 服务代理 


---

## vue 服务代理的两种方式

在前端开发中，常用的服务代理（即“跨域代理”）有两种常见方式：

### 1. vue-cli 内置代理（推荐）

在 `vue.config.js` 文件中配置 `devServer.proxy`，实现开发环境下的接口代理，解决跨域问题。

**示例：**

```js
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // 目标服务器
        changeOrigin: true, // 是否改变源
        pathRewrite: { '^/api': '' } // 重写路径
      }
    }
  }
}
```

使用方式：  
前端请求 `/api/user`，实际会被代理到 `http://localhost:5000/user`。

---

### 2. 使用第三方代理中间件（如 http-proxy-middleware）

适用于自定义 webpack 或更复杂的场景。可以在 `src/setupProxy.js`（或根目录）中配置。

**示例：**

```js
<code_block_to_apply_changes_from>
```

---

## axios 请求方式文档

axios 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 node.js。

### 1. 安装

```shell
npm install axios
```

### 2. 基本用法

**GET 请求：**

```js
import axios from 'axios';

axios.get('/api/user', {
  params: { id: 1 }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
```

**POST 请求：**

```js
axios.post('/api/user', {
  name: '张三',
  age: 18
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
```

### 3. 配置全局 baseURL

```js
axios.defaults.baseURL = '/api';
```

### 4. 设置请求头

```js
axios.defaults.headers.common['Authorization'] = 'Bearer token';
```

---

如需将上述内容自动补充到 readme.MD，请告知！