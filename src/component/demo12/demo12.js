import React, {Component} from 'react'
class NameForm extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange (event) {
        this.setState({
            value: event.target.value
        })
    }
    render() {
        return(
            <div>
                <form action="#">
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                </form>
            </div>
        )
    }
}