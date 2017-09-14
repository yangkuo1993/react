import React from 'react'
function Mailbox(props) {
    const unreadMessage = props.unreadMessage;
    return(
        <div>
            <h1>Hello !</h1>
            {unreadMessage.length > 0 && <h2>
                you have {unreadMessage} unread Message
            </h2>}
        </div>
    )
}
export default Mailbox