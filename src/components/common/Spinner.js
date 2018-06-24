import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size: value }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={value || 'large'} />
    </View>
  );
};
const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
