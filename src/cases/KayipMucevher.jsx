import React, { useState, useEffect } from 'react';
import './SisliSehir.css';

const sectionTitles = [
  "1. Olayın Geçmişi",
  "2. Cinayet Gecesi",
  "3. Otopsi Raporu",
  "4. İfadeler",
  "5. İpuçları",
  "6. Çözüm Bekleyenler",
  "7. Son Perde"
];

const content = {
  1: (
    <div className="case-file">
      <h3 className="evidence-title">TUZ GÖLÜ GÖLGELERİ</h3>

      <p className="typewriter-text">
        Tuz Gölü’nün batı kıyısında, haritalarda bile işaretlenmeyen bir kasaba uzanır: <strong>Akboz</strong>.
        Bu yerleşim, kuraklıkla kavrulan bir çoraklıkta kurulmuş; geçimini tuz işçiliğiyle sürdüren birkaç yüz kişinin yaşadığı, geçmişten kopamayan bir hayalet yerleşimdir.
      </p>

      <p className="typewriter-text">
        1990’larda köy halkı, <span className="highlight">Prof. Dr. Harun İleri</span> öncülüğünde açılan bir tarım projesiyle canlanma yaşamıştı. Ancak proje, kısa süre sonra "tıbbi deney" skandalına karışınca tüm bölge sessizliğe gömüldü.
        Harun İleri, Akboz'a 30 yıl sonra tekrar döndü — bu kez <strong>ölü olarak</strong>.
      </p>

      <p className="typewriter-text">
        <strong>3 Haziran gecesi</strong>, göl kenarındaki terk edilmiş araştırma binasında çıkan çatışma sesi sonrası gelen jandarma ekipleri, Harun’un cansız bedenini buldu. <span className="highlight">Göğsünden tek kurşunla vurulmuştu</span>.
        Silahı yoktu. Binanın içi darmadağınıktı ama hiçbir eşya çalınmamıştı. Bilgisayar sabit diskleri yerindeydi — ama bozulmuştu.
      </p>

      <p className="typewriter-text">
        O gece göl kıyısında bulunan üç kişi vardı. <strong>Saat 21:18’de elektrikler kesildi</strong>. 21:24’te tek bir silah sesi duyuldu. 21:31’de, binadan çıkan bir kadın silueti kameralara takıldı. Yüzü görünmüyor, ama üzerindeki beyaz önlük ayırt edilebiliyor.
        Kamera görüntüleri 21:32’den sonra <span className="highlight">manipüle edilmiş gibi</span>. Dijital kayıtlar eksik.
      </p>

      <p className="typewriter-text">
        Harun İleri'nin kasabada yeniden görülmeye başlaması, geçmişte yaşanan deneyler nedeniyle <strong>bazı eski düşmanları</strong> harekete geçirmiş olabilir. Özellikle, proje kurbanı çocuklardan biri olan ve şimdi yetişkin olan <strong>Arif Saydam</strong> dikkat çekiyor.
      </p>

      <p className="typewriter-text">
        Kasabanın yaşlı imamı <strong>Mustafa Aker</strong>, <em>“Harun geldiğinde rüzgâr değişti”</em> dedi ve ardından sessizliğe gömüldü. Bir başka tanık, Harun’un ölümünden bir gün önce,
        <span className="highlight">eski araştırma binasında biriyle yüksek sesle tartıştığını</span> duyduğunu söyledi — ama kim olduğunu bilmiyor.
      </p>

      <div className="character-profiles">
        <div className="profile-card suspect">
          <h4>HARUN İLERİ (KURBAN)</h4>
          <p>63 yaşında, eski bir akademisyen. Akboz’daki deneysel tarım ve genetik projelerin kurucusu. 1994’teki skandaldan sonra ortadan kaybolmuş, 2025’te gizlice geri dönmüştü.</p>
          <div className="motive-tag">GİZLİ BİLGİLER / GEÇMİŞLE YÜZLEŞME</div>
        </div>

        <div className="profile-card suspect">
          <h4>ARİF SAYDAM (YETİŞKİN MAĞDUR)</h4>
          <p>Harun’un deney projesine küçükken katılmış, sağlık sorunları yaşamış. Kasabada içine kapanık biri olarak biliniyor. Cinayet gecesi göl kenarında yalnız yürüdüğü iddia edildi.</p>
          <div className="motive-tag">İNTİKAM / TRAVMA</div>
        </div>

        <div className="profile-card">
          <h4>DR. MÜNEVVER SERT (ESKİ YARDIMCISI)</h4>
          <p>Harun’un sağ koluydu. Akademik kariyerini onunla birlikte kaybetti. Kasabaya Harun'dan 1 hafta önce döndü. O gece binadan çıkan kadın siluetine dair söylentiler onu işaret ediyor.</p>
          <div className="motive-tag">İHANET / KAPATILMAMIŞ DEFTERLER</div>
        </div>

        <div className="profile-card">
          <h4>MUSTAFA AKER (İMAM)</h4>
          <p>70 yaşında, kasabanın en eski yaşayanı. Harun’un ilk projesinde halkı ikna eden kişiydi. Son dönemde davranışları tuhaflaşmış, sık sık “lanet”ten bahsetmişti.</p>
          <div className="motive-tag">SIRLAR / SUÇ ORTAKLIĞI</div>
        </div>

        <div className="profile-card">
          <h4>NEŞE KAPLAN (MUHTAR)</h4>
          <p>Kasabanın ilk kadın muhtarı. Harun’un geri dönmesini istemeyenlerden biri. Olay gecesi resmi olarak görevdeydi, ama cep telefonu sinyali araştırma binası civarında bulundu.</p>
          <div className="motive-tag">GÜÇ / TEHDİT / SİYASAL BEDEL</div>
        </div>
      </div>

      <div className="town-history">
        <h4>AKBOZ KASABASI DOSYASI</h4>
        <ul className="evidence-list">
          <li>📁 1991: Harun İleri öncülüğünde tarım-genetik projesi başlatılır.</li>
          <li>📁 1994: Deneyler sonucu bazı çocuklar hastalanır. Proje skandala dönüşür.</li>
          <li>📁 1995: Harun ortadan kaybolur. Araştırma binası mühürlenir.</li>
          <li>📁 2025: Harun geri döner, bir hafta sonra cinayete kurban gider.</li>
        </ul>
      </div>

      <div className="theory-box">
        <h4>DEDEKTİF GÖRÜŞÜ</h4>
        <p>"Harun İleri geçmişiyle hesaplaşmaya gelmişti. Ama geçmişi onu beklemiyordu — peşindeydi. Akboz’un suskunluğu, artık bir suçun örtüsü. Ve bu örtüyü kaldırmak, her şeyden önce cesaret istiyor."</p>
      </div>
    </div>
  ),




  2: (
    <div className="case-file">
      <h3 className="evidence-title">SİNEKLERİN SESSİZLİĞİ – GECENİN PARÇALARI</h3>

      <div className="timeline">
        <div className="timeline-event">
          <div className="time">18:50</div>
          <div className="event">
            Dağ yolu sisle kapanmadan önce son misafir, orman korucusu Ayberk Gündüz pansiyona giriş yaptı. Yanında metal bir sandık taşıyordu, içeri bırakmakta ısrar etti.
          </div>
        </div>
        <div className="timeline-event">
          <div className="time">19:10</div>
          <div className="event">
            Ev sahibi Tuncay Bey, eski saatli dolabın içine bir zarf yerleştiriyor. Görüntüde kimseyle konuşmuyor ama zarfın üstünde “yalnızca gerçek kalanlar için” yazdığı görüldü.
          </div>
        </div>
        <div className="timeline-event important">
          <div className="time">20:25</div>
          <div className="event">
            Kasaba arşivcisi Gaye Hanım, bodrum katındaki eski kayıtlara tek başına iniyor. 17 dakika boyunca içeride kalıyor. Çıktığında parmakları mürekkep izli ve sağ elinin tırnakları kısa kesilmişti.
          </div>
        </div>
        <div className="timeline-event critical">
          <div className="time">21:12</div>
          <div className="event">
            Resepsiyon defteri bir anda kayboldu. En son el süren kişi, sanatçı konuk Tilda’ydı. O sırada koridorda yağlı boya taşımakta olduğu görüldü.
          </div>
        </div>
        <div className="timeline-event red">
          <div className="time">21:44</div>
          <div className="event">
            Ceset bulunduğunda, salonda hiçbir ışık yanmıyordu. Odaya ilk giren, dışarıda telefonla konuşan gazeteci Umut Bey’di. “Bir kadın gülüyordu içeride,” dedi ama içeride kimse yoktu.
          </div>
        </div>
      </div>

      <div className="crime-scene">
        <h4>OLAY YERİ İNCELEMESİ</h4>
        <ul className="evidence-list">
          <li>
            🔬 <strong>Küf Örtüsü:</strong> Cesedin bulunduğu koltuğun arkasında <em>nadir bir mantar türü</em> olan “Veronica Spores” tespit edildi. Bu tür yalnızca nemli taş duvarlarda gelişir.
          </li>
          <li>
            🎨 <strong>Boyayla Karalanmış Not:</strong> Sanatçı Tilda’nın paletinde siyaha bulanmış bir kağıt bulundu. Altına UV ışıkla bakıldığında “kimin yüzüydü bu?” cümlesi çıktı.
          </li>
          <li>
            🧳 <strong>Çift Katmanlı Bavul:</strong> Kurbanın eşyalarında çift katmanlı gizli bir bölme vardı. İçinden eski bir kaset çıktı ama dinlenemedi. Bant koparılmıştı.
          </li>
          <li>
            📸 <strong>Negatif Film:</strong> Orman korucusu Ayberk’in odasındaki eski bir analog kamerada yanık negatif bulundu. Pozlama sırasında ışık kaynağı ani şekilde değişmiş.
          </li>
          <li>
            🧣 <strong>İpek Fular:</strong> Kurbanın boynundaki ince mor fular, boğulma değil ama bir tür <span className="highlight">ritüel izlenimi</span> veriyor. Fular üzerine çizilmiş eski semboller tespit edildi.
          </li>
          <li>
            🕯️ <strong>Koku Örüntüsü:</strong> Ceset çevresinde yalnızca lavanta değil, <em>kekik, karanfil ve yanık reçine</em> gibi doğal kokular da bulundu. Bunlar yalnızca tapınak tütsülerinde karışık kullanılır.
          </li>
          <li>
            🎵 <strong>Uyarıcı Ses:</strong> Cesedin kulağında eski model kulak içi kulaklık vardı. Çalan ses 6 saniyelik bir “dişi sinek vızıltısı” örneğiydi ve loopa alınmıştı.
          </li>
          <li>
            🪶 <strong>Tek Tüy:</strong> Kurbanın avucunda siyah bir kuş tüyü vardı. DNA analizi, tüye ait olan kuş türünün bölgede <em>son 50 yıldır görülmediğini</em> gösteriyor.
          </li>
        </ul>
      </div>
    </div>
  ),


  3: (
    <div className="case-file">
      <h3 className="evidence-title">ADLİ TIBBİ DEĞERLENDİRME – VAK'A #S-112</h3>

      <div className="autopsy-report">
        <div className="stamp">GİZLİ - SINIRLI ERİŞİM</div>

        <div className="report-detail">
          <span>Ölüm Nedeni:</span>
          <strong>Boğulma (mekanik değil – dış etken olmaksızın hava yollarında kasılma)</strong>
          <p className="detail-note">
            Soluk borusunda fiziksel tıkanma, darbe veya travma izine rastlanmadı. Ancak solunum kasları aniden kasılmış görünüyor.
          </p>
        </div>

        <div className="report-detail">
          <span>Ölüm Zamanı:</span>
          <strong>21:20 – 21:40 arası</strong>
          <p className="detail-note">
            Cesedin bulunduğu andan 5–15 dakika öncesine tekabül ediyor. Olay anına tanık olan kimse yok.
          </p>
        </div>

        <div className="report-detail">
          <span>Vücut Üzerindeki Diğer Bulgular:</span>
          <ul>
            <li>Göğüs kafesi çevresinde simetrik kızarıklık halkaları</li>
            <li>İç kulakta bilinmeyen frekansta titreşimden kaynaklı mikro çatlaklar</li>
            <li>Avuç içine kazınmış dairesel motif – deri altına işlenmiş gibi, kendi kendine oluşmamış</li>
            <li>Ayak tabanında ince reçine kalıntısı – <em>reçine türü yerli değil</em>, dışarıdan taşınmış</li>
          </ul>
          <p className="detail-note">
            Fiziksel darp izine rastlanmamasına rağmen, vücut sanki bir "ritüel hazırlığı" geçirmiş gibi pozisyonda bulundu.
          </p>
        </div>

        <div className="report-detail">
          <span>Kan Tahlili:</span>
          <strong>Yüksek düzeyde "Verotoksin-B" benzeri ama sınıflandırılamayan bir biyolojik toksin</strong>
          <p className="detail-note">
            Bu madde laboratuvar kayıtlarında yer almıyor. Etkisi 1–3 dakikada solunumu durduruyor, bilinç açık kalıyor.
          </p>
        </div>

        <div className="report-detail">
          <span>Mide İçeriği:</span>
          <strong>Hiçbir gıda izi yok – yalnızca ıslak kil parçaları ve lavanta yaprağı ezintisi</strong>
          <p className="detail-note">
            Kurban gönüllü olarak veya zorlama olmadan bu karışımı yutmuş olabilir. Bu, klasik zehirlenme değil, bilinçli bir hazırlık gibi görünüyor.
          </p>
        </div>
      </div>

      <div className="forensic-note">
        <h4>ADLİ GÖZLEM NOTU:</h4>
        <p>
          "Bu ölüm, klasik adli tıp sınırlarının dışında. Fiziksel saldırı yok, direnç izi yok. Vücut; nefes almaya devam etmek istemiş ama yapamamış. İç kulak izleri bir tür dış frekansa maruz kalmış. Kulaklığındaki sesle mi bağlantılı?"
        </p>
        <p>
          "Deriye işlenmiş sembol, geçmişteki kültik ritüellerde kullanılan 'Ezel Çevrimi'ne benziyor. Bu tür şekiller irade dışı oluşmaz."
        </p>
      </div>

      <div className="relationship-analysis">
        <h4>BAĞLANTI KATMANLARI</h4>
        <ul className="evidence-list">
          <li>🧬 Cesetle birlikte odada kalan mantar sporları sadece bodrum katında tespit edildi.</li>
          <li>🎧 Kurbanın kulağında çalan ses, 18.000 Hz üzeri frekansta. Normal bir insan bunu işitemez.</li>
          <li>📄 Kurbanın son yazdığı not: “Sonsuzluk dönünce içeri girer.” Bu cümle bir şiirin parçası olabilir.</li>
          <li>🕯️ Reçine kokusu, pansiyonun arka salonunda yapılan eski bir “bitki yakma töreni”ne benziyor.</li>
          <li>📹 Korucunun getirdiği sandık, olay sonrası kilitli bulundu. İçinden çıkan objeler henüz açıklanmadı.</li>
        </ul>
      </div>

      <div className="theory-box">
        <h4>DEDEKTİF NOTU:</h4>
        <p>
          "Bu ölüm bir cinayet mi? Belki. Ama klasik anlamda değil. Kurban, bazı hazırlıkları kendi isteğiyle yapmış gibi. Sanki bir yere katılmak ya da bir şeyden kurtulmak istiyordu."
        </p>
        <p className="detail-note">
          Dedektif olarak en büyük sorum: Bu bir 'ritüel katliam' mı yoksa bir 'gönüllü geçiş mi'?
        </p>
      </div>
    </div>
  ),


  4: (
    <div className="case-file">
      <h3 className="evidence-title">ÇAPRAZ SORGULAR – YÜZLERİN ARDINDAKİ SESSİZLİK</h3>

      <div className="interrogation-section">
        <div className="interrogation-card">
          <h4>🎙️ ARİF SAYDAM – Yetişkin Mağdur</h4>
          <p><strong>Soru:</strong> Cinayet gecesi neredeydiniz?</p>
          <p><strong>Yanıt:</strong> “Göl kıyısında yürüyordum. Havanın soğumasıyla geri döndüm. Kimseyle konuşmadım.”</p>
          <p className="detail-note">Ancak jandarma raporuna göre ayak izleri binanın arka girişinde de bulundu. Arif’in ayakkabısındaki reçine kalıntısı, ceset yakınındakine benzer.</p>

          <p><strong>Soru:</strong> Harun’la yeniden görüştünüz mü?</p>
          <p><strong>Yanıt:</strong> “Hayır. Onunla konuşacak bir şeyim yoktu.”</p>
          <p className="detail-note">İmam Mustafa Aker, Harun’un gelişinden sonra Arif’in “kabuslar görmeye başladığını” söylemişti.</p>
        </div>

        <div className="interrogation-card">
          <h4>🎙️ DR. MÜNEVVER SERT – Eski Yardımcısı</h4>
          <p><strong>Soru:</strong> O gece binada mıydınız?</p>
          <p><strong>Yanıt:</strong> “Hayır. Evdeydim. Elektrikler kesildiğinde dışarı bile çıkmadım.”</p>
          <p className="detail-note">Ama kamera kayıtlarında saat 21:31’de binadan çıkan beyaz önlüklü kadının silueti onun boy ve yürüyüş profiliyle eşleşiyor.</p>

          <p><strong>Soru:</strong> Harun neden geri döndü sizce?</p>
          <p><strong>Yanıt:</strong> “Vicdanı rahat değildi belki. Ama bu kasabanın ona borcu yok, aksine çok şey kaybettik.”</p>
          <p className="detail-note">İçeriği bozulmuş sabit diskin üzerinde Münevver’in soyadıyla etiketlenmiş eski bir belge bulundu.</p>
        </div>

        <div className="interrogation-card">
          <h4>🎙️ MUSTAFA AKER – İmam</h4>
          <p><strong>Soru:</strong> Harun’un geri dönüşü sizi neden tedirgin etti?</p>
          <p><strong>Yanıt:</strong> “Onun gelişiyle eski şeyler uyanır. Bazı kapılar bir daha açılmamalıydı.”</p>
          <p className="detail-note">Kendisinin 1990’lardaki deney projesinde köy halkını ikna eden kilit kişi olduğu biliniyor.</p>

          <p><strong>Soru:</strong> Cinayet gecesi neredeydiniz?</p>
          <p><strong>Yanıt:</strong> “Evdeydim. Tespih çekiyordum. Işıklar gidince camiye inemedim.”</p>
          <p className="detail-note">Ama cami avlusunda gece 21:40’ta ayak izleri ve reçine kalıntısı bulundu.</p>
        </div>

        <div className="interrogation-card">
          <h4>🎙️ NEŞE KAPLAN – Muhtar</h4>
          <p><strong>Soru:</strong> Olay gecesi resmi göreviniz neydi?</p>
          <p><strong>Yanıt:</strong> “Kasabanın jeneratör sistemini kontrol ediyordum. Elektrik kesintisiyle ilgili rapor hazırlıyordum.”</p>
          <p className="detail-note">Ancak cep sinyal kayıtları 21:15’te araştırma binasının 40 metre yakınında ping vermiş.</p>

          <p><strong>Soru:</strong> Harun İleri hakkında ne düşünüyorsunuz?</p>
          <p><strong>Yanıt:</strong> “Bizi yıllar önce terk etti. Dönüşü, açılmaması gereken yaraları kanattı. Ama ölümü çözüm değil.”</p>
          <p className="detail-note">Araştırma binasında bulunan eski seçim afişlerinde Neşe’nin adı, Harun’a karşı çıkanlar listesinde geçiyor.</p>
        </div>
      </div>

      <div className="connection-threads">
        <h4>ÇELİŞKİLER VE KESİŞİMLER</h4>
        <ul className="evidence-list">
          <li>🧪 <strong>Reçine Kalıntısı</strong>, üç kişinin de giysilerinde farklı konsantrasyonlarda bulundu.</li>
          <li>📷 <strong>Kamera Silueti</strong> Münevver’i işaret etse de, onun saat 21:30’da gönderdiği bir SMS var — kim yazdı?</li>
          <li>🧭 <strong>GPS Sinyali</strong>, Neşe’nin söylediği yerle uyuşmuyor. Ancak olay sonrası sinyal kesilmiş.</li>
          <li>🗣️ <strong>Tanık İfadesi</strong>: Harun’un ölümünden önce biriyle tartıştığını söyleyen kişi, tartışma sesinin “kadın”a ait olduğunu vurguladı.</li>
          <li>🛑 <strong>İmam’ın Sessizliği</strong>, cinayet sonrası ani bir suskunluğa dönüşmüş — o zamandan beri hiçbir cuma hutbesi vermemiş.</li>
        </ul>
      </div>

      <div className="theory-box">
        <h4>DEDEKTİF GÖRÜŞÜ</h4>
        <p>
          “Dört kişi, dört ayrı yalan söylüyor olabilir. Ama belki de biri sadece yarım bir gerçeği paylaştı. Harun’un ölümü, tek kişinin işi değil. Bu, geçmişin susturulmuş ortak günahı gibi.”
        </p>
      </div>
    </div>
  ),


  5: (
    <div className="case-file">
      <h3 className="evidence-title">KRİTİK İPUÇLARI</h3>

      <div className="evidence-board">
        <div className="evidence-item red">
          <h4>🔫 SİLAH</h4>
          <p>Adem'in kayıp tabancası. Son kullanım izi 6 ay önce.</p>
        </div>

        <div className="evidence-item">
          <h4>💼 DOSYA</h4>
          <p>Enerji projesi detayları. Sadece Elif ve Adem biliyordu.</p>
        </div>

        <div className="evidence-item important">
          <h4>📞 TELEFON KAYDI</h4>
          <p>Meral'in görüştüğü numara kayıtlı değil.</p>
        </div>

        <div className="evidence-item">
          <h4>🕯️ IŞIK KESİNTİSİ</h4>
          <p>Jeneratör devreye girmeden önce 47 saniye karanlık.</p>
        </div>
      </div>

      <div className="theory-box">
        <h4>DEDEKTİF NOTLARI:</h4>
        <textarea placeholder="Buraya teorilerinizi yazın..."></textarea>
      </div>
    </div>
  ),

  6: (
    <div className="case-file">
      <h3 className="evidence-title">ÇÖZÜLMEYEN SORULAR</h3>

      <div className="mystery-cards">
        <div className="mystery-card">
          <h4>🔍 KİLİTLİ ODA</h4>
          <p>İçeriden kilitlenmiş odada katil nasıl cinayet işleyip kaçtı?</p>
        </div>

        <div className="mystery-card">
          <h4>🤔 MOTİF</h4>
          <p>Proje mi, miras mı, gizli ilişkiler mi yoksa bir komplo mu?</p>
        </div>

        <div className="mystery-card important">
          <h4>🕵️ ORTAK</h4>
          <p>Birden fazla kişi işbirliği yapmış olabilir mi?</p>
        </div>

        <div className="mystery-card">
          <h4>📁 DOSYA</h4>
          <p>Enerji projesine ait belgeler nerede? Zeynep'e mi ulaştı, yoksa biri yok etti mi?</p>
        </div>

        <div className="mystery-card">
          <h4>🩸 İKİNCİ KAN</h4>
          <p>Olay yerindeki ikinci kişiye ait kan kime ait?</p>
        </div>
      </div>

      <div className="suspect-chart">
        <h4>ŞÜPHELİ ANALİZİ</h4>
        <div className="suspect-bar" style={{ '--width': '70%' }}><span>MERAL: 70%</span></div>
        <div className="suspect-bar" style={{ '--width': '85%' }}><span>CAN: 85%</span></div>
        <div className="suspect-bar" style={{ '--width': '45%' }}><span>ELİF: 45%</span></div>
        <div className="suspect-bar" style={{ '--width': '60%' }}><span>HAKAN: 60%</span></div>
        <div className="suspect-bar" style={{ '--width': '50%' }}><span>KEMAL: 50%</span></div>
        <div className="suspect-bar" style={{ '--width': '40%' }}><span>ZEYNEP: 40%</span></div>
      </div>
    </div>
  ),

  7: (
    <div className="case-file">
      <h3 className="evidence-title">BÖLÜM 7: KATİL KİM?</h3>

      <p className="typewriter-text">
        Sisli Şehir'de gerilim dorukta. Dedektif Aras artık her şeyin sonuna yaklaştı. Kurban Adem Karaca'nın gizli yaşamı,
        geçmişteki sırlar ve gözlerden kaçan detaylar bir araya geldiğinde, gerçek yavaş yavaş yüzeye çıkıyor.
        Şüpheliler son kez sorguya alınıyor. Artık kaçacak yer yok.
      </p>

      <div className="testimonies">

        <div className="testimony-card contradiction">
          <h4>TAYFUN KOZAN - ESKİ İŞ ORTAĞI</h4>
          <p>
            "Adem'le geçmişte anlaşmazlıklarımız oldu ama onu öldürecek biri değilim. O gece şehir dışındaydım,
            bu yüzden orada olmadığım için bu suçlamaları kabul etmiyorum. Dostluklarımız bozulsa da, bu kadarına inanamıyorum."
          </p>
          <div className="note">📸 Kamera kaydı yok</div>
        </div>

        <div className="testimony-card important">
          <h4>MERAL KARACA - EŞ</h4>
          <p>
            "O gece odamdaydım. Telefonla eski bir arkadaşımla konuştum, ama ne Adem'le ne de başka biriyle tartışmadım.
            Olanlar çok ağır, ama ben ona zarar vermek istemezdim. Bazen gerçekleri saklamak kendini korumaktır."
          </p>
          <div className="note">📞 Kayıtlı olmayan numara</div>
        </div>

        <div className="testimony-card">
          <h4>CAN KARACA - OĞUL</h4>
          <p>
            "Babamla aramızda sorunlar vardı, evet. Ama ona bunu yapacak biri değilim. O gece Bursa'daydım, arkadaşımın doğum günündeydim.
            Bana karşı suçlamalar ağır, ama ben masumum. Bu acı olayın içinde olmak istemiyorum."
          </p>
          <div className="note">🧬 DNA eşleşmesi var</div>
        </div>

        <div className="testimony-card contradiction">
          <h4>ELİF YAMAN - DANIŞMAN</h4>
          <p>
            "Adem Bey'in bana gönderdiği son mesajı anlamadım. Proje dosyalarını ben görmedim, elime hiç geçmedi.
            Kendi işimde yoğun biriydim ve olay gecesi konağın dışında kaldım. Ama hakkımda dönen dedikodular yıpratıcı."
          </p>
          <div className="note">📁 Dosya kayıp</div>
        </div>

        <div className="testimony-card contradiction">
          <h4>TAHİR AKÇAY - GİZLİ ORTAK</h4>
          <p>
            "Konağa o gece gitmedim, elektrik kesintisi falan yaşanmadı. Şüphelerin üzerine gelmesi adil değil.
            Benim de hayatımda zor dönemler var ama böyle bir suçlama kabul edilemez. Olayın gerçek sorumluları ortaya çıkmalı."
          </p>
          <div className="note">📉 Şüpheler elektrik kesintisine işaret ediyor</div>
        </div>

        <div className="testimony-card">
          <h4>ZEYNEP AKSOY - ARŞİV SORUMLUSU</h4>
          <p>
            "O gece evde değildim. Belgelerin kayboluşu beni de üzüyor. Kimseyle bağlantım yok, ancak her şeyi çözmek için elimden geleni yapıyorum."
          </p>
        </div>

        <div className="testimony-card">
          <h4>HAKAN SOYLU - DOKTOR</h4>
          <p>
            "Meral'in ilaçlarını zamanında bıraktım, bu benim görevimdi. Hastanın durumu zordu ama olay gecesi bende kayıtlar var.
            Herhangi bir şüpheli hareketim olmadı. Bilinmeyen ruj izi ve diğer detaylar beni de düşündürüyor."
          </p>
        </div>

        <div className="testimony-card">
          <h4>KEMAL GÜLER - ESKİ ORTAK</h4>
          <p>
            "Adem'le yollarımız ayrıldı, o gece aracım bozuldu ve yürüyerek eve döndüm. Bu işin içinde değilim, bana iftira atılıyor.
            Gerçek ortaya çıksın istiyorum, çünkü bu yalanların sonu yok."
          </p>
          <div className="note">🚗 Aracı olay yerinden 1 km uzaklıkta bulundu</div>
        </div>

      </div>

      <div className="theory-box">
        <h4>DEDEKTİF ANALİZİ</h4>
        <p>
          "Herkes kendi dünyasında haklı olduğunu savunuyor. Ama gerçek, herkesin çelişkileri ve gizli hikayeleri arasında gizli.
          Şimdi sizin kararınız önemli. İpuçlarını birleştirin ve katili ortaya çıkarın."
        </p>
      </div>

      <div className="suspect-chart">
        <h4>ŞÜPHELİ MOTİVASYONLARI</h4>
        <div className="suspect-bar" style={{ '--width': '75%' }}><span>MERAL: 75% (Aldatılma/Miras)</span></div>
        <div className="suspect-bar" style={{ '--width': '90%' }}><span>CAN: 90% (Nefret/Borçlar)</span></div>
        <div className="suspect-bar" style={{ '--width': '60%' }}><span>ELİF: 60% (İntikam)</span></div>
        <div className="suspect-bar" style={{ '--width': '40%' }}><span>TAHİR: 40% (Gizli Ortaklık)</span></div>
      </div>

      <div className="crime-scene">
        <h4>KARARINIZI VERİN:</h4>
        <p className="typewriter-text highlight">
          Kimin çelişkisi en büyük? Ruj izinin sahibi kim? Kilitli oda sırrı nedir?
          Tüm ipuçları elinizde - katil kim?
        </p>
      </div>
    </div>
  ),


};

