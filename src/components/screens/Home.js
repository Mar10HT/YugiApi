import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text } from 'react-native';
import fetchCards  from "../../api"
import CardList from "../cardL";

const Home = ({ navigation }) =>{
    const [card , setCard] = useState({});

    const getCard = async () =>{
        const response = await fetchCards();

        setCard(response);
    }

    
    useEffect(() => {
        getCard();
    }, [])
    

    return(
        <ScrollView>
            <Text style={style.title}>Newest Cards</Text>
            <CardList card={card} navigation={navigation} />
        </ScrollView>
    );
}
const style = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 20,
        marginVertical: 20,
    }
});

export default Home;