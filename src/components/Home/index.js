import React from 'react';

// components
import MintButton from '../MintButton'

function Home(props) {
  if(props.addresses) {
    return (
      <div className="flex flex-row justify-center w-full">
        <div className="card w-3/5">
          <MintButton {...props} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex flex-row justify-center w-full">
        <div className="card w-3/5">
          <p>Connect to network</p>
        </div>
      </div>
    )
  }
}
 
export default Home;