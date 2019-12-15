import React, {useState} from 'react';
import Card from "./Card";
import NewButton from "./ui/NewButton";
import SubmitButton from "./ui/Form/SubmitButton";
import CloseButton from "./ui/Form/CloseButton";
import { Droppable } from 'react-beautiful-dnd';

const Column = (props) => {
    const [cardFormShowed, setCardFormShowed] = useState(false)
    const [cardText, setCardText] = useState('')

    const addCard = () => {
        if (cardText.trim().length > 0) {
            props.onCardAdded(props.index, cardText.trim())
            setCardFormShowed(false)
            setCardText('')
        }
    }

    return (
        <div className="column">
            <h2 className="column__title">{props.column.name}</h2>

            <Droppable droppableId={"droppable-" + props.index}>
                {(provided, snapshot) => (
                    <div
                        className="cards"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {props.column.items.map((card, i) => <Card key={i} index={i} column={props.index} card={card}/>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            {cardFormShowed &&
            <form action="" className="form form--card">
                <textarea className="form__input"
                          rows="3"
                          placeholder="Введите название карточки"
                          value={cardText}
                          onChange={(e) => setCardText(e.target.value)}
                />
                <div className="form__buttons">
                    <SubmitButton onSubmited={addCard} text="Добавить карточку"/>
                    <CloseButton onClicked={() => setCardFormShowed(false)}/>
                </div>
            </form>
            }

            {!cardFormShowed &&
            <NewButton text="Добавить еще одну карточку" onClicked={() => setCardFormShowed(true)}/>}

        </div>
    )
}

export default Column;