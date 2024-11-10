import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="container mx-auto flex flex-row lg:selection:justify-end xl:justify-center xl:gap-11 xl:mr-20 xl:text-2xl  gap-5 mr-6 mt-5 sm:flex-row items-center sm:justify-between text-white">
      <Link href={'#Home'}>Home</Link>
      
      <Link href={'#Skills'}>Skills</Link>
      
      <Link href={'#About'}>About us</Link>
      
      <Link href={'#Contact'}>Contactus</Link>
    </div>
  )
}

export default Navbar


// import React from 'react';
// import Link from 'next/link';


// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex flex-col sm:flex-row items-center sm:justify-between text-white">
//         <div className="text-2xl font-bold mb-4 sm:mb-0">
//           <Link href="/">
//             <a>Logo</a> {/* Optional logo or title */}
//           </Link>
//         </div>
//         <div className="flex flex-col sm:flex-row text-lg md:text-xl font-semibold gap-4 md:gap-8">
//           <Link href="/">
//             <a className="hover:text-gray-300 transition-colors">Home</a>
//           </Link>
          
//           <Link href="/skills">
//             <a className="hover:text-gray-300 transition-colors">Skills</a>
//           </Link>
          
//           <Link href="/about-us">
//             <a className="hover:text-gray-300 transition-colors">About Us</a>
//           </Link>
          
//           <Link href="/contact-us">
//             <a className="hover:text-gray-300 transition-colors">Contact Us</a>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
