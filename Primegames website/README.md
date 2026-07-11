# Avenor Roleplay - Website

Avenor Roleplay için özel tasarlanmış modern, karanlık tema ve neon aksanlı landing page web sitesi.

## Özellikler

- **Hero Section** - Büyük animasyonlu başlık, parçacık efekti, istatistik sayaçları
- **6 Özellik Kartı** - Araçlar, adalet, ekonomi, etkinlikler, organizasyonlar, UI/HUD
- **Showcase Bölümü** - Faction kartları (LSPD, EMS, GANG, MECHANIC) animasyonlu
- **İstatistikler** - Animasyonlu sayaçlar (oyuncu sayısı, slot, uptime, puan)
- **Nasıl Katılınır** - 3 adım kurulum rehberi, kopyalanabilir sunucu kodu
- **Kurallar** - 6 temel RP kuralı
- **Footer** - Sosyal medya, hızlı linkler, yasal bilgiler
- **Tamamen Responsive** - Mobil, tablet, masaüstü uyumlu
- **Easter Egg** - Konami kodu (↑↑↓↓←→←→BA) 🎮

## Teknolojiler

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (Intersection Observer, requestAnimationFrame)
- Google Fonts (Orbitron + Inter)

## Görseller

Görselleri kendi `images/` klasörüne ekleyip HTML'de referans edebilirsiniz. Şu an tüm görseller emoji ve SVG ikonları kullanıyor (telif hakkı yok).

Önerilen görseller eklenecek bölümler:
- `images/hero-bg.jpg` - GTA5/Los Santos arka plan
- `images/vehicles.jpg` - Araç vitrini
- `images/city.jpg` - Şehir görseli
- `images/characters.jpg` - Karakter oluşturma ekranı

## Kullanım

1. `index.html` dosyasını bir tarayıcıda açın
2. Ya da bir web sunucusuna (Apache, Nginx, Vercel, Netlify) yükleyin

## Özelleştirme

### Renkler
`styles.css` içinde `:root` değişkenlerini değiştir:

```css
--primary: #00d4ff;    /* Ana renk (Turkuaz) */
--secondary: #ff6b35;  /* İkincil renk (Turuncu) */
--accent: #7c3aed;     /* Vurgu (Mor) */
```

### İstatistikler
`index.html` içinde `data-target` değerlerini güncelle:

```html
<span class="stat-number" data-target="500">0</span>
```

### Sunucu Bağlantısı
`index.html` içinde FiveM sunucu bağlantı kodunu değiştir:

```html
<code class="step-code">connect cfx.re/join/avenor</code>
```

## Sunucu Bilgilerini Güncelle

Aşağıdaki linkleri kendi sunucunuza göre güncelleyin:

- Discord: `https://discord.gg/avenor`
- FiveM: `https://fivem.net/`
- UCP Panel: `#` (kendi panel adresiniz)
- Forum: `#`
- Store: `#`
- Wiki: `#`

## Tarayıcı Desteği

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Lisans

Avenor Roleplay özel kullanım için hazırlanmıştır. Rockstar Games ve Take-Two Interactive ile bağlantılı değildir.

---

**Hazırlayan:** Kimi AI  
**Tarih:** 2025
