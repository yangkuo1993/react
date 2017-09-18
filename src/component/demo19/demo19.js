import React from 'react'
function FancyBorder(props) {
    return(
        <div>
            {props.children}
        </div>
    )
}
function WelcomeDialog(props) {
    return(
        <FancyBorder>
            <h1>
                Welcome
            </h1>
            <p>
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}
export default WelcomeDialog