interface Props {
    switchState: boolean;
    onSwitch: () => void;
}


const TopNav = ({switchState, onSwitch} : Props) => {

    return (
        <>
            <div className='top-nav-value'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
                    alt="Bootstrap" width="48" height="40"/>
                <form>
                    <div className="form-value" data-group="true">
                        <div className='loop'>
                            <svg viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </div>
                        <input placeholder="Search games..." className='search-field'/>
                    </div>
                </form>
                <div className='switch'>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={ switchState } onChange={onSwitch}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopNav