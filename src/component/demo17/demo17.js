import React, {Component} from 'react'
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
class TemperatureInput extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            temperature: ''
        }
    }
    handleChange(event){
        // this.setState({
        //     temperature: event.target.value
        // })
        this.props.onTemperatureChange(event.target.value)
    }
    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <div>
                <fieldset>
                    <legend>
                        Enter temperature in {scaleNames[scale]}:
                        <input value={temperature}
                               onChange={this.handleChange} />
                    </legend>
                </fieldset>
            </div>
        )
    }
}
export default TemperatureInput