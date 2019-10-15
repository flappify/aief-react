import React from 'react';

class SupportSpeak extends React.Component{
    render()
    {
        return(
            <div className="supporter">
                <div className="main">
                    <h1>SUPPORTER'S SPEAK</h1>
                    <div className="cards">
                        <div className="card">
                            <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                            <div className="card-creator">
                                <img src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"/>
                                <h1>- Sundar Pichai</h1>
                            </div>
                        </div>
                        <div className="card">
                            <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                            <div className="card-creator">
                                <img src="https://media.wired.com/photos/5cd03fc84ef5ad318eea3885/master/w_2560%2Cc_limit/microsoft-3590.jpg"/>
                                <h1>- Satya Nadella</h1>
                            </div>
                        </div>
                        <div className="card">
                            <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                            <div className="card-creator">
                                <img src="https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/2014/08/BillGatesHeadshot-BOD.jpg"/>
                                <h1>- Bill Gates</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SupportSpeak;