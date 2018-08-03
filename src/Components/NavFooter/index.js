import React, { Component } from 'react';
import './NavFooter.css';

class NavFooter extends Component {
  render() {
    return (
        <footer className="nav-footer">
            <div className="font-rating-footer">
                <div className="inner-div-footer">
                    <div className="rating-text-footer">
                        {this.props.current}
                    </div>
                </div>
            </div>
           
        </footer>
    );
  }
}

export default NavFooter;