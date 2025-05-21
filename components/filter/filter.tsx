'use client'
import styles from './filter.module.css'
import Dropdown, { DropdownOption } from '../shared/dropdown/dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Input from '../shared/input/input';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export interface FilterValue {
    gender?: number;
    name?: string;
}

interface FilterProps {
    onChange?: (filter: FilterValue) => void;
}

const Filter = ({ onChange }: FilterProps) => {
    const options: DropdownOption[] = [
        { value: -1, label: 'Gender' },
        { value: 0, label: 'Other' },
        { value: 1, label: 'Male' },
        { value: 2, label: 'Female' },
    ];

    const [gender, setGender] = useState<number>(-1);
    const [name, setName] = useState<string>('');
    const [showFilters, setShowFilters] = useState<boolean>(true);

    const handleChange = (newGender: number, newSearch: string) => {
        if (onChange) {
            const filter: FilterValue = {};
            if (newGender > -1) {
                filter.gender = newGender;
            }
            filter.name = newSearch;
            onChange(filter);
        }
    };

    const handleDropdownChange = (option: number) => {
        setGender(option);
        handleChange(option, name);
    };


    const typeTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setName(value);

        if (typeTimeout.current) {
            clearTimeout(typeTimeout.current);
        }

        typeTimeout.current = setTimeout(() => {
            handleChange(gender, value);
        }, 750);
    };

    useEffect(() => {
        let lastWidth = window.innerWidth;

        const handleResize = () => {
            if (lastWidth <= 830 && window.innerWidth > 830) {
                setShowFilters(true);
            } else if (lastWidth > 830 && window.innerWidth <= 830) {
                setShowFilters(false);
            }
            lastWidth = window.innerWidth;
        };

        window.addEventListener('resize', handleResize);

        if (window.innerWidth > 830) {
            setShowFilters(true);
        } else {
            setShowFilters(false);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.filter}>
            <p>Filter
                <span> by:</span>
                <button onClick={() => setShowFilters(!showFilters)}><FontAwesomeIcon icon={faFilter} /></button>
            </p>
            <div className={`${styles.filters_container} ${(showFilters) ? styles.displayMobileFilters : styles.hideMobileFilters}`}>
                <Dropdown
                    options={options}
                    onChange={handleDropdownChange}
                />
                <Input
                    onChange={handleInputChange}
                    placeholder="Type a name to search..."
                />
            </div>
        </div>
    );
};

export default Filter;