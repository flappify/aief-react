import React from 'react';

class Section2 extends React.Component{
    render()
    {
        return(
            <div className="section2">
                <div className="left">
                    <h1>About</h1>
                    <h2>All India Ekta Foundation</h2>
                    <p>Hello</p>
                    <a href="/vision">know more</a>
                </div>
            <div className="right">
              <img src="https://firebasestorage.googleapis.com/v0/b/aief-d.appspot.com/o/aief%2Flogo%20(1).png?alt=media&token=1684f7d1-4644-441f-8c96-1b02a451b547" alt="aief-logo"/>
            </div>
            </div>
        )
    }
}

export default Section2;