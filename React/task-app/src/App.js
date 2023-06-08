import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
    constructor() {
        super();

        this.state = {
            task: { text: "", id: uniqid(), number: 1 },
            tasks: [],
        };
    }
    handleChange = (e) => {
        this.setState({
            task: {
                text: e.target.value,
                id: this.state.task.id,
                number: this.state.task.number,
            },
        });
    };
    handleRemove = (id) => {
        const newList = this.state.tasks.filter((item) => item.id !== id);
        this.setState({
            tasks: newList,
        });
    };
    onSubmitTask = (e) => {
        e.preventDefault();
        if (this.state.task.text === "") return;
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: {
                text: "",
                id: uniqid(),
                number: this.state.task.number + 1,
            },
        });
    };
    render() {
        const { task, tasks } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmitTask}>
                    <label htmlFor="taskInput">Enter task</label>
                    <input
                        type="text"
                        id="taskInput"
                        onChange={this.handleChange}
                        value={task.text}
                    ></input>
                    <button type="submit">Add Task</button>
                </form>
                <Overview tasks={tasks} handleRemove={this.handleRemove} />
            </div>
        );
    }
}

export default App;
