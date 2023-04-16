import { SideBar } from "components/sidebar"
import { TaskListSideBar } from "views/task/components/sidebar_tasklist"
import React, { FC } from "react"
import { DisplayCurrentTask } from "./components/displayTask"

export const TaskApp: FC = () => {

    return (
        <React.Fragment>
            <SideBar>
                <TaskListSideBar />
            </SideBar>
            <main >
                <DisplayCurrentTask />
            </main>
        </React.Fragment>
    )
}