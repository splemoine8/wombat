// pages/coming-soon.js

import styles from '../styles/comingSoon.module.css'
import Image from 'next/image'


export default function ComingSoon() {

  return (
    <div className="container">

      <div className="header">
        <h1>Coming Soon</h1>
      </div>

      <main>

        <div className="hero">
          <Image 
            src="/images/sydney-opera-house.jpg"
            alt="Sydney Opera House"
            width={1365}
            height={767}
          />
        </div>

        <div className="text">
          <p>
            Thanks for visiting! Our website is still under construction.  
          </p>

          <p>
            Please check back soon for more details on our upcoming launch!
          </p>
        </div>

      </main>

      <footer>
        &copy; My Website {new Date().getFullYear()}
      </footer>

    </div>
  )

}