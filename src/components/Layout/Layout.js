import styles from './style.module.css';


const Layout = ( {title, descr, urlBg, colorBg}) => {
    const LayoutImage = {
        backgroundImage: `url(${urlBg})`,
        backgroundSize: 'cover',
        backgroundColor: colorBg
      }

    return (
        <section style={LayoutImage}  className={ styles.root } >
            <div className={ styles.wrapper }>
                <article>
                    <div className="title">
                        {title && <h3>{ title }</h3>}
                        <span className={ styles.separator }></span>
                    </div>
                    <div className={ styles.desc, styles.full }>
                        { descr && <p>{ descr }</p>}
                    </div>
                </article>
            </div>
        </section>
    );
}


export default Layout;
