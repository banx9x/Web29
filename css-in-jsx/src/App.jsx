import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1 className={styles.heading}>Hello React</h1>
        </div>
    );
}

export default App;
