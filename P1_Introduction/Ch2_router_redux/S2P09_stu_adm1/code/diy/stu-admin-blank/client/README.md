# 学生管理系统

这是一个前后端分离的学生管理系统演示项目，用于练习 React、React Router 和 React Redux。

## 当前实现状态

当前客户端已完成 Create React App 初始化，入口组件只渲染了一个标题：

- 页面标题：`学生管理系统`
- 使用 React 19 与 React DOM 19
- 服务端使用 JSON Server 提供本地模拟数据

## 项目结构

```text
stu-admin/
├── client/                  # React 前端
│   ├── public/
│   └── src/
│       ├── App.jsx          # 根组件，当前包含页面标题
│       └── index.js         # React 应用入口
└── server/
    ├── db.json              # 学生和班级模拟数据
    └── package.json         # JSON Server 启动配置
```

## 技术栈

### 前端

- React 19
- React DOM 19
- Create React App / react-scripts 5
- Testing Library
- Web Vitals

### 后端模拟服务

- json-server 1.0.0-beta.15

## 本地运行

需要 Node.js 和 npm。

### 1. 启动前端

```bash
cd client
npm install
npm start
```

前端默认运行在 `http://localhost:3000`。

### 2. 启动模拟后端

新开一个终端：

```bash
cd server
npm install
npm start
```

模拟后端运行在 `http://localhost:3001`。

## 可用数据接口

JSON Server 会根据 `server/db.json` 自动生成以下 REST 风格接口：

- `GET /students`：获取学生列表
- `GET /students/:id`：获取指定学生
- `POST /students`：新增学生
- `PUT /students/:id`：修改指定学生
- `PATCH /students/:id`：局部修改指定学生
- `DELETE /students/:id`：删除指定学生
- `GET /classes`：获取班级列表
- `GET /classes/:id`：获取指定班级

## 数据字段

### 学生

学生数据包含以下字段：

- `id`
- `name`
- `age`
- `phone`
- `email`
- `education`
- `graduationschool`
- `profession`
- `profile`

当前模拟数据库中已预置 10 条学生数据。

### 班级

班级数据包含以下字段：

- `id`
- `name`
- `description`

当前模拟数据库中已预置 5 条班级数据。

## 可用脚本

在 `client` 目录中：

- `npm start`：启动开发服务器
- `npm run build`：生成生产构建
- `npm test`：启动测试监视器
- `npm run eject`：弹出 Create React App 配置

在 `server` 目录中：

- `npm start`：在端口 3001 启动 JSON Server

## 后续开发方向

项目名称和模拟数据已经具备学生管理基础，后续可继续实现：

- 学生列表、详情、新增、编辑和删除
- 班级列表和班级管理
- React Router 路由导航
- React Redux 状态管理
- 表单校验和用户反馈