import React from 'react';
import { useInView } from 'react-intersection-observer';
import Slide from 'react-reveal/Slide';

import FirstScreen from '../components/FirstScreen';
import SecondScreen from '../components/SecondScreen';


function Home() {
  // Ref ve görünürlük kontrolü
  const { ref, inView } = useInView({
    threshold: 0.3, // yüzde 30 görünürse tetiklenir
    triggerOnce: true, // sadece bir kere tetikle
  });

  return (
    <div style={{ paddingTop: '120px' }}>
      <FirstScreen />

      {/* ref'i buraya veriyoruz */}
      <div ref={ref}>
        {/* inView true ise animasyonla göster, değilse gösterme */}
        {inView ? (
          <Slide right>
            <SecondScreen />
          </Slide>
        ) : (
          // Eğer görünür değilse boş div ya da null olabilir
          <div style={{ height: '300px' }}></div>
        )}
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default Home;
