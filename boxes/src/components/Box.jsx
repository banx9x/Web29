import React from "react";
import PropTypes from "prop-types";
import "./Box.css";

/**
 * @typedef BoxProps
 *
 * @property {string} bg Màu nền cho Box
 * @property {(index: number) => void} onClick Sự kiện click trên Box
 */

/**
 *  Hiển thị một box hình vuông
 *
 * @param {BoxProps} props
 * @returns
 */
export default function Box({ bg, onClick }) {
    const boxStyles = {
        backgroundColor: bg,
    };

    return (
        <div className="box" style={boxStyles} onClick={onClick}>
            {bg}
        </div>
    );
}

// Xác thực kiểu dữ liệu cho component Box
Box.propTypes = {
    bg: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};
