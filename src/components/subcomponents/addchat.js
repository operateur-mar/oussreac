import React, { useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';

function AddChat() {
    const [chatName, setChatName] = useState('');

    const handleChange = (event) => {
        setChatName(event.target.value);
        console.log(chatName)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, e.g., add the chat using the chatName
        var data = {
            title: chatName,
            is_direct_chat: false
        };
        var config = {
        method: 'POST',
        maxBodyLength: Infinity,
        url: 'https://api.chatengine.io/chats/',
        headers: { 
            'Project-ID': 'e4d5d40e-a886-45b3-9a8e-c3ebd3d69155', 
            'User-Name': 'OussamaHasni', 
            'User-Secret': '123456',
           
        },
        data : data
        };
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
        // Empty dependency array ensures the effect runs only once after initial render
    };

    return (
        <div className='add-chat-section'>
            <form onSubmit={handleSubmit} className='form-group'>
                <label>
                    <input class="form-control"
                        type="text"
                        name="name"
                        placeholder='Chat Name'
                        value={chatName}
                        onChange={handleChange}
                    />
                </label>

                <input type="submit" value="Add Chat"  class="btn btn-success addchatbtn" />
            </form>
        </div>
    );
}

export default AddChat;
