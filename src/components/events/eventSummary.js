import React from 'react';
const EventSummary=({event})=>{
        return(
            
            <div className="event" >
                <div className="event-img">
                    <img src={event.url} alt="eventImage" />
                </div>
                <div className="event-details">
                    <h1>{event.eventName}</h1>
                    <p>{event.eventshDesc}</p>
                    <h2>Date:{event.eventDate}</h2>
                </div>
            </div>
        )
}

export default EventSummary;