import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer bg-img2 shadow p-3 rounded">
        <div className="container">
            <div className="row justify-content-center">             
                        {/* <span><Link to='/home'>Home</Link></span>
                        <span><Link to='/events'>Events</Link></span>
                        <span><Link to='/team'>Team</Link></span> */}
                    {/* <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="https://gymkhana.iitbbs.ac.in/techcouncil.php#wd"><i className="fa fa-google"></i></a><span> </span>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/webnd.iitbbs/"><i className="fa fa-facebook"></i></a><span> </span>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/webnd.iitbbs/"><i className="fa fa-instagram"></i></a><span> </span>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div> */}
            </div>       
            <br></br>    
                <div className="col-auto copyright">
                    <div>©2020, Designed by</div>
                    <div>Web & Design Society, IIT Bhubaneswar</div>
                </div>
        </div>
    </div>
    )
}

export default Footer;