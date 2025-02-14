import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Programs from '../components/Programs'
import Footer from '../components/Footer'
import Leadership from '../components/Leadership'
import LegalStatus from '../components/LegalStatus'
import Governance from '../components/Governance'
import Fundraising from '../components/Fundraising'
import PublicDocuments from '../components/PublicDocuments'
import Donate from '../components/Donate'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <LegalStatus />
        <About />
        <Leadership />
        <Programs />
        <Governance />
        <PublicDocuments />
        <Fundraising />
        <Donate />
      </main>
      <Footer />
    </div>
  )
}

