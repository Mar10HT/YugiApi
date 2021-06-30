import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../TopBar';

const FavoriteCards = ( { route } ) => {
    return(
        <View>
            <TopBar/>
            <Text style={styles.title}>Favorites!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default FavoriteCards;