---
outline: deep
---

# QDAY Staking User Guide

## Prerequisites

Before you begin staking, please ensure you have the following:

- An EVM-compatible wallet (MetaMask recommended)
- Sufficient QDAY tokens in your wallet for staking
- A small amount of QDAY for transaction fees

:::tip Tip
If you don't have a MetaMask wallet yet, please refer to the [MetaMask Wallet User Guide](/guide/metamask).
:::

## 1. What Is the Purpose of QDAY Staking?

QDAY Staking allows you to stake your existing QDAY tokens and earn more QDAY tokens every day---exactly as it sounds: as long as you hold QDAY, you can grow your QDAY holdings through staking.

### Staking Benefits

- **Passive Income**: Earn stable daily rewards through staking
- **Secure and Reliable**: Smart contracts execute automatically without trusting third parties
- **Flexible Options**: Freely choose your lock-up period; longer lock-ups yield higher rewards

## 2. How It Works?

To participate in the QDAY Staking, follow these two simple steps:

1. **Stake QDAY**:

   Visit [portal.qday.io](http://portal.qday.io) and click the QDAY Staking page, choose your lock-up period, and stake your QDAY tokens.

2. **Claim QDAY Rewards**:

   Once staked, you begin receiving **daily validator rewards** in QDAY automatically.

### Staking Mechanism

- When staking, the system automatically converts QDAY to WQDAY (wrapped token)
- Longer lock-up periods result in higher share allocations
- Rewards accumulate daily and can be claimed and withdrawn to your wallet anytime

## 3. Tutorial

Follow these steps to start staking:

### Step 1: Set up your wallet

- Log in your EVM wallet (e.g., MetaMask) and add the QDay Mainnet as a custom network. For detailed instructions, please refer to [MetaMask Wallet User Guide - Add QDay Network](/guide/metamask#add-qday-network-to-metamask).

  ![Add QDay Mainnet to MetaMask](/qday/staking/image1.png)
  
  ![QDay Mainnet added successfully](/qday/staking/image2.png)

- Switch your wallet to QDay Mainnet.

### Step 2: Access to QDAY Staking

- Go to the <https://portal.qday.io/>

- Click the **"QDAY Staking"** tab and it will redirect to QDAY Staking.

  ![QDAY Staking page navigation](/qday/staking/image3.png)

- Click **"Connect Wallet"** and link your wallet.

  ![Connect wallet interface](/qday/staking/image4.png)

### Step 3: Stake QDAY

- Enter the amount of WQDAY/QDAY to stake → Enter the number of days you want to lock your account → Click **"Convert & Stake"** and confirm the transaction in your wallet.

:::warning Note
  1. The longest lock-up period cannot exceed 1460 days.
  2. When you stake, your QDAY will be automatically converted to WQDAY (the wrapped token) if you have a sufficient balance.
:::

  ![Staking interface with amount and lock period input](/qday/staking/image5.png)

- Check your staking status in **"Your Staking Stats"** section

  ![Staking statistics display](/qday/staking/image6.png)

### Step 4: Rewards and Withdraw

**Daily rewards** accumulate automatically → **Claim** your pending rewards → **Withdraw** from your vault balance to your EVM wallet.

  ![Rewards claim and withdraw interface](/qday/staking/image7.png)

## 4. Reward Details

**A. Reward Pool**
50% of the total QDAY supply (approximately 11.259 billion tokens) is allocated for staking rewards.

**B. Daily Distribution**
Each day, 1/1000 of the remaining rewards in the pool is distributed to stakers. The daily payout decreases gradually over time.

**C. Reward Share Calculation**
Your daily reward is determined by your Share, which is calculated as:
Number of QDAY staked × Remaining lock-up days

Example:

You stake 100 QDAY with a 1,460-day lock-up:
Your Share = 100 × 1,460 = 146,000

Meanwhile, another user stakes 200 QDAY with a 730-day lock-up:
Their Share = 200 × 730 = 146,000

**Stake more tokens or choose a longer lock-up period to increase your daily rewards.**

## 5. Frequently Asked Questions (FAQ)

### Q1: Can an Abelian network be added to MetaMask?

**Answer**: No.

Abelian is an independent post-quantum blockchain network that uses a different technical architecture from EVM. MetaMask is designed specifically for Ethereum Virtual Machine (EVM) compatible chains and therefore cannot support the Abelian network.

:::warning Note
If you need to use the Abelian network, please use the [Abelian Pro mobile wallet application](/guide/abelian-pro).
:::

### Q2: Can a QDAY network be added to MetaMask?

**Answer**: Yes.

The QDAY network is an EVM-compatible blockchain that fully supports MetaMask wallet. You can easily add the QDAY Mainnet to MetaMask and use MetaMask for QDAY token management, transfers, and staking operations.

For detailed instructions, please refer to [Step 1: Set up your wallet](#step-1-set-up-your-wallet) in this guide, or check the [MetaMask Wallet User Guide](/guide/metamask#add-qday-network-to-metamask).
