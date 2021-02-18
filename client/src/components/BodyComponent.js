import React from 'react';
import Clip from '../images/Clip.png';

function Body(props){
    return(
        <div id="bodyBg">
            <div className="container">
                <div className="row row-content">
                    <div className="col-12 col-md-6 text">
                        <h1 class="GeneralC">General Championship</h1><br/>
                        <p>When the odds are stacked against you, what are you made of? Champion always finds out. Champions keep playing until they get it right.</p>
                        <a href="http://register.gciitbbs.live/" id="contact" target="_blank" >Register   <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="col-12 col-md">
                    <img src={Clip} width="475" alt="clip" id="clip" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Body;