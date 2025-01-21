import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Governance() {
  return (
    <section id="governance" className="py-20 bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Governance</h2>
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-blue-700">Foundation Bylaws Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="purpose">
                <AccordionTrigger className="text-blue-600">Purpose</AccordionTrigger>
                <AccordionContent>
                  The Michael and Mei Li Lazell Foundation is organized exclusively for charitable, educational, and scientific purposes under Section 501(c)(3) of the Internal Revenue Code. Our mission is to improve the lives of people in various ways.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="board">
                <AccordionTrigger className="text-blue-600">Board of Directors</AccordionTrigger>
                <AccordionContent>
                  Our Board of Directors oversees the management of the organization and ensures that its operations align with its purpose. Directors serve five-year terms and are committed to the foundation's mission and ethical governance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="meetings">
                <AccordionTrigger className="text-blue-600">Meetings</AccordionTrigger>
                <AccordionContent>
                  An annual meeting of the members is held during the fourth week of November. The Board of Directors meets twice a year and as needed to guide the foundation's activities and decision-making.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="financials">
                <AccordionTrigger className="text-blue-600">Financial Management</AccordionTrigger>
                <AccordionContent>
                  Our fiscal year runs from November 1st to October 31st. We conduct annual financial audits to ensure transparency and accountability in our financial operations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="grants">
                <AccordionTrigger className="text-blue-600">Grant Distribution</AccordionTrigger>
                <AccordionContent>
                  We provide grants to other 501(c)(3) organizations that align with our mission. Our grant-making process is transparent, and we monitor the impact of funded programs to ensure they contribute to our goal of improving lives.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ethics">
                <AccordionTrigger className="text-blue-600">Ethical Standards</AccordionTrigger>
                <AccordionContent>
                  We maintain high ethical standards, including a robust conflict of interest policy. Our board members and officers are required to disclose any potential conflicts and recuse themselves from related decisions to ensure impartiality in our operations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

