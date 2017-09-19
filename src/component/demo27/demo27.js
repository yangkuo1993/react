import React, {Component} from 'react'
class NameFormOne extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (event) {
        alert('A name was submitted: ' + this.input.value);
        event.preventDefault();
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name：
                        <input defaultValue="Bob" type="text" ref={(input) => this.input = input}/>
                    </label>
                    <input type="submit" value='submit'/>
                </form>
            </div>
        )
    }
}
export default NameFormOne