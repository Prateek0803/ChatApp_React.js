import React from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
import './Message.css'
const Message = ({message,username}) => {
    const isUser = username === message.username
    return (
        <div className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser? "message_userCard":"message_guestCard"}>
                <CardContent>
                    <Typography
                        color="textPrimary"
                        variant="h5"
                        component="h2"
                        className="message_typo"
                    >
                    {!isUser && `${message.username || 'Unknown User'}:`} {message.messages}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
