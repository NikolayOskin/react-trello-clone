import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                {this.props.card}
            </div>
        );
    }
}

export default Card;