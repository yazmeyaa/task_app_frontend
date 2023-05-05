import { Button, Form, FormGroup, TextInput } from "carbon-components-react"
import { FormEvent } from "react"

interface LoginContentProps {
    onSubmit: (event: FormEvent) => void
}

function LoginContent({ onSubmit }: LoginContentProps) {
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup legendText='Credentails'>
                <TextInput id="username" name="username" labelText="Username" />
                <TextInput type="password" name="password" id="password" labelText="Password" />
            </FormGroup>
        </Form>
    )

}

export { LoginContent }