import React, {Component} from 'react'
class CustomTextInput extends Component{
    constructor(props){
        super(props);
        this.focus = this.focus.bind(this);
    }
    focus () {
        this.textInput.focus();
    }
    render() {
        return(
            <div>
                <input type="text" ref={(input) => {this.textInput = input;}}/>
                <input type="button" onClick={this.focus} value="Focus the text input"/>
            </div>
        )
    }
}
class AutoFocusTextInput extends Component{
    componentDidMount () {
        this.textInput.focus()
    }
    render () {
        return(
            <CustomTextInput ref={input => this.textInput = input}></CustomTextInput>
        )
    }
}
export default AutoFocusTextInput