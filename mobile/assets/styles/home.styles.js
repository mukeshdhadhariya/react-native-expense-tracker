
import { StyleSheet } from "react-native";

export const createHomeStyles = (theme) =>
  StyleSheet.create({
    // ==========================================================
    // SCREEN
    // ==========================================================

    screen: {
      flex: 1,
      backgroundColor: theme.background,
    },

    loadingScreen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      backgroundColor: theme.background,
    },

    loadingText: {
      marginTop: 10,
      fontSize: 14,
      color: theme.textSecondary,
    },

    authMessage: {
      marginTop: 14,
      fontSize: 15,
      color: theme.textSecondary,
      textAlign: "center",
    },

    // ==========================================================
    // HEADER
    // ==========================================================

    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",

      paddingHorizontal: 18,
      paddingTop: 12,
      paddingBottom: 14,

      backgroundColor: theme.background,
    },

    headerLeft: {
      flex: 1,
      minWidth: 0,

      flexDirection: "row",
      alignItems: "center",
    },

    avatar: {
      width: 39,
      height: 39,

      borderRadius: 22,

      alignItems: "center",
      justifyContent: "center",

      backgroundColor: theme.primarySoft,

      borderWidth: 1,
      borderColor: theme.border,

      marginRight: 11,
    },

    avatarText: {
      fontSize: 16,
      fontWeight: "800",
      color: theme.primary,
    },

    welcomeContainer: {
      flex: 1,
      minWidth: 0,
    },

    welcomeText: {
      fontSize: 12,
      fontWeight: "500",
      color: theme.textMuted,

      marginBottom: 2,
    },

    usernameText: {
      fontSize: 15,
      fontWeight: "700",
      color: theme.text,
    },

    // ==========================================================
    // HEADER ACTIONS
    // ==========================================================

    headerRight: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,

      marginLeft: 12,
    },

    iconButton: {
      width: 38,
      height: 38,

      borderRadius: 21,

      alignItems: "center",
      justifyContent: "center",

      backgroundColor: theme.surface,

      borderWidth: 1,
      borderColor: theme.border,
    },

    themeIcon: {
      fontSize: 18,
    },

    addButton: {
      width: 38,
      height: 38,

      borderRadius: 22,

      alignItems: "center",
      justifyContent: "center",

      backgroundColor: theme.primary,

      shadowColor: theme.shadow,

      shadowOffset: {
        width: 0,
        height: 3,
      },

      shadowOpacity: 0.14,
      shadowRadius: 6,

      elevation: 3,
    },

    buttonDisabled: {
      opacity: 0.45,
    },

    // ==========================================================
    // BALANCE
    // ==========================================================

    balanceWrapper: {
      paddingHorizontal: 18,
      marginBottom: 18,
    },

    // ==========================================================
    // ERROR
    // ==========================================================

    errorBox: {
      flexDirection: "row",
      alignItems: "center",

      marginHorizontal: 18,
      marginBottom: 16,

      padding: 13,

      borderRadius: 14,

      backgroundColor: theme.expenseSoft,

      borderWidth: 1,
      borderColor: `${theme.expense}30`,
    },

    errorIconContainer: {
      width: 34,
      height: 34,

      borderRadius: 17,

      alignItems: "center",
      justifyContent: "center",

      backgroundColor: `${theme.expense}18`,

      marginRight: 10,
    },

    errorContent: {
      flex: 1,
      minWidth: 0,
    },

    errorTitle: {
      fontSize: 13,
      fontWeight: "700",
      color: theme.text,

      marginBottom: 2,
    },

    errorText: {
      fontSize: 11,
      lineHeight: 15,
      color: theme.textSecondary,
    },

    retryButton: {
      marginLeft: 8,

      paddingHorizontal: 11,
      paddingVertical: 8,

      borderRadius: 10,

      backgroundColor: theme.primary,
    },

    retryText: {
      fontSize: 11,
      fontWeight: "700",
      color: theme.textOnPrimary,
    },

    // ==========================================================
    // TRANSACTIONS HEADER
    // ==========================================================

    transactionsHeaderContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",

      paddingHorizontal: 18,

      marginBottom: 12,
    },

    sectionHeading: {
      flex: 1,
      minWidth: 0,
    },

    sectionTitle: {
      fontSize: 16,
      fontWeight: "800",
      color: theme.text,
    },

    sectionSubtitle: {
      marginTop: 2,

      fontSize: 12,
      color: theme.textMuted,
    },

    viewAllButton: {
      paddingHorizontal: 10,
      paddingVertical: 6,

      borderRadius: 12,

      backgroundColor: theme.primarySoft,
    },

    viewAllText: {
      fontSize: 11,
      fontWeight: "700",
      color: theme.primary,
    },

    // ==========================================================
    // LIST
    // ==========================================================

    transactionsList: {
      flex: 1,
      backgroundColor: theme.background,
    },

    transactionsListContent: {
      paddingBottom: 32,
    },

    emptyLoading: {
      paddingTop: 25,
      paddingBottom: 40,

      alignItems: "center",
      justifyContent: "center",
    },

    // ==========================================================
    // TRANSACTION ITEM
    // ==========================================================

  transactionCard: {
    flexDirection: "row",
    alignItems: "center",

    marginHorizontal: 16,
    marginBottom: 10,

    paddingVertical: 12,
    paddingHorizontal: 14,

    borderRadius: 16,

    // Single unified background — eliminates inner white strip bug
    backgroundColor: theme.card || theme.surface,

    borderWidth: 1,
    borderColor: theme.border,

    shadowColor: theme.shadow || "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,

    elevation: 2,
  },

  categoryIconContainer: {
    width: 40,
    height: 40,
    flexShrink: 0,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 12,

    marginRight: 12,
  },

  transactionInfo: {
    flex: 1,
    minWidth: 0,
    justifyContent: "center",
    marginRight: 8,
  },

  transactionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: theme.text,
    letterSpacing: -0.2,
    marginBottom: 2,
  },

  transactionMeta: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },

  transactionCategory: {
    // Removed hardcoded maxWidth: 95 that forced "Other" -> "O..."
    flexShrink: 1,
    fontSize: 12,
    fontWeight: "500",
    color: theme.textSecondary || theme.textLight,
  },

  metaDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: theme.textSecondary || theme.textLight,
    marginHorizontal: 6,
    opacity: 0.5,
  },

  transactionDate: {
    flexShrink: 0,
    fontSize: 11,
    fontWeight: "500",
    color: theme.textSecondary || theme.textLight,
  },

  transactionAmountContainer: {
    flexShrink: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: 6,
  },

  transactionAmount: {
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: -0.3,
  },

  deleteButton: {
    width: 32,
    height: 32,
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

    // ==========================================================
    // EMPTY STATE
    // ==========================================================

    emptyState: {
      marginHorizontal: 18,
      marginTop: 8,

      paddingHorizontal: 24,
      paddingVertical: 34,

      alignItems: "center",
      justifyContent: "center",

      borderRadius: 18,

      backgroundColor: theme.surface,

      borderWidth: 1,
      borderColor: theme.border,
    },

    emptyStateTitle: {
      marginTop: 12,

      fontSize: 17,
      fontWeight: "700",

      color: theme.text,
    },

    emptyStateText: {
      marginTop: 6,

      fontSize: 13,
      lineHeight: 19,

      textAlign: "center",

      color: theme.textSecondary,
    },
  });