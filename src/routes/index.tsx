import { Route, Routes, Navigate } from 'react-router-dom'
import { HomePage } from 'views/home_page'
import { TaskApp } from 'views/task'
import { ProtectedRoute } from './routes'

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/task' element={
                <ProtectedRoute allowed >
                    <TaskApp />
                </ProtectedRoute>
            } />
        </Routes>
    )
}