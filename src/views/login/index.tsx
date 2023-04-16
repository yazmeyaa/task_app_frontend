import { PrimaryButton } from "components/buttons/primaryButton"
import { PrimaryInput } from "components/inputs/default_input"


function LoginPage() {
    return (
        <main className="auth_page_wrapper">
            <figure>
                <strong>Task app</strong>
                <img draggable="false" src="assets/images/task_logo.svg" />
            </figure>
            <h2>Авторизация</h2>
            <form>
                <PrimaryInput label="Username" />
                <PrimaryInput label="Password" />
                <PrimaryButton>Войти</PrimaryButton>
            </form>
        </main>
    )
}

export { LoginPage }