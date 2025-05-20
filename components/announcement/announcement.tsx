import styles from './announcement.module.css'

const Announcement = () => {
    return (
        <section className={styles.announcement}>
            <h2>Coming Out Daily</h2>
            <p>
                Sed posuere consectetur est at lobortis.
                Nulla vitae elit libero, a pharetra augue.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
        </section>
    )
}

export default Announcement;