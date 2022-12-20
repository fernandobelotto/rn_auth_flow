import React from "react";
import { useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";
import { ErrorText } from "../components/ErrorText";
import { TextInput } from "../components/TextInput";

export function SignUpScreen({ navigation }: any) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm();

  function onSubmit({ email, password, confirmPassword }: any) {
    // Call sign up endpoint with email, password and confirmPassword
  }

  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontSize: 22 }}>Sign Up</Text>
      <Text>Email</Text>
      <TextInput
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      <Text>Password</Text>
      <TextInput
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        })}
        secureTextEntry
      />
      {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
      <Text>Confirm Password</Text>
      <TextInput
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          required: "Confirm password is required",
          validate: (value) =>
            value === getValues("password") || "Passwords do not match",
        })}
        secureTextEntry
      />
      {errors.confirmPassword && (
        <ErrorText>{errors.confirmPassword.message}</ErrorText>
      )}
      <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
      <Button
        title="Already have an account? Sign In"
        onPress={() => navigation.navigate("SignIn")}
      />
    </View>
  );
}
