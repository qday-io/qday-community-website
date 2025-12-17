---
outline: deep
---

# MetaMask Wallet Account User Guide

## Download MetaMask Extension

1. Open your browser and visit the [MetaMask official website](https://metamask.io/).

2. Select and install the extension suitable for your browser:

:::tip
Since the MetaMask extension for Microsoft Edge browser is still on v12, while Chrome and Firefox have both been updated to v13, this user guide is based on v13. Edge users should use this guide for reference only.
:::

   - For Chrome browser, click "[Install MetaMask for Chrome](https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn)".
   ![Install MetaMask Extension for Chrome](/qday-testnet/metamask/chrome-metamask-install-en.png)<br>
   - For Firefox browser, click "[Install MetaMask for Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/ether-metamask/)".
   ![Install MetaMask Extension for Firefox](/qday-testnet/metamask/firefox-metamask-install-en.png)<br>
   - For Microsoft Edge browser, click "[Install MetaMask for Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm)".
   ![Install MetaMask Extension for Microsoft Edge](/qday-testnet/metamask/edge-metamask-install-en.png)<br>
1. After clicking to add the extension, a MetaMask installation page will pop up. Click "Add Extension" or "Install".
   ![MetaMask Installation Page](/qday-testnet/metamask/add-to-edge-en.png)
2. After installation is complete, a MetaMask setup page will open, or click the extension icon in the upper right corner of the browser and select the MetaMask icon from the dropdown menu to begin setup.
   ![MetaMask Extension Icon Location](/qday-testnet/metamask/metamask-display-icon-en.png)
   (You can click "Show in toolbar" to display the MetaMask icon directly in the toolbar)

## Create MetaMask Wallet Account

1. Click the MetaMask icon in the toolbar to open the MetaMask extension setup page, then click "Create a new wallet";
   ![Create MetaMask Wallet](/qday/metamask/create-metamask-wallet.png)
2. In the "Choose an option to continue" window that appears, click "Use Secret Recovery Phrase";
   ![Choose to Use Secret Recovery Phrase](/qday/metamask/create-metamask-wallet2.png)
3. On the create password page, set a strong password, check "If I lose this password, MetaMask can't reset it.", then click "Create password";
   ![Set MetaMask Password](/qday/metamask/set-metamask-password.png)
4. On the "Save your Secret Recovery Phrase" page, click the "Tap to reveal" area to display the recovery phrase. Copy and backup the 12-word recovery phrase locally (very important!), and keep it safe. After completion, click the "Continue" button;
   ![Backup MetaMask Recovery Phrase](/qday/metamask/backup-metamask-mnemonic.png)
5. On the "Confirm your Secret Recovery Phrase" page, select the three corresponding words from the bottom in the prompted order to fill in the blanks and verify your recovery phrase. Click "Continue". If verification is successful, a "Perfect That's right!" window will appear - click the "Got it" button;
   ![Verify MetaMask Recovery Phrase](/qday/metamask/verify-metamask-mnemonic.png)
6. On the "Help us improve MetaMask" page, make your selection as needed and click the "Continue" button. On the "Your wallet is ready!" page, click "Done" to complete wallet creation.
   ![MetaMask Improvement](/qday/metamask/metamask-improve.png)

**Note**: The recovery phrase and private key are the only backup of your wallet account. Keep them safe and do not share them with others.

## Get Wallet Address

1. Click the MetaMask icon in the browser toolbar. In the popup window, click the dropdown icon next to "Account 1" at the top left;
   ![Select MetaMask Wallet](/qday/metamask/get-metamask-address1.png)
2. In the account list, click the three-dot menu icon next to "Account 1", and select "Addresses" from the popup menu;
   ![Expand MetaMask Wallet Menu](/qday/metamask/get-metamask-address2.png)
3. On the "Addresses" page, click the "Copy to clipboard" icon button to copy the wallet address to your local clipboard, or click the "Show QRCode" icon button, then click the "Copy address" button below the wallet address to copy it to your local clipboard. The QR code is convenient for mobile wallets to scan and transfer.
   ![Copy MetaMask Wallet Address](/qday/metamask/get-metamask-address3.png)

## Add QDAY Network to MetaMask

### Automatically Add QDAY to MetaMask Network List

The blockchain explorer's automatic QDAY addition to MetaMask network feature has been launched:

1. Please visit [QDay Explorer](https://explorer.qday.io);
2. Click the "Add QDay Mainnet" button in the upper right corner of the page, confirm the addition, and QDAY will be automatically added to MetaMask.

### Manually Add QDAY to MetaMask Network List

1. Click the MetaMask icon in the browser toolbar. In the popup window, click the "☰" menu icon at the top right, and select "Networks" from the dropdown menu;
   ![MetaMask Network Menu](/qday/metamask/metamask-network-menu.png)
2. On the "Manage networks" page that appears, click the "Add a custom network" button at the bottom;
   ![Manually Add QDAY Network](/qday/metamask/add-metamask-network1.png)
3. On the manual network addition page, fill in the following information:
   - **Network Name**: QDAY
   - **Default RPC URL**: `https://rpc.qday.io`
   - **Chain ID**: 44001
   - **Currency Symbol**: QDAY
   - **Block Explorer**: `https://explorer.qday.io`
   ![Manually Add QDAY Network](/qday/metamask/add-metamask-network2.png)
   Click the "Save" button to complete the addition.

### Connect to QDAY Network

Click the MetaMask icon in the toolbar. On the account interface, click the "Tokens" tab, then select and switch to "QDAY" from the network list selector in the upper left corner.
   ![MetaMask Switch to QDAY Network](/qday/metamask/switch-metamask-qday-network.png)

## Import QDAY Wallet

:::tip Tip
This step requires first backing up the private key from the QDAY wallet account details page in the Abelian Pro mobile wallet application, then following the steps below to import the QDAY wallet account into MetaMask.
:::

1. Click the MetaMask icon in the toolbar. In the popup window, click the dropdown icon next to "Account1" at the top left to enter the account list, click "Add wallet" to create a new account;
   ![Add MetaMask Account](/qday/metamask/add-metamask-account.png)
2. On the add account page, select "Import an account" to import the QDAY wallet account from Abelian Pro;
   ![Import QDAY Wallet Account](/qday/metamask/import-qday-account.png)
3. On the "Add wallet" page, select "Private Key" and enter the private key string backed up from the Abelian Pro mobile wallet, then click the "Import" button to complete the QDAY wallet import;
   ![Enter QDAY Wallet Private Key](/qday/metamask/input-qday-privatekey.png)
4. A wallet account named "Imported Account 1" will be added to the account list interface. You can click the three-dot menu icon on the right, select "Rename" from the popup menu, enter a new wallet name in the "Account name" box that appears, and click the "Confirm" button to complete the rename;
   ![Rename MetaMask Account](/qday/metamask/rename-metamask-account.png)
5. In this example, the account is named "QDAY-1". Click to select this account. You can switch between the two accounts in the account list.
   ![Select MetaMask Account](/qday/metamask/select-metamask-account.png)

## Add QDAY ERC20 Tokens to MetaMask

### Add USD8 Token to MetaMask

1. Click the MetaMask icon in the browser toolbar. On the main interface's "Tokens" tab, click "Import tokens";
   ![MetaMask Import USD8 Token 1](/qday/metamask/import-tokens1.png)
2. On the "Import tokens" page, first select the QDAY network, then enter the USD8 Token address in the "Token contract address" field: `0x668FaAFd6b363d6cED62491BfCBE2A39da3D14cB`;
   ![MetaMask Import USD8 Token 2](/qday/metamask/import-tokens2.png)
3. Wait a moment and the USD8 Token information will automatically load - Token symbol and Token decimal. Click the "Next" button;
4. A confirmation import window will appear. Click the "Import" button to complete the import.
   ![MetaMask Import USD8 Token 3](/qday/metamask/import-tokens3.png)
5. The USD8 token balance will now be displayed in the Tokens tab on the MetaMask main interface.
   ![MetaMask Display USD8 Token](/qday/metamask/usd8-tokens.png)

### Add WQDAY and WABEL Tokens

#### Token Contract Address List

| Contract Name | Address                                    | Description                 |
| ------------- | ------------------------------------------ | --------------------------- |
| USD8          | 0x668FaAFd6b363d6cED62491BfCBE2A39da3D14cB | USD Token Contract          |
| WQDAY         | 0xEF253e9FC2d063869FD5B3C0E1c326aB7E030660 | Wrapped QDAY Token Contract |
| WABEL         | 0x3a4D0834fe667D780c0fa434Ec9c1c3b08181882 | Wrapped ABEL Token Contract |

Tip: [Follow the USD8 steps](#add-usd8-token-to-metamask) to add WQDAY and WABEL tokens to MetaMask.
