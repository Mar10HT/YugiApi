import React, { useEffect, useState } from "react";
import { StyleSheet, View} from 'react-native';
import { Title, ActivityIndicator} from "react-native-paper";
import { fetchCards } from "../../api"
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
        <View>
            <Title style={style.title}>Newest Cards</Title>
            {card.meta ? <CardList card={card} navigation={navigation}/> 
                : <ActivityIndicator animating={true}/>}
        </View>
    );
}
const style = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 20,
        marginVertical: 20,
    }
});

export default Home;