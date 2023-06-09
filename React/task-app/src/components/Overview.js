import React, { useState } from "react";

const Overview = (props) => {
    const { tasks, handleRemove, handleEdit } = props;

    return (
        <ul>
            {tasks.map((task, iterator) => {
                return (
                    <li key={task.id}>
                        {`${iterator + 1}. ${task.text}`}
                        <button
                            type="button"
                            onClick={() => handleRemove(task.id)}
                            key={task.id}
                        >
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Overview;
