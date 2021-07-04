import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { Title } from 'react-native-paper';
import FavoriteCard from '../components/favoriteCard'
import theme from "../theme";

const FavoriteCardList = ({ card, navigation }) =>{
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
                        <TouchableOpacity style ={styles.text} key = {item.id} onPress={() => {navigation.navigate("Card Search", { item })}}>
                            <FavoriteCard name={item.name}  
                            type={item.type} image={item.id} style ={styles.text} race = {item.race}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: theme.colors.red,
        marginBottom: "67%"
    },
    title: {
        flex: 1,
        marginTop: 60,
        alignItems: 'center',
    },
    
});