import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import {randomRgbaColor} from '../../utils/index'
const cx = classNames.bind(styles);
function MenuItems(props) {
    const {name,Icon} = props
    return (
        <div className={cx('subMenu')}>
            <Icon className={cx('icon')} style={{color: randomRgbaColor()}}></Icon>
            <span>{name}</span>
        </div>
    );
}

export default MenuItems;
