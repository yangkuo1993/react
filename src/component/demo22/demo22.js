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
function ProductRow(props) {
    const name = props.product.stocked ? <td>{props.product.name}</td> : <td style={{color: 'red'}}>{props.product.name}</td>
    return(
        <tr>
            {name}
            <td>{props.product.price}</td>
        </tr>
    )
}
function ProductCategoryRow(props) {
    return(
        <tr>
            <td colSpan={'2'}>{props.product.category}</td>
        </tr>
    )
}
function ProductTable(props) {
    let rows = [];
    let lastCategory = null;
    props.products.forEach((product) => {
        if (product.name.indexOf(props.filterText) === -1 || (!product.stocked && props.inStockOnly)) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow product={product} key={product.category}/>)
        };
        rows.push(<ProductRow product={product} key={product.name}/>);
        lastCategory = product.category;
    });
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
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}
class Price extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue: '',
            onlySearch: false
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
                <ProductTable products={newArray} filterText={this.state.searchValue} inStockOnly={this.state.onlySearch}></ProductTable>
            </div>
        )
    }
}
export default Price