import type React from "react"
import { QRCodeSVG } from "qrcode.react"

interface QRCodeWithLogoProps {
  value: string
  logoUrl: string
  size?: number
  logoWidth?: number
  logoHeight?: number
}

const QRCodeWithLogo: React.FC<QRCodeWithLogoProps> = ({ value, logoUrl, size = 128, logoWidth = 30, logoHeight = 24  }) => {
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <QRCodeSVG value={value} size={size} level="H" includeMargin={false} />
      <img
        src={logoUrl || "/placeholder.svg"}
        alt="Logo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: logoWidth,
          height: logoHeight,
        }}
      />
    </div>
  )
}

export default QRCodeWithLogo

