import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Col, Card, CardBody } from "reactstrap";

import userAvatar from "assets/img/mike.jpg";

import { CardAuthor, CardSocials } from "components";

const codeImportExample = `import {
    Card, CardBody,
} from 'reactstrap';

import {
    CardAuthor, CardSocials
} from 'components';`;

const codeAuthorExample = `<Col md={8}>
    <Card className="card-user">
        <CardBody>
            <CardAuthor
                avatar={userAvatar}
                avatarAlt="..."
                title="Mike Andrew"
                description="michael23"
            />
        </CardBody>
    </Card>
</Col>`;

const codeAuthorProp = `CardAuthor.propTypes = {
    // Where the user to be redirected on clicking the avatar
    link: PropTypes.string,
    avatar: PropTypes.string,
    avatarAlt: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ])
}`;

const codeSocialsExample = `<Col md={4}  xs={12}>
    <Card className="card-user">
        <CardSocials
            size="lg"
            socials={[
                {
                    icon: "fab fa-facebook-square",
                    href: "https://www.facebook.com/"
                },
                {
                    icon: "fab fa-twitter",
                    href: "https://www.facebook.com/"
                },
                {
                    icon: "fab fa-google-plus-square",
                    href: "https://plus.google.com/discover"
                },
            ]}
        />
    </Card>
</Col>`;

const codeSocialsProp = `CardSocials.propTypes = {
    // size of all social buttons
    size: PropTypes.oneOf(['sm','lg']),
    // example: [{icon: "name of icon", href="href of icon"},...]
    socials: PropTypes.arrayOf(PropTypes.object)
}`;

class CardElements extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Card elements
        </h1>
        <p className="bd-lead">
          We've added some extra elements for this component (<a
            href="https://reactstrap.github.io/components/card/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reactstrap card
          </a>).
        </p>
        <h2>Imports</h2>
        <p>
          To use our custom made elements for this component you need to import
          them like so:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImportExample}
        </SyntaxHighlighter>
        <h2>CardAuthor Example</h2>
        <br />
        <br />
        <br />
        <div className="bd-example">
          <Col md={8}>
            <Card className="card-user">
              <CardBody>
                <CardAuthor
                  avatar={userAvatar}
                  avatarAlt="..."
                  title="Mike Andrew"
                  description="michael23"
                />
              </CardBody>
            </Card>
          </Col>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAuthorExample}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAuthorProp}
        </SyntaxHighlighter>
        <h2>CardSocials Example</h2>
        <p>Used on user page.</p>
        <div className="bd-example">
          <Col md={4} xs={12}>
            <Card className="card-user">
              <CardSocials
                size="lg"
                socials={[
                  {
                    icon: "fab fa-facebook-square",
                    href: "https://www.facebook.com/"
                  },
                  {
                    icon: "fab fa-twitter",
                    href: "https://www.facebook.com/"
                  },
                  {
                    icon: "fab fa-google-plus-square",
                    href: "https://plus.google.com/discover"
                  }
                ]}
              />
            </Card>
          </Col>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSocialsExample}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSocialsProp}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default CardElements;
