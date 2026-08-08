import { Image, StyleSheet, View } from "react-native";

const AuthLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/icon.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  logo: {
    width: 88,
    height: 88,
    resizeMode: "contain",
  },
});

export default AuthLogo;