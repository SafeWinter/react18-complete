# React 温度判断示例

> [!tip] 参考文档：[核心概念：10. 状态提升](https://zh-hans.legacy.reactjs.org/docs/lifting-state-up.html)

这是一个基于 `React` 的简单交互示例。输入摄氏温度后，页面会判断水是否达到沸点：温度达到或超过 100°C 时显示 `The water would boil.`（水会沸腾），否则显示 `The water would not boil.`（水不会沸腾）。

## 运行项目

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm start
```

启动后，在浏览器中打开终端显示的本地地址 `http://localhost:3000`。修改源码后，页面会自动重新加载。

## 可用命令

- `npm start`：启动开发服务器。
- `npm test`：运行测试。
- `npm run build`：构建生产版本。

## 项目结构

```bash
src/
├── App.js
├── index.js
└── component/
    ├── BoilingVerdict.jsx
    └── Calculator.jsx
```

`Calculator` 负责温度输入及状态管理，`BoilingVerdict` 根据温度显示判断结果。
