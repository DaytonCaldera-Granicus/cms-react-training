import styles from './list.module.css'


export interface ListProp {
    children: React.ReactNode;
}

const List = ({ children }: ListProp) => {
    return (
        <div className={styles.list_container}>
            {children}
        </div>
    )
}

export default List;