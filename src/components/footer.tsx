import { Link } from '@tanstack/react-router'

export default function Footer() {
  return (
    <footer className="my-8">
      <div className="bg-orange-50 px-8 py-16 rounded-md flex flex-col lg:flex-row gap-6 justify-evenly text-sm mb-4 shadow-md">
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Get to Know Us</p>
          <Link to="/">Careers</Link>
          <Link to="/">Blogs</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Site Tour</Link>
          <Link to="/">Amazing Team</Link>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="font-semibold">Customer Support</p>
          <Link to="/">Help Center</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/">Order Tracking</Link>
          <Link to="/">Shipping Info</Link>
          <Link to="/">Return Policy</Link>
        </div>

        <div className="flex flex-col gap-2 ">
          <p className="font-semibold">Our Services</p>
          <Link to="/">Bulk Orders</Link>
          <Link to="/">Gift Cards</Link>
          <Link to="/">Affiliate Program</Link>
          <Link to="/">Mobile App</Link>
          <Link to="/">Customization</Link>
        </div>

        <div className="flex flex-col gap-2 ">
          <p className="font-semibold">Legal</p>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
          <Link to="/">Cookie Policy</Link>
          <Link to="/">Accessibility</Link>
          <Link to="/">Security</Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 rounded-md p-6 text-xs text-gray-500 bg-white shadow-md">
        <p className="font-semibold text-gray-700">Karlikha</p>
        <p className="mx-auto text-center sm:mx-0">
          Crafted with 💙 in the Philippines.
        </p>
        <p className="text-right">© 2025 SariClick. All rights reserved.</p>
      </div>
    </footer>
  )
}
