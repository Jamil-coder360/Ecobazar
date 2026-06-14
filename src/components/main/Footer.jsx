import React from 'react'

const Footer = () => {
  return (

    <div>
      {/* Newsletter Strip */}
      <div className="bg-gray-100 px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
          {/* Left text */}
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Subcribe our Newsletter</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.<br />
              Phasellus imperdiet elit eu magna.
            </p>
          </div>

          {/* Email input + button */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-5 py-3 w-64 shadow-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 text-sm text-gray-500 outline-none border-none bg-transparent"
              />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-bold px-7 py-3 rounded-full transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Facebook */}
            <a href="#" className="w-9 h-9 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors">
              <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
              <svg width="16" height="16" fill="#555" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9 9 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 00-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.48 4.48 0 01-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.43a4.52 4.52 0 01-2.04.08c.57 1.79 2.24 3.09 4.21 3.12A9.07 9.07 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.17 9.17 0 0023 3z" />
              </svg>
            </a>
            {/* Pinterest */}
            <a href="#" className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
              <svg width="16" height="16" fill="#555" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.44 7.63 11.22-.1-.95-.2-2.41.04-3.45.22-.94 1.47-6.22 1.47-6.22s-.37-.75-.37-1.87c0-1.75 1.02-3.06 2.28-3.06 1.08 0 1.6.81 1.6 1.78 0 1.09-.69 2.71-1.05 4.21-.3 1.26.62 2.28 1.86 2.28 2.23 0 3.73-2.86 3.73-6.25 0-2.58-1.74-4.51-4.89-4.51-3.56 0-5.8 2.66-5.8 5.62 0 1.02.3 1.74.77 2.3.21.25.24.35.17.63-.05.21-.18.72-.23.92-.07.28-.29.38-.54.28-1.49-.61-2.19-2.24-2.19-4.07 0-3.02 2.55-6.68 7.63-6.68 4.1 0 6.82 2.98 6.82 6.19 0 4.24-2.35 7.42-5.82 7.42-1.16 0-2.26-.63-2.63-1.34l-.74 2.84c-.27 1-.99 2.25-1.47 3.01.9.28 1.85.42 2.84.42C18.63 24 24 18.63 24 12S18.63 0 12 0z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
              <svg width="16" height="16" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gray-900 text-gray-400 px-8 pt-12 pb-6">
        <div className="max-w-6xl mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <path d="M8 24 C8 16 16 10 24 8" stroke="#22c016" strokeWidth="3" strokeLinecap="round" />
                  <path d="M8 24 C12 20 20 18 24 8" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="text-white text-xl font-bold tracking-tight">Ecobazar</span>
              </div>
              <p className="text-sm leading-relaxed mb-5">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <span className="text-white font-medium border-b border-green-500 pb-1 inline-block w-fit">(219) 555-0114</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs">or</span>
                  <span className="text-green-400 border-b border-green-500 pb-1 inline-block w-fit">Proxy@gmail.com</span>
                </div>
              </div>
            </div>

            {/* My Account */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">My Account</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">My Account</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Order History</a></li>
                <li className="text-white font-semibold pt-1">Shoping Cart</li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Wishlist</a></li>
              </ul>
            </div>

            {/* Helps */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Helps</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Faqs</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Terms & Condition</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Proxy */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Proxy</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Product</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Track Order</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Fruit & Vegetables</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Meat & Fish</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Bread & Bakery</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Beauty & Health</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-700 pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">Ecobazar eCommerce © 2021. All Rights Reserved</p>
            <div className="flex items-center gap-2">
              {/* Apple Pay */}
              <div className="bg-white rounded px-2 py-1 flex items-center h-7">
                <span className="text-xs font-semibold text-gray-900">Apple Pay</span>
              </div>
              {/* Visa */}
              <div className="bg-white rounded px-3 py-1 flex items-center h-7">
                <span className="text-sm font-extrabold text-blue-900 tracking-widest">VISA</span>
              </div>
              {/* Discover */}
              <div className="bg-white rounded px-2 py-1 flex items-center h-7">
                <span className="text-xs font-semibold text-gray-800">DISCOVER</span>
              </div>
              {/* Mastercard */}
              <div className="bg-white rounded px-2 py-1 flex items-center h-7">
                <svg width="32" height="20" viewBox="0 0 36 24">
                  <circle cx="13" cy="12" r="9" fill="#eb001b" />
                  <circle cx="23" cy="12" r="9" fill="#f79e1b" />
                  <path d="M18 5.5a9 9 0 010 13A9 9 0 0118 5.5z" fill="#ff5f00" />
                </svg>
              </div>
              {/* Secure Payment */}
              <div className="bg-white rounded px-2 py-1 flex items-center gap-1 h-7">
                <svg width="10" height="12" viewBox="0 0 14 18" fill="none">
                  <path d="M7 1L1 4v5c0 3.55 2.58 6.74 6 7.93C10.42 15.74 13 12.55 13 9V4L7 1z" fill="#22c016" />
                </svg>
                <span className="text-gray-700 leading-tight" style={{ fontSize: '9px', fontWeight: 600 }}>
                  Secure<br />Payment
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default Footer