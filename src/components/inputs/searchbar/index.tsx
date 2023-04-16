import { ChangeEvent, createRef, forwardRef, FunctionComponent, MouseEvent, RefObject, useRef } from "react"

import SearchIcon from 'remixicon-react/SearchLineIcon'

interface SearchBarProps {
    label: string
    placeholder?: string
    name?: string
    hideButton?: boolean
    onInput?: (event: ChangeEvent<HTMLInputElement>) => void
    onButtonClick?: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

type Ref = HTMLInputElement

export const SearchBar = forwardRef<Ref, SearchBarProps>(({ label, placeholder, name, onInput, onButtonClick, hideButton }, ref) => {
    return (
        <div className="searchbar">
            <label htmlFor={name}>
                <span>{label}</span>
            </label>
            <div className="input_container" >
                <input onInput={onInput} name={name ?? label} placeholder={placeholder ?? 'Найти...'} ref={ref} />
                {!hideButton && <button onClick={onButtonClick}><SearchIcon /></button>}
            </div>
        </div>
    )
})