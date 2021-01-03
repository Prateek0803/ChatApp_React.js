import { useState,useEffect } from 'react';
import {FormControl,Input} from '@material-ui/core'
import Message from './Message'
import './App.css';
import db from './Firebase';
import firebase from 'firebase';
import {IconButton} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input,setInput] = useState('')
  const [messages,setMessages] = useState([{username:'prateek',messages:'Hi!'}]);
  const [userName,setUserName] = useState('');

  console.log(messages)

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  },[])

  useEffect(() =>{
    setUserName(prompt('Please enter your name'))
  },[])

  const sendMessage = (e) =>{
      e.preventDefault();

      db.collection('messages').add({
        messages:input,
        username:userName,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput('');
  }
  return (
    <div className="App">
      <h2>Hi {userName}, Welcome to the chat room :)</h2>
      
      
      <form className="app_form">
          <FormControl className="app_formControl">
          <Input className="app_input" placeholder='Enter a message....' value={input} onChange={e => setInput(e.target.value)} />
          <IconButton className="app_iconButton" variant="contained" disabled={!input} color="primary" type="submit" onClick={sendMessage}>
              <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      
       

        {messages.map(m =>(
            <Message message={m} username={userName} />
          ))}
    </div>
  );
}

export default App;
