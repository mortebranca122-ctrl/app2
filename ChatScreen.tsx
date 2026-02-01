import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import io from 'socket.io-client';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const socket = io('http://192.168.1.5:3001'); 
    socket.emit('join_room', { roomId: 'sala-01', userId: 'mobile-user' });
    socket.on('receive_message', (msg) => setMessages((prev) => [...prev, msg]));
    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    const socket = io('http://192.168.1.5:3001');
    socket.emit('send_message', { roomId: 'sala-01', content: input, type: 'text' });
    setInput('');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <FlatList data={messages} keyExtractor={(item, i) => i.toString()} renderItem={({item}) => <View style={styles.msg}><Text>{item.content}</Text></View>} />
      <View style={styles.inputRow}><TextInput style={styles.input} value={input} onChangeText={setInput} /><Button title="Send" onPress={sendMessage} /></View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 10 }, msg: { padding: 10, backgroundColor: '#fff', marginBottom: 5 }, inputRow: { flexDirection: 'row' }, input: { flex: 1, borderWidth: 1, marginRight: 10 } });