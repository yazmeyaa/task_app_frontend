import React, { ChangeEvent, useEffect, useRef, useState } from "react"

import { PrimaryButton } from "components/buttons/primaryButton"
import { Modal } from "components/modal"
import { CreateTask } from "views/task/components/createTask"
import AddButton from 'remixicon-react/AddLineIcon'
import { TaskList } from "views/task/components/task_list"
import { SearchBar } from "components/inputs/searchbar"
import { Task } from "types/task"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { RootState } from "redux/store"
import { useActions } from "hooks/useActions"


export const TaskListSideBar = () => {
    const [modalVisibility, setModalVisibility] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const taskList = useAppSelector((state: RootState) => state.tasks.list)
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([])
    const {loadTaskList} = useActions()
    

    useEffect(() => {
        loadTaskList({
            page: 1,
            perPage: 10
        })
    }, [])


    function openModal() {
        setModalVisibility(true)
    }

    function closeModal() {
        setModalVisibility(false)
    }

    function onSuccessTaskCreated() {
        closeModal()
    }

    // Recalculate filtered items if tasks state is changed
    useEffect(() => {
        if (inputRef.current === null) return;
        const filtered = taskList.filter(item => item.title.toLowerCase().includes(inputRef.current!.value.toLowerCase()))
        setFilteredTasks(filtered)
    }, [taskList])

    const onSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
        const filtered = taskList.filter(item => item.title.toLowerCase().includes(event.target.value.toLowerCase()))
        setFilteredTasks(filtered)
    }

    return (
        <React.Fragment>
            <SearchBar label="Search task" name="search_task" placeholder="Task name..." hideButton onInput={onSearchInput} ref={inputRef} />
            {taskList.length > 0 && filteredTasks.length < 1 ? <h5>Не найдено ни одной задачи</h5> : <TaskList items={filteredTasks} />}
            <PrimaryButton onClick={openModal}>
                <AddButton />
                <span>Добавить задачу</span>
            </PrimaryButton>
            <Modal open={modalVisibility} onClose={closeModal} ><CreateTask onSuccess={onSuccessTaskCreated} /></Modal>
        </React.Fragment>
    )
}