---
outline: deep
---

# ABEL 質押用戶指引

## 前置要求

在開始質押之前,請確保您已經準備好以下內容:

- 一個支援 EVM 的錢包(推薦使用 MetaMask)
- Abelian Pro 錢包中有 ABEL 代幣
- 少量 QDAY 用於支付 QDay 網路上的交易手續費

:::tip 提示
如果您還沒有 MetaMask 錢包,請參考 [MetaMask 錢包帳戶用戶指引](/zh/guide/metamask)。
:::

## ABEL 質押的目的是什麼?

ABEL 質押允許您質押 ABEL 代幣,並每天賺取 QDAY 代幣。這是 QDay 生態系統的核心功能之一,專為後量子 Abelian 網路的長期支持者設計。

透過將 ABEL 轉換為其封裝形式 **WABEL**,您可以選擇質押 WABEL 的期限——範圍從 **3 個月到 4 年**。質押期限越長,每天賺取的 QDAY 代幣就越多。

這個系統將被動持有的 ABEL 轉化為主動產生收益的資產,使用戶激勵與生態系統成長保持一致。

## 如何運作

要參與 ABEL 質押,請遵循以下三個簡單步驟:

1. **轉換 ABEL → WABEL**:

   造訪 [portal.qday.io](http://portal.qday.io) 並使用官方 Abelian 鏈橋接,將 Abelian 網路上的 ABEL 代幣轉換為 QDay 網路上的封裝 ABEL 代幣(WABEL)。

2. **質押 WABEL 並接收 cvxQDAY**:

   選擇您想要鎖定 WABEL 代幣的時間長度(最少:3 個月)。質押後,您將立即收到 cvxQDAY 代幣,它作為您的質押憑證和獎勵憑證。

3. **賺取 QDAY**:

   只要您持有 cvxQDAY,您就會每天收到 QDAY 空投。一旦鎖定期結束,您可以歸還 cvxQDAY 來解除質押您的 WABEL。然後您可以選擇透過 Abelian 鏈橋接將 WABEL 轉換回 ABEL。

## 教學

請按照以下步驟開始質押:

### 步驟 1: 轉換 ABEL 為 WABEL

- 前往 QDay Portfolio: <https://portal.qday.io/>

- 點擊 **Bridge** 頁面。

  ![橋接頁面介面](/qday/abel-staking/image1.png)

- 點擊 **「連接錢包(Connect Wallet)」** 來連接您的 EVM 錢包(例如 MetaMask)。

- 在您的錢包中,新增 QDay 主網為自訂網路。詳細步驟請參考 [MetaMask 錢包帳戶用戶指引 - 新增 QDay 網路](/zh/guide/metamask#新增-qday-網路到-metamask)。

  ![連接錢包提示](/qday/abel-staking/image2.png)

  ![新增 QDay 主網到 MetaMask](/qday/abel-staking/image3.png)

- 將您的錢包切換至 QDay 主網。

- 返回 Abelian 鏈橋接。

- 在 **「From」** 區段選擇 **「Abelian」**(**「To」** 區段將自動切換為 **「QDay」**)。手動輸入 ABEL 數量和您的 QDay 接收地址(這也將是您的 WABEL 接收地址)。

- 點擊 **「產生 QR Code(Generate QR Code)」**。

  ![橋接介面,輸入數量](/qday/abel-staking/image4.png)

  ![產生的跨鏈轉帳 QR Code](/qday/abel-staking/image5.png)

- 使用您的 Abelian Pro 錢包掃描 QR Code。

  ![使用 Abelian Pro 錢包掃描 QR Code](/qday/abel-staking/image6.png)

- 驗證收到的 WABEL 數量。

  ![WABEL 餘額確認](/qday/abel-staking/image7.png)

---

### 步驟 2: 質押 WABEL

- 前往 **ABEL 質押(ABEL Staking)** 頁面,如果您尚未連接錢包,請先連接。

- 輸入要質押的 WABEL 數量,選擇您的鎖定期限,然後點擊 **「質押 WABEL(Stake WABEL)」**。

  ![ABEL 質押介面,選擇數量和鎖定期限](/qday/abel-staking/image8.png)

### 步驟 3: 每天賺取 QDAY

確認後,cvxQDAY 和 WQDAY 將出現在您的錢包中。

:::tip 重要
將 cvxQDAY 視為 **「質押憑證」** 和 **「獎勵憑證」**。只要您持有 cvxQDAY 代幣,您就會每天賺取獎勵。
:::

  ![錢包中的 cvxQDAY 和 WQDAY 代幣](/qday/abel-staking/image9.png)

### 步驟 4: 到期後解除質押

- 一旦鎖定期結束,前往 **「解除質押(Unstake)」** 分頁。

- 輸入 WABEL 數量並點擊 **「解除質押 WABEL(Unstake WABEL)」**。系統將撤銷您的 cvxQDAY 並歸還您的 WABEL。

- *(選擇性)* 返回 Abelian 鏈橋接,將 WABEL 轉換回 ABEL。

## 獎勵詳情

**最大化您的加密貨幣獎勵!**

ABEL 質押根據您的鎖定期限提供不同的獎勵率——年化率高達 **1500%**。獎勵每天分配。

以下是根據您的鎖定期限可以賺取的金額:

| **鎖定期限** | **天數範圍** | **倍數**  |
| ------------ | ------------ | --------- |
| 3 個月       | 90–179 天    | 40%       |
| 6 個月       | 180–364 天   | 100%      |
| 12 個月      | 365–729 天   | 250%      |
| 24 個月      | 730–1094 天  | 600%      |
| 36 個月      | 1095–1459 天 | 1000%     |
| **48 個月**  | **1460 天**  | **1500%** |

鎖定越久,賺取越多——而且每天都有收益。就是這麼簡單!

## 為什麼叫「cvxQDAY」?

前綴 **「cvx」** 代表 `convex`，反映了非線性獎勵曲線:較長的鎖定期產生不成比例的更高回報——這是進階 DeFi 協議中的常見設計。與「QDAY」配對,它同時表示機制和生態系統。

---

**今天就質押 ABEL。每天賺取 QDAY——長期信仰者可獲得高達 1500% 的提升!**
