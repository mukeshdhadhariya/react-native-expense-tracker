// constants/colors.js

const createTheme = ({
  name,
  icon,
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

  // Soft backgrounds
  primarySoft: `${primary}14`,
  expenseSoft: `${expense}12`,
  incomeSoft: `${income}12`,

  // Status bar
  statusBar: "dark",

  // Shadow
  shadow: "#000000",
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
  textLight:"#C62828",

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
// EXPORT
// ==========================================================

export const THEMES = {
  coffee: coffeeTheme,
  forest: forestTheme,
  purple: purpleTheme,
  ocean: oceanTheme,
};

export const THEME_KEYS = Object.keys(THEMES);

export const COLORS = THEMES.coffee;