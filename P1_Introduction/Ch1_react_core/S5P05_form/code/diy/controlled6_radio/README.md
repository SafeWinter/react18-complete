# React 单选框示例

这是一个基于 Create React App 的 React 示例项目，演示使用单选框选择课程，并通过浏览器原生 `FormData` 获取提交值。

## 功能

- 提供 HTML、CSS、JS、Vue 和 React 五个课程选项，单选框使用相同的 `name="course"`，因此一次只能选择一项。
- 提交表单时阻止页面默认刷新，并在浏览器控制台输出表单数据。
- 单选框未选择时，提交结果为空对象。

## 表单数据处理

单选框未绑定 React state，因此这是原生表单控件，而不是受控组件。提交时，`FormData` 会读取表单中已选中的 `course` 值；`Object.fromEntries` 再将表单条目转换为普通对象：

```js
e.preventDefault();
const value = Object.fromEntries(new FormData(e.target).entries());
console.log("Value to submit:", value);
```

选择 React 并提交时，控制台输出类似：

```text
Value to submit: { course: "React" }
```

## 开始使用

需要先安装 [Node.js](https://nodejs.org/) 和 npm。在项目目录运行：

```bash
npm install
npm start
```

开发服务器默认运行在 [http://localhost:3000](http://localhost:3000)。

## 其他命令

```bash
npm test       # 运行测试
npm run build  # 构建生产版本
```