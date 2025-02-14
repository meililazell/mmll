import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileIcon } from "lucide-react"

const documents = [
  {
    name: "IRS Determination Letter",
    description: "Official IRS letter recognizing our tax-exempt status",
    fileName: "irs-determination-letter.pdf",
  },
  /*
  {
    name: "Form 990",
    description: "Annual information return filed with the IRS",
    fileName: "form-990.pdf",
  },
  {
    name: "Annual Report",
    description: "Detailed overview of our activities and financials",
    fileName: "annual-report.pdf",
  },
  */
]

export default function PublicDocumentsPage() {
  return (
    <section id="publicdocuments" className="py-20 bg-gradient-to-b from-blue-100 to-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Commitment to Transparency</h2>
            <p className="text-center mb-8 text-lg text-gray-700">
            We believe in open and transparent operations. As part of our commitment to accountability, we make key
            documents available to the public. These documents provide insight into our financial status, organizational
            structure, and operational activities. Below, you'll find important documents that you can download and review. If you have any questions about these
            documents or need additional information, please don't hesitate to contact us.
            </p>

            <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {documents.map((doc) => (
                <Card key={doc.fileName}  className="bg-white shadow-lg">
                    <CardHeader>
                    <CardTitle  className="text-blue-700">{doc.name}</CardTitle>
                    <CardDescription className="text-blue-600">{doc.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                    <Button asChild className="text-primary-foreground w-full flex justify-center items-center space-x-2 bg-[#3b7bbf] hover:bg-[#3b7bbf]/90">
                        <a href={`/documents/${doc.fileName}`} download>
                        <FileIcon className="mr-2 h-4 w-4" />
                        Download
                        </a>
                    </Button>
                    </CardContent>
                </Card>
                ))}
            </section>
        </div>
    </section>
  )
}

