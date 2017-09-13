import React, {Component} from 'react'
class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {data: new Date().toLocaleTimeString()}
    }
    componentDidMount () {
        this.timeID = setInterval(() =>
            this.tick()
        , 1000)
    }
    componentWillUnmount () {
        clearInterval(this.timeID)
    }
    tick () {
        this.setState({
            data: new Date().toLocaleTimeString()
        })
    }
    render () {
        return(
            <div>
                {this.state.data}
            </div>
        )
    }
}
export default Clock