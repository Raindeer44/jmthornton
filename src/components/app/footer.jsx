import React from 'react';

import * as pkg from '../../../package.json';
const siteVersion = pkg.version;

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer>
        <div className="row stats-row">
          <div className="col-sm coffee-col">
            <h2>99</h2><h4>cups coffee</h4>
          </div>
          <div className="col-sm project-col">
            <h2>99</h2><h4>maintained projects</h4>
          </div>
          <div className="col-sm drone-col">
            <iframe src='https://www.dronelogbook.com/widgets/stickerDashboard.php?token=37250' width='400' height='163' frameBorder='0' style={{overflow:'hidden'}} marginHeight='0' marginWidth='0'></iframe>
          </div>
        </div>
        Jade Thornton | <a href="https://gitlab.com/thornjad/jmthornton">Source code</a> | <a href="/p/sitemap.xml">Sitemap</a> | <span className="version">{siteVersion}</span>
      </footer>
    );
  }
}
