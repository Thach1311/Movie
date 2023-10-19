import MoviesRows from './MoviesRow';

const movies = [
    'https://www.whats-on-netflix.com/wp-content/uploads/covers/alive.jpeg',
    'https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcqfGr6gtg5Ma9jaetCdJR8fa1boVQh36gY-hVN26f8mo4qB_GDwbxOttIHQ6SzQPCYculSDvZZA3TgURnUI3KKjgjek.jpg',
    'https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXeYcO3UbG0pWu_5UlGX6ItIu7AVki5pW59sBj7CV0bRaivPvo5xb6Zz1mXCNeWq-Llujcm0FyhG0UO4wjZVxVn1Snua.jpg',
    'https://occ-0-768-769.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABYn4UO23xk7W5T6vb0UuncPSrcCO-YL79KE-78dnqM3RWfh3KEa-znhubLHra85nsRXFAyrT4ECqXPuCApinCFo9XLAbtKFRVRktTn7bkpKDyj8JZVG44WuVbAwAsQ.jpg?r=4f6',
    'https://www.whats-on-netflix.com/wp-content/uploads/covers/10minutesgone.jpeg',
    'https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXeYcO3UbG0pWu_5UlGX6ItIu7AVki5pW59sBj7CV0bRaivPvo5xb6Zz1mXCNeWq-Llujcm0FyhG0UO4wjZVxVn1Snua.jpg',
    'https://occ-0-768-769.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABYn4UO23xk7W5T6vb0UuncPSrcCO-YL79KE-78dnqM3RWfh3KEa-znhubLHra85nsRXFAyrT4ECqXPuCApinCFo9XLAbtKFRVRktTn7bkpKDyj8JZVG44WuVbAwAsQ.jpg?r=4f6',
    'https://www.whats-on-netflix.com/wp-content/uploads/covers/10minutesgone.jpeg',
    'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWhrU7MA-1ZpbsUK_KyceOQWlMew9MX0Q9IdtcISoOvRU1kFqlb1uUDZ5jGx_bHe2eEl2jnPviyEpj9PcZp5FZ3RH9Y-.jpg?r=266',
    'https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXeYcO3UbG0pWu_5UlGX6ItIu7AVki5pW59sBj7CV0bRaivPvo5xb6Zz1mXCNeWq-Llujcm0FyhG0UO4wjZVxVn1Snua.jpg',
    'https://occ-0-768-769.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABYn4UO23xk7W5T6vb0UuncPSrcCO-YL79KE-78dnqM3RWfh3KEa-znhubLHra85nsRXFAyrT4ECqXPuCApinCFo9XLAbtKFRVRktTn7bkpKDyj8JZVG44WuVbAwAsQ.jpg?r=4f6',
    'https://www.whats-on-netflix.com/wp-content/uploads/covers/10minutesgone.jpeg',
    'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWhrU7MA-1ZpbsUK_KyceOQWlMew9MX0Q9IdtcISoOvRU1kFqlb1uUDZ5jGx_bHe2eEl2jnPviyEpj9PcZp5FZ3RH9Y-.jpg?r=266',
    'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWhrU7MA-1ZpbsUK_KyceOQWlMew9MX0Q9IdtcISoOvRU1kFqlb1uUDZ5jGx_bHe2eEl2jnPviyEpj9PcZp5FZ3RH9Y-.jpg?r=266',
];

function Contents() {
    return (
        <div>
            <MoviesRows movies={movies} title = "Netflix Originals" isNetFlix = {true}/>
            <MoviesRows movies={movies} title = "Trending Movies"/>
            <MoviesRows movies={movies} title = "Top Rated Movies"/>
            <MoviesRows movies={movies} title = "Actions Movies"/>
            <MoviesRows movies={movies} title = "Comedy Movies"/>
            <MoviesRows movies={movies} title = "Romance Movies"/>
            <MoviesRows movies={movies} title = "Horor Movies"/>
            <MoviesRows movies={movies} title = "Documentaries"/>

        </div>
    );
}

export default Contents;
