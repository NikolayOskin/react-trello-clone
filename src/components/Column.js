import React, {Component} from 'react';
import Card from "./Card";

class Column extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {this.props.column.items.map((card, index) => <Card key={index} card={card}/>)}
            </div>
        );
    }
}

export default Column;