import Button from "@/components/Button";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const handleForgetPassword = () => {
    // Add your password reset logic here
    if (email) {
      Alert.alert("Password reset link sent to your email.");
    } else {
      Alert.alert("Please enter a valid email address.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forget Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button
        label="Reset Password"
        theme="primary"
        onPress={handleForgetPassword}
      />
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default ForgetPasswordScreen;
