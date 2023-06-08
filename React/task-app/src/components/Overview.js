import React from "react";

const Overview = (props) => {
    const { tasks, handleRemove } = props;

    return (
        <ul>
            {tasks.map((task) => {
                return (
                    <li key={task.id}>
                        {`${task.number}. ${task.text}`}
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
