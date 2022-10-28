import RoutesApp from "./routes"
import { Toaster } from "react-hot-toast"
import Confirmation from "./components/Confirmation"

function App() {
    return (
        <>
            <div className="App">
                <RoutesApp />
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
                containerStyle={{ zIndex: 9999999999999 }}
            />
            <Confirmation />
        </>
    )
}

export default App
