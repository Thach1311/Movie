import { useDispatch, useSelector } from 'react-redux';
import MoviesRows from './MoviesRow';
import { useEffect } from 'react';
import * as ACTIONS from '../store/actions';

function Contents(props) {
    const dispatch = useDispatch();
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

    console.log(TrendingMovies);
    return (
        <div>
            <MoviesRows movies={NetflixOriginals} title="Netflix Originals" isNetFlix={true} />
            <MoviesRows movies={TrendingMovies} title="Trending Movies" />
            <MoviesRows movies={TopRateMovies} title="Top Rated Movies" />
            <MoviesRows movies={ActionMovies} title="Actions Movies" />
            <MoviesRows movies={ComedyMovies} title="Comedy Movies" />
            <MoviesRows movies={HorrorMovies} title="Romance Movies" />
            <MoviesRows movies={RomanceMovies} title="Horor Movies" />
            <MoviesRows movies={Documentaries} title="Documentaries" />
        </div>
    );
}

export default Contents;
