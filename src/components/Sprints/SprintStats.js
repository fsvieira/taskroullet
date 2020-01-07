import React from "react";

import {
  Colors
} from "@blueprintjs/core";


function duration (d) {
    if (d) {
        const md = moment.duration(d);
        return md.humanize();
    }
    else {
        return "None";
    }
}

import moment from "moment";

export default function SprintStats ({
    sprint: {
        openTasksTotal,
        doneTasksTotal,
        total,
        taskDueAvg,
        doneAvg,
        nextTodoAvgDueTime,
        oldestOpenTask,
        estimatedDueDate,
        date
    }
}) {
    const chart = <div style={{width: "100%",  height: "0.5em"}}>
        <div style={{ float: "left", backgroundColor: Colors.GREEN5, height: "100%", width: `${(doneTasksTotal / total) * 100}%` }} ></div>
        <div style={{ float: "left", backgroundColor: Colors.RED5, height: "100%", width: `${(openTasksTotal / total) * 100}%` }} ></div>
    </div>;

    return (
        <div>
            {chart}
            <p>Open Tasks: {openTasksTotal}</p>
            <p>Estimated Due Date: {moment(estimatedDueDate).format("DD-MM-YYYY HH:mm")}</p>
            <p>Total Tasks: {total}</p>
            <p>Ideal Close Task Time: {duration(taskDueAvg)}</p>
            <p>Avg Close Task Time: {duration(doneAvg)}</p>
            <p>Next Todo Time: {duration(nextTodoAvgDueTime)}</p>
            <p>Oldest Open Task: {oldestOpenTask?moment(oldestOpenTask).format("DD-MM-YYYY"):"None"}</p>
            <p>Time Remaning: {duration(moment(date).valueOf() - moment().valueOf())}</p>
        </div>
    );
}
