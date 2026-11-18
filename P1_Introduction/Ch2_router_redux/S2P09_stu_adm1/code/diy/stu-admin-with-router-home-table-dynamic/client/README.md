# 学生管理系统前端

这是一个基于 React 19 和 Create React App 的学生管理系统前端练习项目。项目使用 React Router 管理页面路由、Axios 请求本地模拟 API，并使用 Bootstrap 3 样式构建页面。

当前主页会从服务端获取学生列表，并以表格显示姓名、年龄和联系方式；搜索框可按姓名包含关键词进行筛选，“详情”仍为占位内容。“关于我们”页面提供项目简介，“添加用户”页面目前仍为占位内容。

导航栏样式参考 [Bootstrap 3.4.1 Starter Template](https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/starter-template/index.html)。

## 环境要求

- Node.js
- npm

## 安装与启动

在 `client` 目录安装依赖并启动前端开发服务器：

```bash
npm install
npm start
```

开发服务器默认地址为 [http://localhost:3000](http://localhost:3000)。修改 `src` 中的代码后，页面会自动重新加载。

主页需要服务端 API 才能加载学生列表。请另开一个终端，在 `server` 目录运行：

```bash
npm install
npm start
```

模拟服务默认监听 [http://localhost:3001](http://localhost:3001)。前端 Axios 客户端直接请求该地址，开发服务器未配置 API 代理。接口详情见[服务端 README](../server/README.md)。

## 页面与路由

| 路径 | 页面 | 当前功能 |
| --- | --- | --- |
| `/home` | 主页 | 请求学生列表，以表格展示姓名、年龄和联系方式，并支持按姓名关键词筛选 |
| `/about` | 关于我们 | 显示项目使用说明 |
| `/add` | 添加用户 | 占位页面，尚未实现添加功能 |
| `/` | — | 自动重定向到 `/home` |

页面导航使用 React Router。

## 可用命令

| 命令 | 说明 |
| --- | --- |
| `npm start` | 启动本地开发服务器 |
| `npm test` | 以交互模式运行测试 |
| `npm run build` | 构建生产版本到 `build` 目录 |
| `npm run eject` | 导出 Create React App 配置；此操作不可逆，通常不需要执行 |

## 项目结构

```text
client/
├── public/          # HTML 模板、Bootstrap 样式和静态资源
├── src/
│   ├── api/         # Axios 请求封装和业务 API 方法
│   ├── components/  # 主页、关于我们、添加用户页面
│   ├── css/         # 应用样式
│   ├── App.jsx      # 导航栏和路由配置
│   └── index.js     # React 应用入口
├── package.json
└── README.md
```

## 主要依赖

- `react`、`react-dom`：构建 React 应用。
- `react-router-dom`：配置客户端页面路由与导航。
- `axios`：发送 HTTP 请求，由 `src/api` 模块统一封装。

## API 模块

`src/api` 将通用请求配置与具体业务接口分开，页面组件通过 API 方法访问后端，无需在组件中重复配置请求地址。

- `request.js` 创建并导出 Axios 实例，统一配置 API 基地址 `http://localhost:3001` 和 5 秒超时，并提供请求、响应拦截器作为统一处理请求和响应的位置。
- `stuApi.js` 基于该实例封装学生相关接口。目前提供 `getStuListApi()`，请求 `GET /students` 并返回 Axios 响应。
- `Home.jsx` 调用 `getStuListApi()` 获取学生列表，并从响应的 `data` 中读取姓名、年龄和联系方式，渲染为表格。学生 ID 用作列表项的 React `key`。搜索框输入变化时会重新请求完整列表，再按姓名包含关键词在前端筛选。

新增接口时，可在 `src/api` 中复用 `request.js` 导出的实例封装对应 API，再由页面组件调用。若服务端未启动或请求失败，主页当前没有专门的错误提示界面。
