import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import TopBar from '../TopBar';

const SearchCard = () => {
    
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return(
        <View>
            <TopBar/>
            <Searchbar style={styles.searchbar}
                placeholder="Search Cards By Name"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Text style={styles.cardType}>CardType</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    searchbar: {
        marginTop: 35,
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: '#11007e',
        borderRadius: 30,
    },
    cardType: {
        fontSize: 20,
        marginTop: 40,
        marginLeft: 20,
    }
});

export default SearchCard;