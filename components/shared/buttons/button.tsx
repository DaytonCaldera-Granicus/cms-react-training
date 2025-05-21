import { ReactNode } from 'react';
import styles from './buttons.module.css'


export interface ButtonsProp {
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
}

const Button = ({ children, onClick, className = '', disabled = false }: ButtonsProp) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`${styles.button} ${className}`}>{children}</button>
    )
}

export default Button;