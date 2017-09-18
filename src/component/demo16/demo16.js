import React, {Component} from 'react'
import TemperatureInput from '../demo17/demo17'
import {tryConvert, toCelsius, toFahrenheit} from '../demo18/demo18'
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
            temperature: '',
            scale: 'c'
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    // handleChange (event) {
    //     this.setState({
    //         temperature: event.target.value
    //     })
    // }
    handleCelsiusChange (temperature) {
        this.setState({
            temperature,
            scale: 'c'
        })
    }
    handleFahrenheitChange (temperature) {
        this.setState({
            temperature,
            scale: 'f'
        })
    }
    render() {
        // const temperature = this.state.temperature
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return(
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}></TemperatureInput>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}></TemperatureInput>
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        )
    }
}
export default Calculator