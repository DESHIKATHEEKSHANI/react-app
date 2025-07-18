import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    return (
        <div>
            <Alert>My Alert</Alert>
            <Button color="primary" onClick={() => alert("Button clicked!")}>
                Click Me
            </Button>
        </div>
    );
}

export default App;