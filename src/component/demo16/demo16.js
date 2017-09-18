import React, {Component} from 'react'
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
                <fieldset>
                    <legend>
                        输入一个摄氏温度
                    </legend>
                    <input type="text" value={this.state.temperature} onChange={this.handleChange}/>
                    <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
                </fieldset>
            </div>
        )
    }
}
export default Calculator