// import Link from 'next/link';
// import styles from './navigation.module.css';
// import { useRouter } from 'next/router';


// const Navigation = () => { 
//   const router = useRouter();
//   const currentRoute = router.pathname;

//   return (
//     <div className={styles.sticky}>
//         <div className={styles.navbar}>
//           <ul className={styles.menu}>
//             <li>
//               <Link className={currentRoute === '/' ? styles.active : styles.link} href="/">Home</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/rsvp' ? styles.active : styles.link} href="/rsvp">RSVP</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/events' ? styles.active : styles.link} href="/events">Events</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/weddingparty' ? styles.active : styles.link} href="/weddingparty">Wedding Party</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/travel' ? styles.active : styles.link} href="/travel">Travel</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/guide' ? styles.active : styles.link} href="/guide">Guide</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/registry' ? styles.active : styles.link} href="/registry">Registry</Link>
//             </li>
//             <li>
//               <Link className={currentRoute === '/FAQ' ? styles.active : styles.link} href="/FAQ">FAQ</Link>
//             </li>
//           </ul>
//         </div>
//     </div>
//   )
// }

// export default Navigation;

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './navigation.module.css';

const Navigation = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isActive = (route) => {
    return currentRoute === route ? styles.active : '';
  };

  return (
    <div className={styles.sticky}>
      <div className={styles.navbar}>
        <ul className={styles.menu}>
          {/* Other nav links */}
          <li className={styles.link}>
            <Link className={isActive('/')} href="/">Home
              {/* <a className={isActive('/')}>Home</a> */}
            </Link>
          </li>
          {/* Dropdown */}
          <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <span className={`${styles.link} ${dropdownOpen ? styles.active : ''}`}>
              Dropdown
            </span>
            {dropdownOpen && (
              <ul className={`${styles.menu} ${styles.dropdown}`}>
                <li className={styles.link}>
                  <Link className={isActive('/rsvp')} href="/rsvp">RSVP
                    {/* <a className={isActive('/rsvp')}>RSVP</a> */}
                  </Link>
                </li>
                <li className={styles.link}>
                  <Link className={isActive('/rsvp')} href="/rsvp">RSVP
                    {/* <a className={isActive('/rsvp')}>RSVP</a> */}
                  </Link>
                </li>
                <li className={styles.link}>
                  <Link className={isActive('/rsvp')} href="/rsvp">RSVP
                    {/* <a className={isActive('/rsvp')}>RSVP</a> */}
                  </Link>
                </li>
                <li className={styles.link}>
                  <Link className={isActive('/rsvp')} href="/rsvp">RSVP
                    {/* <a className={isActive('/rsvp')}>RSVP</a> */}
                  </Link>
                </li>
                {/* Add more dropdown links here */}
              </ul>
            )}
          </li>
          {/* Other nav links */}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
