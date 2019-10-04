import React from 'react';
import HelpSummary from '../helpdesk/helpdeskSummary';
const QueriesTop=({helps})=>{
    console.log(helps);
        return(
            <div>
                <h1>Help Desk</h1>
                {helps && helps.map(help=>{
                    return(
                        <HelpSummary help={help} key={help.id}/>
                    )
                })}
            </div>
        )
}

export default QueriesTop;