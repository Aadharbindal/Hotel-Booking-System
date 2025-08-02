import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    const Company = ["About", "Carrers", "Press", "Blog", "Partners"];
    const Support = ["Help Center", "Safety Information", "Cancellation Options", "Contact Us", "Accessibility"];
  return (
    <>
    <footer className="bg-slate-100 text-gray-700">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Column 1: Logo and Socials */}
      <div className="col-span-1 md:col-span-2 lg:col-span-1">
        <a href="#" className="flex items-center gap-2">
          <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 8v11a2 2 0 002 2h14a2 2 0 002-2V8L12 2z" stroke="black" strokeWidth="1.5" />
            <path d="M12 11a3 3 0 100 6 3 3 0 000-6z" stroke="black" strokeWidth="1.5" />
            <path d="M14.5 15.5l2 2" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-2xl font-bold text-gray-900">QuickStay</span>
        </a>
        <p className="mt-4 text-gray-600 max-w-xs">
          Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
        </p>
        <div className="mt-6 flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 0C9.58 0 9.22.01 8.134.059 7.032.107 6.138.28 5.304.575a6.902 6.902 0 00-2.583 1.622 6.902 6.902 0 00-1.622 2.583c-.295.834-.468 1.728-.516 2.83C.01 9.22 0 9.58 0 12s.01 2.78.059 3.866c.048 1.102.221 1.996.516 2.83a6.902 6.902 0 001.622 2.583 6.902 6.902 0 002.583 1.622c.834.295 1.728.468 2.83.516 1.086.049 1.446.059 3.866.059s2.78-.01 3.866-.059c1.102-.048 1.996-.221 2.83-.516a6.902 6.902 0 002.583-1.622 6.902 6.902 0 001.622-2.583c.295-.834.468-1.728.516-2.83.049-1.086.059-1.446.059-3.866s-.01-2.78-.059-3.866c-.048-1.102-.221-1.996-.516-2.83a6.902 6.902 0 00-1.622-2.583 6.902 6.902 0 00-2.583-1.622c-.834-.295-1.728-.468-2.83-.516C15.39.01 15.03 0 12.58 0H12zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clipRule="evenodd" /></svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.11 4.93A.998.998 0 0018.5 4h-13a.998.998 0 00-.61.22C4.32 4.67 4 5.33 4 6v12c0 .67.32 1.33.89 1.78.57.45 1.22.67 1.89.67h13.24c.67 0 1.32-.22 1.89-.67.57-.45.89-1.11.89-1.78V6c0-.67-.32-1.33-.89-1.78l.01.01zM8 18H6V9h2v9zm-1-10.5c-.83 0-1.5-.67-1.5-1.5S6.17 4.5 7 4.5s1.5.67 1.5 1.5S7.83 7.5 7 7.5zM18 18h-2v-4.5c0-.83-.67-1.5-1.5-1.5S13 12.67 13 13.5V18h-2V9h2v1.5c.83-1 2.17-1.5 3.5-1.5 1.93 0 3.5 1.57 3.5 3.5V18z" clipRule="evenodd" /></svg>
          </a>
        </div>
      </div>
      {/* Column 2: Company Links */}
      
      <div className="col-span-1 ml-15">
        <h3 className="font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
        <ul className="mt-4 space-y-3">
            {
        Company.map((item) => <li><a href="#" className="text-gray-600 hover:text-gray-900">{item}</a></li>
    )}
        </ul>
      </div>
      {/* Column 3: Support Links */}
      <div className="col-span-1">
        <h3 className="font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
        <ul className="mt-4 space-y-3">
            {
        Support.map((item) => <li><a href="#" className="text-gray-600 hover:text-gray-900">{item}</a></li>
    )} 
        </ul>
      </div>
      {/* Column 4: Newsletter */}
      <div className="col-span-1">
        <h3 className="font-semibold text-gray-900 tracking-wider uppercase">Stay Updated</h3>
        <p className="mt-4 text-gray-600">
          Subscribe to our newsletter for travel inspiration and special offers.
        </p>
        <form className="mt-4 flex">
          <input type="email" placeholder="Your email" className="w-full px-4 py-2 border border-r-0 border-gray-300 rounded-l-md" required />
          <button type="submit" className="bg-gray-900 text-white p-3 rounded-r-md hover:bg-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </form>
      </div>
    </div>
  </div>
  <div className="border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 text-center text-sm text-gray-500">
      © 2025 QuickStay, Inc. All rights reserved.
    </div>
  </div>
    </footer>
    </>
  )
}

export default Footer
