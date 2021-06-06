import React from 'react';
import styles from "./Header.module.css";

interface HeaderProps {
    children: React.ReactChild;
}

const Header = ({ children }: HeaderProps) => {
    return (
        <div className={styles["text"]}>{children}</div>        
    )
}

export default Header;