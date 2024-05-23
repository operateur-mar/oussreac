import React from 'react';
import { ChatEngine } from 'react-chat-engine';

function ChatSection() {
    return (
    <section className="chat-section">
         <ChatEngine
            projectID='e4d5d40e-a886-45b3-9a8e-c3ebd3d69155'
            userName='OussamaHasni'
            userSecret='123456'
        />
    </section>

  
    );
}

export default ChatSection;