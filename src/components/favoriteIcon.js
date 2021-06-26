import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const FavoriteIcon = () =>{
    return(
     <TouchableOpacity  style = {styles.container}>
         <AntDesign name="staro" size={28} color="orange" />
     </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        alignSelf:"flex-end"

    }   
});

export default FavoriteIcon;