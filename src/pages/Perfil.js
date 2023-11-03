import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import avatar from './avatar.png';

export default function App() {
    return (

        <ScrollView style={styles.container}>
<Image source={avatar} style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 15, }} />


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#F6F7F8',

    },
  


});
