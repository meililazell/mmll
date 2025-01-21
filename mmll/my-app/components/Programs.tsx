import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Programs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700">Education Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Supporting access to quality education through scholarships, school improvement projects, and educational resources for underserved communities.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700">Healthcare Access</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Improving healthcare accessibility by funding mobile clinics, supporting local hospitals, and providing medical supplies to areas in need.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700">Community Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Empowering communities through infrastructure projects, skills training programs, and support for local businesses and entrepreneurs.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700">Environmental Conservation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Promoting sustainable practices and conservation efforts to protect natural resources and improve the quality of life in communities.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

