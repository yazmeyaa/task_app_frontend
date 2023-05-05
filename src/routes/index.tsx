import { Route, Routes, Navigate, useLocation, useActionData } from 'react-router-dom'
import { HomePage } from 'views/home_page'
import { TaskApp } from 'views/task'
import { ProtectedRoute } from './routes'
import { RegsitrationPage } from 'views/registration'
import { useEffect } from 'react'
import { useAppSelector } from 'hooks/redux'
import { useActions } from 'hooks/useActions'
import { Login } from 'views/login'

export const Router = () => {
    const location = useLocation()
    const { checkAuth } = useActions()

    const { authState } = useAppSelector(a => a.auth)

    useEffect(() => {
        checkAuth()
    }, [location])

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/task' element={
                <ProtectedRoute allowed={authState} >
                    <TaskApp />
                </ProtectedRoute>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegsitrationPage />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    )
}