export default function KayipMucevher() {
  const [activeSection, setActiveSection] = useState(1);
  const [isWide, setIsWide] = useState(false);

  // Handle navigation
  const goToNextSection = () => {
    if (activeSection < sectionTitles.length) {
      setActiveSection(activeSection + 1);
      window.scrollTo(0, 0);
    }
  };

  const goToPrevSection = () => {
    if (activeSection > 1) {
      setActiveSection(activeSection - 1);
      window.scrollTo(0, 0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToNextSection();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  return (
    <div className="detective-theme">
      <div className="fog-animation"></div>

      <header className="case-header">
        <h1>SİSLİ ŞEHİR CİNAYETİ</h1>
        <h2>DOSYA NO: #7428</h2>
        <div className="case-status">AKTİF ARAŞTIRMA</div>
      </header>

      {/* Mobile Navigation Dropdown */}
      <div className="mobile-nav">
        <select
          value={activeSection}
          onChange={(e) => {
            setActiveSection(Number(e.target.value));
            window.scrollTo(0, 0);
          }}
          className="mobile-select"
        >
          {sectionTitles.map((title, index) => (
            <option key={index} value={index + 1}>
              {title}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Navigation */}
      <nav className="case-nav">
        {sectionTitles.map((title, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveSection(index + 1);
              window.scrollTo(0, 0);
            }}
            className={activeSection === index + 1 ? 'active-case-tab' : 'case-tab'}
          >
            <span className="tab-number">{index + 1}.</span>
            {title.split('. ')[1]}
          </button>
        ))}
      </nav>

      <main className={`case-container ${isWide ? 'wide-mode' : ''}`}>
        {content[activeSection]}
      </main>

      {/* Navigation Buttons */}
      <div className="page-navigation">
        <button
          onClick={goToPrevSection}
          disabled={activeSection === 1}
          className="nav-button prev-button"
        >
          ← Önceki
        </button>

        <span className="page-indicator">
          Sayfa {activeSection}/{sectionTitles.length}
        </span>

        <button
          onClick={goToNextSection}
          disabled={activeSection === sectionTitles.length}
          className="nav-button next-button"
        >
          Sonraki →
        </button>
      </div>

      <footer className="detective-footer">
        <button
          className="view-toggle"
          onClick={() => setIsWide(!isWide)}
        >
          {isWide ? 'Dar Görünüm' : 'Geniş Görünüm'}
        </button>
        <p>© 2025 Sisli Şehir Polis Departmanı - Gizli Dosya</p>
      </footer>
    </div>
  );
}