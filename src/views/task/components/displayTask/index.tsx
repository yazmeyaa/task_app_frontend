import { useAppSelector } from "hooks/redux"

const DisplayCurrentTask = () => {
    const tasks = useAppSelector(state => state.tasks)
    if (tasks.selectedTask === null && tasks.list.length > 0) {
        return (
            <section>
                <h1>Выберите задачу в левой панели задач.</h1>
            </section>
        )
    } else if (tasks.selectedTask === null && tasks.list.length <= 0) {
        return (
            <section>
                <h1>Создайте задачу в левой панели задач</h1>
            </section>
        )
    } else {
        const selectedTask = tasks.list.find(item => item.id === tasks.selectedTask)
        return (
            <article>
                <h2>{selectedTask?.title}</h2>
                <p>{selectedTask?.description}</p>
                <time>{selectedTask?.createdAt}</time>
                <div><span>{selectedTask?.status}</span></div>

            </article>
        )
    }
}

export { DisplayCurrentTask }