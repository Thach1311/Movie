import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import {randomRgbaColor} from '../../utils/index'
import { Link } from 'react-scroll';
const cx = classNames.bind(styles);
function MenuItems(props) {
    const {name,Icon,to} = props
    return (
        <Link className={cx('subMenu')}
            to = {to}
            spy = {true}
            smooth = {true}
            offset={50}
            duration={500}
            delay={200}
            activeClass='active'
        >
            <Icon className={cx('icon')} style={{color: randomRgbaColor()}}></Icon>
            <span>{name}</span>
        </Link>
    );
}

export default MenuItems;
