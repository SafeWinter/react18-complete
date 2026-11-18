# 学生管理系统前端

这是一个基于 React 19 和 Create React App 的学生管理系统前端项目。项目使用 React Router 管理页面路由，使用 Bootstrap 3 样式构建顶部导航栏，并将 Axios 作为 HTTP 客户端依赖。当前主页、关于我们和添加用户页面仍为占位内容；Axios 和服务端 API 尚未接入页面。

导航栏样式参考 [Bootstrap 3.4.1 Starter Template](https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/starter-template/index.html)。学生、班级示例数据由同级目录 `server` 中的 JSON Server 提供。

## 环境要求

- Node.js
- npm

## 安装与启动

在 `client` 目录执行：

```bash
npm install
npm start
```

开发服务器默认地址为 [http://localhost:3000](http://localhost:3000)。修改 `src` 中的代码后，页面会自动重新加载。

## 页面路由

| 路径 | 页面 |
| --- | --- |
| `/home` | 主页 |
| `/about` | 关于我们 |
| `/add` | 添加用户 |
| `/` | 自动重定向到 `/home` |

应用通过 `BrowserRouter` 启用浏览器路由。导航链接使用 React Router 提供的 `NavLink`。

> [!tip]
>
> ### 知识点：用 BrowserRouter 包裹 App
>
> `App` 中使用了 `Routes`、`Route`、`Navigate` 和 `NavLink`，这些路由组件需要从 `Router` 上下文中读取当前地址和导航状态。因此应在应用入口用 `BrowserRouter` 包裹 `App`；如果缺少该包裹，路由组件会因找不到 `Router` 上下文而报错，应用无法正常渲染。
>
> 原理图：
>
> ```mermaid
> flowchart TD
>     Entry["index.js"] --> Router["BrowserRouter<br/>提供路由上下文"]
>     Router --> App["App"]
>     App --> Routes["Routes / Route"]
>     App --> Nav["NavLink 导航"]
> ```
>
> 当前入口的结构如下：
>
> ```jsx
> root.render(
>   <BrowserRouter>
>     <App />
>   </BrowserRouter>,
> );
> ```

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
│   ├── components/  # 页面组件（主页、关于我们、添加用户）
│   ├── css/         # 应用样式
│   ├── App.jsx      # 导航栏和路由配置
│   └── index.js     # React 应用入口及 BrowserRouter
├── package.json
└── README.md
```

## 主要依赖

- `react`、`react-dom`：构建 React 应用。
- `react-router-dom`：配置客户端页面路由与导航。
- `axios`：HTTP 请求客户端；当前页面尚未使用。

## 本地模拟 API

如需单独启动示例数据服务，在另一个终端进入 `server` 目录并执行：

```bash
npm install
npm start
```

JSON Server 默认监听 [http://localhost:3001](http://localhost:3001)，提供 `/students` 和 `/classes` 资源。接口示例和数据说明见[服务端 README](../server/README.md)。前端目前尚未请求这些接口，也未配置开发服务器 API 代理。