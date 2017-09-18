import React, {Component} from 'react'
class FlavorForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'coconut'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event) {
        alert('你最喜欢的花是' + this.state.value)
        event.preventDefault();
    }
    render() {
        return(
            <div>
                <form action="#" onSubmit={this.handleSubmit}>
                    <label>
                        Pick your favorite La Croix flavor:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default FlavorForm