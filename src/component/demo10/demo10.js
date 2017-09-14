import React, {Component} from 'react'
import './demo10.css'
function WarningBanner(props) {
    if (!props.warn) {
        return null
    } else {
        return (
            <div className="warning">
                Warning !
            </div>
        )
    }
}
class Page extends Component{
    constructor(props){
        super(props);
        this.state = {showWarning: false};
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }
    handleToggleClick () {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }))
    }
    render() {
        return(
            <div>
                <WarningBanner warn={this.state.showWarning}></WarningBanner>
                <button onClick={this.handleToggleClick}>{this.state.showWarning ? '隐藏警告' : '显示警告'}</button>
            </div>
        )
    }
}
export default Page