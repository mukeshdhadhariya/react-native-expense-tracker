
// assets/styles/auth.styles.js

import { StyleSheet } from "react-native";

export const createAuthStyles = (theme) =>
  StyleSheet.create({
    // ==================================================
    // MAIN SCREEN
    // ==================================================

    container: {
      flex: 1,

      backgroundColor: theme.background,

      paddingHorizontal: 20,

      justifyContent: "center",
    },

    // ==================================================
    // ILLUSTRATION
    // ==================================================

    illustration: {
      width: 300,
      height: 280,

      resizeMode: "contain",

      alignSelf: "center",

      marginBottom: 4,
    },

    // ==================================================
    // TITLE
    // ==================================================

    title: {
      fontSize: 30,
      lineHeight: 36,

      fontWeight: "800",

      color: theme.text,

      marginVertical: 14,

      textAlign: "center",
    },

    // ==================================================
    // INPUT
    // ==================================================

    input: {
      width: "100%",
      minHeight: 52,

      backgroundColor: theme.surface,

      borderRadius: 12,

      paddingHorizontal: 15,
      paddingVertical: 13,

      marginBottom: 14,

      borderWidth: 1,
      borderColor: theme.border,

      fontSize: 15,

      color: theme.text,
    },

    inputFocused: {
      borderColor: theme.primary,
    },

    errorInput: {
      borderColor: theme.expense,
    },

    // ==================================================
    // PRIMARY BUTTON
    // ==================================================

    button: {
      width: "100%",
      minHeight: 52,

      backgroundColor: theme.primary,

      borderRadius: 12,

      paddingHorizontal: 16,

      alignItems: "center",
      justifyContent: "center",

      marginTop: 8,
      marginBottom: 18,

      shadowColor: theme.shadow,

      shadowOffset: {
        width: 0,
        height: 2,
      },

      shadowOpacity: 0.12,
      shadowRadius: 4,

      elevation: 2,
    },

    buttonText: {
      color: theme.textOnPrimary,

      fontSize: 16,

      fontWeight: "700",
    },

    buttonDisabled: {
      opacity: 0.55,
    },

    // ==================================================
    // FOOTER
    // ==================================================

    footerContainer: {
      flexDirection: "row",

      justifyContent: "center",
      alignItems: "center",

      gap: 6,

      paddingHorizontal: 8,
    },

    footerText: {
      color: theme.textSecondary,

      fontSize: 14,
    },

    linkText: {
      color: theme.primary,

      fontSize: 14,

      fontWeight: "700",
    },

    // ==================================================
    // VERIFICATION SCREEN
    // ==================================================

    verificationContainer: {
      flex: 1,

      backgroundColor: theme.background,

      paddingHorizontal: 20,

      justifyContent: "center",
      alignItems: "center",
    },

    verificationTitle: {
      fontSize: 23,
      lineHeight: 29,

      fontWeight: "800",

      color: theme.text,

      marginBottom: 18,

      textAlign: "center",
    },

    verificationInput: {
      width: "100%",
      minHeight: 54,

      backgroundColor: theme.surface,

      borderRadius: 12,

      paddingHorizontal: 15,
      paddingVertical: 13,

      marginBottom: 14,

      borderWidth: 1,
      borderColor: theme.border,

      fontSize: 17,

      color: theme.text,

      textAlign: "center",

      letterSpacing: 4,
    },

    // ==================================================
    // ERROR BOX
    // ==================================================

    errorBox: {
      width: "100%",

      backgroundColor: theme.expenseSoft,

      paddingHorizontal: 12,
      paddingVertical: 11,

      borderRadius: 10,

      borderWidth: 1,
      borderColor: theme.expense,

      marginBottom: 14,

      flexDirection: "row",
      alignItems: "center",
    },

    errorText: {
      flex: 1,

      color: theme.text,

      marginLeft: 8,

      fontSize: 13,

      lineHeight: 18,
    },

    // ==================================================
    // SUCCESS / INFO
    // ==================================================

    successBox: {
      width: "100%",

      backgroundColor: theme.incomeSoft,

      paddingHorizontal: 12,
      paddingVertical: 11,

      borderRadius: 10,

      borderWidth: 1,
      borderColor: theme.income,

      marginBottom: 14,

      flexDirection: "row",
      alignItems: "center",
    },

    successText: {
      flex: 1,

      color: theme.text,

      marginLeft: 8,

      fontSize: 13,

      lineHeight: 18,
    },

    // ==================================================
    // SECONDARY BUTTON
    // ==================================================

    secondaryButton: {
      width: "100%",
      minHeight: 50,

      backgroundColor: theme.surfaceElevated,

      borderRadius: 12,

      borderWidth: 1,
      borderColor: theme.border,

      alignItems: "center",
      justifyContent: "center",

      paddingHorizontal: 16,

      marginBottom: 12,
    },

    secondaryButtonText: {
      color: theme.text,

      fontSize: 15,

      fontWeight: "600",
    },
  });