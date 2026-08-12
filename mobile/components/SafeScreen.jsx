import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { useTheme } from "../context/ThemeContext";

const SafeScreen = ({ children }) => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();

  const backgroundColor =
    theme?.background ?? "#F8FAFC";

  const statusBarStyle =
    theme?.statusBar === "light"
      ? "light"
      : "dark";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
      }}
    >
      <StatusBar style={statusBarStyle} />

      {/* Android / iOS top safe area */}
      <View
        style={{
          height: insets.top,
          backgroundColor,
        }}
      />

      {/* Actual application content */}
      <View
        style={{
          flex: 1,
          minHeight: 0,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default SafeScreen;