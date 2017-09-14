import React, {Component} from 'react'
class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {isLogin: true};
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle () {
        this.setState(prevState  => ({
            isLogin: !prevState.isLogin
        }))
    }
    render() {
        return(
            <button onClick={this.handleToggle}>{this.state.isLogin ? 'on' : 'off'}</button>
        )
    }
}
export default Toggle