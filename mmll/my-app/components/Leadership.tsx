import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-gradient-to-b from-white to-blue-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Leadership</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700">Mei Lazell</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2 text-blue-600">President & Treasurer</p>
              <p>Mei Lazell brings her passion for improving lives and her expertise in financial management to guide our foundation's mission and ensure responsible stewardship of our resources.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700">Michael Lazell</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2 text-blue-600">Secretary</p>
              <p>Michael Lazell contributes his organizational skills and dedication to our cause, ensuring smooth operations and effective communication in all foundation matters.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

