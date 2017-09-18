import React from 'react'
import './demo20.css'
function SplitPane(props) {
    return(
        <div>
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}
function Contacts() {
    return(
        <div>
            left
        </div>
    )
}
function Chat() {
    return(
        <div>
            right
        </div>
    )
}
function AppOne() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}
export default AppOne