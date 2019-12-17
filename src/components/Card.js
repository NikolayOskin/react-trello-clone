import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ index, column, card}) => {
    const getItemStyle = (isDragging, { transform, ...draggableStyles }) => ({
        userSelect: 'none',
        transform: isDragging ? (transform + "rotate(5deg)") : transform,
        ...draggableStyles
    });

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
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}
                >
                    {card}
                </div>
            )}
        </Draggable>
    );
};

export default Card;