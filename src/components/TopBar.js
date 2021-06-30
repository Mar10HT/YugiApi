import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './Logo';
import theme from "../theme";

const TopBar = () => {
    return (
        <View style={styles.container}>
            <Logo/>
            <Text style={styles.title}>Millenium Database</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row',
    backgroundColor: theme.colors.blue,
    alignItems: 'center',
    paddingVertical: 32,
    paddingRight: 10
  },
  title: {
      fontSize: 18,
      color: theme.colors.white,
      marginLeft: 7,
      fontWeight: 'bold',
  }
});

export default TopBar;