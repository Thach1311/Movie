import { useDispatch, useSelector } from 'react-redux';
import MoviesRows from './MoviesRow';
import { useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import * as ACTIONS from '../store/actions';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { useScrollY } from '../hooks';

const scrollToTop = () => {
    scroll.scrollToTop();
};

function Contents(props) {
    const dispatch = useDispatch();
    const [scrollY] = useScrollY();
    const {
        NetflixOriginals,
        TrendingMovies,
        TopRateMovies,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        Documentaries,
    } = useSelector((state) => state.infoMovies);
    useEffect(() => {
        dispatch(ACTIONS.getNetFlixOriginals());
        dispatch(ACTIONS.getTrendingMovies());
        dispatch(ACTIONS.getTopRateMovies());
        dispatch(ACTIONS.getActionMovies());
        dispatch(ACTIONS.getComedyMovies());
        dispatch(ACTIONS.getHorrorMovies());
        dispatch(ACTIONS.getRomanceMovies());
        dispatch(ACTIONS.getDocumentaries());
    }, [dispatch]);

    // console.log(TrendingMovies);
    return (
        <div>
            <MoviesRows idSection = 'netFlix' movies={NetflixOriginals} title="Netflix Originals" isNetFlix={true} />
            <MoviesRows idSection = 'trendingMovies' movies={TrendingMovies} title="Trending Movies" />
            <MoviesRows idSection = 'topRatedMovies' movies={TopRateMovies} title="Top Rated Movies" />
            <MoviesRows idSection = 'actionMovies' movies={ActionMovies} title="Actions Movies" />
            <MoviesRows idSection = 'comedyMovies' movies={ComedyMovies} title="Comedy Movies" />
            <MoviesRows idSection = 'romanceMovies' movies={HorrorMovies} title="Romance Movies" />
            <MoviesRows idSection = 'horrorMovies' movies={RomanceMovies} title="Horor Movies" />
            <MoviesRows idSection = 'documentaries' movies={Documentaries} title="Documentaries" />
            <GoToTop
                onClick={() => scrollToTop()}
                style={{
                    visibility: `${scrollY > 600 ? 'visible' : 'hidden'}`,
                }}
            >
                <FaArrowAltCircleUp />
            </GoToTop>
        </div>
    );
}

export default Contents;

const GoToTop = styled.div`
    position: fixed;
    z-index: 10;
    right: 70px;
    bottom: 50px;
    font-size: 50px;
    color: rgba(255, 255, 255, 0.4);
    transition: all 0.3s linear;
    &:hover {
        color: rgba(255, 255, 255, 0.8);
    }
    @media screen and (max-width: 600px) {
        right: 40px;
    }
`;
