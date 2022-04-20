import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
// import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
// import { RiFacebookLine } from 'react-icons/ri';

export default class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="text">
          <p>©2021 React bootstrap theme</p>
        </div>
        {/* <div className="icon">
          <BsInstagram /> <RiFacebookLine /> <BsLinkedin /> <BsTwitter />
        </div> */}
      </section>
    );
  }
}
