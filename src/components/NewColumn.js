import React, {Component} from 'react';

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

    render() {
        return (
            <div className="column">
                <form action="" className={"form form--new-column " + (!this.state.formShowed ? 'hidden' : '')}>
                    <input className="form__input form__input--column"
                           value={this.state.columnName}
                           placeholder="Введите название колонки"
                           onChange={this.updateColumnName}
                    />

                    <div className="form__buttons">
                        <button type="button"
                                className="button button--submit button--submit-column"
                                onClick={this.addColumn}
                        >
                            Добавить колонку
                        </button>

                        <button type="button"
                                className="button button--close button--close-column"
                                onClick={this.hideForm}
                        ></button>
                    </div>
                </form>

                <div className={"add-new " + (this.state.formShowed ? 'hidden' : '')}>
                    <button className="button button--new"
                            onClick={this.showForm}
                    >Добавить еще одну колонку</button>
                </div>
            </div>
        );
    }
}

export default NewColumn