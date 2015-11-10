import React from 'react'
import { RouteHandler, Link, State } from 'react-router'
import DocumentTitle from 'react-document-title'

// Style code
import 'css/github.css'

module.exports = React.createClass({
  mixins: [State],

  render: function() {
    return (
      <div>
        <div style={{
          background: '#67DBFA',
          color: '#fafafa',
          position: 'fixed',
          top: 0,
          height: '70px',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
          width: '100%'
        }}>
          <div
            style={{
              width: '960px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <img
              src='https://avatars1.githubusercontent.com/u/8261421'
              style={{ width: '50px', marginTop: '10px', display: 'inline-block' }}
            />
            <span style={{
              marginTop: '20px',
              marginLeft: '10px',
              fontSize: '34px',
              display: 'inline-block',
              verticalAlign: 'top'
            }}>
              Rackt
            </span>
            <ul style={{
              display: 'inline-block',
              verticalAlignment: 'top',
              position: 'absolute',
              marginTop: '22px',
              marginLeft: '60px',
              fontSize: '22px'
            }}>
              <li style={{ display: 'inline-block', boxSizing: 'content-box', padding: '0 15px' }}>
                Projects
              </li>
              <li style={{ display: 'inline-block', boxSizing: 'content-box', padding: '0 15px' }}>
                Docs
              </li>
              <li style={{ display: 'inline-block', boxSizing: 'content-box', padding: '0 15px' }}>
                Blog
              </li>
            </ul>
            <ul style={{
              display: 'inline-block',
              verticalAlignment: 'top',
              marginTop: '22px',
              fontSize: '22px',
              float: 'right',
              paddingRight: '20px'
            }}>
              <li style={{ display: 'inline-block', boxSizing: 'content-box', padding: '0 15px' }}>
                <a style={{ color: '#fff', textDecoration: 'none' }} href="https://github.com/rackt">
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            maxWidth: 960,
            marginTop: 100,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <RouteHandler typography={''} {...this.props}/>
        </div>
      </div>
    )
  }
})