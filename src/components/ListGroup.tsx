import {useState} from "react";

interface Props {
    genres: string[];
    heading: string;
    onSelect: () => void;
}

function ListGroup({ genres, heading, onSelect }: Props) {

    const [
        selectedIndex,
        setSelectedIndex
    ] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group list-group-flush">
                {
                    genres.map((item, index) => (
                        <li
                            className={
                                selectedIndex === index
                                    ? 'list-group-item active'
                                    : 'list-group-item'
                            }
                            key={item}
                            onClick={() => {
                                setSelectedIndex(index);
                                onSelect;
                            }
                        }
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default ListGroup;