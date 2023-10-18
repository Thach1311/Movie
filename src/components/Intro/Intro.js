import ReactPlayer from 'react-player';
import styles from './Intro.module.scss';
import classNames from 'classnames/bind';
import { GoMute, GoUnmute } from 'react-icons/go';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Intro() {
    const [isMuted, setIsMuted] = useState(true);
    return (
        <div className={cx('introContainer')}>
            <ReactPlayer
                playing={true}
                width="100%"
                height="100%"
                volume={1}
                muted={isMuted}
                url="https://vimeo.com/575947052"
                className={cx('videoIntro')}
            />
            <div className={cx('infoIntro')}>
                <h1 className={cx('headingIntro')}>Netflix Play Something</h1>
                <p className={cx('overviewIntro')}>
                    Looking for something new to watch? Give that remote a rest and try Play Something: A new feature
                    that finds the perfect thing to watch based on what you love. Sometimes the best choice is not to
                    choose… ask Will Arnett if you don’t believe us.
                </p>
            </div>

            {isMuted ? (
                <GoMute className={cx('btnVolume')} onClick={() => setIsMuted((prev) => !prev)} />
            ) : (
                <GoUnmute className={cx('btnVolume')} onClick={() => setIsMuted((prev) => !prev)} />
            )}

            <div className={cx("fadeBottom")}>

            </div>
        </div>
    );
}

export default Intro;
