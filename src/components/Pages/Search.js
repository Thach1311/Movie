import { useSelector } from 'react-redux';
import SearchMovies from '../SearchMovies/SearchMovies';
import MoviesDetail from '../MoviesDetail/MoviesDetail'
function Search(props) {
    const {MovieDetail} = useSelector(state => state.infoMovies)
    return (
        <div>
            <SearchMovies />
            <MoviesDetail showModal={MovieDetail ? true : false} movie={MovieDetail}/>
        </div>
    );
}

export default Search;
