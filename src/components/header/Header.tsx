import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Event Details</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
  },
});
