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
            {"hi :>"}
        </main>
    )
}

export { RegsitrationPage }
