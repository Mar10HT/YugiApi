import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { Title } from 'react-native-paper';
import CardSearch from "../components/CardSearch"
import theme from "../theme";

const CardSearchList = ({ card, navigation }) =>{
    const emptyFlatList = (
        <View style={styles.title}>
            <Title>Card data not found :c</Title>
        </View>
    );

    return(
        <View style={styles.container}>
            <FlatList 
                data={card.data}
                keyExtractor={(item) => item.id.toString() }
                showsVerticalScrollIndicator={true}
                ListEmptyComponent={emptyFlatList}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity key = {item.id} onPress={() => {navigation.navigate("Card Search", { item })}}>
                            <CardSearch name={item.name}  
                            type={item.type} image={item.id} level={item.level}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: theme.colors.red
    },
    title: {
        flex: 1,
        marginTop: 60,
        alignItems: 'center',
    }
});

export default CardSearchList;