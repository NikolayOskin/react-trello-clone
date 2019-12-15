import React, {Component} from 'react';
import NewButton from "./ui/NewButton";
import SubmitButton from "./ui/Form/SubmitButton";
import CloseButton from "./ui/Form/CloseButton";

class NewColumn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formShowed: false,
            columnName: ''
        }
        this.addColumn = this.addColumn.bind(this)
        this.updateColumnName = this.updateColumnName.bind(this)
        this.showForm = this.showForm.bind(this)
        this.hideForm = this.hideForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    showForm() {
        this.setState({formShowed: true})
    }

    hideForm() {
        this.setState({formShowed: false})
    }

    updateColumnName(event) {
        this.setState({columnName: event.target.value})
    }

    addColumn() {
        if (this.state.columnName.length > 0) {
            this.props.onColumnAdded(this.state.columnName)
            this.setState({
                columnName: '',
                formShowed: false
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        this.addColumn()
    }

    render() {
        return (
            <div className="column">
                <form action=""
                      onSubmit={this.handleSubmit}
                      className={"form form--new-column " + (!this.state.formShowed ? 'hidden' : '')}>
                    <input className="form__input form__input--column"
                           value={this.state.columnName}
                           placeholder="Введите название колонки"
                           onChange={this.updateColumnName}
                    />

                    <div className="form__buttons">
                        <SubmitButton onSubmited={this.addColumn} text="Добавить колонку"/>
                        <CloseButton onClicked={this.hideForm} />
                    </div>
                </form>

                {!this.state.formShowed &&
                <NewButton text="Добавить еще одну колонку" onClicked={this.showForm}/>}
            </div>
        );
    }
}

export default NewColumn