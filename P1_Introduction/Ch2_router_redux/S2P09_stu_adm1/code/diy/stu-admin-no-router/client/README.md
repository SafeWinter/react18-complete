# 学生管理系统前端

这是一个基于 React 19 和 Create React App 的学生管理系统前端项目。当前页面使用 Bootstrap 3 样式，提供顶部导航栏，包含“主页”“关于我们”和“添加用户”入口。页面内容和这些入口对应的路由尚未实现；学生、班级数据接口由同级目录 `server` 中的 JSON Server 提供，前端目前尚未接入这些接口。

导航栏样式参考 [Bootstrap 3.4.1 Starter Template](https://github.com/twbs/bootstrap/blob/v3.4.1/docs/examples/starter-template/index.html)。

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
│   ├── App.jsx      # 顶部导航栏
│   └── index.js     # React 应用入口
├── package.json
└── README.md
```

## 本地模拟 API

如需单独启动示例数据服务，在另一个终端进入 `server` 目录并执行：

```bash
npm install
npm start
```

JSON Server 默认监听 `http://localhost:3001`，提供 `/students` 和 `/classes` 资源。接口示例和数据说明见 [服务端 README](../server/README.md)。目前前端开发服务器没有配置 API 代理，且页面尚未发起 API 请求。