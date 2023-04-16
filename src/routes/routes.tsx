import { Navigate } from 'react-router-dom'

interface ProtectedProps {
    children: JSX.Element
    allowed?: boolean
    redirectPath?: string
}


export function ProtectedRoute({ children, allowed, redirectPath }: ProtectedProps) {
    if (!allowed) return <Navigate to={redirectPath ?? '/'} />
    else return children
}