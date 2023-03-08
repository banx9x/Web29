import { useState } from "react";
import BoxList from "./components/BoxList";
import "./App.css";
import { randomHex } from "./utils/randomHex";

function App() {
    const [colors, setColors] = useState(() =>
        // Tạo ra mảng 5 màu ngẫu nhiên làm trạng thái ban đầu
        Array(5).fill(null).map(randomHex)
    );
    const [number, setNumber] = useState(10);

    const addColors = () => {
        // Copy màu hiện tại và thêm n màu ngẫu nhiên
        setColors([...colors, ...Array(number).fill(null).map(randomHex)]);
    };

    const removeColor = (index) => {
        // Sao chép ra các giá trị color khác index muốn xóa
        const newColors = [
            ...colors.slice(0, index),
            ...colors.slice(index + 1),
        ];

        // Cập nhật trạng thái mới
        setColors(newColors);
    };

    const handleChange = (e) => {
        const value = e.target.value;

        const isValid = Number(value) && Number(value) > 0;

        if (isValid) {
            setNumber(Number(value));
        }
    };

    const total = colors.length;

    return (
        <div className="app">
            <h1>Boxes</h1>
            <button onClick={addColors}>More boxes</button>
            <input type="number" value={number} onChange={handleChange} />
            <p className="total">Total box: {total}</p>

            <BoxList colors={colors} onBoxClick={removeColor} />
        </div>
    );
}

export default App;
