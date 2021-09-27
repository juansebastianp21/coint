import React from 'react';
import './info.scss';
import Button from '../../util/components/button/Button';
import {ReactComponent as ReactLogo} from '../../images/svg-1.svg';

function Info({
    id,
    lightBg,
    lightText,
    lightTextDesc,
    topLine,
    heading,
    description,
    buttonLabel,
    imgStart,
    imgUrl,
    alt,
    dark,
    primary,
    darkText,
}) {
    return (
        <div id={id} className={`infoContainer ${lightBg && 'lightBg'}`}>
            <div className="infoWrapper">
                <div className={`infoRow ${imgStart && 'imgStart'}`}>
                    <div className="column1">
                        <div className="textWrapper">
                            <p className="topLine">{topLine}</p>
                            <h1
                                className={`heading ${
                                    lightText && 'lightText'
                                }`}>
                                {heading}
                            </h1>
                            <p
                                className={`subtitle ${
                                    lightTextDesc && 'lightTextDesc'
                                }`}>
                                {description}
                            </p>
                            <div className="btnWrapper">
                                <Button>{buttonLabel}</Button>
                            </div>
                        </div>
                    </div>
                    <div className="column2">
                        <div className="imgwrapper">
                            <img src={imgUrl} alt={alt} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
