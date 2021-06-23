import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from 'react-native';
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
           <CardList card={card} navigation={navigation} />
        </ScrollView>
    );
}
const style = StyleSheet.create({});

export default Home;