import React from 'react';

class HelpDesk extends React.Component{
    render()
    {
        return(
            <div className="helpdesk">
                <div className="main">
                    <div className="left">
                        <h1>GET IN TOUCH</h1>
                        <form>
                            <div>
                                <div className="input-field">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" onChange={this.handleChange} required/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" id="phone" onChange={this.handleChange} required/>
                                </div>
                            </div>
                            <div>
                                <div className="input-field">
                                    <label htmlFor="message">Message</label>
                                    <input type="text" id="message" onChange={this.handleChange} required/>
                                </div>
                            </div>
                            <button>SEND</button>
                        </form>
                    </div>
                    <div className="right">
                        <h1>FOLLOW</h1>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HelpDesk;