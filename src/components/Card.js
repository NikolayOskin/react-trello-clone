import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.card}
            </div>
        );
    }
}

export default Card;