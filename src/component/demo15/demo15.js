import React, {Component} from 'react'
class Reservation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    render() {
        return(
            <div>
                <form action="#">
                    <label>
                        Is going:{this.state.isGoing}
                        <input type="checkbox" checked={this.state.isGoing} name="isGoing" onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Number of guests:{this.state.numberOfGuests}
                        <input type="number" value={this.state.numberOfGuests} name="numberOfGuests" onChange={this.handleInputChange}/>
                    </label>
                </form>
            </div>
        )
    }
}
export default Reservation