import { Platform } from 'react-native';

// Mac'inizin local IP'si
const API_URL = Platform.select({
  ios: 'http://192.168.1.3:3001',
  android: 'http://192.168.1.3:3001',
  default: 'http://localhost:3001', // Web için localhost
});

export interface ReceiptData {
  'Dosya Adı': string;
  'VKN/TCKN': string;
  'Vergi Dairesi': string;
  'Tarih': string;
  'Toplam Tutar': string;
  'KDV Tutarı': string;
}

export const processReceipt = async (imageUri: string): Promise<ReceiptData> => {
  try {
    console.log('Processing receipt with URI:', imageUri);
    console.log('API URL:', API_URL);
    console.log('Platform:', Platform.OS);
    
    // Base64'e çevir
    console.log('Fetching image from URI...');
    const response = await fetch(imageUri);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }
    
    console.log('Converting to blob...');
    const blob = await response.blob();
    console.log('Blob size:', blob.size);
    
    // Eğer resim çok büyükse (5MB üstü) uyarı ver
    if (blob.size > 5 * 1024 * 1024) {
      console.warn('Large image detected:', blob.size, 'bytes');
    }
    
    const reader = new FileReader();
    
    const base64 = await new Promise<string>((resolve: (value: string) => void, reject: (reason?: any) => void) => {
      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String.split(',')[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

    console.log('Image converted to base64, length:', base64.length);

    // API'ye gönder - timeout ve retry logic
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 saniye timeout
    
    const apiResponse = await fetch(`${API_URL}/process-receipt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: base64 }),
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);

    console.log('API Response status:', apiResponse.status);

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error('API Error:', errorText);
      throw new Error(`API request failed: ${apiResponse.status} - ${errorText}`);
    }

    const data = await apiResponse.json();
    console.log('API Response data:', data);
    return data;
  } catch (error) {
    console.error('Error processing receipt:', error);
    throw error;
  }
}; 