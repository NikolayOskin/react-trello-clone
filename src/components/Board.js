import React, {Component} from 'react';
import Column from "./Column";
import NewColumn from "./NewColumn";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoLists: [{
                name: 'План на месяц',
                items: [
                    'Пройти курс по React',
                    'Отметить день рождения',
                    'Записаться на курсы английского языка, чтобы уехать жить в Лондон',
                    'Сделать бекенд своего сайта на node.js',
                    'Собрать портфолио',
                    'Написать первую статью в блог',
                    'Записаться в мотошколу. Хотя немного страшновато, конечно. Друзья и родители против, но очень хочется. Но кого я обманываю, уже 2 года решаюсь на этот шаг 😢 Еще и друзья будут хрустиком называть. В общем, хотя бы подумать над этим.',
                    'Нет, я серьезный человек, иду в мотошколу. Записываюсь!',
                    'Посмотреть билеты на концерт',
                    'Оплатить интернет на год вперед',
                    'Выбрать себе новую рубашку',
                    'Купить корм для собаки',
                    'Купить новые очки для плавания',
                    'Подарить маме цветы'
                ]
            }, {
                name: 'План на день',
                items: [
                    'Записаться на курс по React',
                    'Забронировать тир на субботу',
                    'Накидать тем для статей в блог'
                ]
            }]
        }
        this.pushNewCard = this.pushNewCard.bind(this)
        this.pushNewColumn = this.pushNewColumn.bind(this)
    }

    pushNewCard(index, cardText) {
        let newTodoLists = this.state.todoLists
        newTodoLists[index].items.unshift(cardText)
        this.setState({
            todoLists: newTodoLists
        })
    }

    pushNewColumn(name) {
        let newTodoLists = this.state.todoLists
        newTodoLists.push({
            name: name,
            items: []
        })
        this.setState({
            todoLists: newTodoLists
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.todoLists.map((todoList, index) => <Column key={index}
                                                                       index={index}
                                                                       column={todoList}
                                                                       onCardAdded={this.pushNewCard}
                />)}
                <NewColumn onColumnAdded={this.pushNewColumn}/>
            </div>
        );
    }
}

export default Board;