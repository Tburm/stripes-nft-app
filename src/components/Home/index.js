import React from 'react';

// components
import MintButton from '../MintButton'
import Gallery from '../Gallery'

function Home(props) {
  if(props.addresses) {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="card w-3/5">
          <MintButton {...props} />
        </div>
        <div className="card w-3/5">
          <Gallery {...props} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="card w-3/5">
          <p>Connect to Metis Stardust</p>
        </div>
      </div>
    )
  }
}
 
export default Home;