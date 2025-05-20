import { on } from 'events';
import styles from './inputs.module.css'

export interface InputProps {
    type?: string;
    placeholder?: string;
    onChange?: any;
}

const Input = ({ type = 'text', placeholder = 'Type here...', onChange }: InputProps) => {
    return (
        <>
            <input className={styles.input} type={type} onChange={onChange} placeholder={placeholder} />
        </>
    )
}

export default Input;   