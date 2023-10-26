import classNames from 'classnames/bind';
import styles from './ThemeMovie.module.scss';
const cx = classNames.bind(styles);
function ThemeMovie() {
    return (
        <label className={cx('switch')}>
            <input type='checkbox' className={cx('checkbox')} />
            <div className={cx('slider')}></div>
        </label>
    );
}

export default ThemeMovie;
