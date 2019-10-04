import React from 'react';
import FormSummary from '../form/formSummary';
const FormTop=({forms})=>{
        return(
            <div>
                <h1>Form List</h1>
                {forms && forms.map(form=>{
                    return(
                        <FormSummary form={form} key={form.id}/>
                    )
                })}
            </div>
        )
}

export default FormTop;