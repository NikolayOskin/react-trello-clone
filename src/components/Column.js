import React, {Component} from 'react';
import Card from "./Card";
import NewButton from "./ui/NewButton";
import SubmitButton from "./ui/Form/SubmitButton";
import CloseButton from "./ui/Form/CloseButton";
import { Droppable } from 'react-beautiful-dnd';


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

                <Droppable droppableId={"droppable-" + this.props.index}>
                    {(provided, snapshot) => (
                        <div
                            className="cards"
                            ref={provided.innerRef}
                            style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                            {...provided.droppableProps}
                        >
                            {this.props.column.items.map((card, i) => <Card key={i} index={i} column={this.props.index} card={card}/>)}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>


                <form action=""
                      className={"form form--card " + (this.state.cardFormShowed === false ? 'hidden' : '')}>
                    <textarea className="form__input"
                              rows="3"
                              placeholder="Введите название карточки"
                              value={this.state.cardText}
                              onChange={this.changeCardText}
                    />
                    <div className="form__buttons">
                        <SubmitButton onSubmited={this.addCard} text="Добавить карточку"/>
                        <CloseButton onClicked={this.hideCardForm} />
                    </div>
                </form>

                {!this.state.cardFormShowed &&
                <NewButton text="Добавить еще одну карточку" onClicked={this.showCardForm}/>}

            </div>
        );
    }
}

export default Column;