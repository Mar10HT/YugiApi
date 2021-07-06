import React, { useState, useEffect} from 'react';
import { StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FavoriteCardList from '../FavoriteCardL'
import getEnvVars from '../../../enviroment';
import { Button, Title } from 'react-native-paper';
import theme from '../../theme';

const {apiUrl} = getEnvVars()

const FavoriteCards = ({ navigation }) => {
    const [card , setCard] = useState({});

    const onRefresh = () => {
        getCard(card);
    }
   
    const getCard = async () =>{
        let repla;

        const favs = await AsyncStorage.getItem("favoritesCards");
        const dataJson = JSON.parse(favs);
        repla = dataJson.join("|").replace(/ /g, "%20");

        const endpoint = `${apiUrl}cardinfo.php?name=${repla}`
        console.log(endpoint);
        const response = await fetch(endpoint);
        const data = await response.json();

        setCard(data);
    }

    useEffect(() => {
        getCard();
    }, [])

    return(
        <View>
            <Title style={styles.title}>Favorite Cards</Title>
                <View style={styles.container}>
                    <Button mode="contained" onPress={() => getCard()} style={styles.button}>Refresh</Button>
                </View>
            <FavoriteCardList card={card} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
   title: {
        marginTop: '5%',
        marginLeft: '5%'
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "5%",
        marginHorizontal: "15%"
    },
    button: {
        marginHorizontal: "5%",
        backgroundColor:theme.colors.red
    },
   
});

export default FavoriteCards;