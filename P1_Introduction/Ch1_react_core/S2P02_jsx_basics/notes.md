# S2P02：JSX 基础语法

> 本节概要：
>
> - `JSX` 基础语法
> - `createElement` 方法



## 1 JSX 基础语法

在 `React` 中，使用 `JSX` 来描述页面（类似 `Vue` 中的 `template`）。

```react
function App() {
  return (
    <div>Hello React~</div>
  );
}
```

也可以把形似 `HTML` 的部分单独提出来：

```react
function App() {
  const elem = <div>Hello React~</div>;
  return (elem);
}
```

这种类似于 `HTML` 的语法在 `React` 中称之为 `JSX`。它是一种 `JavaScript` 的语法扩展。在 `React` 中推荐使用 `JSX` 来描述用户界面。`JSX` 乍一看很像模版语言，但事实上不是，它完全是在 `JavaScript` 内部实现的。



使用 `JSX` 来描述页面时，有如下的一些语法规则：

- 根元素只能有一个（确需多个根节点，则相邻根节点可用 `<></>` 包裹，可清除包裹层 `div` 元素）
- `JSX` 中使用 `JavaScript` 表达式。表达式写在一对花括号 `{}` 中（类比 `Vue` 的 `{{}}`）
- 属性值指定为字符串字面量，或者在属性值中插入一个 `JavaScript` 表达式
- `style` 对应样式对象，`class` 要写作 `className`
- 注释需要写在花括号内（可借助 `VSCode` 插件 `React-Native/React/Redux snippets for es6/es7` 快速生成，`DIY` 时安装 `Simple React Snippets`）
- `JSX` 允许在模板中插入数组，数组会自动展开所有成员。



## 2 createElement 方法

再次强调：`JSX` 是一种 `JavaScript` 的语法扩展。`Babel` 会把 `JSX` 转译成一个名为 `React.createElement` 的函数调用：

```markdown
React.createElement(type, [props], [...children]);
```

参数说明：

- `type`：创建的 `React` 元素类型（可选的值有：标签名字符串、`React` 组件）。
- `props`（可选）：`React` 元素的属性。
- `children`（可选）：`React` 元素的子元素。

例如，下面两种代码的作用完全是相同的：

```react
const element1 = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
const element2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

这些对象被称为 `React 元素`（即虚拟 `DOM` 对象）。它们描述了你希望在屏幕上看到的内容。

`JSX` 的本质其实就是 `React.createElement` 方法的一种 **语法糖**。



> ### 本节作业
>
> 通读 `React` 官方文档：
>
> - `JSX` 简介（[文档](https://zh-hans.legacy.reactjs.org/docs/introducing-jsx.html)）
> - 元素渲染（[文档](https://zh-hans.legacy.reactjs.org/docs/rendering-elements.html)）
