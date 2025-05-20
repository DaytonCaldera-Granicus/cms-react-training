import styles from './dropdown.module.css'

export type DropdownOption = {
    value: number;
    label: string;
}

export interface DropdownProps {
    options: DropdownOption[];
    onChange?: (selected: number) => void;
}

const Dropdown = ({ options, onChange }: DropdownProps) => {

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = Number(e.target.value);
        if (onChange) {
            onChange(selectedValue);
        }
    }

    return (
        <select className={styles.dropdown} onChange={handleOnChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default Dropdown;