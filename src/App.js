import './App.css';
import QrCode from'react-qr-code'
import { useState } from 'react';
import QrCodeLink from 'qrcode'

function App() {
  const [link,setLink] = useState('')
  const [qrcodeLink,setQrcodeLink]= useState('')

  function handleQrLink(link){
    QrCodeLink.toDataURL(link,{
      width: 600,
      margin: 3
    },function (err,url){
      setQrcodeLink(url)
    })
  }

  function handle(e){
    setLink(e.target.value)
    handleQrLink(e.target.value)
  }
  return (
    <div className="container">

      <QrCode
      value={link}
      />
      <input
        className='input'
        placeholder="Digite seu link"
        value={link}
        onChange={(e)=> handle(e)}
      />

      <a href={qrcodeLink} download={`qrcode.png`}>Baixar QR Code</a>

    </div>
  );
}

export default App;
