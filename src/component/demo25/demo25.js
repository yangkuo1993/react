import React from 'react'
function CustomTextInput(props) {
    let textInput = null;
    function handleClick() {
        textInput.focus();
    }
    return(
        <div>
            <input
                type="text"
                ref={(input) => { textInput = input; }} />
            <input
                type="button"
                value="Focus the text input"
                onClick={handleClick}
            />
        </div>
    )
}
export default CustomTextInput
