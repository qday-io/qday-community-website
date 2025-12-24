---
outline: deep
---

# QDAY 質押用戶指引

## 前置要求

在開始質押之前,請確保您已經準備好以下內容:

- 一個支援 EVM 的錢包(推薦使用 MetaMask)
- 錢包中有足夠的 QDAY 代幣用於質押
- 少量 QDAY 用於支付交易手續費

:::tip 提示
如果您還沒有 MetaMask 錢包,請參考 [MetaMask 錢包帳戶用戶指引](/zh/guide/metamask)。
:::

## 1. QDAY 質押的目的是什麼?

QDAY 質押允許您質押現有的 QDAY 代幣,並每天賺取更多 QDAY 代幣——正如字面意思:只要您持有 QDAY,就可以透過質押來增加您的 QDAY 持有量。

### 質押的優勢

- **被動收入**: 透過質押獲得穩定的每日獎勵
- **安全可靠**: 智能合約自動執行,無需信任第三方
- **靈活選擇**: 可自由選擇鎖定期限,鎖定越久獎勵越高

## 2. 如何運作?

要參與 QDAY 質押,請遵循以下兩個簡單步驟:

1. **質押 QDAY**:

   造訪 [portal.qday.io](http://portal.qday.io) 並點擊 QDAY 質押頁面,選擇您的鎖定期限,然後質押您的 QDAY 代幣。

2. **領取 QDAY 獎勵**:

   質押後,您將自動開始每日獲得 **驗證者獎勵** QDAY。

### 質押機制說明

- 質押時系統會自動將 QDAY 轉換為 WQDAY(封裝代幣)
- 鎖定期越長,獲得的份額越高
- 獎勵每天自動累積,可隨時領取並提領到錢包

## 3. 教學

請按照以下步驟開始質押:

### 步驟 1: 設定您的錢包

- 登入您的 EVM 錢包(例如 MetaMask)並使用以下 QDAY 主網資訊 **「新增自訂網路」**:

  > 網路名稱: QDay Mainnet
  > RPC: https://rpc.qday.io
  > 鏈 ID: 44001
  > 符號: QDAY
  > 區塊鏈瀏覽器網址: <https://explorer.qday.io>

  ![](/qday/staking/image1.png)
  ![](/qday/staking/image2.png)

- 將您的錢包切換至 QDay 主網。

### 步驟 2: 存取 QDAY 質押

- 前往 <https://portal.qday.io/>

- 點擊 **「QDAY Staking」** 分頁,它將重新導向至 QDAY 質押頁面。

  ![](/qday/staking/image3.png)

- 點擊 **「Connect Wallet」** 並連結您的錢包。

  ![](/qday/staking/image4.png)

### 步驟 3: 質押 QDAY

- 輸入要質押的 WQDAY/QDAY 數量 → 選擇您的鎖定期限(天數)→ 點擊 **「Convert & Stake」** 並在您的錢包中確認交易。

  注意:當您質押時,如果您有足夠的餘額,您的 QDAY 將自動轉換為 WQDAY(封裝代幣)。

  ![](/qday/staking/image5.png)

- 在「Your Staking Stats」區段檢查您的質押狀態

  ![](/qday/staking/image6.png)

### 步驟 4: 獎勵與提領

**每日獎勵** 自動累積 → **領取** 您的待領獎勵 → 從您的金庫餘額 **提領** 至您的 EVM 錢包。

  ![](/qday/staking/image7.png)

## 4. 獎勵詳情

**A. 獎勵池**
QDAY 總供應量的 50%(約 112.59 億枚代幣)分配用於質押獎勵。

**B. 每日分配**
每天,獎勵池中剩餘獎勵的 1/1000 將分配給質押者。每日支付金額會隨著時間逐漸減少。

**C. 獎勵份額計算**
您的每日獎勵由您的份額決定,計算方式如下:
質押的 QDAY 數量 × 剩餘鎖定天數

範例:

您質押 100 QDAY,鎖定期為 1,460 天:
您的份額 = 100 × 1,460 = 146,000

同時,另一位使用者質押 200 QDAY,鎖定期為 730 天:
他們的份額 = 200 × 730 = 146,000

**質押更多代幣或選擇更長的鎖定期限以增加您的每日獎勵。**

## 5. 常見問題解答 (FAQ)

### Q1: Abelian 網路可以新增到 MetaMask 嗎?

**答**: 不可以。

Abelian 是一個獨立的後量子區塊鏈網路,使用與 EVM 不同的技術架構。MetaMask 是專為以太坊虛擬機(EVM)相容鏈設計的錢包,因此無法支援 Abelian 網路。

:::warning 注意
如果您需要使用 Abelian 網路,請使用 [Abelian Pro 行動錢包應用程式](/zh/guide/abelian-pro)。
:::

### Q2: QDAY 網路可以新增到 MetaMask 嗎?

**答**: 可以。

QDAY 網路是一個 EVM 相容的區塊鏈,完全支援 MetaMask 錢包。您可以輕鬆地將 QDAY 主網新增到 MetaMask 中,並使用 MetaMask 進行 QDAY 代幣的管理、轉帳和質押操作。

詳細的新增步驟請參考本指引的 [步驟 1: 設定您的錢包](#步驟-1-設定您的錢包) 章節,或查看 [MetaMask 錢包帳戶用戶指引](/zh/guide/metamask#新增-qday-網路到-metamask)。
