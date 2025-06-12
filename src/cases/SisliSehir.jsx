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
    <h3 className="evidence-title">SİSLİ ŞEHRİN KARANLIK TARİHİ</h3>

    <p className="typewriter-text">
      Sisli Şehir, İstanbul'un 200 km kuzeydoğusunda, ormanlarla çevrili, kendi içine kapanmış bir kasaba. Sanayileşmemiş, ama enerji kaynakları açısından stratejik bir bölge. 
      <span className="highlight">1980'lerden bu yana çözülememiş üç faili meçhul cinayet</span>, halk arasında "Sisli Lanet" olarak anılmakta. Bu lanet, her kuşakta başka bir yüzle yeniden ortaya çıkıyor.
    </p>

    <p className="typewriter-text">
      <strong>26 Mart gecesi</strong>, Sisli Şehir'in en zengin adamı <span className="highlight">Adem Karaca</span>, konağındaki özel odasında ölü bulundu. Bu cinayet, yalnızca bireysel bir intikam değil, 
      kasabanın 30 yıllık karanlık sırlarının yeniden su yüzüne çıkışına işaret ediyordu. Adem, devlet destekli dev bir enerji projesiyle Sisli Şehir'in kaderini değiştirmek üzereydi.
    </p>

    <p className="typewriter-text">
      Ancak proje, kasabanın kaderi kadar halkın da vicdanını ikiye böldü. Topraklarını atalarından miras sayan köylüler, projeye karşı çıktılar. Öte yandan, <strong>Karaca ailesi içinde yıllardır birikmiş kırgınlıklar ve ihanetler</strong> bu süreçte gün yüzüne çıktı. 
      Adem'in 2018'de kaybolan eski ortağı <strong>Haluk Kılıç</strong> hâlâ kayıptı; cesedi hiç bulunamadı. Haluk'un kızı <strong>Elif Yaman</strong>, şimdi ironik biçimde Adem'in projelerinde danışmanlık yapıyor.
      <span className="highlight">Bazı söylentilere göre, Haluk’un kaybolmasından haftalar sonra Elif’in üniversite eğitimini aniden yarıda bırakıp kasabaya dönmesi, dikkat çekiciydi.</span>
    </p>

    <p className="typewriter-text">
      Kasabanın güvenliğinden sorumlu olan polis memuru <strong>Tahir Akçay</strong>, o gece resmi olarak görevde değildi. Ama bazı yerel söylentiler onun Adem'le geçmişte iş bağlantıları olduğuna işaret ediyor. Tahir bu iddiaları her zaman sessizlikle geçiştirdi.
      <span className="highlight">2020 yılına ait ortak banka dekontlarının "sistem arızası" nedeniyle sonradan kayıtlardan silindiği raporlandı.</span>
    </p>

    <p className="typewriter-text">
      <strong>Adem Karaca'nın özel hayatı</strong> da en az iş yaşamı kadar karmaşıktı. Eşi Meral Karaca, kasabanın eski tiyatro yıldızı, hâlâ görkemli ve etkileyici. Ancak evlilikleri çoktan bitmiş, konakta ayrı odalarda yaşamaya başlamışlardı. 
      Son iki yılda <span className="highlight">şüpheli otel kayıtları, yurtdışına yapılan banka transferleri</span> tespit edildi. Ölümünden bir hafta önce Adem'in gizli telefonundan gönderilen şifreli mesaj dikkat çekici: 
      <em>"Dosya elimde. Tek şartım: Sessizlik."</em>
    </p>

    <p className="typewriter-text">
      Adem'in cinayetten kısa süre önce görüştüğü bir diğer kişi, <strong>Zeynep Aksoy</strong>'du. Kasabanın eski sağlık ocağında sekreterlik yapmış, sessiz sakin bir kadındı. Ancak yakın zamanda Adem'le gizli belgeler üzerine bir görüşme ayarladığı öğrenildi. Görüşme gerçekleşmedi; belgeler ortada yok.
      <span className="highlight">Zeynep'in yıllar önce Haluk Kılıç'ın muayene geçmişinde kısa süreli kayıtları bulunduğu tespit edildi.</span>
    </p>

    <p className="typewriter-text">
      Bir diğer önemli figür <strong>Kemal Güler</strong>, Adem'in eski şoförü ve arazi satın alımlarında aracı olarak görev yapmıştı. Sessiz, dışarıdan sıradan biri gibi görünüyordu. Ancak ölüm gecesi arabası olay yerinin yakınında terk edilmiş halde bulundu.
      <span className="highlight">Konağın güvenlik sistemine bağlı olmayan servis girişinin anahtarını en son onun taşıdığı kayıtlara geçmiş.</span>
    </p>

    <p className="typewriter-text">
      Ailenin tek oğlu <strong>Can Karaca</strong>, İstanbul'da gösterişli ama savurgan bir hayat sürüyordu. Babasıyla ilişkisi yıllardır gergindi. Üniversiteyi yarıda bırakmış, iş hayatında tutunamamıştı. 
      Son dönemde <strong>yüksek miktarda borç</strong> biriktirmişti. Bazı kaynaklar, Adem'in miras planında Can'a yer vermediğini, hatta mirastan tamamen men etmeyi düşündüğünü iddia ediyor.
      <span className="highlight">Cinayetten bir gün önce Can’ın İstanbul'daki dairesinde bulunmayan biri tarafından giriş yapılmış – kamera görüntüleri eksik.</span>
    </p>

    <div className="character-profiles">
      <div className="profile-card suspect">
        <h4>ADEM KARACA (KURBAN)</h4>
        <p>55 yaşında, enerjik, hırslı ve hesapçı. Devletle bağlantılı enerji projeleri yürütüyordu. Kasabalılar için ya kurtarıcıydı ya da onların topraklarını elinden almak isteyen bir yabancı.</p>
        <div className="motive-tag">PROJE ÇIKARLARI / GİZLİ DÜŞMANLAR</div>
      </div>

      <div className="profile-card">
        <h4>MERAL KARACA (EŞİ)</h4>
        <p>Adem'le evliliği resmen devam etse de yıllardır duygusal olarak bitmişti. Konakta ayrı yaşıyorlardı. Meral'in kasaba dışı gizli ilişkileri ve hesabına aktarılan şüpheli paralar, onu olayın odak noktası haline getiriyor.</p>
        <div className="motive-tag">MİRAS / ALDATILMA / GİZLİ AŞK</div>
      </div>

      <div className="profile-card suspect">
        <h4>CAN KARACA (OĞUL)</h4>
        <p>İsyankâr, disiplinsiz, babasının gölgesinde kalmış bir genç. Adem'in katı kurallarına karşı çıktı; miras beklentisi onun son umuduydu. Ancak dedikodulara göre bu umut da sönmek üzereydi.</p>
        <div className="motive-tag">MALİ SIKINTI / NEFRET / DIŞLANMA</div>
      </div>

      <div className="profile-card">
        <h4>ELİF YAMAN (DANIŞMAN)</h4>
        <p>Babası Haluk'un kaybolmasından Adem'i sorumlu tutan, yüzeyde sakin ama içinde intikam ateşi yanan biri. Projeye son altı ayda dahil oldu ama ne için çalıştığı tam olarak bilinmiyor.</p>
        <div className="motive-tag">İNTİKAM / TEHDİT / GİZLİ BAĞLAR</div>
      </div>

      <div className="profile-card">
        <h4>TAHİR AKÇAY (POLİS MEMURU)</h4>
        <p>Yıllardır Sisli Şehir'de görevli. Sessiz, kurallara bağlı görünse de, Adem'le geçmişte iş bağlantısı olduğu iddia ediliyor. Cinayet gecesi görevde değildi ve polis kayıtlarında bazı veri açıkları tespit edildi.</p>
        <div className="motive-tag">GİZLİ ORTAKLIK / KOLLUK İHMALİ</div>
      </div>
    </div>

    <div className="town-history">
      <h4>KASABA DOSYASI</h4>
      <ul className="evidence-list">
        <li>📁 1994: Ormanlık alanda ilk faili meçhul; aynı yıl Karaca ailesi konağı satın alıyor.</li>
        <li>📁 2012: Haluk Kılıç aniden ortadan kayboluyor. Aynı yıl enerji şirketinin mülkiyeti Karaca ailesine geçiyor.</li>
