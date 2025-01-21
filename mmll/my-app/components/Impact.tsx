import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-white to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-blue-600 mb-2">5,000+</p>
              <p className="text-gray-700">Students supported through scholarships and improved school facilities</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700">Healthcare</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-blue-600 mb-2">10,000+</p>
              <p className="text-gray-700">Individuals received medical care through our healthcare initiatives</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
              <p className="text-gray-700">Communities benefited from our development and conservation projects</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

