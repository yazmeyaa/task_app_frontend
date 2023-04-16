import { PrimaryButton } from "components/buttons/primaryButton"
import { useAppDispatch } from "hooks/redux"
import { FormEvent, FunctionComponent } from "react"
import AddIcon from 'remixicon-react/AddLineIcon'
import { TasksActionsEnum } from "redux/actions/tasks"
import { CreateTaskOptions, createNewTask } from "tools/createTask"
import { Task } from "types/task"

interface CreateTaskProps {
    onSuccess: (task: Task) => void
    onError?: (error: Error) => void
}

export const CreateTask: FunctionComponent<CreateTaskProps> = ({ onSuccess }) => {
    const dispatch = useAppDispatch()

    function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)

        const title = formData.get('task_title')
        const description = formData.get('task_description')

        if (!title || !description) return;

        const taskOptions: CreateTaskOptions = {
            description: description.toString(),
            title: title.toString()
        }
        const newTask = createNewTask(taskOptions)

        dispatch({
            type: TasksActionsEnum.ADD_TASK,
            payload: newTask
        })
        onSuccess(newTask)
    }

    return (
        <div className="form_container">
            <h3>Создать новую задачу</h3>
            <form className='form' onSubmit={handleSubmitForm}>
                <label htmlFor="task_title">Название</label>
                <input required name="task_title" autoFocus />
                <label htmlFor="task_decsription">Описание</label>
                <input name="task_description" />
                <PrimaryButton type="submit">
                    <AddIcon size={18} />
                    <span>Добавить задачу</span>
                </PrimaryButton>
            </form>
        </div>
    )
}