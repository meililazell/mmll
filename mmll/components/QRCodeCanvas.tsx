import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

interface QRCodeWithLogoProps {
  value: string; // The data to encode in the QR Code
  size?: number; // Size of the QR Code
  logoUrl: string; // URL of the logo to embed
  logoSize?: number; // Size of the logo
}

const QRCodeWithLogo: React.FC<QRCodeWithLogoProps> = ({
  value,
  size = 200,
  logoUrl,
  logoSize = 40,
}) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {/* QR Code */}
      <QRCodeCanvas
        value={value}
        size={size}
        bgColor="#ffffff"
        fgColor="#000000"
        includeMargin={true}
      />

      {/* Overlay Logo */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white', // Optional: Adds contrast behind the logo
          padding: '4px', // Optional: Padding around the logo
          borderRadius: '50%', // Optional: Circular logo background
        }}
      >
        <img
          src={logoUrl}
          alt="Logo"
          style={{
            width: `${logoSize}px`,
            height: `${logoSize}px`,
            borderRadius: '50%', // Optional: Makes the logo circular
          }}
        />
      </div>
    </div>
  );
};

export default QRCodeWithLogo;

