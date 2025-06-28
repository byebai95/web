# Vue2 学习项目

这是一个Vue2学习项目，包含各种Vue概念的演示和练习。

## 项目结构

- `01_认识vue2/` - Vue2基础认识
- `02_模板语法/` - Vue模板语法
- `03_数据绑定/` - 数据绑定概念
- `04_el与data的2种写法/` - el和data的写法
- `05_MVVM模型/` - MVVM架构模式
- `06_数据代理/` - 数据代理机制
- `07_事件处理/` - 事件处理
- `08_计算属性/` - 计算属性
- `09_监视属性/` - 监视属性
- `10_样式绑定/` - 样式绑定
- `11_条件渲染/` - 条件渲染
- `12_列表渲染/` - 列表渲染
- `13_收集表单数据/` - 表单数据处理
- `14_过滤器/` - 过滤器
- `15_内置指令/` - Vue内置指令
- `16_自定义指令/` - 自定义指令

## Cursor AI 智能编程功能

本项目已配置Cursor AI智能编程功能，支持以下特性：

### 🚀 AI自动补全功能

1. **Vue指令自动补全**
   - 输入 `v-` 自动提示Vue指令
   - 支持：v-text, v-html, v-if, v-show, v-for, v-model等

2. **Vue属性自动补全**
   - 输入 `new Vue` 自动生成Vue实例模板
   - 输入 `data:` 自动提示数据属性结构
   - 输入 `methods:` 自动提示方法结构
   - 输入 `computed:` 自动提示计算属性结构

3. **事件绑定自动补全**
   - 输入 `@` 自动提示事件绑定
   - 输入 `:` 自动提示属性绑定

4. **生命周期钩子自动补全**
   - 自动提示Vue生命周期钩子
   - 支持：created, mounted, updated, destroyed等

### 🛠️ 使用方法

1. **重启Cursor编辑器**
   - 确保配置文件生效

2. **测试自动补全**
   - 打开 `test_autocomplete.html` 文件
   - 尝试输入Vue相关代码，观察自动补全提示

3. **常用快捷键**
   - `Ctrl + Space` - 手动触发自动补全
   - `Tab` - 接受建议
   - `Ctrl + /` - 打开AI聊天

### 📝 测试示例

在 `test_autocomplete.html` 中尝试以下操作：

```html
<!-- 测试Vue指令 -->
<div v-  <!-- 应该出现指令提示 -->

<!-- 测试事件绑定 -->
<button @  <!-- 应该出现事件提示 -->

<!-- 测试属性绑定 -->
<div :  <!-- 应该出现属性提示 -->
```

```javascript
// 测试Vue实例
let vm = new Vue({  // 应该自动补全Vue实例结构

// 测试数据属性
data: {  // 应该提示数据属性结构

// 测试方法
methods: {  // 应该提示方法结构
```

### ⚙️ 配置文件

- `.cursorrules` - Cursor AI规则配置
- `.cursor/settings.json` - Cursor设置
- `.cursor/ai.json` - AI功能配置
- `.vscode/settings.json` - VSCode设置

### 🔧 故障排除

如果AI功能没有生效：

1. **检查Cursor版本**
   - 确保使用最新版本的Cursor

2. **重启编辑器**
   - 完全关闭并重新打开Cursor

3. **检查网络连接**
   - 确保能够访问AI服务

4. **验证配置**
   - 检查 `.cursorrules` 文件是否正确
   - 确认项目根目录包含配置文件

5. **测试基本功能**
   - 尝试使用 `Ctrl + /` 打开AI聊天
   - 测试基本的代码补全功能

## 开发环境

- Node.js
- Live Server (用于本地开发服务器)
- Vue.js 2.7.16

## 运行项目

```bash
npm install
npm run dev
```

## 学习资源

- [Vue.js 官方文档](https://v2.vuejs.org/)
- [Vue.js 教程](https://v2.vuejs.org/v2/guide/)
- [Vue.js API 参考](https://v2.vuejs.org/v2/api/)

浏览器输出事件戳

```shell
console.log(Date.now());
```


前端插件网址
https://www.bootcdn.cn/


获取网站的cookie
document.cookie