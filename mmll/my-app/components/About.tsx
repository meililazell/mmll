import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">About Our Foundation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                To improve the lives of people in various ways through targeted programs, community engagement, and
                sustainable initiatives that address critical needs and create lasting positive change.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A world where every individual has the opportunity to thrive, with access to education, healthcare, and
                resources that enable them to lead fulfilling lives and contribute positively to their communities.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>We are guided by the following core values:</CardDescription>
              <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
                <li>Compassion</li>
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Collaboration</li>
                <li>Sustainability</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-700">Our History</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Founded on November 5, 2021, by Mei and Michael Lazell, our foundation was born from a shared vision to
                make a positive impact on people's lives. Since our inception, we have been dedicated to creating
                meaningful change through various initiatives and programs. We are proud to be recognized as a 501(c)(3)
                non-profit organization, approved by both Federal and California state authorities.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

