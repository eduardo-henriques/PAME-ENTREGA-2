import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Photos({Imagesource}){
    return(
        <View style={StyleSheet.container}>
            <Image
                style={styles.tinyLogo}
                source={Imagesource}/>
            <Text>usuario</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    tinyLogo:{
        width: 45,
        height: 45,
        marginLeft: 40,
        borderRadius: 20,
        marginBottom: 3
    }
});