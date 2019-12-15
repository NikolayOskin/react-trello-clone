import React, { useState } from 'react';
import NewButton from "./ui/NewButton";
import SubmitButton from "./ui/Form/SubmitButton";
import CloseButton from "./ui/Form/CloseButton";

const NewColumn = (props) => {
    const [formShowed, setFormShowed] = useState(false)
    const [columnName, setColumnName] = useState('')

    const addColumn = () => {
        if (columnName.trim().length > 0) {
            props.onColumnAdded(columnName.trim())
            setColumnName('')
            setFormShowed(false)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addColumn()
    }

    return(
        <div className="column">
            {formShowed &&
            <form action=""
                  onSubmit={handleSubmit}
                  className="form form--new-column">
                <input className="form__input form__input--column"
                       type="text"
                       value={columnName}
                       placeholder="Введите название колонки"
                       onChange={(e) => {setColumnName(e.target.value)}}
                />

                <div className="form__buttons">
                    <SubmitButton onSubmited={addColumn} text="Добавить колонку"/>
                    <CloseButton onClicked={() => setFormShowed(false)} />
                </div>
            </form>
            }

            {!formShowed &&
            <NewButton text="Добавить еще одну колонку" onClicked={() => setFormShowed(true)}/>}
        </div>
    )
}

export default NewColumn