<li>📁 2023: Projeye resmi onay çıkıyor, kasabada protestolar ve desteğin paralel ilerlediği bir kriz ortamı oluşuyor.</li>
<li>📁 2025 Mart: Cinayetten önceki iki gün boyunca konakta dört farklı kişi geceyi geçiriyor.</li>
</ul>
</div><div className="theory-box">
  <h4>DEDEKTİF GÖRÜŞÜ</h4>
  <p>"Bu sadece bir cinayet değil. Sisli Şehir'de yıllardır gömülü sırların yüzeye çıktığı bir hesaplaşma gecesiydi. Herkesin bir geçmişi var ve her bağın bir bedeli. Bu kasabada sessizlik, sadece mezar taşlarında hüküm sürüyor."</p>
</div>
</div> ),

  2: (
  <div className="case-file">
    <h3 className="evidence-title">KANLI GECENİN KRONOLOJİSİ</h3>
    
    <div className="timeline">
      <div className="timeline-event critical">
        <div className="time">23:00</div>
        <div className="event">
          Toplantı başlıyor. Gerginlik yüksek, birkaç kişi birbirine anlamsız bakışlar atıyor.
        </div>
      </div>
      <div className="timeline-event">
        <div className="time">23:15</div>
        <div className="event">Can babasıyla sert tartışma yaşıyor, sesi koridorda yankılanıyor.</div>
      </div>
      <div className="timeline-event important">
        <div className="time">23:30</div>
        <div className="event">Meral gizemli telefon görüşmesi yapıyor, yüzü solgun ve endişeli.</div>
      </div>
      <div className="timeline-event critical">
        <div className="time">23:45</div>
        <div className="event">
          Işıklar kesiliyor (5 dakika). Kesinti öncesinde jeneratörün birkaç saniyeliğine uğultusu duyuldu.
        </div>
      </div>
      <div className="timeline-event red">
        <div className="time">00:00</div>
        <div className="event">Adem'in odasından silah sesi duyuluyor. Odanın kapısında 2 dakika boyunca tuhaf sessizlik hakim.</div>
      </div>
      <div className="timeline-event">
        <div className="time">00:15</div>
        <div className="event">
          Ceset bulunuyor. Oda kapısının dışındaki toz izleri bozulmuş, biri panik halinde koşturmuş olabilir.
        </div>
      </div>
    </div>
    
    <div className="crime-scene">
      <h4>OLAY YERİ İNCELEMESİ</h4>
      <ul className="evidence-list">
        <li>
          🔦 <strong>Elektrik Kesintisi:</strong> Saat tam <strong>23:44</strong>'te başlayan 47 saniyelik kesinti kayıtlara geçti. Güvenlik kameraları bu sürede devre dışı kaldı. Jeneratör devreye girmedi. 
          <span className="highlight">Elektrik panosunda bir sigortanın bilinçli olarak gevşetildiği tespit edildi – sabote edilmiş gibi.</span>
        </li>
        <li>
          🚪 <strong>Adem'in Odasının Kapısı:</strong> İçerden kilitlenmiş gibi görünüyor. Ancak kilidin üzerinde mıknatısla oynanmış izler var. Kapı eşiğinde zemin tozu oynanmış, biri eğilmiş olabilir.
        </li>
        <li>
          🕳️ <strong>Servis Merdiveni:</strong> Konağın kullanılmayan arka servis merdiveninde hafif çamur izleri bulundu. Aynı izler bahçe zemininde de var ama bahçe kapısında kamera yok.
          <span className="highlight">Merdivenin yanında taze sigara izmariti bulundu. Kimse bu detayı açıklayamadı.</span>
        </li>
        <li>
          📎 <strong>Masa Üstü:</strong> Adem'in çalışma masasının üstü düzensiz. Açık bırakılmış dosyalar arasında bir proje sunumu ve el yazısıyla alınmış notlar var. 
          "Haluk Yaman" adı geçiyor, "Kuyu hattı", "Kayıp borular" gibi ibareler var. Notlar arasında Adem'in el yazısı dışında bir yazı tipi var – muhtemelen kadın el yazısı.
          <span className="highlight">Notlardaki kadın el yazısının, Meral ya da Elif’e ait olabileceği düşünülüyor.</span>
        </li>
        <li>
          🩸 <strong>Kan Lekesi:</strong> Yerdeki kanın büyük kısmı kurbanın başından geliyor. Ancak küçük bir damla da masanın sağ köşesine sıçramış, ilginçtir ki masa altında temizlenmiş bir kan izi daha var.
        </li>
        <li>
          🧴 <strong>Lavabo ve Havlu:</strong> Banyoda beyaz havlu üzerinde kan izleri var – test sonucu kadına ait kan (Elif). Lavabo kenarında sabun köpüğü taze ama silinmiş gibi. 
          Aynı banyoda bir adet tırnak törpüsü kırık şekilde çöp kutusunda bulundu.
          <span className="highlight">Tırnak törpüsünün kırılması, olay öncesi bir telaş yaşandığını gösteriyor olabilir.</span>
        </li>
        <li>
          🧤 <strong>Eldiven ve Koku:</strong> Oda zemininde ince kauçuk eldivene ait parçacıklar bulundu. Odanın köşesinde yoğun bir çamaşır suyu kokusu vardı – sadece o alan ıslaktı.
          <span className="highlight">Eldiven kullanılması, cinayetin planlı olduğunu düşündürüyor.</span>
        </li>
        <li>
          📱 <strong>Telefon:</strong> Adem'in telefonu yere düşmüş, ekran çatlamış. Son gönderilen mesaj saat <strong>23:46</strong>'da: "Sakın konuşma." Alıcısı belli değil, şifreleme kullanılmış.
          <span className="highlight">Mesaj saatinden sonra telefonun aktif olarak kullanıldığına dair kayıt yok.</span>
        </li>
        <li>
          🖐️ <strong>Fiziksel İzler:</strong> Adem'in sağ bileğinde bir tırnak izine benzer çizik, kolunda da bir morluk var – boğuşma ya da kendini savunma izlenimi yaratıyor.
        </li>
        <li>
          🪟 <strong>Pencere:</strong> Pencere kapalı ama kilidi gevşek. Dışardan girmiş biri için potansiyel rota ama pencere altındaki toprakta ayak izi yok.
        </li>
      </ul>
    </div>
  </div>
),


  3: (
  <div className="case-file">
    <h3 className="evidence-title">GENİŞLETİLMİŞ ADLİ TIP RAPORU</h3>

    <div className="autopsy-report">
      <div className="stamp">GİZLİ - GÜNCELLENMİŞ</div>

      <div className="report-detail">
        <span>Ölüm Nedeni:</span>
        <strong>Kafatasına sağ şakaktan tek atış (.38 kalibre), yakın mesafe (30-50 cm)</strong>
        <p className="detail-note">
          Kurbanın yüzündeki ifade, son anda yaşadığı şoku ve şaşkınlığı yansıtıyor.
        </p>
      </div>
      
      <div className="report-detail">
        <span>Ölüm Zamanı:</span>
        <strong>23:45 - 00:10 arası (vücut ısısı + rigor mortis)</strong>
        <p className="detail-note">
          Bu aralık, ışıkların kesildiği ve silah sesinin duyulduğu zamana denk geliyor.
        </p>
      </div>

      <div className="report-detail">
        <span>Vücut Üzerindeki Diğer Bulgular:</span>
        <ul>
          <li>Sağ elde tırnak izleri (DNA: Can Karaca)</li>
          <li>Sol omuzda çürük (yaklaşık 4 saat önce oluşmuş – fiziksel tartışma)</li>
          <li>Sol bilekte taze çizik (kadın tırnağına benzer iz – DNA eşleşmesi bekleniyor)</li>
          <li>Gömlek yakasında ruj izi (Meral'e ait değil, rengi farklı, koyu bordo)</li>
        </ul>
        <p className="detail-note">
          Ruj izi kurbanla temas eden üçüncü kişinin varlığını kesinleştiriyor; bu kişi Meral ya da Elif değil.
        </p>
      </div>

      <div className="report-detail">
        <span>Kan Tahlili:</span>
        <strong>Alkol yok, düşük doz anti-depresan kalıntısı</strong>
        <p className="detail-note">
          Kurbanın sakin görünmeye çalıştığı, ancak psikolojik olarak zorlandığı izlenimi veriyor.
        </p>
      </div>

      <div className="report-detail">
        <span>Silah Tipi:</span>
        <strong>.38 kalibre Smith & Wesson – kurbanın ruhsatlı silahı – kayıp</strong>
        <p className="detail-note">
          Silahın kaybolması ve olay sonrası bulunamaması, içerden biri tarafından planlandığını düşündürüyor.
        </p>
      </div>
    </div>

    <div className="forensic-note">
      <h4>ADLİ UZMAN NOTU:</h4>
      <p>
        "Kurban fiziksel mücadele vermiş. Sağ eldeki tırnak izleri Can Karaca'ya ait. Ancak sol bilekteki iz yeni ve farklı DNA içeriyor. Cinayetten birkaç saat önce biriyle tartışmış, bu Meral ya da Elif olabilir."
      </p>
      <p>
        "Gömlek yakasında bulunan ruj izi Meral'e ait değil. Kurban cinayet gecesi başka biriyle temastaydı. Bu kişinin kimliği henüz net değil."
      </p>
      <p className="detail-note">
        Bu belirsizlik, olayın çok katmanlı ve planlı olduğunu gösteriyor.
      </p>
    </div>

    <div className="relationship-analysis">
      <h4>İLİŞKİ AĞI VE GİZLİ BAĞLANTILAR</h4>
      <ul className="evidence-list">
        <li>🧬 Can ile fiziksel temas kesin, ama ölüm anına ait değil (öncesinde boğuşma olabilir)</li>
        <li>🧬 Meral'in tırnak DNA'sı sol bilekteki çizikte %60 olasılıkla eşleşiyor</li>
        <li>📞 Kurban cinayet öncesi saat 22:30'da Elif Yaman'a kısa bir mesaj atmış: "Sakın konuşma."</li>
        <li>📄 Kurbanın cep defterinde "H.K. - %12 pay yeterli" notu bulunmuş (muhtemel şantaj/ortak)</li>
        <li>🕵️‍♂️ Şüpheli "H.K." kim? Dosyada adı geçmeyen, ama önemli bir gölge figür.</li>
      </ul>
    </div>

    <div className="theory-box">
      <h4>DEDEKTİF NOTU:</h4>
      <p>
        "Kurban ölüm gecesi birkaç cephede baskı altındaydı: Can'la mali çatışma, Meral'le sadakat sorunu, Elif'le karanlık bir sır... ve dosyada adı geçmeyen bir üçüncü şahıs. Ruj izinin sahibi kim? Bu cinayet belki de yalnızca bir kişiye ait değil."
      </p>
      <p className="detail-note">
        Dedektifin kafasındaki soru işaretleri artıyor; her şey göründüğünden çok daha karmaşık.
      </p>
    </div>
  </div>
),

 4: (
  <div className="case-file">
    <h3 className="evidence-title">TANIK İFADELERİ</h3>
    
    <div className="testimonies">
      <div className="testimony-card contradiction">
        <h4>MERAL KARACA</h4>
        <p>
          "O gece odamdan hiç çıkmadım. Saat 23:00 gibi eski bir arkadaşım aradı, adı Selin. Onunla yaklaşık 15 dakika konuştum. 
          Sonra uyuyamadım, ilacımı almak için banyoya geçtim. Işıklar kesildiğinde hâlâ odamdaydım. Ne bir ses duydum, ne de bir şey fark ettim. 
          Adem'le artık aramızda hiçbir şey kalmamıştı. O odada ne yaşandıysa, beni ilgilendirmez."
        </p>
        <div className="note">📞 Telefon kayıtları uyuşmuyor – Aranan numara kayıtlı değil, Selin adında biri bulunamadı.</div>
        <p className="detail-note">
          Meral'in ifadesindeki telefon görüşmesi, dijital kayıtlarla çelişiyor ve uydurma olma ihtimali yüksek.
        </p>
      </div>

      <div className="testimony-card">
        <h4>CAN KARACA</h4>
        <p>
          "Ben o gece İstanbul dışındaydım. Bursa'da bir arkadaşımın doğum günü partisine katıldım. Geceyi orada geçirdim, sabah yola çıktım. 
          Babamla uzun süredir aramız kötüydü ama öldürmem için bir sebebim yok. Mirasla ilgili dedikodulara gelince, bilmiyorum... 
          Belki onun için yeterli olmadım. Ama kimse bana onun ölümünü yükleyemez."
        </p>
        <div className="note">🚗 Plaka kamerası görüntüsü bulunamadı – alibi belirsiz, aracın hareketi takip edilemiyor.</div>
        <p className="detail-note">
          Can'ın seyahat ettiği iddia edilen güzergah üzerinde kameralar çalışmıyor; bu alibi kırılgan.
        </p>
      </div>

      <div className="testimony-card important">
        <h4>AYŞE KAYA (Temizlikçi)</h4>
        <p>
          "O gece saat tam 23:50 civarıydı sanırım. Merdivenlerde birini gördüm ama karanlıktı, yüzünü seçemedim. 
          Yine de kadındı diye hatırlıyorum. Elinde beyaz bir havlu vardı, aceleyle aşağı indi. 
          Sabah banyoda aynı havluyu buldum, üstünde az da olsa kan vardı. Ama kime ait bilmiyorum."
        </p>
        <div className="note">🩸 Kan Adem'e ait değil – laboratuvar sonucu bekleniyor, başka biri yaralanmış olabilir.</div>
        <p className="detail-note">
          Merdivenlerdeki kişi gizemini koruyor; olası kaçış ya da gizli ziyaret izleri var.
        </p>
      </div>

      <div className="testimony-card">
        <h4>DR. HAKAN SOYLU</h4>
        <p>
          "Meral Hanım son zamanlarda sık sık uykusuzluk ve panik atak şikayetleriyle geliyordu. O gece bana mesaj attı, ilacı isteyince 
          konaktan geçip bir doz bıraktım. Saat 22:00 civarıydı. Sonrasında başka kimseyle temasım olmadı. İfademdeki saatle reçete saati arasında fark varsa, 
          hastanın aciliyeti nedeniyle önce ilacı verdim, sonra reçeteyi yazdım."
        </p>
        <div className="note">💊 Reçete kaydı saat 23:30 – resmi kayıtlar ile doktorun beyanı arasında saat farkı var.</div>
        <p className="detail-note">
          Bu uyuşmazlık, Meral'in ilaç alım zamanında manipülasyon ya da yalan söyleme ihtimalini gündeme getiriyor.
        </p>
      </div>

      <div className="testimony-card contradiction">
        <h4>ZEYNEP AKSOY</h4>
        <p>
          "Adem Bey birkaç gün önce benimle iletişime geçti. Bana enerji projesine dair bazı belgeleri vermek istediğini söyledi. 
          Anlaştığımız gibi saat 22:00'de konağa gelecektim ama sonra gelmememi söyledi. Ertesi sabah belgeleri almak üzere tekrar haberleşecektik. 
          Ama o sabah... haberini aldım. Belgeler ortada yok, bana ulaşmadı."
        </p>
        <div className="note">📂 Dosya hâlâ kayıp – son sinyal Adem'in telefonundan geldi, şüpheli iletişim var.</div>
        <p className="detail-note">
          Zeynep'in ifadesi, kayıp belgeler ve Adem'in gizemli sırları arasındaki bağlantıyı artırıyor.
        </p>
      </div>

      <div className="testimony-card">
        <h4>KEMAL GÜLER</h4>
        <p>
          "Ben bu işin içindeymişim gibi gösterilmeye çalışılıyor. Adem'le aramızda geçmişte bir ortaklık olmuştu, doğru. 
          Ama yıllar önce yollarımız ayrıldı. O geceden önce bir aydır görüşmemiştik. Cinayet gecesi arabam arızalanmıştı, 
          orman yoluna yakın bir yerde bırakıp eve yürüdüm. Onun ölümü bana ne kazandırır ki? Bitti gitti o dönem."
        </p>
        <div className="note">💼 Aracı olay yerinden 1 km uzaklıkta terkedilmiş bulundu – teknik inceleme devam ediyor.</div>
        <p className="detail-note">
          Kemal'in alibisi, aracın terk edildiği yerdeki kamera ve tanık ifadeleriyle desteklenmeye çalışılıyor.
        </p>
      </div>
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
        <div className="suspect-bar" style={{'--width': '70%'}}><span>MERAL: 70%</span></div>
        <div className="suspect-bar" style={{'--width': '85%'}}><span>CAN: 85%</span></div>
        <div className="suspect-bar" style={{'--width': '45%'}}><span>ELİF: 45%</span></div>
        <div className="suspect-bar" style={{'--width': '60%'}}><span>HAKAN: 60%</span></div>
        <div className="suspect-bar" style={{'--width': '50%'}}><span>KEMAL: 50%</span></div>
        <div className="suspect-bar" style={{'--width': '40%'}}><span>ZEYNEP: 40%</span></div>
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
      <div className="suspect-bar" style={{'--width': '75%'}}><span>MERAL: 75% (Aldatılma/Miras)</span></div>
      <div className="suspect-bar" style={{'--width': '90%'}}><span>CAN: 90% (Nefret/Borçlar)</span></div>
      <div className="suspect-bar" style={{'--width': '60%'}}><span>ELİF: 60% (İntikam)</span></div>
      <div className="suspect-bar" style={{'--width': '40%'}}><span>TAHİR: 40% (Gizli Ortaklık)</span></div>
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

export default function SisliSehirStory() {
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