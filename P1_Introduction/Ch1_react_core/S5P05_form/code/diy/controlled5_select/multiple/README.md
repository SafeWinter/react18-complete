# React 受控多选下拉框示例

这是一个基于 Create React App 的 React 示例项目，演示如何使用受控的 `<select multiple>` 选择课程。

## 功能

- 提供 HTML、CSS、JS、Vue 和 React 五个课程选项，可进行多选。
- 选择变化时，在浏览器控制台输出当前选中值。
- 点击“提交”后，在浏览器控制台输出待提交的选中值。

## 同步多选框的选中值

组件将选中值保存在 `state.values` 数组中。多选框触发 `onChange` 时，`handleChange` 从 `e.target.selectedOptions` 读取当前所有选中项，并通过 `Array.from` 转成值数组后更新 state：

```js
const values = Array.from(
  e.target.selectedOptions,
  option => option.value
);

this.setState({ values });
```

`selectedOptions` 提供的是变化后的完整选中项，因此不需要再根据单个变化项用 `Set` 执行添加、删除或去重。更新后的数组作为受控多选框的 `value`：

```jsx
<select multiple value={this.state.values} onChange={this.handleChange}>
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