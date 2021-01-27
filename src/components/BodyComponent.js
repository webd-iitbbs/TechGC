import React from 'react';
import Clip from '../images/Clip.png';

function Body(props){
    return(
        <div id="bodyBg">
            <div className="container">
                <div className="row row-content">
                    <div className="col-12 col-md-6 text">
                        <h1 class="GeneralC">General Championship</h1><br/>
                        <p>You can't solve a problem on the same level that it was created. You have to rise above it to the next level.</p><br/>
                        <a href="https://iitbbs-forms.herokuapp.com/" id="contact" >Register   <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
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