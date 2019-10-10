import React from 'react';

const EventSummary=({event})=>{
        return(
            <div>
                {event.eventName}
                {event.eventshDesc}
                Date:{event.eventDate}
            </div>
        )
}

export default EventSummary;