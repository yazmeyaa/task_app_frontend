import { useActions } from "hooks/useActions";
import { Link } from "react-router-dom";
import * as themes from 'themes'
import { Theme } from "types/theme";

export function HomePage() {
    const {changeTheme} = useActions()
    function handleChangeTheme(theme: Theme) {
        changeTheme(theme)
    }
    
    return (
        <main>
            <h1>13123123</h1>
            <button onClick={() => handleChangeTheme(themes.blue)}>Change theme to blue</button>
            <button onClick={() => handleChangeTheme(themes.violet)}>Change theme to violet</button>
        </main>
    )
}