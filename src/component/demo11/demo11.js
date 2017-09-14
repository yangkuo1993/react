import React from 'react'
function ListItem(props) {
    return(
        <li>{props.value}</li>
    )
}
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()} value={number}></ListItem>
    );
    return(
        <ul>{listItems}</ul>
    )
}
export default NumberList