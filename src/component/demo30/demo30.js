import React, {Component} from 'react'
class CommentList extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments: DataSource.getComments()
        };
    }
    componentDidMount () {
        DataSource.addChangeListener(this.handleChange);
    }
    componentWillUnmount () {
        DataSource.removeChangeListener(this.handleChange);
    }
    handleChange() {
        this.setState({
            comments: DataSource.getComments()
        })
    }
    render() {
        return (
            <div>
                {this.state.comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
        );
    }
}
class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            blogPost: DataSource.getBlogPost(props.id)
        };
    }

    componentDidMount() {
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
        this.setState({
            blogPost: DataSource.getBlogPost(this.props.id)
        });
    }

    render() {
        return <TextBlock text={this.state.blogPost} />;
    }
}