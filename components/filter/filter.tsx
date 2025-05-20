'use client'
import styles from './filter.module.css'
import Dropdown, { DropdownOption } from '../shared/dropdown/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Input from '../shared/input/input';
import { useState } from 'react';
import { useRef } from 'react';

export interface FilterValue {
    gender: number;
    search: string;
}

interface FilterProps {
    onChange: (filter: FilterValue) => void;
}

const Filter = ({ onChange }: FilterProps) => {
    const options: DropdownOption[] = [
        { value: 0, label: 'Other' },
        { value: 1, label: 'Male' },
        { value: 2, label: 'Female' },
    ];

    const [gender, setGender] = useState<number>(0);
    const [search, setSearch] = useState<string>('');

    const handleChange = (newGender: number, newSearch: string) => {
        if (onChange) {
            onChange({ gender: newGender, search: newSearch });
        }
    };

    const handleDropdownChange = (option: number) => {
        setGender(option);
        handleChange(option, search);
    };


    const typeTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);

        if (typeTimeout.current) {
            clearTimeout(typeTimeout.current);
        }

        typeTimeout.current = setTimeout(() => {
            handleChange(gender, value);
        }, 750);
    };

    return (
        <div className={styles.filter}>
            <p>Filter by:</p>
            <div className={styles.filters_container}>
                <Dropdown
                    options={options}
                    // value={gender}
                    onChange={handleDropdownChange}
                />
                <Input
                    // value={search}
                    onChange={handleInputChange}
                    placeholder="Search..."
                />
            </div>
        </div>
    );
};

export default Filter;