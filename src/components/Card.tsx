// @ts-expect-error React
import React, {useState} from "react";

interface Props {
    items: string[];
    heading: string;
    img: string[];
    badgeTheme: boolean;
}

const Card = ({items, heading, img, badgeTheme} : Props) => {

    const [
        orderBy,
        setOrderBy
    ] = useState('Relevance');

    const orders = [
        'Relevance',
        'Date added',
        'Name',
        'Release date',
        'Popularity',
        'Average rating'
    ];

    const [
        currentPlatform,
        setCurrentPlatform
    ] = useState('');

    const platforms = [
        'PC',
        'PS5',
        'XBOX'
    ];

    const [
        platformBtnState,
        setPlatformBtnState
    ] = useState('');

    const [
        orderBtnState,
        setOrderBtnState
    ] = useState('');

    // @ts-expect-error event
    const handleBtnClick = (event) => {
        if (event.target.className.includes('orderbtn') && orderBtnState === 'show') {
            setOrderBtnState('');
        } else if(event.target.className.includes('platformbtn') && platformBtnState === 'show') {
            setPlatformBtnState('');
        } else {
            if (event.target.className.includes('orderbtn')) {
                setOrderBtnState('show');
                setPlatformBtnState('');
            } else {
                setPlatformBtnState('show');
                setOrderBtnState('');
            }
        }
    }

    return (
        <>
            <h1>{
                    currentPlatform.length === 0
                    ?
                    heading
                    :
                    currentPlatform + ' ' + heading
                }
            </h1>
            {/*-------PLATFORM BUTTON-------*/}
            <div className="btn-group">
                <div className='dropdown'>
                    <button
                        className="btn btn-secondary dropdown-toggle platformbtn"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={(event) => handleBtnClick(event)}
                    >
                        {
                            currentPlatform.length === 0
                            ?
                            'Platform'
                            :
                            currentPlatform
                        }
                    </button>
                    <ul className={'dropdown-menu ' + platformBtnState}>
                        {
                            platforms.map((item) => (
                                <li
                                    className='dropdown-item'
                                    key={item}
                                    onClick={() => {
                                        setCurrentPlatform(item);
                                    }}
                                >
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {/*-------ORDER BY BUTTON-------*/}
            <div className="btn-group">
                <div className='dropdown'>
                    <button
                        className="btn btn-secondary dropdown-toggle orderbtn"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={(event) => handleBtnClick(event)}
                    >
                        {'Order by: ' + orderBy}
                    </button>
                    <ul className={"dropdown-menu " + orderBtnState}>
                        {
                            orders.map((item) => (
                                <li
                                    className='dropdown-item'
                                    key={item}
                                    onClick={() => {
                                        setOrderBy(item);
                                    }}
                                >
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='cards-value'>
                {
                    items.length === 0
                    &&
                    <ul className='list-group'>
                        <li className='list-group-item'>Nothing here...</li>
                    </ul>
                }
                {
                    items.map((item, index) => (
                        <div
                            className="card"
                            key={item}
                            style={{width: 18 + 'rem'}}
                        >
                            {
                                img.map((image, image_index) => (
                                    image_index === index
                                    &&
                                    <img
                                        key={image}
                                        src={image}
                                        className="card-img-top" alt="..."
                                    />
                                ))
                            }
                            <div className="card-body">
                                <h5 className="card-title">
                                    {item}
                                    <span style={{marginLeft: 6 + 'px'}}>
                                        {
                                            badgeTheme
                                            ?
                                            <span className="badge rounded-pill text-bg-light">
                                                Dark
                                            </span>
                                            :
                                            <span className="badge rounded-pill text-bg-dark">
                                                Light
                                            </span>
                                        }
                                    </span>
                            </h5>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's content.
                            </p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Card

