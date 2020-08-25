
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useHistory} from 'react-router-dom';
import API from '../../services/api'

const socket = io(API.url)

socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))

const Chat = () => {
    const user = localStorage.getItem('user-name');
    const history = useHistory();
    const [message, updateMessage] = useState('')
    const [messages, updateMessages] = useState([])

    useEffect(() => {

        if(!user){
            history.push('/')
           
        }
        const handleNewMessage = newMessage =>{
            
            updateMessages(newMessage)
        }
           
        socket.on('menssageEvent', handleNewMessage)

        return () => socket.off('menssageEvent', handleNewMessage)
    }, [messages])

    const handleFormSubmit = event => {
       
        event.preventDefault()
       
        
        if (message.trim()) {
            socket.emit('menssageEvent', {
                name: user,
                message,
            })
            updateMessage('')
        }
    }

    const exit=()=>{
        console.log('veio aqui')
        localStorage.removeItem('user-name')
        history.push('/')
    }
    const handleInputChange = event =>
        updateMessage(event.target.value)

    return (
        <main className="container">
            
            <ul className="list">
               
                { messages.map((m, index) => (

                    <li
                        className={`list__item list__item--${m.name === user ? 'mine' : 'other'}`}
                        key={index}
                    >
                        <ul className="list">
                            <li className='list__item'> <span className={`message message--${m.name === user ? 'mine' : 'other'}`}><p className={`autor--${m.name === user ? 'mine' : 'other'}`}>{m.name}</p>{ m.message }</span></li>
                            <li className='list__item' style={{marginTop:'-10px'}}><strong>{m.created_at.substr(11)}</strong></li>

                        </ul>
              
                    </li>
                ))}
            </ul>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    className="form__field"
                    onChange={handleInputChange}
                    placeholder="Escreva"
                    type="text"
                    value={message}
                />
                 <button className='button' type='submit' >Enviar</button>
                 <button className='' type='submit' onClick={()=>exit()} >sair da conversa </button>
            </form>
           
        </main>
    )
}

export default Chat