import React, {Component} from 'react'
import TemperatureInput from '../demo17/demo17'
function BoilingVerdict(props) {
    if (props.celsius > 100) {
        return <div>水会烧开</div>;
    }
    return <div>水不会烧开</div>;
}
class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (event) {
        this.setState({
            temperature: event.target.value
        })
    }
    render() {
        const temperature = this.state.temperature
        return(
            <div>
                <TemperatureInput scale="c"></TemperatureInput>
                <TemperatureInput scale="f"></TemperatureInput>
            </div>
        )
    }
}
export default Calculator