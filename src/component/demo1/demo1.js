import React, { Component } from 'react'

function FormatName(user) {
  return user.firstName + ' ' + user.lastName
}

const user = {
  firstName: '这真是',
  lastName: '牛逼'
}
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {FormatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
class DemoOne extends Component{
  render() {
    return(
      <div>
        {getGreeting()}
      </div>
    )
  }
}
export default DemoOne