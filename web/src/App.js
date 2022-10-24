import RoutesApp from "./routes"
import { Toaster } from "react-hot-toast"
import Confirmation from "./components/Confirmation"

function App() {
    return (
        <>
            <div className="App">
                <RoutesApp />
            </div>
            <Toaster position="top-right" reverseOrder={false} />
            <Confirmation />
        </>
    )
}

export default App
