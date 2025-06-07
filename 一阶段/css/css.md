# css 笔记

## 样式

内联样式 > 内部样式 > 外部样式

## 选择器

1. 元素选择器
  h1 {}

2. 类选择器
 .h1{}

3. id选择器
 #h1{}

4. 通用选择器
 *{}

5. 子元素选择器
.parent > .child {}

6. 后代选择器
.parent p{}

7. 并集选择器
h1, h2, h3 {
    color: red;
}

8. 伪类选择器

```shell
a:link {
    color: blue;
    text-decoration: none;
}

a:visited {
    color: purple;
}

a:hover {
    color: red;
    text-decoration: underline;
}

a:active {
    color: green;
}
```
