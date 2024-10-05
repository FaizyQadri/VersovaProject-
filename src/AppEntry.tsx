import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import TestDemo from './screens/testdemo/TestDemo';

const AppEntry = () => {
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.root}>
        <KeyboardAvoidingView
          style={styles.root}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#063710'} />
          <TestDemo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default AppEntry;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
