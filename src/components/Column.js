import React, {Component} from 'react';
import Card from "./Card";
import NewButton from "./ui/NewButton";

class Column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardFormShowed: false,
            cardText: ''
        }
        this.showCardForm = this.showCardForm.bind(this)
        this.hideCardForm = this.hideCardForm.bind(this)
        this.addCard = this.addCard.bind(this)
        this.changeCardText = this.changeCardText.bind(this)
    }

    showCardForm() {
        this.setState({cardFormShowed: true})
    }

    hideCardForm() {
        this.setState({cardFormShowed: false})
    }

    addCard() {
        if (this.state.cardText.length > 0) {
            this.props.onCardAdded(this.props.index, this.state.cardText)
            this.setState({
                cardFormShowed: false,
                cardText: ''
            })
        }

    }

    changeCardText(event) {
        this.setState({cardText: event.target.value})
    }

    render() {
        return (
            <div className="column">
                <h2 className="column__title">{this.props.column.name}</h2>

                <div className="cards">
                    {this.props.column.items.map((card, index) => <Card key={index} card={card}/>)}
                </div>

                <form action=""
                      className={"form form--card " + (this.state.cardFormShowed === false ? 'hidden' : '')}>
                    <textarea className="form__input"
                              rows="3"
                              placeholder="Введите название карточки"
                              value={this.state.cardText}
                              onChange={this.changeCardText}
                    />
                    <div className="form__buttons">
                        <button type="button"
                                onClick={this.addCard}
                                className="button button--submit button--submit-card">
                            Добавить карточку
                        </button>
                        <button type="button"
                                onClick={this.hideCardForm}
                                className="button button--close button--close-card"></button>
                    </div>
                </form>

                {!this.state.cardFormShowed &&
                <NewButton text="Добавить еще одну карточку" onClicked={this.showCardForm}/>}

            </div>
        );
    }
}

export default Column;