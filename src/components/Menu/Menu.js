import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { AiFillHome, AiFillFire, AiFillStar } from 'react-icons/ai';
import { GiNinjaHeroicStance, GiBandageRoll, GiRomanToga } from 'react-icons/gi';
import { MdTheaterComedy } from 'react-icons/md';
import { BiSolidGhost } from 'react-icons/bi';
import MenuItems from '../Menu/MenuItems';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('menuPane')}>
            <MenuItems name="Home" Icon={AiFillHome} />
            <MenuItems name="Trending" Icon={AiFillFire} />
            <MenuItems name="Top rated" Icon={AiFillStar} />
            <MenuItems name="Actions Movies" Icon={GiNinjaHeroicStance} />
            <MenuItems name="Comedy Movies" Icon={MdTheaterComedy} />
            <MenuItems name="Romance Movies" Icon={BiSolidGhost} />
            <MenuItems name="Romance Movies" Icon={GiRomanToga} />
            <MenuItems name="Documentaries" Icon={GiBandageRoll} />
        </div>
    );
}

export default Menu;
