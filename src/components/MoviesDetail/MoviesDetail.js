import styles from './MoviesDetail.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
export const showModal = true;
function MoviesDetail() {
    return (
        <>
            <div className={cx('MoviesDetailModal')}>
                <div className={cx(`backdrop`, `${showModal ? 'showBackdrop' : 'hideBackdrop'}`)}></div>
                <div
                    className={cx(`modal`, `${showModal ? 'showModal' : 'hideModal'}`)}
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original//4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg)`,
                        backgroundSize: 'cover',
                    }}
                >
                    <div className={cx('container')}>
                        <div className={cx('movieInfo')}>
                            <h1 className={cx('movieTitle')}>The Witcher</h1>
                            <p className={cx('statistical')}>
                                <span className={cx('rating')}>Rating: 82%</span>
                                <span className={cx('popularity')}>Popularity: 123.456</span>
                            </p>
                            <p className={cx('releaseDate')}>release Date: 21/12/2023</p>
                            <p className={cx('runtime')}>Runtime: 123</p>
                            <p className={cx('overview')}>
                                Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to
                                Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his
                                cancer, only to discover the entire operation is a scam to defraud the most vulnerable.
                                Armed with a newfound purpose, the infamous serial killer returns to his work, turning
                                the tables on the con artists in his signature visceral way through devious, deranged,
                                and ingenious traps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MoviesDetail;
