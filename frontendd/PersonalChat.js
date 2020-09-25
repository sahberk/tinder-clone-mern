import React from 'react'
import "./PersonalChat.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ForumIcon from '@material-ui/icons/Forum';
import { Avatar , IconButton } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function PersonalChat({RouteChatList,Person}) {

    

    return (
        <div>
             <div className="ChatList__header">
                <div onClick={RouteChatList}>
                <IconButton>
                    <ArrowBackIosIcon fontSize="large" />
                </IconButton >
                </div>
                
                
            
            <img
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                alt=""
                />

            <IconButton>
                <ForumIcon fontSize="large" />
            </IconButton>

            </div>


            <div className="chat__body">
                <h3 className="top_Of_Chat">YOU MATCHED WITH {Person.name} </h3>                
            </div>

            <div className="Chat__Messages">
                <Avatar src={Person.url} />
                <p> Hi there !</p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input
                        placeholder="Type a message"
                        type="text"
                    />
                    <button
                    type="submit">
                    Send a message
                    </button>
                </form>
                <MicIcon/>
            </div>

        </div>
    )
}

export default PersonalChat
