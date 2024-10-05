import {
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

const Home = () => {
  const [confirm, setConfirm] = useState(null); // Confirmation object after sending the code
  const [code, setCode] = useState(''); // OTP code
  const [phoneNumber, setPhoneNumber] = useState(''); // User's phone number
  const [loading, setLoading] = useState(false); // Loading indicator state

  // Handle login state change
  function onAuthStateChanged(user) {
    if (user) {
      Alert.alert('Success', 'You are successfully logged in!');
      // You can navigate to another screen here
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // Unsubscribe on unmount
  }, []);

  // Send verification code
  const signInWithPhoneNumber = async phoneNumber => {
    setLoading(true);
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      setLoading(false);
    } catch (error) {
      Alert.alert(
        'Error',
        'Failed to send verification code. Please try again.',
      );
      setLoading(false);
    }
  };

  // Confirm the OTP code
  const confirmCode = async () => {
    if (!code) {
      Alert.alert('Error', 'Please enter the verification code');
      return;
    }
    setLoading(true);
    try {
      await confirm.confirm(code);
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', 'Invalid verification code. Please try again.');
      setLoading(false);
    }
  };

  // UI for phone number input
  if (!confirm) {
    return (
      <View style={styles.root}>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number (+91 XXXXXXXX)"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
        {loading ? (
          <ActivityIndicator size="large" color="green" />
        ) : (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => signInWithPhoneNumber(phoneNumber)}>
            <Text style={styles.text}>Phone Number Sign In</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  // UI for OTP verification
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        placeholder="Enter verification code"
        value={code}
        onChangeText={text => setCode(text)}
        keyboardType="numeric"
      />
      {loading ? (
        <ActivityIndicator size="large" color="green" />
      ) : (
        <Button title="Confirm Code" onPress={confirmCode} />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    marginHorizontal: 20,
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  btn: {
    marginTop: 20,
    width: '80%',
    height: 50,
    borderRadius: 6,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
});
