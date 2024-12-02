# StepPaws.AI 寵物3D模型生成器專案文檔

## 專案概述
StepPaws.AI 是一個專門用於生成寵物3D模型的Web應用程式，提供使用者上傳寵物照片並生成3D模型的功能。

## 已實現功能

### 1. 用戶界面
- 響應式設計的頁面佈局
- 漸變背景設計 (參考 `main.css` startLine: 2, endLine: 8)
- 專業的頁首設計，包含logo和標題 (參考 `Header.js` startLine: 6, endLine: 31)

### 2. 寵物資料收集
- 基本資料表單收集功能
  - 寵物類型選擇
  - 品種選擇
  - 特徵標記
  - 習性記錄
- 表單驗證功能 (參考 `PetCreator.js` startLine: 32, endLine: 39)

### 3. 照片上傳功能
- 支援四個角度的寵物照片上傳：
  - 正面照片
  - 背面照片
  - 左側照片
  - 右側照片
- 照片預覽功能
- 照片驗證功能：
  - 檔案格式驗證 (僅接受 JPEG/PNG)
  - 檔案大小限制 (5MB以內)
  - 基本圖片品質檢查
(參考 `image-upload.js` startLine: 16, endLine: 29)

### 4. APP下載推廣
- 內建APP下載提示橫幅
- 多處下載入口：
  - 頁首區域
  - 寵物造型師頁面
- 強調使用APP可提升3D模型精準度
(參考 `PetStylist.js` startLine: 17, endLine: 33)

### 5. 用戶指引
- 詳細的照片上傳指南
- 清晰的注意事項說明
- 示例圖片展示
(參考 `PetCreator.js` startLine: 87, endLine: 94)

## 技術實現
- React 框架
- React Router 用於路由管理
- Tailwind CSS 用於樣式設計
- 自定義組件系統
- 狀態管理使用 React Hooks

## 待開發功能
1. 3D模型生成功能
2. 用戶帳號系統
3. 模型預覽功能
4. 歷史記錄功能
5. 社交分享功能

## 注意事項
- 目前專案處於前端開發階段
- 後端API尚未整合
- 需要進一步優化圖片上傳的使用者體驗