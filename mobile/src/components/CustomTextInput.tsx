import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import color from '../utils/color';
import { borderRadius, spacing } from '../utils/sizes';

// defining the props type for the CustomTextInput component
type Props = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

const CustomTextInput = ({ value, placeholder, onChangeText }: Props) => {
  return (
    <View>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: color.white,
    borderColor: color.border,
    borderWidth: 1,
    borderRadius: borderRadius.medium,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    marginVertical: spacing.small,
  },
});

export default CustomTextInput;
