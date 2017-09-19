import React, {Component} from 'react'
class GrandParent extends Component{
    render() {
        return(
            <div>
                <Parent inputRef={el => this.element = el}/>
            </div>
        )
    }
}
function Parent(props) {
    return(
        <div>
            My input: <CustomTextInput inputRef={props.inputRef} />
        </div>
    )
}
function CustomTextInput(props) {
    return(
        <div>
            <input type="text" ref={props.inputRef}/>
        </div>
    )
}
export default GrandParent