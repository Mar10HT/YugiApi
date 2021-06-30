import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const FavoriteIcon = ({favorite}) =>{
    return(
     <TouchableOpacity  style = {styles.container} >
         <AntDesign name={favorite ? "star" : "staro"} size={32} color="orange" />
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