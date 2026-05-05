# Blog GitHub 操作指南

> 本文件用于 Blog 仓库的 GitHub 推送操作

## 每日操作流程

每次修改 blog 内容后：

```powershell
cd D:\创业\tools\book divide\self_improve\blog

# 1. 拉取最新代码（避免冲突）
git pull origin master

# 2. 添加所有修改
git add .

# 3. 提交（自动带时间戳）
$timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm'
git commit -m "update: $timestamp"

# 4. 推送到 GitHub（自动触发部署）
git push origin master
```

> 注意：必须先 `pull` 再 `push`，确保本地和远程同步。

## 常见操作

### 查看状态
```powershell
git status
```

### 查看远程
```powershell
git remote -v
```

### 查看提交历史
```powershell
git log --oneline -5
```

## 部署说明

推送到 `master` 分支后，GitHub Actions 会自动：
1. 安装依赖（`npm install`）
2. 构建 VitePress 站点（`npm run build`）
3. 部署到 GitHub Pages

> 博客地址：https://gaohailiang520.github.io/gaohailiang-blog/