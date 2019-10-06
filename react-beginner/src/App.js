import React from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component {
    state = {
        todos: [{
            id: 1,
            title: 'Take out the trash',
            completes: false
        },
            {
                id: 2,
                title: 'Dinner with wife ',
                completes: true
            },
            {
                id: 3,
                title: 'Meeting with boss',
                completes: false
            }

        ]
    };



    render() {
        return (

            <div className="App">
                <Todos todos={this.state.todos}/>
            </div>
        );
    }

}

export default App;
