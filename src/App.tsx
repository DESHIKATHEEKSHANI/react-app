import Button from "./components/Button";

function App() {
    return (
        <div>
            <Button onClick={() => alert("Button clicked!")}>
                Click Me
            </Button>
        </div>
    );
}

export default App;