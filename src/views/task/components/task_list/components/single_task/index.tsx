import { useAppDispatch } from "hooks/redux"
import { FunctionComponent } from "react"
import { TasksActionsEnum } from "redux/actions/tasks"
import RightArrow from 'remixicon-react/ArrowRightFillIcon'
import { TaskHelper } from "tools/task"
import { Task } from "types/task"

interface TaskItemProps {
    task: Task
}

export const TaskItem: FunctionComponent<TaskItemProps> = ({ task }) => {
    const dispatch = useAppDispatch()

    function getStatusClassName() {
        return new TaskHelper(task).convertStatusToClassName()
    }

    const changeSelectedTask = () => dispatch({
        type: TasksActionsEnum.CHANGE_SELECTED_TASK,
        payload: { taskId: task.id }
    })
    return (
        <li className={`tasklist_item ${getStatusClassName()}`} onClick={changeSelectedTask}>
            <h4>{task.title}</h4>
            <RightArrow />
        </li>
    )
}