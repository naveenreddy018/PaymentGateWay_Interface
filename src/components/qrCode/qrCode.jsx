import QRCode from 'react-qr-code';

export default function AmountQr() {
  const payload = `upi://pay?pa=7732002429@ybl&am=1`;
  return <QRCode value={payload} />;
}

