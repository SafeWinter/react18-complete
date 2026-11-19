# 学生管理系统

这是一个使用 React 编写的学生信息管理前端示例。页面通过 React Router 导航，使用 Axios 请求项目 `server` 目录中的 JSON Server 模拟 API。

## 功能

- 查看学生列表，并按姓名筛选
- 查看学生详情
- 添加、修改和删除学生信息
- 在操作完成后显示提示信息

学生信息包括姓名、年龄、电话、邮箱、学历、毕业院校、专业和个人简介。

## 技术栈

- React 19
- React Router 7
- Axios
- Bootstrap 3
- JSON Server 0.17（模拟后端）

## 环境要求

- Node.js 和 npm
- 前端默认连接 `http://localhost:3001`，运行前请先启动模拟 API

## 启动项目

在项目根目录打开两个终端，分别启动服务端和前端。

### 模拟 API

```bash
cd server
npm install
npm start
```

API 默认运行于 `http://localhost:3001`，数据存储在 `server/db.json`。

### 前端

```bash
cd client
npm install
npm start
```

开发服务器默认运行于 `http://localhost:3000`。若端口已被占用，请按终端提示访问新的端口。

## 页面路由

| 路径 | 说明 |
| --- | --- |
| `/` | 重定向至学生列表 |
| `/home` | 学生列表与姓名筛选 |
| `/detail/:id` | 学生详情，可进入修改或删除操作 |
| `/add` | 添加学生 |
| `/edit/:id` | 修改学生 |
| `/about` | 使用说明 |

## API 接口

请求基地址配置在 `src/api/request.js`，学生接口封装在 `src/api/stuApi.js`。

| 操作 | 请求 |
| --- | --- |
| 获取学生列表 | `GET /students` |
| 获取指定学生 | `GET /students/:id` |
| 添加学生 | `POST /students` |
| 修改学生 | `PATCH /students/:id` |
| 删除学生 | `DELETE /students/:id` |

## 目录结构

```text
client/
├── public/                 # 页面模板和静态资源
└── src/
    ├── api/                # Axios 配置和学生 API
    ├── components/         # 路由页面和界面组件
    ├── hooks/              # 可复用 React Hooks
    └── css/                # 应用样式

server/
└── db.json                 # JSON Server 初始数据
```

## 前端脚本

在 `client` 目录执行：

```bash
npm start       # 启动开发服务器
npm test        # 运行测试
npm run build   # 构建生产版本
```