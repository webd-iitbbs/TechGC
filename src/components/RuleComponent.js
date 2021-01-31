import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import rule from '../shared/Rule21.pdf';
// 'D:\TechGC\src\shared\Rule21.pdf'
class Rule extends Component {
    constructor(props){
        super(props);
        console.log(rule);
        this.state = {
            numPages: null,
            pageNumber: 1,
        }
    }

 
  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }
 
  render() {
    return (
      <div id="bodyBg" className="x">
        <Document
          file={rule}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page
            pageNumber={this.pageNumber}
          />
        </Document>
        <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
      </div>
    );
  }
}

export default Rule;