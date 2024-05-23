import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddChat from './subcomponents/addchat';
import { ChatEngine } from 'react-chat-engine';

function Sidebar() {
    const [chatlist, setChatList] = useState([]);

    useEffect(() => {
        axios({
            // Endpoint to fetch chats
            url: "https://api.chatengine.io/chats/",
            method: "GET",
            headers: {
                // Add any auth token here
                "Project-ID": "e4d5d40e-a886-45b3-9a8e-c3ebd3d69155",
                "User-Secret": "123456", 
                "User-Name" :"OussamaHasni",
            },
        })
        .then(response => {
            // Update state with chat list
            const chatTitles = response.data.map(chat => chat.title);
            setChatList(chatTitles);
        })
        .catch((err) => {
            console.error("Error fetching chat list:", err);
        });
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    return (
        <section>
          <h3 className='subheading'><i class="fa-solid fa-list icon"></i> Liste des chats: </h3>
            <ul className='list-of-chat'>
                {chatlist.map((chatTitle, index) => (
                    <li className='chatitem' key={index}><a href="" >{chatTitle}</a></li>
                ))}
            </ul>
            {/* You can uncomment the ChatEngine component if needed */}
            {/* <ChatEngine
                projectID='e4d5d40e-a886-45b3-9a8e-c3ebd3d69155'
                userName='OussamaHasni'
                userSecret='123456'
            /> */}

        <AddChat/>
        </section>
    );
}

export default Sidebar;
