# 学生管理系统模拟服务

本项目使用 [JSON Server](https://github.com/typicode/json-server) 根据 `db.json` 提供本地 REST API，包含学生和班级示例数据。

## 启动

需要 Node.js 和 npm。在本目录运行：

```bash
npm install
npm start
```

服务默认监听 `http://localhost:3001`。

## 接口

以下示例假设服务已启动。Windows 命令提示符或 PowerShell 中可将 `curl` 写为 `curl.exe`。

### 学生

```bash
# 获取学生列表
curl http://localhost:3001/students

# 获取 ID 为 2 的学生
curl http://localhost:3001/students/2

# 新增学生（ID 由 JSON Server 分配）
curl -X POST http://localhost:3001/students \
  -H "Content-Type: application/json" \
  -d '{"name":"测试学生","age":"20","phone":"138-0000-0000","email":"test@example.com","education":"本科","graduationschool":"示例大学","profession":"计算机科学","profile":"示例简介"}'

# 完整替换 ID 为 2 的学生
curl -X PUT http://localhost:3001/students/2 \
  -H "Content-Type: application/json" \
  -d '{"name":"张三","age":"21","phone":"138-0013-8000","email":"zhangsan@example.com","education":"本科","graduationschool":"北京大学","profession":"计算机科学与技术","profile":"更新后的简介"}'

# 仅修改 ID 为 2 的学生年龄
curl -X PATCH http://localhost:3001/students/2 \
  -H "Content-Type: application/json" \
  -d '{"age":"22"}'

# 删除 ID 为 2 的学生
curl -X DELETE http://localhost:3001/students/2
```

### 班级

```bash
# 获取班级列表
curl http://localhost:3001/classes

# 获取 ID 为 1 的班级
curl http://localhost:3001/classes/1
```

数据保存在 `db.json` 中。
