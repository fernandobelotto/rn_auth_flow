import { StyleSheet, TextProps, Text } from "react-native";

export function ErrorText(props: TextProps) {
  return (
    <Text style={styles.text} {...props}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#E53E3E",
  },
});
