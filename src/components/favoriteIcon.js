import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const FavoriteIcon = ({favorite, OnPress}) =>{
    return(
     <TouchableOpacity  style = {styles.container} onPress={OnPress}>
         <AntDesign name={favorite ? "star" : "staro"} size={32} color="orange" />
     </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
<<<<<<< HEAD
        alignSelf:"flex-end",
        bottom:"45%"
=======
        alignSelf:"flex-end"
>>>>>>> b62356b678f1571f2eb34241625470b68e638e79
    }   
});

export default FavoriteIcon;