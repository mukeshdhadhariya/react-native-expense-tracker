import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) return;
    setError("");

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Welcome Back</Text>

          {error ? <Text style={styles.error}>{error}</Text> : null}

          {/* Email input */}
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Enter email"
            placeholderTextColor="#aaa"
            onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
          />

          {/* Password input with eye toggle */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, { flex: 1, marginBottom: 0 }]}
              value={password}
              placeholder="Enter password"
              placeholderTextColor="#aaa"
              secureTextEntry={!showPassword}
              onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeButton}
            >
              <Text style={{ fontSize: 16 }}>
                {showPassword ? "🙈" : "👁️"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Continue button */}
          <TouchableOpacity style={styles.button} onPress={onSignInPress}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={{ color: "#555" }}>Don't have an account?</Text>
            <Link href="/sign-up" asChild>
              <TouchableOpacity>
                <Text style={styles.link}> Sign up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  eyeButton: {
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: "#4a6cf7",
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15,
    shadowColor: "#4a6cf7",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    marginTop: 10,
  },
  link: {
    color: "#4a6cf7",
    fontWeight: "600",
  },
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});
