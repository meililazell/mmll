import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-blue-100 to-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Michael and Mei Li Lazell Foundation</h3>
            <p>Improving lives since November 5, 2021</p>
            <p className="mt-2">501(c)(3) Non-Profit Organization</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:underline">About Us</Link></li>
              <li><Link href="#programs" className="hover:underline">Our Programs</Link></li>
              <li><Link href="#impact" className="hover:underline">Our Impact</Link></li>
              <li><Link href="#" className="hover:underline">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>meililazell@gmail.com</p>
            <p>Or</p>
            <p>Michael and Mei Li Lazell Foundation</p>
            <p>P.O. 4201 </p>
            <p>2070 N Broadway</p>
            <p>Walnut Creek, CA 94596</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Michael and Mei Li Lazell Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

