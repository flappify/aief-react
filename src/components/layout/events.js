import React from 'react';
import EventSummary from '../events/eventSummary';
import {Link} from 'react-router-dom';
const Events=({events})=>{
        return(
            <div className="events">
                <h1>Events & Updates</h1>
                <div className="event-list">
                {events && events.map(event=>{
                    return(
                        <Link to={'/events/'+event.id} key={event.id} className="link" style={{textDecoration:"none"}}>
                        <EventSummary event={event} key={event.id}/>
                        </Link>
                    )
                })}
                </div>
            </div>
        )
}

export default Events;