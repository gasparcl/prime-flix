import RoutesApp from "./routes"
import { Toaster  } from "react-hot-toast"

function App() {
    return (
        <>
            <div className="App">
                <RoutesApp />
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    )
}

export default App
