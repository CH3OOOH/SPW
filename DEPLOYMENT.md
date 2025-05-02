# 沙坡尾街区展示网站 - 部署指南

## 本地运行项目

1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm run dev
```

3. 访问 http://localhost:3000 查看网站

## 线上部署步骤 (推荐使用Vercel)

### 部署到Vercel (最简单方式)

1. 注册/登录 [Vercel](https://vercel.com/)

2. 将代码提交到Git仓库 (GitHub, GitLab, Bitbucket)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <你的仓库URL>
git push -u origin main
```

3. 在Vercel控制台中:
   - 点击 "New Project"
   - 导入你的Git仓库
   - 保持默认设置
   - 点击 "Deploy"

4. 部署完成后，Vercel会提供一个域名，例如 `https://shapoyou-xxxx.vercel.app`

### 其他部署选项

#### Netlify
1. 注册/登录 [Netlify](https://www.netlify.com/)
2. 将代码提交到Git仓库
3. 在Netlify中创建新项目并导入仓库
4. 构建命令: `npm run build`
5. 发布目录: `.next`

#### 静态导出 (适用于没有服务器端功能的情况)
1. 在package.json中添加导出命令:
```json
"scripts": {
  "export": "next build && next export"
}
```
2. 运行导出命令:
```bash
npm run export
```
3. 将生成的`out`目录上传到任何静态网站托管服务

## 自定义域名

无论使用哪种部署方式，都可以在服务提供商的控制台中添加自定义域名，通常需要:

1. 在服务提供商(Vercel/Netlify)的控制台中添加域名
2. 在DNS提供商处添加相应的DNS记录
3. 等待DNS传播完成

## 部署遇到问题?

- 确保`next.config.mjs`配置正确
- 检查是否有环境变量需要配置
- 查看构建日志以定位问题 