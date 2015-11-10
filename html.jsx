import React, { Component } from 'react'
import typography from './utils/typography';

const { TypographyStyle } = typography;

export default class extends Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name='viewport' content='width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
          <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
          <title>Rackt</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <TypographyStyle/>
          <style dangerouslySetInnerHTML={{__html:
            `
              body, h1, h2, h3, h4, h5 {
                color: #404040;
              }
              a {
                color: #67DBFA;
              }
              pre {
                border: 1px solid #ddd;
                background-color: #f6f6f6;
                color: #404040;
                padding: 0 .4em;
              }
            `
          }} />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}} />
          <script src="/bundle.js"/>
        </body>
      </html>
    )
  }
}