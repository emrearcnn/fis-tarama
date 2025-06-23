# 📄 Fiş Tarama Uygulaması - Kurulum ve Kullanım Rehberi

## 🎯 Proje Özeti
Bu uygulama fişlerinizi fotoğraflayarak veya galeriden yükleyerek otomatik olarak önemli bilgileri çıkarır ve Excel'e aktarır.

### ✅ Çıkarılan Bilgiler:
- **VKN/TCKN** numarası
- **Vergi Dairesi** adı
- **Tarih** bilgisi
- **Toplam Tutar**
- **KDV Tutarı**

## 🛠️ Sistem Gereksinimleri

### macOS için:
- Python 3.8+
- Node.js 18+
- Tesseract OCR
- Expo CLI

## 📦 Kurulum

### 1. Tesseract OCR Kurulumu
```bash
# Homebrew ile kurulum
brew install tesseract

# Türkçe dil paketi
brew install tesseract-lang
```

### 2. Python Backend Kurulumu
```bash
# Proje dizinine git
cd server

# Virtual environment oluştur
python -m venv venv

# Virtual environment'ı aktif et
source venv/bin/activate

# Bağımlılıkları yükle
pip install -r requirements.txt
```

### 3. React Native/Expo Kurulumu
```bash
# Ana dizine git
cd ..

# Node.js bağımlılıklarını yükle
npm install

# Expo CLI kurulumu (global)
npm install -g @expo/cli
```

## 🚀 Uygulamayı Çalıştırma

### 1. Python Backend'i Başlat
```bash
cd server
source venv/bin/activate
python app.py
```
Server `http://localhost:3001` adresinde çalışacak.

### 2. React Native Uygulamasını Başlat
```bash
# Ana dizinde
npm start
```

### 3. Uygulamayı Açma Seçenekleri:
- **Web:** Tarayıcıda `http://localhost:8081` adresine git
- **Mobil:** Expo Go uygulaması ile QR kodu tara
- **iOS Simulator:** `i` tuşuna bas
- **Android Emulator:** `a` tuşuna bas

## 📱 Kullanım

### 1. Fiş Fotoğrafı Çekme/Yükleme:
- **Galeriden Seç:** Mevcut bir fiş fotoğrafını seç
- **Fotoğraf Çek:** Kamera ile yeni fiş fotoğrafı çek

### 2. Otomatik İşleme:
- Uygulama fişi OCR ile analiz eder
- Gerekli bilgileri otomatik çıkarır
- Sonuçları ekranda gösterir

### 3. Excel'e Aktarma:
- "Excel'e Aktar" butonuna tıkla
- Web'de otomatik indirme başlar
- Mobilçde web sürümünü kullan

## 🔧 Geliştirme

### API Endpointleri:
- `GET /health` - Sistem durumu
- `POST /process-receipt` - Fiş işleme
- `GET /export-excel` - Excel export
- `GET /get-data` - Tüm veriler
- `DELETE /clear-data` - Verileri temizle

### Önemli Dosyalar:
- `server/app.py` - Python Flask API
- `app/services/api.ts` - Frontend API servisi
- `app/process.tsx` - Fiş işleme sayfası
- `app/index.tsx` - Ana sayfa

## 🔍 OCR Ayarları

### Regex Pattern'ları (server/app.py):
- **VKN/TCKN:** Çeşitli format desteği
- **Vergi Dairesi:** Türkçe vergi dairesi isimleri
- **Tarih:** Gün/Ay/Yıl formatları
- **Tutar:** Türk lirası formatları (1.234,56)
- **KDV:** KDV tutarı formatları

### Dil Desteği:
- Türkçe + İngilizce (tur+eng)
- Fallback: Sadece İngilizce

## 📊 Veri Saklama

### Format:
- JSON dosyası (`server/receipt_data.json`)
- Excel export (`xlsx` formatı)
- Timestamped kayıtlar

### Sütunlar:
1. ID
2. İşlem Tarihi
3. Dosya Adı
4. VKN/TCKN
5. Vergi Dairesi
6. Tarih
7. Toplam Tutar
8. KDV Tutarı

## 🐛 Sorun Giderme

### Python Server Sorunları:
```bash
# Tesseract yolu kontrol
which tesseract

# Dil paketi kontrol
tesseract --list-langs | grep tur

# Portun kullanılıp kullanılmadığını kontrol
lsof -i :3001
```

### Network Sorunları:
1. IP adresini kontrol et: `ifconfig`
2. API URL'lerini güncelle:
   - `app/services/api.ts`
   - `app/process.tsx`

### OCR Doğruluğu Artırma:
- Fotoğraf kalitesini artır
- Regex pattern'larını güncelle
- PSM (Page Segmentation Mode) ayarları

## 📞 Destek

### Hata Logları:
- Browser Console (F12)
- Python Terminal Output
- Expo Developer Tools

### Yaygın Hatalar:
1. **CORS Error:** IP adresi uyumsuzluğu
2. **OCR Error:** Tesseract kurulum sorunu  
3. **Network Error:** Server bağlantı sorunu

## 🚀 Geliştirme Önerileri

### Gelecek Özellikler:
- [ ] Batch processing (çoklu fiş)
- [ ] PDF desteği
- [ ] Veritabanı entegrasyonu
- [ ] User authentication
- [ ] Advanced OCR preprocessing
- [ ] Mobile Excel export

### Performans İyileştirmeleri:
- Image compression
- OCR caching
- Background processing
- Real-time preview

---

**⚡ Bu uygulama Tesseract OCR ve React Native/Expo teknolojileri kullanılarak geliştirilmiştir.** 