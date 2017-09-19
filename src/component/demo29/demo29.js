import React, {Component} from 'react'
class ListOfWords extends React.PureComponent{
    render() {
        return(
            <p>{this.props.words.join(',')}</p>
        )
    }
}
class WordAdder extends Component{
    constructor(props){
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this.handleClick.bind(this);
    }
    // handleClick () {
    //     const words = this.state.words;
    //     words.push('marklar');
    //     this.setState({
    //         words: words
    //     });
    // }
    handleClick () {
        // this.setState(prevState => ({
        //     words: prevState.words.concat(['marklar'])
        // }))
        this.setState(prevState => ({
            words: [...prevState.words, 'marklar']
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>++++++</button>
                <ListOfWords words={this.state.words} />
            </div>
        );
    }
}
export default WordAdder