import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import fetchCards  from "../../api"
import CardList from "../cardL";



const Home = () =>{
    const [card , setCard] = useState({});

    const getCard = async () =>{
        const response = await fetchCards();

        setCard(response);
    }

    
    useEffect(() => {
        getCard();
    }, [])
    

    return(
        <View>
            <Text>
                Informacion de Yu-Gi-Oh!
            </Text>
           <CardList card={card}/>
        </View>
    );
}
const style = StyleSheet.create({});

export default Home;