# Kawaii Pink 🌸

**Hermes 桌面端可爱粉色主题 —— 软萌粉嫩，甜到心里。**

一个为 [Hermes Agent](https://hermes-agent.nousresearch.com) 打造的双层粉色主题：

- **桌面端主题**（DesktopTheme 插件）—— 在 **设置 → 外观（Settings → Appearance）** 里像内置主题一样永久可选，支持亮色/暗色双色板切换；
- **CLI/TUI 皮肤**（YAML）—— 终端、TUI 界面同步换装，暗色终端自动使用配套的暗色配色。

## ✨ 特性

- 🎀 **亮色板**：蜜桃粉底色 + 梅子色文字 + 糖果粉高亮，温柔不刺眼；
- 🌙 **暗色板**：近黑底色点缀亮粉色，深夜也护眼；
- 🔤 **圆润字体**：中英文都走圆体 —— 拉丁字母用 Nunito（主题自带加载），中文用圆体（霞鹜975圆体 → 华康方圆体W7 依次回退，都没装则回退系统字体）；
- 🖥️ **全部表面覆盖**：桌面窗口、CLI、TUI、状态栏、补全菜单统一换装；
- 🧩 **零依赖**：纯 ESM 插件，无 React 依赖，放入文件夹即热加载。

## 📦 文件说明

```
kawaii-pink-hermes-theme/
├── plugin.js              # 桌面端主题插件（贡献到「主题」注册区，永久可选）
├── skins/
│   └── kawaii-pink.yaml   # CLI/TUI 皮肤（含 dark_colors 暗色块）
└── README.md
```

## 🛠️ 安装

### 1. 桌面端主题（推荐）

将 `plugin.js` 连同文件夹放入 Hermes 的桌面插件目录（文件夹名必须与插件 id 一致，即 `kawaii-pink`）：

```
$HERMES_HOME/desktop-plugins/kawaii-pink/plugin.js
```

应用会自动监听该目录，几秒内热加载完成。若未生效，按 `⌘K` 打开命令面板 → **Reload desktop plugins**。

然后到 **设置 → 外观** 的皮肤网格里选择 **Kawaii Pink** 即可。

### 2. CLI/TUI 皮肤

将 `skins/kawaii-pink.yaml` 放入：

```
$HERMES_HOME/skins/kawaii-pink.yaml
```

激活：

```bash
hermes config set display.skin kawaii-pink
```

恢复默认：

```bash
hermes config set display.skin default
```

## 🔤 字体

主题的字体栈按**文字类型**分工，缺哪个都不会报错，只会往下回退：

| 文字 | 首选 | 回退顺序 |
|------|------|----------|
| 拉丁字母 / 数字 | **Nunito**（主题通过 Google Fonts 自动加载，无需安装） | 系统无衬线 |
| 中文 | **霞鹜975圆体** | 华康方圆体W7 → 系统无衬线 |

想要中文也是圆体，推荐安装免费开源的 **霞鹜975圆体**（[lxgw/975Yuan](https://github.com/lxgw/975Yuan)，OFL 授权，可免费商用）：

1. 到 Releases 下载 `LXGW975YuanSC-400W.ttf`（常规）和 `LXGW975YuanSC-700W.ttf`（粗体）；
2. 右键 → **为所有用户安装**（或双击后选"安装"）；
3. 重启 Hermes。

> ⚠️ **注意**：Chromium/Electron 只认得**系统级安装**（或重登录后）的字体。装成"仅当前用户"时，Hermes 可能读不到，此时中文会回退到下一款圆体或系统字体。
>
> 若系统里没有 华康方圆体W7、也没装霞鹜975圆体，中文就会回退成默认黑体（不影响使用，只是不够圆）。

## 🎨 配色速览

### 亮色（Light）

| 用途 | 色值 |
|------|------|
| 背景 | `#FFF3F7` |
| 前景/文字 | `#5B3A4E` |
| 主色/高亮 | `#D63384` |
| 卡片 | `#FFFFFF` |
| 侧边栏 | `#FDEBF3` |
| 用户气泡 | `#FBD9E8` |
| 边框 | `#F3C9DC` |

### 暗色（Dark）

| 用途 | 色值 |
|------|------|
| 背景 | `#140E12` |
| 前景/文字 | `#F2D5E2` |
| 主色/高亮 | `#FF6FAE` |
| 卡片 | `#1D1319` |
| 侧边栏 | `#100B0E` |
| 用户气泡 | `#2E1B26` |
| 边框 | `#3A2230` |

## 📄 许可证

[MIT](LICENSE)
