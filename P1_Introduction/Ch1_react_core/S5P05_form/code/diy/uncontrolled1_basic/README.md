# React 非受控组件示例

这是一个使用 Create React App 创建的 React 示例项目，演示如何通过 `ref` 读取非受控文本框的值。

## 功能

- 文本框初始值为 `abc`。
- 点击“提交”按钮后，通过浏览器开发者工具的控制台输出当前文本框内容。

## 环境要求

- Node.js 和 npm

## 开始使用

在项目根目录执行：

```bash
npm install
npm start
```

开发服务器启动后，在浏览器中打开终端显示的本地地址。修改 `src` 中的代码后，页面会自动重新加载。

## 项目结构

```text
public/       静态资源和 HTML 模板
src/
  App.js      非受控文本框示例
  index.js    React 应用入口
```

## 可用命令

```bash
npm start    # 启动开发服务器
npm test     # 运行测试
npm run build  # 构建生产版本
```