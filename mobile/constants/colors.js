// constants/colors.js

const createTheme = ({
  name,
  icon,
  isDark = false,
  primary,
  background,
  surface,
  surfaceElevated,
  text,
  textSecondary,
  textMuted,
  border,
  expense,
  income,
}) => ({
  name,
  icon,
  isDark,

  // Brand
  primary,

  // Backgrounds
  background,
  surface,
  surfaceElevated,

  // Typography
  text,
  textSecondary,
  textMuted,
  textLight: textMuted,

  // Borders
  border,

  // Transaction colors
  expense,
  income,

  // Common
  white: "#FFFFFF",
  black: "#000000",

  // Semantic
  textOnPrimary: "#FFFFFF",

  // Soft backgrounds / Tints
  primarySoft: `${primary}1E`,
  expenseSoft: `${expense}1E`,
  incomeSoft: `${income}1E`,
  expenseLight: `${expense}1A`,
  incomeLight: `${income}1A`,

  // Status bar
  statusBar: isDark ? "light" : "dark",

  // Shadow
  shadow: isDark ? "#000000" : "#000000",
});

// ==========================================================
// COFFEE
// ==========================================================

const coffeeTheme = createTheme({
  name: "Coffee",
  icon: "☕",

  primary: "#8B593E",
  background: "#FFF8F3",
  surface: "#FFFFFF",
  surfaceElevated: "#FFFFFF",

  text: "#2F211A",
  textSecondary: "#6F584B",
  textMuted: "#9A8478",

  border: "#E8D8C8",

  expense: "#D64545",
  income: "#29965A",
});

// ==========================================================
// FOREST
// ==========================================================

const forestTheme = createTheme({
  name: "Forest",
  icon: "🌿",

  primary: "#2E7D32",
  background: "#F4FAF4",
  surface: "#FFFFFF",
  surfaceElevated: "#FFFFFF",

  text: "#173B1B",
  textSecondary: "#416146",
  textMuted: "#729275",

  border: "#D4E5D5",

  expense: "#C62828",
  income: "#2E8B57",
});

// ==========================================================
// PURPLE
// ==========================================================

const purpleTheme = createTheme({
  name: "Purple",
  icon: "💜",

  primary: "#6A1B9A",
  background: "#FAF5FC",
  surface: "#FFFFFF",
  surfaceElevated: "#FFFFFF",

  text: "#321044",
  textSecondary: "#684A76",
  textMuted: "#9A7BA8",

  border: "#E5D7EA",

  expense: "#D32F2F",
  income: "#388E3C",
});

// ==========================================================
// OCEAN
// ==========================================================

const oceanTheme = createTheme({
  name: "Ocean",
  icon: "🌊",

  primary: "#0277BD",
  background: "#F2FAFD",
  surface: "#FFFFFF",
  surfaceElevated: "#FFFFFF",

  text: "#073B4C",
  textSecondary: "#426775",
  textMuted: "#7896A2",

  border: "#D5E9F0",

  expense: "#D94A4A",
  income: "#239B8B",
});

// ==========================================================
// DARK (MIDNIGHT)
// ==========================================================

const darkTheme = createTheme({
  name: "Dark",
  icon: "🌙",
  isDark: true,

  primary: "#818CF8",
  background: "#121214",
  surface: "#1A1A1E",
  surfaceElevated: "#24242A",

  text: "#F3F4F6",
  textSecondary: "#9CA3AF",
  textMuted: "#6B7280",

  border: "#2E2E35",

  expense: "#F87171",
  income: "#4ADE80",
});

// ==========================================================
// EXPORT
// ==========================================================

export const THEMES = {
  coffee: coffeeTheme,
  forest: forestTheme,
  purple: purpleTheme,
  ocean: oceanTheme,
  dark: darkTheme,
};

export const THEME_KEYS = Object.keys(THEMES);

export const COLORS = THEMES.coffee;