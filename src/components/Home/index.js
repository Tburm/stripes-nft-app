import React from 'react';
import { BsGithub } from 'react-icons/bs';

// components
import About from '../About'
import MintButton from '../MintButton'
import Gallery from '../Gallery'
import RecentGallery from '../RecentGallery'
import Footer from '../Footer'

function Home(props) {
  if(props.addresses) {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="card w-3/5">
          <About {...props} />
        </div>
        <div className="card w-3/5">
          <MintButton {...props} />
        </div>
        <div className="card w-3/5">
          <Gallery {...props} />
        </div>
        <div className="card w-3/5">
          <RecentGallery {...props} />
        </div>
        <div className="w-3/5">
          <Footer {...props} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="card w-3/5">
          <About {...props} />
        </div>
        <div className="card w-3/5">
          <p>Connect to Metis Stardust</p>
        </div>
        <div className="w-3/5">
          <Footer {...props} />
        </div>
      </div>
    )
  }
}
 
export default Home;