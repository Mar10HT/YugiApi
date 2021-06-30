import React, { useEffect, useState } from "react";
import { StyleSheet, View} from 'react-native';
import { Title} from "react-native-paper";
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
            <CardList card={card} navigation={navigation}/>
        </View>
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