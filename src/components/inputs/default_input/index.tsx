import { ChangeEvent, forwardRef } from "react"


interface SearchBarProps {
    label: string
    placeholder?: string
    name?: string
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void
    error?: boolean
}

type Ref = HTMLInputElement

export const PrimaryInput = forwardRef<Ref, SearchBarProps>(({ label, placeholder, name, onInput, error }, ref) => {
    const className = `input_container ${error ? 'error' : ''}`
    return (
        <div className="primary_input">
            <label htmlFor={name}>
                <span>{label}</span>
            </label>
            <div className={className} >
                <input onInput={onInput} name={name ?? label} placeholder={placeholder ?? 'Найти...'} ref={ref} />
            </div>
        </div>
    )
})