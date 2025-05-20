import { ReactNode } from 'react';
import styles from './buttons.module.css'


export interface ButtonsProp {
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
}

const Button = ({ children, onClick, className = '' }: ButtonsProp) => {
    return (
        <button onClick={onClick} className={`${styles.button} ${className}`}>{children}</button>
    )
}

export default Button;