import Link from 'next/link'
import { Button } from "@/components/ui/button"

 // Update this path once you've uploaded your logo
const logoPath =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MMLLFdn%20Large-U12b6HxL94FfdgFtR7a3n8XdciZ4Bt.png"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-3 text-2xl font-bold mb-4 md:mb-0">
          <img
            src={logoPath} // Replace with your logo's path
            alt="Foundation Logo"
            className="h-12 w-15" // Adjust size with h and w
          />
          <span>Michael and Mei Li Lazell Foundation</span>
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-4">
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#programs" className="hover:underline">Programs</Link></li>
            <li><Link href="#leadership" className="hover:underline">Leadership</Link></li>
            <li><Link href="#impact" className="hover:underline">Our Impact</Link></li>
            <li><Link href="#governance" className="hover:underline">Governance</Link></li>
            <li><Link href="#fundraising" className="hover:underline">Fundraising</Link></li>
            <li><Link href="#donate" className="hover:underline">Donate</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
        <Button className="mt-4 md:mt-0 bg-white text-blue-800 hover:bg-blue-100">
          <Link href="#donate">Donate Now</Link>
        </Button>
      </div>
    </header>
  )
}

