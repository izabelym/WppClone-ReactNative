import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

const[list, setList] = useState ([
  { id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', name: 'baka' },
  { id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', name: 'baka' },
  { id: 123, avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', name: 'baka' },
]);


  return (
    <ScrollView>
      <View style={styles.newChat}>
      <View style={styles.newChatHead}>
      <View style={styles.newChatBackButton}>

      </View>
      <View style={styles.newChatHeadTitle}>
        <Text>Nova conversa</Text>

      </View>

      <View style={styles.newChatList}>

      </View>

      </View>

      </View>
  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  newChat:{
    width:35,
    maxWidth:415,
    position:'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#FFF',
    display:'flex',
    flexDirection:'column',
    borderRight: 1,
    borderRightColor:'#DDD',
  
  },
});
