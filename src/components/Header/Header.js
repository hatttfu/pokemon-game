import s from './style.module.css';

const Header = ( { title, descr }) => {
    return(
    <header className={ s.root } >
        <div className={ s.forest }></div>
        <div className={ s.container }>
            { title ? ( <h1>{title}</h1>) : <h1>Пропсы не дошли...</h1>
            }
            {descr && <p>{ descr }</p>}   
        </div>
    </header>
    );
}


export default Header;
