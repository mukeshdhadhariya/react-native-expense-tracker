import { StyleSheet } from "react-native";

export const createCreateStyles = (
  theme
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        theme.background,
    },

    header: {
      minHeight: 58,
      paddingHorizontal: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent:
        "space-between",
      borderBottomWidth: 1,
      borderBottomColor:
        theme.border,
    },

    backButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:
        theme.surfaceElevated,
      borderWidth: 1,
      borderColor:
        theme.border,
    },

    headerTitle: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.text,
    },

    saveButtonContainer: {
      minWidth: 66,
      height: 40,
      paddingHorizontal: 14,
      borderRadius: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent:
        "center",
      backgroundColor:
        theme.primary,
    },

    saveButton: {
      color:
        theme.textOnPrimary,
      fontSize: 14,
      fontWeight: "700",
    },

    saveButtonDisabled: {
      opacity: 0.5,
    },

    card: {
      backgroundColor:
        theme.card,
      margin: 16,
      borderRadius: 18,
      padding: 15,
      borderWidth: 1,
      borderColor:
        theme.border,
    },

    typeSelector: {
      height: 44,
      flexDirection: "row",
      backgroundColor:
        theme.background,
      borderRadius: 12,
      padding: 3,
      marginBottom: 15,
    },

    typeButton: {
      flex: 1,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent:
        "center",
    },

    typeButtonActive: {
      backgroundColor:
        theme.primary,
    },

    typeIcon: {
      marginRight: 6,
    },

    typeButtonText: {
      color:
        theme.textSecondary,
      fontSize: 13,
      fontWeight: "600",
    },

    typeButtonTextActive: {
      color:
        theme.textOnPrimary,
    },

    amountContainer: {
      height: 68,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      borderRadius: 14,
      backgroundColor:
        theme.surfaceElevated,
      borderWidth: 1,
      borderColor:
        theme.border,
      marginBottom: 14,
    },

    currencySymbol: {
      fontSize: 27,
      fontWeight: "800",
      color: theme.text,
      marginRight: 5,
    },

    amountInput: {
      flex: 1,
      height: 60,
      fontSize: 28,
      fontWeight: "800",
      color: theme.text,
      paddingVertical: 0,
    },

    inputContainer: {
      height: 46,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 12,
      borderRadius: 11,
      backgroundColor:
        theme.background,
      borderWidth: 1,
      borderColor:
        theme.border,
      marginBottom: 14,
    },

    inputIcon: {
      marginRight: 8,
    },

    input: {
      flex: 1,
      height: 44,
      fontSize: 14,
      color: theme.text,
      paddingVertical: 0,
    },

    sectionTitle: {
      fontSize: 15,
      fontWeight: "700",
      color: theme.text,
      marginBottom: 9,
    },

    categoryGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 7,
    },

    categoryButton: {
      width: "24%",
      minHeight: 58,
      borderRadius: 11,
      backgroundColor:
        theme.background,
      borderWidth: 1,
      borderColor:
        theme.border,
      alignItems: "center",
      justifyContent:
        "center",
      paddingHorizontal: 3,
    },

    categoryButtonActive: {
      backgroundColor:
        theme.primary,
      borderColor:
        theme.primary,
    },

    categoryIcon: {
      marginBottom: 3,
    },

    categoryButtonText: {
      fontSize: 9.5,
      lineHeight: 12,
      fontWeight: "600",
      color: theme.text,
      textAlign: "center",
    },

    categoryButtonTextActive: {
      color:
        theme.textOnPrimary,
    },

    loadingContainer: {
      padding: 20,
      alignItems: "center",
      justifyContent:
        "center",
    },
  });