import { Slot } from "expo-router";
import { Text, View } from "react-native";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

import SafeScreen from "@/components/SafeScreen";

const clerkPublishableKey =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

function MissingClerkKeyScreen() {
  return (
    <SafeScreen>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            marginBottom: 12,
          }}
        >
          Clerk key not configured
        </Text>

        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            lineHeight: 22,
            color: "#667085",
          }}
        >
          Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to
          mobile/.env, then restart the Expo dev server.
        </Text>
      </View>
    </SafeScreen>
  );
}

export default function RootLayout() {
  /**
   * Fail early if the Clerk publishable key is missing.
   */
  if (!clerkPublishableKey) {
    return <MissingClerkKeyScreen />;
  }

  /**
   * Basic safety check.
   *
   * A Clerk publishable key should start with pk_test_
   * during development or pk_live_ in production.
   */
  if (
    !clerkPublishableKey.startsWith("pk_test_") &&
    !clerkPublishableKey.startsWith("pk_live_")
  ) {
    console.warn(
      "Invalid Clerk publishable key format."
    );
  }

  return (
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      tokenCache={tokenCache}
    >
      <SafeScreen>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}