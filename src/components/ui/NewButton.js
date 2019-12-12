import React, {Component} from 'react';

class NewButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="add-new">
                <button className="button button--new"
                        onClick={this.props.onClicked}>{this.props.text}</button>
            </div>
        );
    }
}

export default NewButton;