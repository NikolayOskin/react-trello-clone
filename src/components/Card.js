import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ index, column, card}) => {
    return (
        <Draggable
            key={index}
            draggableId={`draggable-${column}-${index}`}
            index={index}>
            {(provided, snapshot) => (
                <div
                    className="card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {card}
                </div>
            )}
        </Draggable>
    );
};

export default Card;