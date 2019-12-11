import React, {Component} from 'react';
import Card from "./Card";

class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardFormShowed: false
        }
        this.showCardForm = this.showCardForm.bind(this);
        this.hideCardForm = this.hideCardForm.bind(this);
        this.addCard = this.addCard.bind(this);
    }

    showCardForm() {
        this.setState(state => ({cardFormShowed: true}))
    }

    hideCardForm() {
        this.setState(state => ({cardFormShowed: false}))
    }

    addCard() {
        this.setState(state => ({cardFormShowed: false}))
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
                    <textarea className="form__input" rows="3" placeholder="Введите название карточки"></textarea>
                    <div className="form__buttons">
                        <button type="button" onClick={this.addCard} className="button button--submit button--submit-card">
                            Добавить карточку
                        </button>
                        <button type="button" onClick={this.hideCardForm} className="button button--close button--close-card"></button>
                    </div>
                </form>

                <div className="add-new">
                    <button className={"button button--new " + (this.state.cardFormShowed ? 'hidden' : '')}
                            onClick={this.showCardForm}>Добавить еще одну карточку</button>
                </div>
            </div>
        );
    }
}

export default Column;