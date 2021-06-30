import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import theme from "../theme";

const FavoriteIcon = ({favorite}) =>{
    return(
<<<<<<< HEAD
     <TouchableOpacity  style = {styles.container} >
         <AntDesign name={favorite ? "star" : "staro"} size={32} color="orange" />
=======
     <TouchableOpacity  style = {styles.container}>
         <AntDesign name="staro" size={28} color={ theme.colors.yellow } />
>>>>>>> 969381ca9073bf7d49dd5a342e187af49be90952
     </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        alignSelf:"flex-end",
        bottom:"45%"
    }   
});

export default FavoriteIcon;