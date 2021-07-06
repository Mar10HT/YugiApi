// Componente de Logo

import React from 'react';
//Se importa Image de react native
import { Image } from 'react-native';

const Logo = () => {
    return (
        <Image
            //Se le da un estilo
            style={{width: 50, height: 50, marginLeft: 15}}
            //Y se le da un source que trae de la carpeta seleccionada, la imagen del logo
            source={require('../../assets/millenium-logo.png')}
        />
    )
}

export default Logo;