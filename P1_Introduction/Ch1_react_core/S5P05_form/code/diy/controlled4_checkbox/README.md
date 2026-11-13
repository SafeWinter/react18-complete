# React 多选框示例

这是一个基于 Create React App 的 React 示例项目，演示如何使用复选框选择课程，并在提交表单时查看选择状态。

**和视频课的区别**：新增 `id` 字段，`onChange` 逻辑传入目标 `id` 而非数组索引值 `index`。

## 功能

- 展示 HTML、CSS、JS、Vue 和 React 五门课程。
- 可同时选择多门课程。
- 点击“提交”后，课程列表及每门课程的选中状态会输出到浏览器控制台。

## 环境要求

- Node.js 和 npm

## 开始使用

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm start
```

应用会在浏览器中打开，默认地址为 [http://localhost:3000](http://localhost:3000)。

## 其他命令

```bash
npm test    # 运行测试
npm run build  # 构建生产版本
```