import React from "react";

const Overview = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task) => {
                return <li>{task.text}</li>;
            })}
        </ul>
    );
};

export default Overview;
