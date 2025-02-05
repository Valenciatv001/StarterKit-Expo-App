import Button from "@/components/Button";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Handle sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputContainer}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button label="Sign In" theme="primary" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
  },
});

export default SignIn;
