import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function LegalStatus() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-blue-100">
      <div className="container mx-auto px-4">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center text-blue-800">
              <CheckCircle className="mr-2" />
              Official Non-Profit Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700">
              The Michael and Mei Li Lazell Foundation is a recognized 501(c)(3) non-profit organization, 
              approved by both Federal and California state authorities. This status ensures that your 
              donations are tax-deductible and that we operate under strict guidelines for transparency 
              and accountability.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

