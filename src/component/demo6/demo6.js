import React from 'react'
function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('这是一个阻止默认时间')
    }
    return(
        <a href="#" onClick={handleClick}>Click me</a>
    )
}
export default ActionLink