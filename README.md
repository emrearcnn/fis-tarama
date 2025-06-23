# 📄 Fiş Tarama Uygulaması

Bu uygulama fişlerinizi fotoğraflayarak veya galeriden yükleyerek otomatik olarak önemli bilgileri çıkarır ve Excel'e aktarır.

## 🎯 Özellikler

- **📷 Fotoğraf çekme ve galeri erişimi**
- **🔤 OCR ile otomatik metin tanıma**
- **📊 Excel'e aktarma**
- **💾 Veri saklama**
- **📱 Mobil ve web desteği**

### Çıkarılan Bilgiler:
- ✅ VKN/TCKN numarası
- ✅ Vergi Dairesi
- ✅ Tarih
- ✅ Toplam Tutar
- ✅ KDV Tutarı

## 🚀 Hızlı Başlangıç

### 1. Python Backend'i Çalıştır

```bash
# Server klasörüne git
cd server

# Virtual environment'ı aktif et
source venv/bin/activate

# Python server'ı başlat
python app.py
```

Server `http://localhost:3001` adresinde çalışacak.

### 2. React Native App'i Çalıştır

**Yeni terminal açın** ve ana dizinde:

```bash
# Ana dizinde
npx expo start --clear
```

### 3. Uygulamayı Aç

#### Web'de Test:
- Tarayıcıda `http://localhost:8084` adresine git

#### Mobil'de Test:
- **iOS:** Kamera uygulaması ile QR kodu tara
- **Android:** Expo Go uygulaması ile QR kodu tara

## 📱 Kullanım

1. **📂 Galeriden Seç** veya **📷 Fotoğraf Çek**
2. Fiş otomatik olarak işlenir
3. Çıkarılan bilgileri kontrol edin
4. **📊 Excel'e Aktar** butonuyla verileri indirin

## 🛠️ Kurulum (İlk Kez)

### Gereksinimler:
- Python 3.8+
- Node.js 18+
- Tesseract OCR

### Kurulum Adımları:

#### 1. Tesseract OCR Kurulumu:
```bash
# macOS için
brew install tesseract
brew install tesseract-lang
```

#### 2. Python Bağımlılıkları:
```bash
cd server
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

#### 3. Node.js Bağımlılıkları:
```bash
# Ana dizinde
npm install
```

## 🔧 Sorun Giderme

### API Bağlantı Sorunu:
IP adresini kontrol edin:
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

Sonra şu dosyalardaki IP adresini güncelleyin:
- `app/services/api.ts`
- `app/process.tsx`

### Port Kullanımda Hatası:
```bash
# Kullanılan portu bulun
lsof -i :3001

# Process'i sonlandırın
kill -9 [PID]
```

### Cache Sorunu:
```bash
# Metro cache temizle
npx expo start --clear

# NPM cache temizle
npm cache clean --force
```

## 📁 Proje Yapısı

```
├── app/                    # React Native uygulaması
│   ├── index.tsx          # Ana sayfa
│   ├── process.tsx        # Fiş işleme sayfası
│   └── services/api.ts    # API servisleri
├── server/                # Python Flask backend
│   ├── app.py            # Ana server dosyası
│   ├── requirements.txt  # Python bağımlılıkları
│   └── venv/             # Virtual environment
└── assets/               # Medya dosyaları
```

## 📞 Destek

### Yaygın Hatalar:
- **Server Error:** Python server çalışıyor mu kontrol edin
- **Network Error:** IP adresi doğru mu kontrol edin
- **OCR Error:** Tesseract kurulu mu kontrol edin

### Debug için:
- Browser Console (F12)
- Python Terminal Output
- Expo Developer Tools

---

**🎉 Artık fiş tarama uygulamanız kullanıma hazır!**

*React Native/Expo ve Python Flask teknolojileri kullanılarak geliştirilmiştir.*
