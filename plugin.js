/**
 * Kawaii Pink — cute light-pink theme for the Hermes desktop.
 *
 * Contributes a full DesktopTheme to the `themes` registry area, so it always
 * shows up in Settings → Appearance (and Cmd-K, /skin) like a built-in, even
 * when a different skin is active. The matching CLI/TUI skin lives in
 * $HERMES_HOME/skins/kawaii-pink.yaml (with a `dark_colors` block for dark
 * terminals).
 *
 * LIGHT/DARK: the theme ships a real `darkColors` palette (black + pink), so
 * the Appearance light/dark toggle works exactly like the built-in themes.
 * The plugin ALSO stamps itself into the app's user-theme store
 * (localStorage `hermes-desktop-user-themes-v1`, the same record VS Code
 * imports write): user themes outrank backend-pushed skins in the resolver,
 * which keeps this dual-palette theme winning over the backend's converted
 * (single-mode) skin, and lets the boot-time paint resolve it synchronously
 * with no flash of the default theme.
 *
 * Plain ESM, loaded uncompiled. No UI is rendered, so no react imports needed.
 * After saving: ⌘K → Reload desktop plugins (or wait a few seconds — the app
 * watches this folder).
 */

const ID = 'kawaii-pink'

// Round fonts, split by script so each one can do what it's best at:
//   - Latin/digits → Nunito (rounded, from Google Fonts via FONT_URL)
//   - CJK          → a rounded CJK face, tried in order. 霞鹜975圆体 (LXGW 975
//                    Yuan) first — free & open source (OFL), install it for the
//                    intended look — then 华康方圆体W7, a rounded CJK face that
//                    ships with some Windows installs. Chromium only resolves a
//                    family that's installed SYSTEM-WIDE (or after a re-login for
//                    per-user fonts), so a missing entry simply falls through to
//                    the next one; the system stack below is always the last resort.
const FONT_URL = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap'

const FONT_SANS =
  '"Nunito", "LXGW 975 Yuan SC 400W", "霞鹜975圆体SC 400W", "LXGW 975 Yuan SC", "霞鹜975圆体SC", "华康方圆体W7", "DFFangYuanW7-GB", "Segoe WPC", "Segoe UI", -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", emoji'

const FONT_MONO =
  'Menlo, Monaco, "SF Mono", "Courier Prime", monospace, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", emoji'

// Light palette — blush pink surfaces, plum text, candy-pink accents.
const light = {
  background: '#FFF3F7',
  foreground: '#5B3A4E',
  card: '#FFFFFF',
  cardForeground: '#5B3A4E',
  muted: '#FDE7F0',
  mutedForeground: '#8C5672',
  popover: '#FFFFFF',
  popoverForeground: '#5B3A4E',
  primary: '#D63384',
  primaryForeground: '#FFFFFF',
  secondary: '#FBD9E8',
  secondaryForeground: '#8C3A66',
  accent: '#FADEEA',
  accentForeground: '#A63D73',
  border: '#F3C9DC',
  input: '#F6D5E4',
  ring: '#D63384',
  midground: '#D63384',
  midgroundForeground: '#FFFFFF',
  composerRing: '#D63384',
  destructive: '#C2334E',
  destructiveForeground: '#FFFFFF',
  sidebarBackground: '#FDEBF3',
  sidebarBorder: '#F3C9DC',
  userBubble: '#FBD9E8',
  userBubbleBorder: '#F0B8D2'
}

// Dark palette — black with pink accents (matches skins/kawaii-pink.yaml dark_colors).
const dark = {
  background: '#140E12',
  foreground: '#F2D5E2',
  card: '#1D1319',
  cardForeground: '#F2D5E2',
  muted: '#2A1A23',
  mutedForeground: '#B08AA0',
  popover: '#22151C',
  popoverForeground: '#F2D5E2',
  primary: '#FF6FAE',
  primaryForeground: '#1A0B12',
  secondary: '#3A2230',
  secondaryForeground: '#FFC4DE',
  accent: '#331E29',
  accentForeground: '#FFB1D2',
  border: '#3A2230',
  input: '#2A1A23',
  ring: '#FF6FAE',
  midground: '#FF6FAE',
  midgroundForeground: '#1A0B12',
  composerRing: '#FF6FAE',
  destructive: '#E5486D',
  destructiveForeground: '#FFF0F4',
  sidebarBackground: '#100B0E',
  sidebarBorder: '#33202B',
  userBubble: '#2E1B26',
  userBubbleBorder: '#4A2A3A'
}

const theme = {
  name: ID,
  label: 'Kawaii Pink',
  description: '软萌粉色主题，可爱又甜美 —— Hermes 桌面端',
  colors: light,
  darkColors: dark,
  typography: {
    fontSans: FONT_SANS,
    fontMono: FONT_MONO,
    fontUrl: FONT_URL
  }
}

export default {
  id: ID,
  name: 'Kawaii Pink',
  register(ctx) {
    // Stamp into the app's user-theme store so this dual-palette theme wins
    // over the backend's converted single-mode skin and resolves at boot
    // with no flash. Same record shape as `installUserTheme`; must carry
    // name/label/description + background/foreground/primary to pass the
    // app's validity check. Never clobbers other installed themes.
    try {
      const KEY = 'hermes-desktop-user-themes-v1'
      const existing = JSON.parse(window.localStorage.getItem(KEY) || '{}')
      existing[ID] = theme
      window.localStorage.setItem(KEY, JSON.stringify(existing))
    } catch {
      // Best-effort: a restricted storage context shouldn't break theming.
    }

    // A data contribution — consumed by the theme engine (themes registry
    // area) and listed in Appearance / Cmd-K / /skin with no extra wiring.
    ctx.register({
      id: 'theme',
      area: 'themes',
      title: 'Kawaii Pink',
      data: theme
    })
  }
}
