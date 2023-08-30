import React from 'react';
import { TopBar, ContentRowTop, Footer } from './index'

export default function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
              <TopBar />
              <ContentRowTop />
        </div>
              <Footer /> 
    </div>
  );
}