document.addEventListener("DOMContentLoaded", function() {
    const newsList = document.getElementById('news-list');

    // Tek bir haber verisi (sabittir, API kullanmıyoruz)
    const newsData = {
        title: "En yeni haberleri Almanist sunar😁",
        description: "Medusa Fidye Yazılımı ABD Kritik Altyapısını Hedef Alıyor... (Devamını oku...)",
        fullDescription: `1. Medusa Fidye Yazılımı ABD Kritik Altyapısını Hedef Alıyor
FBI, Medusa fidye yazılımının 2021'den bu yana 300'den fazla kritik altyapı kuruluşunu etkilediğini bildirdi. 2024'te siber suçlar nedeniyle toplamda 16,6 milyar dolar zarar oluştu.  
2. "SignalGate" Skandalı Sonrası Şifreli Mesajlaşma Uygulamalarına İlgi Artıyor  
ABD Savunma Bakanı'nın Signal üzerinden hassas bilgiler paylaştığı iddialarının ardından, Kibu ve Genasys Connect gibi güvenli mesajlaşma platformlarına talep arttı.  
3. Çin, ABD Hükümet Verilerini Hacker Forumlarında Paylaşıyor  
Bazı hacker forumlarında, Çinli aktörlerin ABD hükümetine ait verileri sızdırdığı iddiaları gündemde. Bu durum, siber casusluk endişelerini artırıyor.  
4. Texas'ta Su Arıtma Tesislerine Siber Saldırı  
Rusya bağlantılı hackerlar, 2024'te Texas'taki kırsal su arıtma tesislerine siber saldırılar düzenledi. Bu tür saldırılar, altyapı güvenliğini tehdit ediyor.  
5. Marks & Spencer, Siber Olay Nedeniyle Çalışanlarını Uyardı  
Marks & Spencer, bir siber olay nedeniyle temassız ödemelerde aksaklıklar yaşandığını ve çevrimiçi siparişlerin geciktiğini bildirdi. Şirket, verilerin güvende olduğunu ve olayın araştırıldığını açıkladı.`,
        link: "#"
    };

    // Haber kartını oluştur ve sayfaya ekle
    const newsCard = document.createElement('div');
    newsCard.classList.add('news-card');
    
    // Kısa açıklama ve "Devamını oku" linki
    newsCard.innerHTML = `
        <h3>${newsData.title}</h3>
        <p>${newsData.description}</p>
        <a href="#" class="read-more">Devamını oku...</a>
    `;
    
    // "Devamını oku" linkine tıklandığında tam açıklamayı göster
    newsCard.querySelector('.read-more').addEventListener('click', function(event) {
        event.preventDefault();
        alert(newsData.fullDescription);  // Tam açıklamayı bir popup ile göster
    });

    newsList.appendChild(newsCard);
});

// İletişim formu gönderme işlemi
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfa yenilenmesini engelle
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Mesajınız başarıyla gönderildi!\nAd: ${name}\nE-posta: ${email}\nMesaj: ${message}`);
        // Formu sıfırlama
        this.reset();
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
});
