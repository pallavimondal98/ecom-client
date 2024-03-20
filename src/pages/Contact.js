import React from 'react';

const Contact = () => {
    return (
        <div className="capsule_container">
            <h1>contact us</h1>
            <div className="contact-container">
                <div className="contact-info">
                    <img src="https://i.ibb.co/YRmkZ3K/contact-banner.jpg" alt=""/>
                        <div className="overlay overlayeffect">
                            <p><i className="fa-solid fa-phone-volume fa-shake" style={{color: "#fafafa"}}></i>+91 88888-848484<br/>
                                <i className="fa-solid fa-envelopes-bulk fa-flip" style={{color: "#fcfcfc"}}></i>help@barlow98.com
                            </p>

                        </div>
                </div>
                <div className="contact-us">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputtext" className="form-label"><b>Name</b></label>
                            <input type="text" className="form-control" id="exampleInputtext" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label"><b>Email address</b></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputtext" className="form-label"><b>Message</b></label>
                            <input type="text" className="form-control" id="exampleInputtext" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact