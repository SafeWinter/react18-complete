# 学生管理系统前端

基于 React 构建的学生管理系统示例，使用 React Router 管理页面路由，并通过 Axios 调用本地 JSON Server API。

## 功能

- 查看学生列表并按姓名筛选
- 添加学生信息
- 提供学生信息修改表单（部分实现）
- 使用提示消息反馈新增、修改结果（部分实现）

## 技术栈

- React 19
- React Router 7
- Axios
- Bootstrap V3 样式
- JSON Server（本地模拟后端，位于项目的 `server` 目录）

## 环境要求

- Node.js 和 npm
- 前端默认请求 `http://localhost:3001`，需同时启动本地模拟服务

## 本地运行

分别在两个终端启动后端和前端。

### 1. 启动模拟 API

在项目的 `server` 目录运行：

```bash
npm install
npm start
```

JSON Server 默认监听 `http://localhost:3001`。学生数据保存在 `server/db.json`。

### 2. 启动前端

在项目的 `client` 目录运行：

```bash
npm install
npm start
```

开发服务器启动后，按终端提示在浏览器中打开地址（默认是 `http://localhost:3000`）。

## 页面路由

| 路径 | 页面 |
| --- | --- |
| `/home` | 学生列表与姓名筛选 |
| `/about` | 使用说明 |
| `/add` | 添加学生 |
| `/edit/:id` | 学生信息修改表单 |
| `/` | 自动跳转至 `/home` |

## API

前端请求地址在 `src/api/request.js` 中配置，学生相关接口封装在 `src/api/stuApi.js`：

| 操作 | 方法与路径 |
| --- | --- |
| 获取学生列表 | `GET /students` |
| 添加学生 | `POST /students` |
| 修改学生 | `PATCH /students/:id` |
| 删除学生 | `DELETE /students/:id` |

## 目录结构

```text
client/
├── public/          # HTML 模板和静态资源
└── src/
    ├── api/         # Axios 请求配置和学生 API
    ├── components/  # 页面组件
    ├── hooks/       # 可复用 React Hooks
    └── css/         # 应用样式
```

## 可用脚本

在 `client` 目录执行：

```bash
npm start       # 启动开发服务器
npm test        # 运行测试
npm run build   # 构建生产版本
```