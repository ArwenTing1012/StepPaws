import React from 'react';
import { Button } from './button';
import { Upload } from 'lucide-react';

export const ImageUpload = ({ label, onImageUpload, sampleImageSrc }) => {
  const handleUpload = async (file) => {
    // 基本圖片驗證
    const isValid = await validateBasicImage(file);
    if (!isValid) {
      alert('請確保照片清晰且包含寵物');
      return;
    }
    onImageUpload(file);
  };

  const validateBasicImage = async (file) => {
    // 基本圖片檢查（大小、格式等）
    const validTypes = ['image/jpeg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      return false;
    }
    
    // 檢查圖片大小（建議 5MB 以內）
    if (file.size > 5 * 1024 * 1024) {
      return false;
    }

    return true;
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center justify-center w-full h-[200px] border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-8 h-8 mb-4 text-gray-500" />
          <p className="mb-2 text-sm text-gray-500">{label}</p>
        </div>
        <Button variant="outline" className="relative">
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleUpload}
            accept="image/*"
          />
          點擊或拖曳上傳
        </Button>
      </div>
      {sampleImageSrc && (
        <div className="flex items-center justify-center">
          <div className="relative group">
            <img 
              src={sampleImageSrc} 
              alt="參考圖" 
              className="w-32 h-32 object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded">參考圖</span>
            </div>
          </div>
        </div>
      )}
      <div className="photo-tips">
        <ul>
          <li>請確保光線充足</li>
          <li>使用淺色背景</li>
          <li>確保寵物完整入鏡</li>
        </ul>
      </div>
    </div>
  );
};