import NetflixLogo from '../../assets/images/logo.png';
import { MdSearch } from 'react-icons/md';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import {useScrollY} from '../hooks';
const cx = classNames.bind(styles);
function Navbar() {
    const [scrollY] = useScrollY();
    return (
        <div
            className={cx('navigaTion')}
            style={scrollY < 50 ? { backgroundColor: 'transparent' } : { backgroundColor: '#000' }}
        >
            <div className={cx('navContainer')}>
                <div className={cx('logo')}>
                    <img src={NetflixLogo} alt="logo" />
                </div>

                <div className={cx('navSearch')}>
                    <MdSearch className={cx('iconSearch')}>icon</MdSearch>
                    <input type="text" placeholder="Input titile, genres, people"></input>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
