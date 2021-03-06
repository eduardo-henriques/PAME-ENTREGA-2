import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import Posts from "../Posts/index";

export default function PostItem(){
    return(
        <View style={styles.postsContainer}>
            <ScrollView showsVerticalScrollIndicator={false} vertical={true}>
            <Posts Postsource={require("../Images/usuario.png")} Posts/>
            <View style={styles.Post1}> 
                <Text>Eduardo</Text>
                <View style={styles.barraInterativa}>
                    <Image
                    style={styles.gostarLogo}
                    source={require("../Images/gostar.png")}/>
                </View>
            </View>
            <Posts Postsource={require("../Images/jojovasci.jpg")} Posts/>
            <View style={styles.Post1}> 
                
                <Text>Eduardo</Text>
            </View>
            <Posts Postsource={require("../Images/heheh.jpeg")} Posts/>
            <View style={styles.Post1}> 
                
                <Text>Eduardo</Text>
            </View>
            <Posts Postsource={require("../Images/usuario.png")} Posts/>
            <View style={styles.Post1}> 
                
                <Text>Eduardo</Text>
            </View>
            <Posts Postsource={require("../Images/usuario.png")} Posts/>
            <View style={styles.Post1}> 
                
                <Text>Eduardo</Text>
            </View>
            <Posts Postsource={require("../Images/usuario.png")} Posts/>
            <View style={styles.Post1}> 
                
                <Text>Eduardo</Text>
            </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    postsContainer: {
        backgroundColor: "#eee",
        width: '100%',
        height: 550,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    Post1:{
        backgroundColor: '#fff',
        width: '100%',
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 5,
        borderRadius: 5,
    },
    barraInterativa:{
        width: '100%',
        height: 20

    },
    gostarLogo:{
        width: 35,
        height: 35,
        marginLeft: 3 
    }
});