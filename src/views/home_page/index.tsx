import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <main>
            Hello main page
            <Link to={'/task'}>Task</Link>
        </main>
    )
}