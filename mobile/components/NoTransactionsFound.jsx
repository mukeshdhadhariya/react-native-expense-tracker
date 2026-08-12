import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { useTheme } from "../context/ThemeContext";

import {
  createHomeStyles,
} from "../assets/styles/home.styles";

export default function NoTransactionsFound() {
  const router = useRouter();
  const { theme } = useTheme();

  const styles =
    createHomeStyles(theme);

  return (
    <View style={styles.emptyState}>
      <Ionicons
        name="receipt-outline"
        size={38}
        color={theme.textLight}
        style={styles.emptyStateIcon}
      />

      <Text style={styles.emptyStateTitle}>
        No transactions yet
      </Text>

      <Text style={styles.emptyStateText}>
        Start tracking your money by adding
        your first transaction.
      </Text>

      <TouchableOpacity
        style={styles.emptyStateButton}
        onPress={() =>
          router.push("/create")
        }
        activeOpacity={0.8}
      >
        <Ionicons
          name="add"
          size={17}
          color={theme.textOnPrimary}
        />

        <Text
          style={
            styles.emptyStateButtonText
          }
        >
          Add transaction
        </Text>
      </TouchableOpacity>
    </View>
  );
}