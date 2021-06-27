import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
    return (
        <Image
            style={{width: 50, height: 50, marginLeft: 15}}
            source={require('../../assets/millenium-logo.png')}
        />
    )
}

export default Logo;