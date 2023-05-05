import { PrimaryButton } from "components/buttons/primaryButton";
import { PrimaryInput } from "components/inputs/default_input";
import { useAppSelector } from "hooks/redux";
import { FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiClient } from "tools/ApiClient";

function RegsitrationPage() {
    const navigate = useNavigate()
    const { authState } = useAppSelector(state => state.auth)

    useEffect(() => {
        if (authState === true) {
            navigate('/')
        }
    }, [authState])

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)



        const email = formData.get('email')?.toString()
        const username = formData.get('username')?.toString()
        const password = formData.get('password')?.toString()
        const confirmPassword = formData.get('confirmPassword')?.toString()

        if (!email || !username || !password || !confirmPassword) {
            return;
        }
        ApiClient.register({
            username,
            email,
            password,
            confirmPassword
        })
            .then(() => {
                navigate('/')
            })
            .catch(() => {
                console.error('Regsiter failed')
            })
    }
    return (
        <main className="auth_page_wrapper">
            <figure>
                <strong>Task app</strong>
                <img draggable="false" src="assets/images/task_logo.svg" />
            </figure>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <PrimaryInput label="Email" name="email" />
                <PrimaryInput label="Имя пользователя" name="username" />
                <PrimaryInput label="Пароль" name="password" />
                <PrimaryInput label="Подтверждение пароля" name="confirmPassword" />
                <PrimaryButton>Войти</PrimaryButton>
            </form>
            <Link to={'/'}>Login</Link>
        </main>
    )
}

export { RegsitrationPage }
