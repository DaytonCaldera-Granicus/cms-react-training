import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './pager.module.css'
import Button from '../shared/buttons/button';
import { useState } from 'react';

export interface PagerProps {
    start: number;
    end: number;
    total: number;
    onNext?: () => void;
    onPrev?: () => void;
}

const Pager = ({ start = 0, end = 0, total = 0, onNext, onPrev }: PagerProps) => {

    if (end > total) {
        end = total;
    }
    
    return (
        <div className={styles.pager}>
            <Button onClick={onPrev} >
                <FontAwesomeIcon icon={faAngleLeft} />
            </Button>
            <span className={styles.pageInfo}>
                {`${start} - ${end} of ${total}`}
            </span>
            <Button onClick={onNext} >
                <FontAwesomeIcon icon={faAngleRight} />
            </Button>
        </div>
    )
}

export default Pager;