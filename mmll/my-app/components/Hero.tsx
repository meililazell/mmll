import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-400 to-white text-gray-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Improving Lives, One Step at a Time</h1>
        <p className="text-xl mb-8">The Michael and Mei Li Lazell Foundation is dedicated to making a positive impact on people's lives through various initiatives.</p>
        <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Learn More</Button>
      </div>
    </section>
  )
}

