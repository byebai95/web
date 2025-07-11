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

---

## 各目录功能与用法详解

### 01_认识vue2
- 介绍 Vue2 的基本概念、引入方式和最简单的 HelloWorld 案例。
- 用法：直接用浏览器打开 HelloWorld.html。

### 02_模板语法
- 演示 Vue 模板语法，包括插值表达式、指令、属性绑定等。
- 用法：打开 template.html，查看各种模板语法的实际效果。

### 03_数据绑定
- 讲解数据的单向绑定、双向绑定（v-model）等。
- 用法：数据绑定.html 展示了数据和视图的联动。

### 04_el与data的2种写法
- 展示 el 和 data 的对象写法与函数写法的区别。
- 用法：el与data.html 里有详细注释和对比。

### 05_MVVM模型
- 介绍 MVVM 架构思想，理解数据驱动视图的核心。
- 用法：mvvm.html 结合注释理解 Vue 的响应式原理。

### 06_数据代理
- 通过 Object.defineProperty 演示 Vue2 的数据代理实现原理。
- 用法：1_简单数据代理.html、2_Object.defineProperty.html。

### 07_事件处理
- 包含事件绑定、事件修饰符、键盘事件等。
- 用法：分别打开 1_简单事件处理.html、2_事件修饰符.html、3_键盘事件.html。

### 08_计算属性
- 展示计算属性与 methods 的区别和使用场景。
- 用法：1_案例一_data.html、2_案例二_method.html、3_计算属性.html。

### 09_监视属性
- 讲解 watch 的基本用法、深度监听、简写方式等。
- 用法：01~05_修改天气相关 html 文件。

### 10_样式绑定
- 演示 class、style 的动态绑定。
- 用法：样式绑定.html。

### 11_条件渲染
- v-if、v-else、v-show 的用法和区别。
- 用法：1_条件渲染.html。

### 12_列表渲染
- v-for 的基本用法、列表过滤、排序、数据监控原理。
- 用法：1_基本列表.html、2_列表过滤_watch实现.html、3_列表过滤_computed实现.html、4_列表排序.html、5_vue数据监控原理.html。

### 13_收集表单数据
- v-model 在表单控件上的应用。
- 用法：收集表单数据.html。

### 14_过滤器
- 介绍 Vue2 过滤器的定义和使用。
- 用法：过滤器.html。

### 15_内置指令
- v-text、v-html、v-cloak、v-once、v-pre 等指令的用法。
- 用法：1.v-text指令.html ~ 5.v-pre指令.html。

### 16_自定义指令
- 如何注册和使用自定义指令。
- 用法：1_自定义指令.html、2_自定义指令.html。

### 17_生命周期
- Vue 实例生命周期流程及常用钩子。
- 用法：1_生命周期案例.html、2_生命周期流程.html、3_生命周期案例-结束定时任务.html。

### 18_非单文件组件
- 组件的基本使用与嵌套。
- 用法：1_使用组件.html、2_嵌套组件.html。

### 19_单文件组件
- SFC（.vue 文件）开发模式，包含 App.vue、Student.vue、School.vue。
- 用法：用 vue-cli 或 vite 创建项目，main.js 入口。

### 20_ref配置项
- 通过 ref 获取组件或 DOM 元素实例。
- 用法：vue_ref 子项目，运行 npm install & npm run serve。

### 21_props配置项使用
- 父子组件通信，props 的类型、默认值、校验。
- 用法：vue_props 子项目，运行 npm install & npm run serve。

### 22_mixin混合配置项
- 复用逻辑的 mixin 用法。
- 用法：vue_mixin 子项目，运行 npm install & npm run serve。

### 23_plugins插件
- 插件的编写与使用。
- 用法：vue_plugins 子项目，运行 npm install & npm run serve。

### 24_todoList案例
- 综合案例，包含增删改查、组件拆分、事件传递、数据持久化等。
- 用法：vue_todo 子项目，运行 npm install & npm run serve。

### 25_浏览器存储
- localStorage、sessionStorage 的基本用法。
- 用法：1_localstorage.html、2_sessionstorage.html。

### 26_自定义事件
- 组件间通信的自定义事件（$emit/$on），父子、兄弟通信。
- 用法：vue_event 子项目，运行 npm install & npm run serve，查看 src/components/MySchool.vue、MyStudent.vue。

---

## 推荐学习顺序
1. 先看 01~05，理解 Vue2 基础和响应式原理。
2. 依次学习事件、计算属性、watch、样式、条件、列表、表单、过滤器、指令。
3. 进阶到组件、props、ref、mixin、插件、自定义事件。
4. 最后做 todoList 综合案例。

## 运行说明
- 纯 html 文件可直接用浏览器打开。
- 含 package.json 的子项目（如 vue_ref、vue_props、vue_mixin、vue_plugins、vue_todo、vue_event）需进入对应目录，执行：
  ```bash
  npm install
  npm run serve
  ```
- 推荐使用 VSCode + Vetur 插件或 Cursor 编辑器体验智能补全。

---

如需详细代码讲解或遇到问题，欢迎随时提问！