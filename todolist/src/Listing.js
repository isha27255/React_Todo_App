import React from 'react'
import './Listings.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'


function Listing(props) {
    const items = props.items
    const listed_items = items.map(item =>{
        return <div className="list" key={item.key}>
            <p>
                <input type="text" value={item.text} id={item.key}
                onChange={(e) => props.update_item(e.target.value, item.key)}></input>
            <span>
                <FontAwesomeIcon className="icoons" icon="trash"
                onClick={() => props.delete_item(item.key)}
                ></FontAwesomeIcon>
            </span>
            </p>
        
        </div>
    })
    return (
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {listed_items}
            </FlipMove>
            
        </div>
    )
}

export default Listing
