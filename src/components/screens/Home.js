import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
        <ScrollView>
            <Text>
                Informacion de Yu-Gi-Oh!
            </Text>
           <CardList card={card}/>
        </ScrollView>
    );
}
const style = StyleSheet.create({});

export default Home;