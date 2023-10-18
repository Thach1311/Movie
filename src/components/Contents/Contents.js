import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Contents.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { SmoothHorizontalScrolling } from '../../utils/index';
const cx = classNames.bind(styles);
export const movies = [
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
    const slideRef = useRef();
    const movieRef = useRef();
    const [dragDown,setDragDown] = useState(0)
    const [dragMove,setDragMove] = useState(0)
    const [isDrag,setIsDrag] = useState(false)

    useEffect( ()=> {
        if (isDrag){
            if (dragMove < dragDown) handleScrollRight()
            if (dragMove > dragDown) handleScrollLeft()
        }
    },[dragDown,dragMove,isDrag])

    const handleScrollRight = () => {
        const maxScrollLeft = slideRef.current.scrollWidth - slideRef.current.clientWidth;
        if (slideRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                slideRef.current,
                250,
                movieRef.current.clientWidth * 2,
                slideRef.current.scrollLeft,
            );
        }
    };
    const handleScrollLeft = () => {
        if (slideRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                slideRef.current,
                250,
                -movieRef.current.clientWidth * 2,
                slideRef.current.scrollLeft,
            );
        }
    };

    const onDragStart = (e) => {
       setIsDrag(true)
       setDragDown(e.screenX)
    };
    const onDragEnd = (e) => {
        setIsDrag(false)
    };
    const onDragEnter = (e) => {
       setDragMove(e.screenX)
    };
    return (
        <div className={cx('MoviesRowContainer')} draggable="fasle">
            <h1 className={cx('heading')}>Netflix Originals</h1>
            <div
                className={cx('movieSlider')}
                style={{ gridTemplateColumns: `repeat(${movies.length},300px)` }}
                ref={slideRef}
                draggable="true"
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
            >
                {movies.map((movie, index) => (
                    <div key={index} className={cx('movieItem')} ref={movieRef} draggable= 'false'>
                        <img src={movie} alt={movie} draggable="false" />
                        <div className={cx('movieName')}>Movie Name</div>
                    </div>
                ))}
            </div>

            <div className={cx('btnLeft')} onClick={() => handleScrollLeft()}>
                <AiOutlineLeft />
            </div>

            <div className={cx('btnRight')} onClick={() => handleScrollRight()}>
                <AiOutlineRight />
            </div>
        </div>
    );
}

export default Contents;
