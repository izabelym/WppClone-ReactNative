import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,  Image,  } from 'react-native';
import Avatar from './avatar.png';


export default function App () {


    return (
        <ScrollView>

            <View style={styles.chatListItem } >
        

                <Image style={styles.chatListAvatar} source={Avatar} />

                <View style={styles.chatListLines}>

                    <View style={styles.chatListLine}>

                        <View style={styles.chatListName}>

                            <Text style={styles.chatListName}>Izabely</Text>


                        </View>

                        <View style={styles.chatListDate}>

                            <Text style={styles.chatListDate}>19:45</Text>
                        </View>

                    </View>

                    <View style={styles.chatListLine}></View>

                    <View style={styles.chatListMsg}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text} > aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                    </View>

                </View>



            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({

    chatListItem: {
   
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
    },

    chatListAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 15,
    },

    chatListLines: {
        flex: 1,
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: 15,
        marginLeft: 15,
        flexWrap: 'wrap',
        minWidth: 0,
    },

    chatListLine: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'auto',


    },

    chatListName: {
        width: 'auto',
        fontSize: 20,
        color: '#000',
    },

    chatListDate: {
        width: 'auto',
        direction: 'rtl',
        fontSize: 14,
        color: '#999',

    },

    chatListMsg: {
        width:'auto',
    },
text:{
    width: 255,
    overflow: 'hidden',
    fontSize: 16,
    color: 'black'
},


});