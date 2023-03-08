import React from "react";
import Box from "./Box";
import PropTypes from "prop-types";
import "./BoxList.css";

/**
 * @typedef BoxListProps
 *
 * @property {string[]} colors Danh sách các màu
 * @property {(index: number) => void} onBoxClick Sự kiện click trên Box
 */

/**
 * Render ra danh sách các boxes
 *
 * @param {BoxListProps} props
 * @returns
 */
export default function BoxList({ colors = [], onBoxClick }) {
    // Tạo mảng các component Box
    const items = colors.map((color, i) => (
        <Box key={i} bg={color} onClick={() => onBoxClick(i)} />
    ));

    return <div className="box-list">{items}</div>;
}

// Xác thực kiểu dữ liệu cho component BoxList
BoxList.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    onBoxClick: PropTypes.func,
};
