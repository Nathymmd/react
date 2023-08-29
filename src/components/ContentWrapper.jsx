import React from 'react';
import { TopBar, ContentRowTop, Footer } from './index'

export default function ContentWrapper() {
  return (
    <div className='d-flex flex-column' id='content-wrapper'>
        <div id='content'>
              <TopBar />
              <ContentRowTop />
        </div>
              <Footer /> 
    </div>
  );
}