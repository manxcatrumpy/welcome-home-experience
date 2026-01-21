# GitHub Pages 部署指南

## 📋 前置條件

你的專案已經配置完成：
- ✅ `vite.config.ts` 已設定 `base: '/welcome-home-experience/'`
- ✅ GitHub Actions 工作流程已建立 (`.github/workflows/deploy.yml`)
- ✅ 專案可以成功建置

## 🚀 部署方法

### 方法 1: 自動部署（推薦）

當你合併程式碼到 `main` 分支時，會自動觸發部署。

#### 步驟：

1. **啟用 GitHub Pages**
   - 前往你的 GitHub repository: https://github.com/manxcatrumpy/welcome-home-experience
   - 點擊 **Settings** > **Pages**
   - 在 **Source** 下選擇 **GitHub Actions**
   - 儲存設定

2. **合併你的分支到 main**
   ```bash
   # 切換到 main 分支
   git checkout main

   # 拉取最新的程式碼
   git pull origin main

   # 合併你的開發分支
   git merge claude/redesign-homepage-NkJyz

   # 推送到遠端
   git push origin main
   ```

3. **等待自動部署**
   - 前往 repository 的 **Actions** 標籤
   - 等待 "Deploy to GitHub Pages" 工作流程完成（約 1-2 分鐘）
   - 看到綠色勾勾表示部署成功

4. **訪問你的網站**
   - 你的網站會部署在: `https://manxcatrumpy.github.io/welcome-home-experience/`

---

### 方法 2: 手動觸發部署

如果你想在不合併到 main 的情況下測試部署：

1. **更新 deploy.yml 以支援其他分支**（可選）

   編輯 `.github/workflows/deploy.yml`，在 `on.push.branches` 中加入你的分支：
   ```yaml
   on:
     push:
       branches:
         - main
         - claude/redesign-homepage-NkJyz  # 加入你的分支
   ```

2. **或使用手動觸發**
   - 前往 GitHub repository 的 **Actions** 標籤
   - 選擇 "Deploy to GitHub Pages" 工作流程
   - 點擊 **Run workflow** 按鈕
   - 選擇你要部署的分支
   - 點擊綠色的 **Run workflow** 按鈕

---

## 🔍 檢查部署狀態

### 查看部署日誌
1. 前往 GitHub repository
2. 點擊 **Actions** 標籤
3. 點擊最新的工作流程執行
4. 查看每個步驟的詳細日誌

### 常見問題排除

#### 問題 1: 404 錯誤
- **原因**: GitHub Pages 可能尚未啟用
- **解決**: 前往 Settings > Pages，確認已啟用並選擇 "GitHub Actions" 作為來源

#### 問題 2: 頁面顯示空白或路徑錯誤
- **原因**: `base` 路徑設定不正確
- **解決**: 確認 `vite.config.ts` 中的 `base: '/welcome-home-experience/'` 設定正確

#### 問題 3: 部署失敗
- **原因**: 建置錯誤或權限問題
- **解決**:
  1. 檢查 Actions 日誌中的錯誤訊息
  2. 確認本地可以成功執行 `npm run build`
  3. 檢查 repository 的 Settings > Actions > General，確認已啟用 workflow permissions

---

## 📦 本地測試建置版本

在部署前，建議先在本地測試建置版本：

```bash
# 建置專案
npm run build

# 預覽建置結果
npm run preview
```

然後在瀏覽器開啟 `http://localhost:4173/welcome-home-experience/`

---

## 🔐 Repository 權限設定

確保 GitHub Actions 有正確的權限：

1. 前往 **Settings** > **Actions** > **General**
2. 捲動到 "Workflow permissions"
3. 選擇 **Read and write permissions**
4. 勾選 **Allow GitHub Actions to create and approve pull requests**
5. 點擊 **Save**

---

## 🎉 完成！

部署成功後，你的網站將可以在以下網址訪問：

**https://manxcatrumpy.github.io/welcome-home-experience/**

每次推送到 `main` 分支時，網站都會自動更新。

---

## 📝 額外資源

- [GitHub Pages 官方文件](https://docs.github.com/en/pages)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions 文件](https://docs.github.com/en/actions)
