import React, {Component} from 'react'
class Click extends Component{
  render() {
    return(
      <div>{new Date().toLocaleTimeString()}</div>
    )
  }
}
export default Click