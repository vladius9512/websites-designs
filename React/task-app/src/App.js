import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";
import EditModal from "./components/EditModal";

class App extends Component {
    constructor() {
        super();

        this.state = {
            task: { text: "", id: uniqid() },
            tasks: [],
            editModal: { visible: false, taskId: null },
        };
    }
    handleChange = (e) => {
        this.setState({
            task: {
                text: e.target.value,
                id: this.state.task.id,
            },
        });
    };
    handleRemove = (id) => {
        const newList = this.state.tasks.filter((item) => item.id !== id);
        console.log(newList);
        this.setState({
            tasks: newList,
        });
    };
    handleEditSubmit = (inputValue, id) => {
        const newList = this.state.tasks.map((item) => {
            if (item.id === id) {
                item.text = inputValue;
            }
            return item;
        });
        this.setState({
            tasks: newList,
            editModal: { visible: false, taskId: null },
        });
    };
    openEditModal = (id) => {
        this.setState({
            editModal: {
                visible: true,
                taskId: id,
            },
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
                <Overview
                    tasks={tasks}
                    handleRemove={this.handleRemove}
                    handleEdit={this.openEditModal}
                />
                {this.state.editModal.visible && (
                    <EditModal
                        handleEditSubmit={this.handleEditSubmit}
                        taskId={this.state.editModal.taskId}
                    />
                )}
            </div>
        );
    }
}

export default App;
