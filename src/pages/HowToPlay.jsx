import React from 'react'
import bg from '../images/bg2.png'

function HowToPlay() {
  return (
    <div    style={{ backgroundImage: `url(${bg})`, height: '100vh', marginTop: '-55px' }}>
         <div className='text-white'>
      <div className='w-full h-20 bg-red-950 w mt-44'>
        <div className='flex justify-center items-center text-6xl'> 
             <div className='mt-4'>
                 MySteria Nasıl Oynanır ?
             </div>
        </div>
        
      </div>


<div className='text-center text-4xl mt-30 mx-30' style={{lineHeight: '2'}}>
    İster tek başına ya da ekibinle birlikte zamana karşı oynayarak katili en kısa sürede bulmaya çalışabilir, istersen de senin ve arkadaşlarının şüpheliler arasında bulunduğu senaryoda (çok yakında gelecek) yaşanan olayların arkasındaki gizemi çözen ve katili bulan ilk kişi olmaya çalışabilirsin. <br></br>

 

5N1Katil dedektiflik oyununu oynamak için gereken her şeyi PDF formatında sana sunuyoruz. Gerekli tüm belgeleri print ederek evde veya her neredeysen bulunduğun yeri soruşturma ofisine çevirebilirsin. <br></br>

 

Eğer print etmeye fırsatın yoksa gerekli her şeyi PDF formatında bilgisayarına veya mobil cihazına indirerek oyuna hemen başlayabilirsin.<br></br>

​

Başlamaya hazır olduğunda vaka hakkında sana teslim ettiğimiz dosyayı detaylarıyla incelemeli, şifreleri çözmelisin. Kendini hazır hissettiğinde web sitemizde ilgili senaryoya ait sayfanın alt bölümlerinde bulunan 5N1Katil sorularını yanıtlayarak vakayı bitirebilirsin... <br></br>
</div>

    </div>
    </div>
  )
}

export default HowToPlay