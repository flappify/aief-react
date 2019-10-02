import React from 'react';
import FormSummary from '../form/formSummary';
class FormTop extends React.Component{
    render()
    {
        return(
            <div>
                <h1>Forms</h1>
                <FormSummary/>
                <FormSummary/>
                <FormSummary/>
            </div>
        )
    }
}

export default FormTop;