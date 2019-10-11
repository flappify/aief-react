import React from 'react';

class Section3 extends React.Component{
    render()
    {
        return(
            <div className="section3">
                <div className="main">
                    <div className="left">
                        <h1>Our Reach</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since<br/>
                        the 1500s, when an unknown printer took a galley of type and scrambled<br/>
                        it to make a type specimen book.</p>
                        <div className="stats">
                            <div className="sub"><h1>20</h1> <h2>States</h2></div>
                            <div className="sub"><h1>300+ </h1><h2>Campains</h2></div>
                            <div className="sub"><h1>1000+</h1> <h2>Volunteers</h2></div>
                        </div>
                    </div>
                    <div className="right">
                        <img src="https://firebasestorage.googleapis.com/v0/b/aief-d.appspot.com/o/aief%2Fimage--000-removebg-preview.png?alt=media&token=06608746-19e4-45b5-80a6-2d644bbc3914" alt="section-3" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Section3;