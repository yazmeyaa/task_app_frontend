import { SearchBar } from "components/inputs/searchbar"
import React, { ChangeEvent, FunctionComponent, useState } from "react"
import { Task } from "types/task"
import { TaskItem } from "./components/single_task"

interface TaskListProps {
    items: Task[]
}

export const TaskList: FunctionComponent<TaskListProps> = ({ items }) => {
    return (
        <React.Fragment>
            <ul className={`tasklist ${items.length > 0 ? 'with_markers' : ''}`}>
                {items.map((item, index) => {
                    return (<TaskItem task={item} key={index} />)
                })}
            </ul>
        </React.Fragment>
    )
}