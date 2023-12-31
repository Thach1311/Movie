import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Contents.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { SmoothHorizontalScrolling } from '../../utils/index';
import styled from 'styled-components';
import { useViewport } from '../hooks';
import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../store/actions';

const cx = classNames.bind(styles);


function MoviesRow(props) {
    const { movies, title, isNetFlix, idSection } = props;

    const slideRef = useRef();
    const movieRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const [windowWidth] = useViewport();

    const dispatch = useDispatch();
    const handleSetMovie = (movie) => {
        dispatch(setMovieDetail(movie));
    };

    useEffect(() => {
        if (isDrag) {
            if (dragMove < dragDown) handleScrollRight();
            if (dragMove > dragDown) handleScrollLeft();
        }
    }, [dragDown, dragMove, isDrag]);

    const handleScrollRight = () => {
        const maxScrollLeft = slideRef.current.scrollWidth - slideRef.current.clientWidth;
        if (slideRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                slideRef.current,
                250,
                movieRef.current.clientWidth * 1.5,
                slideRef.current.scrollLeft,
            );
        }
    };
    const handleScrollLeft = () => {
        if (slideRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                slideRef.current,
                250,
                -movieRef.current.clientWidth * 1.5,
                slideRef.current.scrollLeft,
            );
        }
    };

    const onDragStart = (e) => {
        setIsDrag(true);
        setDragDown(e.screenX);
    };
    const onDragEnd = (e) => {
        setIsDrag(false);
    };
    const onDragEnter = (e) => {
        setDragMove(e.screenX);
    };
    return (
        <MoviesRowContainer className={cx('MoviesRowContainer')} draggable="fasle" id={idSection}>
            <h1 className={cx('heading')}>{title}</h1>
            <MovieSlider
                className={cx('movieSlider')}
                ref={slideRef}
                draggable="true"
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
                style={
                    movies && movies.length > 0
                        ? {
                              gridTemplateColumns: `repeat(${movies.length},
                        ${
                            windowWidth > 1200
                                ? '360px'
                                : windowWidth > 992
                                ? '300px'
                                : windowWidth > 768
                                ? '250px'
                                : '200px'
                        })

                        `,
                          }
                        : {}
                }
            >
                {movies &&
                    movies.length > 0 &&
                    movies.map((movie, index) => {
                        if (movie.poster_path && movie.backdrop_path !== null) {
                            let imageUrl = isNetFlix
                                ? `http://image.tmdb.org/t/p/original/${movie.poster_path}`
                                : `http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
                            return (
                                <div
                                    key={index}
                                    className={cx('movieItem')}
                                    ref={movieRef}
                                    draggable="false"
                                    onClick={() => handleSetMovie(movie)}
                                >
                                    <img src={imageUrl} alt={movie} draggable="false" />
                                    <div className={cx('movieName')}>{movie.title || movie.name}</div>
                                </div>
                            );
                        }
                    })}
            </MovieSlider>

            <div className={cx(`btnLeft ${isNetFlix && 'isNetFlix'}`)} onClick={() => handleScrollLeft()}>
                <AiOutlineLeft />
            </div>

            <div className={cx(`btnRight ${isNetFlix && 'isNetFlix'}`)} onClick={() => handleScrollRight()}>
                <AiOutlineRight />
            </div>
        </MoviesRowContainer>
    );
}
export default MoviesRow;

const MoviesRowContainer = styled.div`
    background-color: var(--color-background);
    color: var(--color-white);
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
    position: relative;
    width: 100%;
    height: 100%;

    .heading {
        font-size: 18px;
        user-select: none;
    }

    .btnLeft {
        position: absolute;
        top: 50%;
        left: 30px;
        cursor: pointer;
        width: 40px;
        height: 50px;
        background-color: rgb(0, 0, 0, 0.65);
        z-index: 20;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        transform: scale(1);
        transition: all 0.3s linear;
        &:hover {
            background-color: rgb(0, 0, 0, 0.8);
            font-size: 40px;
        }

        &.isNetFlix {
            height: 100px;
            width: max-content;
        }
    }

    .btnRight {
        position: absolute;
        top: 50%;
        right: 50px;
        cursor: pointer;
        width: 40px;
        height: 50px;
        background-color: rgb(0, 0, 0, 0.65);
        z-index: 20;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        transform: scale(1);
        transition: all 0.3s linear;
        &:hover {
            background-color: rgb(0, 0, 0, 0.8);
            font-size: 40px;
        }
        &.isNetFlix {
            height: 100px;
            width: max-content;
        }
    }
`;

const MovieSlider = styled.div`
    display: grid;
    gap: 6px;
    transform: all 0.3s linear;
    overflow-y: hidden;
    overflow-x: auto;
    overflow: hidden;
    padding-top: 28px;
    padding-bottom: 28px;
    scroll-behavior: smooth;
    cursor: pointer;
    &:hover .movieItem {
        opacity: 0.5;
    }

    .movieItem {
        transform: scale(1);
        max-width: 400px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        user-select: none;
        overflow: hidden;
        border-radius: 6px;
        transform: center left;
        position: relative;

        &:hover {
            transform: scale(1.1);
            z-index: 10;
            opacity: 1;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .movieName {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px;
        text-align: center;
        font-size: 14px;
        background-color: rgb(0, 0, 0, 0.65);
    }
`;
