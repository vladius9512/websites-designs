import React, { useState } from "react";

const ModalButton = (props) => {
    const { handleEditSubmit, inputValue, taskId } = props;
    return (
        <button
            type="button"
            onClick={() => handleEditSubmit(inputValue, taskId)}
        >
            Submit edit
        </button>
    );
};

export default ModalButton;
