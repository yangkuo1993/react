import React, {Component} from 'react'
const newArray = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
function FormInput(props) {
    return(
        <div>
            <input type="text" value={props.searchValue} onChange={props.searchInputChange} placeholder="Search..."/>{props.searchValue}<br/>
            <input type="checkbox" checked={props.inputChecked} onChange={props.checkBoxChange}/>{props.inputChecked}only show products in stock
        </div>
    )
}
function ProductTable(props) {
    return(
        <table>
            <thead>
                <tr>
                    <td>
                        Name
                    </td>
                    <td>
                        Price
                    </td>
                </tr>
            </thead>
        </table>
    )
}
class Price extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue: '',
            onlySearch: true
        };
        this.searchInputChange = this.searchInputChange.bind(this);
        this.checkBoxChange = this.checkBoxChange.bind(this);
    }
    searchInputChange (event) {
        this.setState({
            searchValue: event.target.value
        })
    }
    checkBoxChange (event) {
        this.setState({
            onlySearch: event.target.checked
        })
    }
    render() {
        return(
            <div>
                <FormInput searchValue={this.state.searchValue} searchInputChange={this.searchInputChange} inputChecked={this.state.onlySearch} checkBoxChange={this.checkBoxChange}></FormInput>
                <ProductTable></ProductTable>
            </div>
        )
    }
}
export default Price