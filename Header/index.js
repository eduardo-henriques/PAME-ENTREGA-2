import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({title}){
    return(
        <View style={styles.container}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        width:'100%',
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    headerTitle:{
        color: "#f35",
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        marginRight: 260
        }
});

