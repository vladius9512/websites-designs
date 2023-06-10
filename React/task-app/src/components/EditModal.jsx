import React, { Component } from "react";
import ModalButton from "./EditModalButton";

class EditModal extends Component {
    constructor(props) {
        super();
        this.handleEditSubmit = props.handleEditSubmit;
        this.taskId = props.taskId;
        this.state = { inputValue: "" };
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    id="editInput"
                    onChange={this.handleChange}
                    value={this.state.inputValue}
                ></input>
                <ModalButton
                    handleEditSubmit={this.handleEditSubmit}
                    inputValue={this.state.inputValue}
                    taskId={this.taskId}
                />
            </div>
        );
    }
}

export default EditModal;
