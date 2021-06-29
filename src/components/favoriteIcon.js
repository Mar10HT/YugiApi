import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import theme from "../theme";

const FavoriteIcon = () =>{
    return(
     <TouchableOpacity  style = {styles.container}>
         <AntDesign name="staro" size={28} color={ theme.colors.yellow } />
     </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        alignSelf:"flex-end"
    }   
});

export default FavoriteIcon;