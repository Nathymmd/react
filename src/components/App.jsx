import React from 'react'
import { SideBar, ContentWrapper } from './index'

export default function App() {
  return (
        <div id="root">
            <SideBar />
                <div className='wrapper'>
                    <ContentWrapper />
                </div>
        </div>
  );
}

