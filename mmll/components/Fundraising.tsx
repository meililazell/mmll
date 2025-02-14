import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Fundraising() {
  return (
    <section id="fundraising" className="py-20 bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Fundraising Initiatives</h2>
        <p className="text-center mb-8 text-lg text-gray-700">At the Michael and Mei Li Lazell Foundation, we employ various strategies to raise funds and ensure the sustainability of our mission to improve lives.</p>
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-blue-700">Fundraising Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="annual-fund">
                <AccordionTrigger className="text-blue-600">Annual Fund Campaigns</AccordionTrigger>
                <AccordionContent>
                  We conduct regular annual campaigns to solicit donations from individuals, businesses, and other entities. These campaigns are crucial for supporting our ongoing programs and operations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="major-gifts">
                <AccordionTrigger className="text-blue-600">Major Gifts</AccordionTrigger>
                <AccordionContent>
                  We actively engage with individual major donors and philanthropists to secure large donations that can significantly impact our programs and initiatives.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="grants">
                <AccordionTrigger className="text-blue-600">Grant Writing</AccordionTrigger>
                <AccordionContent>
                  Our team applies for grants from foundations, corporations, and government entities to support specific programs and operational needs of our foundation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="online">
                <AccordionTrigger className="text-blue-600">Online Fundraising</AccordionTrigger>
                <AccordionContent>
                  We utilize digital platforms for various fundraising activities, including crowdfunding campaigns, online donation portals, and social media campaigns to reach a wider audience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="drives">
                <AccordionTrigger className="text-blue-600">Fundraising Drives</AccordionTrigger>
                <AccordionContent>
                  We organize targeted drives for specific purposes, such as food drives, toy drives, or clothing drives, to address immediate needs in our community.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="planned-giving">
                <AccordionTrigger className="text-blue-600">Planned Giving</AccordionTrigger>
                <AccordionContent>
                  We encourage supporters to consider making charitable bequests or other planned gifts as part of their estate planning, ensuring long-term support for our mission.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="peer-to-peer">
                <AccordionTrigger className="text-blue-600">Peer-to-Peer Fundraising</AccordionTrigger>
                <AccordionContent>
                  We engage our supporters to fundraise on behalf of the foundation through individual fundraising pages for events or campaigns, expanding our reach.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="matching-gifts">
                <AccordionTrigger className="text-blue-600">Matching Gifts</AccordionTrigger>
                <AccordionContent>
                  We work to secure commitments from donors to match contributions made by other supporters, effectively doubling the impact of donations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="endowment">
                <AccordionTrigger className="text-blue-600">Endowment Fundraising</AccordionTrigger>
                <AccordionContent>
                  We raise funds specifically for establishing and expanding our endowment fund, ensuring long-term financial stability and sustainability for our foundation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="investment">
                <AccordionTrigger className="text-blue-600">Investment Income</AccordionTrigger>
                <AccordionContent>
                  We generate additional income through responsible investment of surplus funds, endowment funds, and other financial assets, under the guidance of financial advisors and our board.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

