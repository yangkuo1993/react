import React, {Component} from 'react'
class EssayForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '这是一个textarea测试练习'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange (event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit (event) {
        alert('areatext内容' + this.state.value);
        event.preventDefault();
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name;
                        <textarea value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value='submit'/>
                </form>
            </div>
        )
    }
}
export default EssayForm