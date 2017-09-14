import React, {Component} from 'react'
function GuestGreeting() {
    return(
        <div>Welcome Guest</div>
    )
}
function UserGreeting() {
    return(
        <div>Welcome User</div>
    )
}
function Greeting(props) {
    const isLogin = props.isLogin
    if (isLogin) {
        return(
            <UserGreeting></UserGreeting>
        )
    }
    return <GuestGreeting></GuestGreeting>
}
function LoginButton(props) {
    return(
        <button onClick={props.onClick}>LoginButton</button>
    )
}
function LogoutButton(props) {
    return(
        <button onClick={props.onClick}>LogoutButton</button>
    )
}
class LoginControl extends Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLogin: false};
    }
    handleLoginClick () {
        this.setState({
            isLogin: true
        })
    }
    handleLogoutClick () {
        this.setState({
            isLogin: false
        })
    }
    render() {
        const isLogin = this.state.isLogin;
        let button = null
        if (isLogin) {
            button = <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
        }
        return(
            <div>
                <Greeting isLogin={isLogin}></Greeting>
                {button}
            </div>
        )
    }
}
export default LoginControl