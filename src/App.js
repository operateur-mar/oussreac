import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import Sidebar  from './components/sidebar';
import ChatSection from './components/chatsection';

function App() {
    return (
    <section className="main-section row">
    <div className='col-2 sidebar-section'>
        <Sidebar/>
    </div>

    

    <div className='col-10'>
        <ChatSection/>
    </div>
    </section>

     /*   <ChatEngine
            projectID='e4d5d40e-a886-45b3-9a8e-c3ebd3d69155'
            userName='OussamaHasni'
            userSecret='123456'
        />*/
    );
}

export default App;