import {Text, View, StyleSheet} from 'react-native';

export function Groups() {
  return (
    <View style={styles.container}>
      <Text>Hello Word</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a6a6a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
