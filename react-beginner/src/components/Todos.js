import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends React.Component {

    prototype = {
        todo: PropTypes.array.isRequired
    };



    markComplete=()=>{
        console.log("hello");
    };

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
        ));
    }
}


export default Todos;
