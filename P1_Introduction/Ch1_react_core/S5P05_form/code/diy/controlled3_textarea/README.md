# React 受控文本域示例

这是一个基于 React 和 Create React App 的示例项目，演示如何使用受控 `<textarea>` 管理多行文本。

## 示例功能

- 文本域内容由 React 状态控制，输入时同步更新状态。
- 每次输入变化时，当前文本会输出到浏览器开发者工具控制台。
- 点击“提交”会阻止表单默认提交，并输出最终文本。

## 启动项目

需要安装 Node.js 和 npm。在项目根目录执行：

```bash
npm install
npm start
```

开发服务器启动后，在浏览器中打开终端显示的本地地址。

## 可用命令

```bash
npm start      # 启动开发服务器
npm test       # 运行测试
npm run build  # 构建生产版本
```

## 主要文件

- `src/App.js`：受控文本域及表单提交逻辑。
- `src/index.js`：React 应用入口。
- `public/index.html`：HTML 页面模板。