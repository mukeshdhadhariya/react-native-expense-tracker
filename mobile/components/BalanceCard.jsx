import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useTheme } from "../context/ThemeContext";

export const BalanceCard = ({
  summary,
}) => {
  const { theme } =
    useTheme();

  const styles =
    createStyles(theme);

  const balance =
    Number(summary?.balance) || 0;

  const income =
    Number(summary?.income) || 0;

  const expenses = Math.abs(Number(summary?.expenses) || 0);

  return (
    <View
      style={styles.card}
    >
      <Text
        style={styles.label}
      >
        Total Balance
      </Text>

      <Text
        style={styles.balance}
      >
        ₹{balance.toLocaleString("en-IN")}
      </Text>

      <View
        style={styles.stats}
      >
        <View
          style={styles.stat}
        >
          <Text
            style={styles.statLabel}
          >
            Income
          </Text>

          <Text
            style={[
              styles.statAmount,
              {
                color:
                  theme.income,
              },
            ]}
          >
            {`+₹ ${income.toLocaleString("en-IN")}`}
          </Text>
        </View>

        <View
          style={styles.divider}
        />

        <View
          style={styles.stat}
        >
          <Text
            style={styles.statLabel}
          >
            Expenses
          </Text>

          <Text
            style={[
              styles.statAmount,
              {
                color: theme.expense,
              },
            ]}
          >
            {`-₹ ${expenses.toLocaleString("en-IN")}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const createStyles = (theme) =>
  StyleSheet.create({
    card: {
      padding: 20,

      borderRadius: 20,

      backgroundColor:
        theme.surface,

      borderWidth: 0,
      borderColor:
        theme.border,

      shadowColor:
        theme.shadow,

      shadowOffset: {
        width: 0,
        height: 4,
      },

      shadowOpacity: 0.07,
      shadowRadius: 10,

      elevation: 3,
    },

    label: {
      fontSize: 13,
      fontWeight: "600",

      color:
        theme.textMuted,
    },

    balance: {

      fontSize: 25,
      fontWeight: "800",

      letterSpacing: -0.5,

      color:
        theme.text,
    },

    stats: {
      flexDirection: "row",
      alignItems: "center",

      marginTop: 10,
    },

    stat: {
      flex: 1,
    },

    statLabel: {
      fontSize: 12,

      color:
        theme.textMuted,

      marginBottom: 3,
    },

    statAmount: {
      fontSize: 15,
      fontWeight: "700",
    },

    divider: {
      width: 1,
      height: 34,

      marginHorizontal: 28,

      backgroundColor:
        theme.border,
    },
  });