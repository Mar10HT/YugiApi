import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const SearchBox = (props) => {
    return(
        <Searchbar style={styles.searchbar}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
        />
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
})

export default SearchBox;