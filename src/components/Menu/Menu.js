import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { AiFillFire, AiFillStar } from 'react-icons/ai';
import { GiNinjaHeroicStance, GiBandageRoll, GiRomanToga } from 'react-icons/gi';
import { MdTheaterComedy } from 'react-icons/md';
import { BiSolidGhost } from 'react-icons/bi';
import { RiNetflixFill } from 'react-icons/ri';
import MenuItems from '../Menu/MenuItems';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('menuPane')}>
            <MenuItems name="NetFlix" Icon={RiNetflixFill} to="netFlix" />
            <MenuItems name="Trending" Icon={AiFillFire} to="trendingMovies" />
            <MenuItems name="Top rated" Icon={AiFillStar} to="topRatedMovies" />
            <MenuItems name="Actions Movies" Icon={GiNinjaHeroicStance} to="actionMovies" />
            <MenuItems name="Comedy Movies" Icon={MdTheaterComedy} to="comedyMovies" />
            <MenuItems name="Romance Movies" Icon={BiSolidGhost} to="romanceMovies" />
            <MenuItems name="Horor Movies" Icon={GiRomanToga} to="horrorMovies" />
            <MenuItems name="Documentaries" Icon={GiBandageRoll} to="documentaries" />
        </div>
    );
}

export default Menu;
