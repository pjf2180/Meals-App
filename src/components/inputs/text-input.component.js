import React from "react";
import { TextInput } from "react-native-paper";

export const AppTextInput = ({
  value,
  label,
  onChange,
  type = "outlined",
  keyboard,
  secure = false,
}) => {
  const handleChange = (text) => onChange(label, text);
  return (
    <TextInput
      type={type}
      label={label}
      keyboardType={keyboard}
      secureTextEntry={secure}
      value={value}
      onChangeText={handleChange}
    />
  );
};
