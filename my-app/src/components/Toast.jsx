import React, { useEffect } from "react";
import styles from "./Toast.module.css";

const Toast = ({ message, type = "info", duration = 1000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
