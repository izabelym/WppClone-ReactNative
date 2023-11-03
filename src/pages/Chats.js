import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import ChatListItem from './ChatListItem';

export default function App() {

  const [charList, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

  return (
    <ScrollView styles={styles.container}>
      {charList.map((item, key) => (
        <ChatListItem
          key={key}
        />
      ))}

   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
