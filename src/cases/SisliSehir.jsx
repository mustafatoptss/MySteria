import React, { useState } from 'react';
import './SisliSehir.css'

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
    Sisli Şehir, İstanbul’un 200 km kuzeydoğusunda, ormanlarla çevrili, kendi içine kapanmış bir kasaba. Sanayileşmemiş, ama enerji kaynakları açısından stratejik bir bölge. 
    <span className="highlight">1980'lerden bu yana çözülememiş üç faili meçhul cinayet</span>, halk arasında “Sisli Lanet” olarak anılmakta. Bu lanet, her kuşakta başka bir yüzle yeniden ortaya çıkıyor.
  </p>

  <p className="typewriter-text">
    <strong>26 Mart gecesi</strong>, Sisli Şehir’in en zengin adamı <span className="highlight">Adem Karaca</span>, konağındaki özel odasında ölü bulundu. Bu cinayet, yalnızca bireysel bir intikam değil, 
    kasabanın 30 yıllık karanlık sırlarının yeniden su yüzüne çıkışına işaret ediyordu. Adem, devlet destekli dev bir enerji projesiyle Sisli Şehir’in kaderini değiştirmek üzereydi.
  </p>

  <p className="typewriter-text">
    Ancak proje, kasabanın kaderi kadar halkın da vicdanını ikiye böldü. Topraklarını atalarından miras sayan köylüler, projeye karşı çıktılar. Öte yandan, <strong>Karaca ailesi içinde yıllardır birikmiş kırgınlıklar ve ihanetler</strong> bu süreçte gün yüzüne çıktı. 
    Adem’in 2018’de kaybolan eski ortağı <strong>Haluk Kılıç</strong> hâlâ kayıptı; cesedi hiç bulunamadı. Haluk’un kızı <strong>Elif Yaman</strong>, şimdi ironik biçimde Adem’in projelerinde danışmanlık yapıyor.
  </p>

  <p className="typewriter-text">
    <strong>Adem Karaca'nın özel hayatı</strong> da en az iş yaşamı kadar karmaşıktı. Eşi Meral Karaca, kasabanın eski tiyatro yıldızı, hâlâ görkemli ve etkileyici. Ancak evlilikleri çoktan bitmiş, konakta ayrı odalarda yaşamaya başlamışlardı. 
    Son iki yılda <span className="highlight">şüpheli otel kayıtları, yurtdışına yapılan banka transferleri</span> tespit edildi. Ölümünden bir hafta önce Adem'in gizli telefonundan gönderilen şifreli mesaj dikkat çekici: 
    <em>“Dosya elimde. Tek şartım: Sessizlik.”</em>
  </p>

  <p className="typewriter-text">
    Ailenin tek oğlu <strong>Can Karaca</strong>, İstanbul’da gösterişli ama savurgan bir hayat sürüyordu. Babasıyla ilişkisi yıllardır gergindi. Üniversiteyi yarıda bırakmış, iş hayatında tutunamamıştı. 
    Son dönemde <strong>yüksek miktarda borç</strong> biriktirmişti. Bazı kaynaklar, Adem’in miras planında Can’a yer vermediğini, hatta mirastan tamamen men etmeyi düşündüğünü iddia ediyor.
  </p>

  <div className="character-profiles">
    <div className="profile-card suspect">
      <h4>ADEM KARACA (KURBAN)</h4>
      <p>55 yaşında, enerjik, hırslı ve hesapçı. Devletle bağlantılı enerji projeleri yürütüyordu. Kasabalılar için ya kurtarıcıydı ya da onların topraklarını elinden almak isteyen bir yabancı.</p>
      <div className="motive-tag">PROJE ÇIKARLARI / GİZLİ DÜŞMANLAR</div>
    </div>

    <div className="profile-card">
      <h4>MERAL KARACA (EŞİ)</h4>
      <p>Adem’le evliliği resmen devam etse de yıllardır duygusal olarak bitmişti. Konakta ayrı yaşıyorlardı. Meral’in kasaba dışı gizli ilişkileri ve hesabına aktarılan şüpheli paralar, onu olayın odak noktası haline getiriyor.</p>
      <div className="motive-tag">MİRAS / ALDATILMA / GİZLİ AŞK</div>
    </div>

    <div className="profile-card suspect">
      <h4>CAN KARACA (OĞUL)</h4>
      <p>İsyankâr, disiplinsiz, babasının gölgesinde kalmış bir genç. Adem’in katı kurallarına karşı çıktı; miras beklentisi onun son umuduydu. Ancak dedikodulara göre bu umut da sönmek üzereydi.</p>
      <div className="motive-tag">MALİ SIKINTI / NEFRET / DIŞLANMA</div>
    </div>

    <div className="profile-card">
      <h4>ELİF YAMAN (DANIŞMAN)</h4>
      <p>Babası Haluk’un kaybolmasından Adem’i sorumlu tutan, yüzeyde sakin ama içinde intikam ateşi yanan biri. Projeye son altı ayda dahil oldu ama ne için çalıştığı tam olarak bilinmiyor.</p>
      <div className="motive-tag">İNTİKAM / TEHDİT / GİZLİ BAĞLAR</div>
    </div>

    <div className="profile-card">
      <h4>TAHİR AKÇAY (POLİS MEMURU)</h4>
      <p>Yıllardır Sisli Şehir'de görevli. Sessiz, kurallara bağlı görünse de, Adem’le geçmişte iş bağlantısı olduğu iddia ediliyor. Cinayet gecesi görevde değildi ve polis kayıtlarında bazı veri açıkları tespit edildi.</p>
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
  </div>

  <div className="theory-box">
    <h4>DEDEKTİF GÖRÜŞÜ</h4>
    <p>"Bu sadece bir cinayet değil. Sisli Şehir’de yıllardır gömülü sırların yüzeye çıktığı bir hesaplaşma gecesiydi. Herkesin bir geçmişi var ve her bağın bir bedeli. Bu kasabada sessizlik, sadece mezar taşlarında hüküm sürüyor."</p>
  </div>
