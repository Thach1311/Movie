import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../store/actions';
import styles from './MoviesDetail.module.scss';
import classNames from 'classnames/bind';
import moment from 'moment/moment';
const cx = classNames.bind(styles);
export const showModal = true;
function MoviesDetail(props) {
    const { movie, showModal } = props;
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(setMovieDetail(null));
    };

    return (
        <>
            <div className={cx('MoviesDetailModal')}>
                <div
                    className={cx(`backdrop`, `${showModal ? 'showBackdrop' : 'hideBackdrop'}`)}
                    onClick={() => handleCloseModal()}
                ></div>
                <div
                    className={cx(`modal`, `${showModal ? 'showModal' : 'hideModal'}`)}
                    style={
                        movie
                            ? {
                                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                                      movie.backdrop_path || movie.poster_path
                                  })`,
                                  backgroundSize: 'cover',
                              }
                            : {}
                    }
                >
                    <div className={cx('container')}>
                        <div className={cx('movieInfo')}>
                            <h1 className={cx('movieTitle')}>{movie && (movie.title || movie.name)}</h1>
                            <p className={cx('statistical')}>
                                <span className={cx('rating')}>Rating: {movie && movie.vote_average * 10}%</span>
                                <span className={cx('popularity')}>Popularity: {movie && movie.popularity}</span>
                            </p>
                            <p className={cx('releaseDate')}>
                                Release Date:{' '}
                                {(movie && moment(movie.release_date).format('DD/MM/YYYY')) ||
                                    (movie && moment(movie.first_air_date).format('DD/MM/YYYY'))}
                            </p>
                            {/* <p className={cx('runtime')}>Runtime:{movie && movie.runtime}</p> */}
                            <p className={cx('overview')}>{movie && movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MoviesDetail;
