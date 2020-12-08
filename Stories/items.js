import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Item(){
    return(
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require("../Images/usuario.png")}/>
            <Image
                style={styles.tinyLogo}
                source={require("../Images/usuario.png")}/>
            <Image
                style={styles.tinyLogo}
                source={require("../Images/usuario.png")}/>
            <Image
                style={styles.tinyLogo}
                source={require("../Images/usuario.png")}/>
            <Image
                style={styles.tinyLogo}
                source={require("../Images/usuario.png")}/>
            <Image
                style={styles.tinyLogo}
                source={require("../Images/usuario.png")}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        borderTopLeftRadius: 14,
        width:'100%',
        height:40,
        display: 'flex',
        flexDirection:'row',
        alignItems: 'flex-end',
    }, 
    tinyLogo:{
        width: 45,
        height: 45,
        marginLeft: 50
    }
});