</div>

),


  2: (
    <div className="case-file">
      <h3 className="evidence-title">KANLI GECENİN KRONOLOJİSİ</h3>
      
      <div className="timeline">
        <div className="timeline-event critical">
          <div className="time">23:00</div>
          <div className="event">Toplantı başlıyor. Gerginlik yüksek.</div>
        </div>
        <div className="timeline-event">
          <div className="time">23:15</div>
          <div className="event">Can babasıyla sert tartışma yaşıyor.</div>
        </div>
        <div className="timeline-event important">
          <div className="time">23:30</div>
          <div className="event">Meral gizemli telefon görüşmesi yapıyor.</div>
        </div>
        <div className="timeline-event critical">
          <div className="time">23:45</div>
          <div className="event">Işıklar kesiliyor (5 dakika).</div>
        </div>
        <div className="timeline-event red">
          <div className="time">00:00</div>
          <div className="event">Adem'in odasından silah sesi duyuluyor.</div>
        </div>
        <div className="timeline-event">
          <div className="time">00:15</div>
          <div className="event">Ceset bulunuyor.</div>
        </div>
      </div>
      
      <div className="crime-scene">
        <h4>OLAY YERİ İNCELEMESİ</h4>
        <ul className="evidence-list">
          <li>🔒 Kilitli oda (içeriden)</li>
          <li>🩸 Sağ elde boğuşma izleri</li>
          <li>💼 Kayıp dosya</li>
          <li>📱 Kırık telefon (Adem'e ait)</li>
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
      </div>
      
      <div className="report-detail">
        <span>Ölüm Zamanı:</span>
        <strong>23:45 - 00:10 arası (vücut ısısı + rigor mortis)</strong>
      </div>

      <div className="report-detail">
        <span>Vücut Üzerindeki Diğer Bulgular:</span>
        <ul>
          <li>Sağ elde tırnak izleri (DNA: Can Karaca)</li>
          <li>Sol omuzda çürük (yaklaşık 4 saat önce oluşmuş – fiziksel tartışma)</li>
          <li>Sol bilekte taze çizik (kadın tırnağına benzer iz – DNA eşleşmesi bekleniyor)</li>
          <li>Gömlek yakasında ruj izi (Meral'e ait değil)</li>
        </ul>
      </div>

      <div className="report-detail">
        <span>Kan Tahlili:</span>
        <strong>Alkol yok, düşük doz anti-depresan kalıntısı</strong>
      </div>

      <div className="report-detail">
        <span>Silah Tipi:</span>
        <strong>.38 kalibre Smith & Wesson – kurbanın ruhsatlı silahı – kayıp</strong>
      </div>
    </div>

    <div className="forensic-note">
      <h4>ADLİ UZMAN NOTU:</h4>
      <p>"Kurban fiziksel mücadele vermiş. Sağ eldeki tırnak izleri Can Karaca'ya ait. Ancak sol bilekteki iz yeni ve farklı DNA içeriyor. Cinayetten birkaç saat önce biriyle tartışmış, bu Meral ya da Elif olabilir."</p>
      <p>"Gömlek yakasında bulunan ruj izi Meral'e ait değil. Kurban cinayet gecesi başka biriyle temastaydı. Bu kişinin kimliği henüz net değil."</p>
    </div>

    <div className="relationship-analysis">
      <h4>İLİŞKİ AĞI VE GİZLİ BAĞLANTILAR</h4>
      <ul className="evidence-list">
        <li>🧬 Can ile fiziksel temas kesin, ama ölüm anına ait değil (öncesinde boğuşma olabilir)</li>
        <li>🧬 Meral’in tırnak DNA’sı sol bilekteki çizikte %60 olasılıkla eşleşiyor</li>
        <li>📞 Kurban cinayet öncesi saat 22:30’da Elif Yaman’a kısa bir mesaj atmış: “Sakın konuşma.”</li>
        <li>📄 Kurbanın cep defterinde “H.K. - %12 pay yeterli” notu bulunmuş (muhtemel şantaj/ortak)</li>
      </ul>
    </div>

    <div className="theory-box">
      <h4>DEDEKTİF NOTU:</h4>
      <p>“Kurban ölüm gecesi birkaç cephede baskı altındaydı: Can'la mali çatışma, Meral'le sadakat sorunu, Elif'le karanlık bir sır... ve dosyada adı geçmeyen bir üçüncü şahıs. Ruj izinin sahibi kim? Bu cinayet belki de yalnızca bir kişiye ait değil.”</p>
    </div>
  </div>
),


  4: (
    <div className="case-file">
      <h3 className="evidence-title">TANIK İFADELERİ</h3>
      
      <div className="testimonies">
        <div className="testimony-card contradiction">
          <h4>MERAL KARACA</h4>
          <p>"O gece odamdaydım. Telefonla konuştuğum kişi eski bir arkadaşım."</p>
          <div className="note">📞 Telefon kayıtları uyuşmuyor</div>
        </div>
        
        <div className="testimony-card">
          <h4>CAN KARACA</h4>
          <p>"Şehir dışındaydım. Arkadaşım Ali beni arayabilir."</p>
          <div className="note">🚗 Plaka kamerası görüntüsü yok</div>
        </div>

        <div className="testimony-card important">
          <h4>AYŞE KAYA (Temizlikçi)</h4>
          <p>"Merdivenlerde birini gördüm ama kim olduğunu seçemedim. Havluda kan vardı."</p>
          <div className="note">🩸 Kan Adem'e ait değil</div>
        </div>

        <div className="testimony-card">
          <h4>DR. HAKAN SOYLU</h4>
          <p>"Meral'in psikolojik durumu kötüydü, gece ona ilaç verdim."</p>
          <div className="note">💊 Reçete zamanı uyuşmuyor</div>
        </div>

        <div className="testimony-card contradiction">
          <h4>ZEYNEP AKSOY</h4>
          <p>"Cinayetten önce Adem bana bazı belgeler verecekti ama buluşamadık."</p>
          <div className="note">📂 Dosya kayıp, son sinyal Adem’in telefonundan</div>
        </div>

        <div className="testimony-card">
          <h4>KEMAL GÜLER</h4>
          <p>"Onun ölümü bana hiçbir şey kazandırmaz. Unuttum gitti."</p>
          <div className="note">💼 Aracı olay yerinden 1 km uzakta bulundu</div>
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
          <p>Enerji projesine ait belgeler nerede? Zeynep’e mi ulaştı, yoksa biri yok etti mi?</p>
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
        <p>"Adem'le geçmişte anlaşmazlıklarımız oldu ama onu öldürecek biri değilim. O gece şehir dışındaydım."</p>
        <div className="note">📸 Kamera kaydı yok</div>
      </div>

      <div className="testimony-card important">
        <h4>MERAL KARACA - EŞ</h4>
        <p>"O gece odamdaydım. Telefonla konuştuğum kişi eski bir arkadaşımdı."</p>
        <div className="note">📞 Kayıtlı olmayan numara</div>
      </div>

      <div className="testimony-card">
        <h4>CAN KARACA - OĞUL</h4>
        <p>"Babamla tartıştık ama öldürmedim. Zaten mirastan pay alacağım."</p>
        <div className="note">🧬 DNA eşleşmesi var</div>
      </div>

      <div className="testimony-card contradiction">
        <h4>ELİF YAMAN - DANIŞMAN</h4>
        <p>"Adem Bey'in son mesajını anlamadım. Proje dosyalarını hiç görmedim."</p>
        <div className="note">📁 Dosya kayıp</div>
      </div>
    </div>

    <div className="forensic-note">
      <h4>ADLİ TIP SON BULGULAR:</h4>
      <ul className="evidence-list">
        <li>🧬 Kurbanın tırnaklarında Can'ın DNA'sı (%92 eşleşme)</li>
        <li>👔 Gömlek yakasında bilinmeyen ruj izi</li>
        <li>🔍 Kayıp silahın son kullanım izi (6 ay önce)</li>
        <li>📝 Adem'in notu: "H.K. - %12 pay yeterli"</li>
      </ul>
    </div>

    <div className="theory-box">
      <h4>DEDEKTİF ANALİZİ</h4>
      <p>"Herkesin bir sırrı var. Katil hem fiziksel hem duygusal olarak Adem'e yakın biri. İpuçlar birleştirildiğinde bir kişi diğerlerinden daha fazla çelişiyor."</p>
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
)

};

export default function SisliSehirStory() {
  const [activeSection, setActiveSection] = useState(1);
  const [isWide, setIsWide] = useState(false);

  return (
    <div className="detective-theme">
      <div className="fog-animation"></div>
      
      <header className="case-header">
        <h1>SİSLİ ŞEHİR CİNAYETİ</h1>
        <h2>DOSYA NO: #7428</h2>
        <div className="case-status">AKTİF ARAŞTIRMA</div>
      </header>
      
      <nav className="case-nav">
        {sectionTitles.map((title, index) => (
          <button
            key={index}
            onClick={() => setActiveSection(index + 1)}
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