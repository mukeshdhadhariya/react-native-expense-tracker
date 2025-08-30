import * as React from "react";
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
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // 👈 for eye icon

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false); // 👈 toggle state

  const onSignUpPress = async () => {
    if (!isLoaded) return;
    setError("");

    try {
      await signUp.create({ emailAddress, password });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err) {
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded) return;
    setError("");

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/");
      } else {
        setError("Verification incomplete. Please try again.");
      }
    } catch (err) {
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].message);
      } else {
        setError("Invalid code. Please try again.");
      }
    }
  };

  if (pendingVerification) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Verify your email</Text>
          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TextInput
            style={styles.input}
            value={code}
            placeholder="Enter verification code"
            placeholderTextColor="#aaa"
            onChangeText={(code) => setCode(code)}
          />
          <TouchableOpacity style={styles.button} onPress={onVerifyPress}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Create Account</Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          placeholderTextColor="#aaa"
          onChangeText={(email) => setEmailAddress(email)}
        />

        {/* Password with eye toggle */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1, marginBottom: 0, borderWidth: 0 }]}
            value={password}
            placeholder="Enter password"
            placeholderTextColor="#aaa"
            secureTextEntry={!showPassword}
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableOpacity
            onPress={() => setShowPassword((prev) => !prev)}
            style={styles.eyeButton}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color="#555"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={{ color: "#555" }}>Already have an account?</Text>
          <Link href="/sign-in" asChild>
            <TouchableOpacity>
              <Text style={styles.link}> Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginBottom: 15,
    paddingRight: 10,
  },
  eyeButton: {
    padding: 8,
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
