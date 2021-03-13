import styles from './style.module.css';

const Layout = ( {title, descr}) => {
    return (
        <section className={ styles.root } >
            <div className={ styles.wrapper }>
                <article>
                    <div className="title">
                        <h3>{ title }</h3>
                        <span className={ styles.separator }></span>
                    </div>
                    <div className={ styles.desc, styles.full }>
                        <p>{ descr }</p>
                    </div>
                </article>
            </div>
        </section>
    );
}


export default Layout;
