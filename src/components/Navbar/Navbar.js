import NetflixLogo from '../../assets/images/logo.png';
import { MdSearch } from 'react-icons/md';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { useScrollY } from '../hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function Navbar() {
    const [scrollY] = useScrollY();
    const [keywords, setKeyWords] = useState('');
    const navigete = useNavigate();
    const handelChangeInput = (e) => {
        let keywords = e.target.value;
        setKeyWords(keywords);
        if (keywords.length > 0) {
            navigete(`/search?keywords=${keywords.trim()}`);
        } else {
            navigete(`/`);
        }
    };

    const goHome = () => {
        navigete(`/`);
        setKeyWords(' ');
    };
    return (
        <div
            className={cx('navigaTion')}
            style={scrollY < 50 ? { backgroundColor: 'transparent' } : { backgroundColor: '#000' }}
        >
            <div className={cx('navContainer')}>
                <div className={cx('logo')}>
                    <img src={NetflixLogo} alt="logo" onClick={goHome} />
                </div>

                <div className={cx('navSearch')}>
                    <MdSearch className={cx('iconSearch')}>icon</MdSearch>
                    <input value={keywords} type="text" placeholder="Input titile, genres, people" onChange={handelChangeInput}></input>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
