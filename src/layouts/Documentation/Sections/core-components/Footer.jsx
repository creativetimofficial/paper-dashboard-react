import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="bd-page-title">
          <h1 className="bd-title" id="content">
            App Footers
          </h1>
          <div className="avatar-group mt-3" />
        </div>
        <p className="bd-lead">
          We've created a demo footer, which can be found inside <code className="highlighter-rouge">src/components/Footer/Footer.jsx</code>.
        </p>
        <hr />
        <p>It only accepts two props, one that makes it span the whole given area (<code className="highlighter-rouge">fluid</code> prop) and one that makes it have a light gray color (<code className="highlighter-rouge">default</code> prop).</p>
        <p>
          The rest of everything in this components is static. Feel free to change it
          as you wish.
        </p>
        <p>Just import it, and render them like normal HTML tags.</p>
      </>
    );
  }
}

export default Footer;
