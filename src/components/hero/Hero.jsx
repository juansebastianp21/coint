import React, {useState} from 'react';
import './hero.scss';
import Video from '../../videos/video.mp4';
import Button from '../../util/components/button/Button';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

const title = 'Virtual Banking Made Easy';
const subtitle =
    'Sign up for a new account today and receive $250 inn credit towards your next payment.';
function Hero() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <div className="heroContainer">
            <div className="heroBg">
                <video autoPlay muted src={Video} loop></video>
            </div>
            <div className="heroContent">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <div className="buttonContainer">
                    <Button onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get started{' '}
                        {hover ? (
                            <MdArrowForward className="icon" />
                        ) : (
                            <MdKeyboardArrowRight className="icon" />
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
