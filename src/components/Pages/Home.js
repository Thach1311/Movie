import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Contents from '../Contents/Contents';
import Intro from '../Intro/Intro';
import Menu from '../Menu/Menu';
import MoviesDetail from '../MoviesDetail/MoviesDetail';

function Home(props) {
    const { MovieDetail } = useSelector((state) => state.infoMovies);
    const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
    useEffect(() => {
        setIsShowMovieDetail(MovieDetail ? true : false);
    }, [MovieDetail]);
    return (
        <>
            <Intro></Intro>
            <Contents />
            <Menu />
            <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail} />
        </>
    );
}

export default Home;
