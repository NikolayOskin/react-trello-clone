import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = (props) => {
    return (
        <Draggable
            key={props.index}
            draggableId={`draggable-${props.column}-${props.index}`}
            index={props.index}>
            {(provided, snapshot) => (
                <div
                    className="card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {props.card}
                </div>
            )}
        </Draggable>
    );
};

export default Card;