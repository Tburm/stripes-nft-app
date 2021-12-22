import React from 'react';

// components
import About from '../About'
import MintButton from '../MintButton'
import Gallery from '../Gallery'
import RecentGallery from '../RecentGallery'
import Footer from '../Footer'

let IMG = "PHN2ZyBpZD0ic3ZnLWZyYW1lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHJlY3QgY2xhc3M9J3N0cmlwZV8wJyB4PScxJyB5PScyMCcgd2lkdGg9JzIwcHgnIGhlaWdodD0nMXB4JyBzdHlsZT0nZmlsbDogcmdiKDE3NSwxNzUsMTc1KSc+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0neCcgZnJvbT0nLTMyJyB0bz0nMzInIGR1cj0nMHMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyAvPjwvcmVjdD48cmVjdCBjbGFzcz0nc3RyaXBlXzEnIHg9JzEnIHk9JzE1JyB3aWR0aD0nMTlweCcgaGVpZ2h0PScxcHgnIHN0eWxlPSdmaWxsOiByZ2IoMTE0LDE5NiwxMzgpJz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSd4JyBmcm9tPSctMzInIHRvPSczMicgZHVyPSc4cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnIC8+PC9yZWN0PjxyZWN0IGNsYXNzPSdzdHJpcGVfMicgeD0nMScgeT0nMzEnIHdpZHRoPScxNXB4JyBoZWlnaHQ9JzFweCcgc3R5bGU9J2ZpbGw6IHJnYigyNTMsMTczLDIzMSknPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J3gnIGZyb209Jy0zMicgdG89JzMyJyBkdXI9JzVzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScgLz48L3JlY3Q+PHJlY3QgY2xhc3M9J3N0cmlwZV8zJyB4PScxJyB5PScxNicgd2lkdGg9JzI5cHgnIGhlaWdodD0nMXB4JyBzdHlsZT0nZmlsbDogcmdiKDg4LDIyMCwxMjEpJz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSd4JyBmcm9tPSctMzInIHRvPSczMicgZHVyPSczcycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnIC8+PC9yZWN0PjxyZWN0IGNsYXNzPSdzdHJpcGVfNCcgeD0nMScgeT0nMjYnIHdpZHRoPSczMXB4JyBoZWlnaHQ9JzFweCcgc3R5bGU9J2ZpbGw6IHJnYigyMjAsNzIsMTA3KSc+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0neCcgZnJvbT0nLTMyJyB0bz0nMzInIGR1cj0nOXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyAvPjwvcmVjdD48cmVjdCBjbGFzcz0nc3RyaXBlXzUnIHg9JzEnIHk9JzgnIHdpZHRoPSc5cHgnIGhlaWdodD0nMXB4JyBzdHlsZT0nZmlsbDogcmdiKDEyMSwxMDcsMjA3KSc+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0neCcgZnJvbT0nLTMyJyB0bz0nMzInIGR1cj0nNXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyAvPjwvcmVjdD48cmVjdCBjbGFzcz0nc3RyaXBlXzYnIHg9JzEnIHk9JzI1JyB3aWR0aD0nMTZweCcgaGVpZ2h0PScxcHgnIHN0eWxlPSdmaWxsOiByZ2IoOTgsMzksMjUpJz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSd4JyBmcm9tPSctMzInIHRvPSczMicgZHVyPSc4cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnIC8+PC9yZWN0PjxyZWN0IGNsYXNzPSdzdHJpcGVfNycgeD0nMScgeT0nMjEnIHdpZHRoPScxOHB4JyBoZWlnaHQ9JzFweCcgc3R5bGU9J2ZpbGw6IHJnYigyMzIsMTcyLDgwKSc+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0neCcgZnJvbT0nLTMyJyB0bz0nMzInIGR1cj0nMXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJyAvPjwvcmVjdD48cmVjdCBjbGFzcz0nc3RyaXBlXzgnIHg9JzEnIHk9JzIzJyB3aWR0aD0nMjZweCcgaGVpZ2h0PScxcHgnIHN0eWxlPSdmaWxsOiByZ2IoMzksMTgyLDE0OSknPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J3gnIGZyb209Jy0zMicgdG89JzMyJyBkdXI9JzRzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScgLz48L3JlY3Q+PHJlY3QgY2xhc3M9J3N0cmlwZV85JyB4PScxJyB5PScxMycgd2lkdGg9JzEzcHgnIGhlaWdodD0nMXB4JyBzdHlsZT0nZmlsbDogcmdiKDEyLDY4LDE0OCknPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J3gnIGZyb209Jy0zMicgdG89JzMyJyBkdXI9JzJzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScgLz48L3JlY3Q+PHN0eWxlPiNzdmctZnJhbWV7c2hhcGUtcmVuZGVyaW5nOiBjcmlzcGVkZ2VzO308L3N0eWxlPjwvc3ZnPg=="

function Home(props) {
  if(props.addresses) {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="card w-1/6">
          <img tokenid="12" class="gallery-img" src={"data:image/svg+xml;base64,"+IMG} alt="NFT" />
        </div>
        <div className="card w-3/5">
          <About {...props} />
        </div>
        <MintButton {...props} />
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
        <div className="card w-1/6">
          <img tokenid="12" class="gallery-img" src={"data:image/svg+xml;base64," + IMG} alt="NFT" />
        </div>
        <div className="card w-3/5">
          <About {...props} />
        </div>
        <div className="card w-3/5">
          <p className="text-center">Connect to Metis Stardust</p>
        </div>
        <div className="w-3/5">
          <Footer {...props} />
        </div>
      </div>
    )
  }
}
 
export default Home;