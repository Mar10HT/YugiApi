import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { Title } from 'react-native-paper';
import FavoriteCard from '../components/favoriteCard'


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
                        <TouchableOpacity style ={styles.text} key = {item.id} onPress={() => {navigation.navigate("Card Details", { item })}}>
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
        
        marginBottom: "52%"
    },
    title: {
        flex: 1,
        marginTop: 60,
        alignItems: 'center',
    },
    
});

export default FavoriteCardList;