import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Icons } from "@/components/icons"
import QRCodeWithLogo from "./QRCodeWithLogo"
import PayButton from "./PayButton";

export default function Donate() {

  const paypalUrl = `https://www.paypal.com/donate/?hosted_button_id=2T2LVQ7VNAMPJ`

  const venmoUrl = `https://venmo.com/mmll-fdn`

  const venmoAppUrl = `venmo://paycharge?txn=pay&recipients=mmll-fdn`

  // Update this path once you've uploaded your logo
  const logoPath =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MMLLFdn%20medium.jpg-tjbn936DVX3YcJCF1fWRt0Ep8xctQG.jpeg"


  
  return (
    <section id="donate" className="py-20 bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Support Our Cause</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Make a Donation</CardTitle>
              <CardDescription>Your contribution helps us improve lives and communities.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <PayButton url={paypalUrl} text="Paypal"/>
                      <div className="flex justify-center">
                        <QRCodeWithLogo value={paypalUrl} logoUrl={logoPath} size={128} logoWidth={48} logoHeight={36} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      
                    <PayButton url={venmoUrl} text="Venmo"/>
                      <div className="flex justify-center">
                        <QRCodeWithLogo value={venmoAppUrl} logoUrl={logoPath} size={128} logoWidth={48} logoHeight={36}  />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

