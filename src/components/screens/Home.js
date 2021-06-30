import React, { useEffect, useState } from "react";
import { StyleSheet, View} from 'react-native';
<<<<<<< HEAD
import { Title} from "react-native-paper";
=======
import { Title, ActivityIndicator } from "react-native-paper";
>>>>>>> 969381ca9073bf7d49dd5a342e187af49be90952
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
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 20,
        marginVertical: 20,
    }
});

export default Home;