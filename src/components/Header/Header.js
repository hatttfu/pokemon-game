import s from './style.module.css';

// import { ReactComponent as Stars} from '../../assets/Stars.svg;'
// import { ReactComponent as Trees} from '../../assets/Trees.svg;'

import Stars from '../../assets/Stars.svg';
import Trees from '../../assets/Trees.svg';

console.log(Stars);
console.log(Trees);

const Header = ( { title, descr }) => {
    return(
    <header className={ s.separator } >
        <div className={ s.forest }></div>
        <div className={ s.contsiner }>
            <h1>{ title }</h1>
            <p>{ descr }</p>
        </div>
    </header>
    );
}


export default Header;
