import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {
  borderRadius,
  flexSizes,
  fontSizes,
  iconSizes,
  percentageSizes,
  spacing,
} from '../utils/sizes';
import CustomTextInput from '../components/CustomTextInput';
import color from '../utils/color';

export const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8080/api/users');
      console.log('HTTP Status:', response.status);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      console.log('Users fetched successfully:', data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <View style={styles.mainContainer}>
      <Image source={require('../assets/ftaci-logo.png')} style={styles.logo} />
      <Text style={styles.title}>FTACI</Text>
      <Text>FutureTech Advanced Institute</Text>
      <View
        style={{ marginVertical: spacing.medium, alignItems: 'flex-start' }}
      >
        <Text style={styles.placeholderText}>Welcome back!</Text>
        <Text>Sign in to continue learning.</Text>
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.placeholderText}>Email</Text>
        <CustomTextInput
          value={email}
          placeholder="Enter email"
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.placeholderText}>Password</Text>
        <CustomTextInput
          value={password}
          placeholder="Enter password"
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonTextStyle}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.white,
    paddingVertical: spacing.large,
    paddingHorizontal: spacing.medium,
    marginHorizontal: spacing.medium,
    justifyContent: 'center',
    alignItems: 'center',
    width: percentageSizes.eighty,
    borderRadius: borderRadius.extraLarge,
  },
  textInputContainer: {
    width: percentageSizes.full,
    marginBottom: spacing.medium,
  },
  logo: {
    width: iconSizes.full,
    height: iconSizes.full,
  },
  loginButton: {
    backgroundColor: color.primary,
    borderRadius: borderRadius.medium,
  },
  textStyle: {
    color: color.white,
    textAlign: 'center',
    // paddingVertical: spacing.small,
    // paddingHorizontal: spacing.medium,
  },
  buttonTextStyle: {
    color: color.white,
    textAlign: 'center',
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
  },
  title: {
    color: color.primary,
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    marginBottom: spacing.xsmall,
  },
  placeholderText: {
    color: color.primary_text,
    fontSize: fontSizes.medium,
    fontWeight: '600',
  },
});
