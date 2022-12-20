import React from "react";
import { useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";
import { ErrorText } from "../components/ErrorText";
import { TextInput } from "../components/TextInput";

export function SignInScreen({ navigation }: any) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(values: any) {
    console.log(values);
    // Call sign in endpoint with email and password
  }

  return (
    <View style={{ padding: 15 }}>
      <Text>Sign In</Text>
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
        })}
        secureTextEntry
      />
      {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
      <Button title="Sign In" onPress={handleSubmit(onSubmit)} />
      <Button
        title="Forgot your password? Recover it here"
        onPress={() => navigation.navigate("RecoverPassword")}
      />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}
