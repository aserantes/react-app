import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';
CardTitle.defaultProps.tag = 'h5';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        console.log('Dishdetail component constructor is invoked')
    }

    componentDidMount() {
        console.log('Dishdetail component componenDidMount is invoked')
    }

    render() {
        console.log('Dishdetail component render is invoked')
        if (this.props.dish != null) { //if no dish selected, return empty div
            const dateOptions = { year: 'numeric', month: 'short', day: '2-digit' };
            const comments = this.props.dish.comments.map((txt) => {
                if (txt != null) { //if no comments, return empty div
                    const formattedDate = (new Date(txt.date)).toLocaleDateString('en-US', dateOptions)
                    return (
                        <ul className="list-unstyled" key={txt.id}>
                            <li>{txt.comment}</li>
                            <li>-- {txt.author} , {formattedDate}</li>
                        </ul>)
                } else {
                    return (<div></div>)
                }
            })
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {comments}
                    </div>
                </div>
            )
        } else {
            return (<div></div>)
        }
    }
}

export default Dishdetail;