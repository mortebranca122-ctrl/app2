import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export default function ChatPage() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);
    newSocket.emit('join_room', { roomId: 'sala-01', userId: 'web-user' });
    newSocket.on('receive_message', (msg) => setMessages((prev) => [...prev, msg]));
    return () => newSocket.disconnect();
  }, []);

  const sendMessage = () => {
    socket?.emit('send_message', { roomId: 'sala-01', content: input, type: 'text' });
    setInput('');
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 p-4">
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((m, i) => <div key={i} className="bg-white p-2 rounded shadow">{m.content}</div>)}
      </div>
      <div className="flex gap-2">
        <input className="flex-1 border p-2 rounded" value={input} onChange={e => setInput(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 rounded" onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
}