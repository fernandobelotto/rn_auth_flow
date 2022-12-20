import { forwardRef, LegacyRef } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
} from "react-native";

export const TextInput = forwardRef(
  (props: TextInputProps, ref: LegacyRef<RNTextInput> | undefined) => {
    return <RNTextInput style={styles.input} {...props} ref={ref} />;
  }
);

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
  },
});
