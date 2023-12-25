import Card from "./components/Card.tsx";
import ListGroup from "./components/ListGroup.tsx";
import TopNav from "./components/TopNav.tsx";
import {useState} from "react";

function App() {

    const genres = [
        'Action',
        'Indie',
        'Adventure',
        'RPG',
        'Strategy',
        'Shooter'
    ]

    const games = [
        'Minecraft',
        'Fortnite',
        'Rust',
        'Counter-Strike 2',
        'Roblox',
        'Terraria'
    ]

    const images = [
        'https://i.guim.co.uk/img/media/c6f7b43fa821d06fe1ab4311e558686529931492/168_84_1060_636/master/1060.jpg?width=1200&quality=85&auto=format&fit=max&s=5c5b07b8cc96af633881fb903fb14a83',
        'https://cdn2.unrealengine.com/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg',
        'https://xxboxnews.blob.core.windows.net/prod/sites/2/2021/05/RustCE_LaunchTrailer_1920Thumb_JPG.jpg',
        'https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg',
        'https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg',
        'https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1666290860'
    ]


    const [
        darkMode,
        setDarkMode
    ] = useState(true);
    // const [selectedGenre, setSelectedGenre] = useState('');



    if(localStorage.getItem('switch'))
        document.querySelector('body')!.setAttribute('data-bs-theme', 'dark');
    else
        document.querySelector('body')!.setAttribute('data-bs-theme', 'light');

    return (
        <>
            <div className="grid">
                <div className='top-nav-bar'>
                    <TopNav switchState={darkMode} onSwitch={() => setDarkMode(!darkMode)}/>
                </div>
            </div>
            <div className='grid flex'>
                <div className='left-nav-bar'>
                    <ListGroup genres={genres} heading={'Genres'} onSelect={() => console.log('click')}/>
                </div>
                <div className='cards'>
                    <Card badgeTheme={darkMode} items={games} heading={'Games'} img={images}/>
                </div>
            </div>
        </>
    );
}

export default App;