import React from "react";
import { useForm } from "react-hook-form";
import { Button, Text, View } from "react-native";
import { ErrorText } from "../components/ErrorText";
import { TextInput } from "../components/TextInput";

export function RecoverPasswordScreen({ navigation }: any) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit({ email }: any) {}

  return (
    <View style={{ padding: 15 }}>
      <Text>Recover Password</Text>
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
      {errors?.email?.message && (
        <ErrorText>{errors?.email?.message}</ErrorText>
      )}
      <Button title="Recover Password" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
