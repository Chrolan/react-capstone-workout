import React from 'react';
import {connect} from 'react-redux';
import './FrontPage.css';

export class Header extends React.Component {

    render() {

        return (
          <header>
              <div className="header">
                  <div>
                      <a href="/"><img className="logo" alt="" src="https://www.shareicon.net/data/128x128/2016/09/27/836589_weight_512x512.png"/></a>
                  </div>
                    <div className="company">
                        <h1>Workout Tracker</h1>
                    </div>
              </div>
          </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);