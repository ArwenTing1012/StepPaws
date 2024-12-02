import React from 'react';
import { Link } from 'react-router-dom';

const PetStylist = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">寵物造型師</h2>
        
        {/* 寵物造型師的內容 */}
        <div className="space-y-4">
          <p className="text-gray-600">
            我們的專業寵物造型師將為您的寵物提供最優質的服務。
          </p>
        </div>
        
        {/* 下載 APP 提示區塊 */}
        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400 text-xl">💡</span>
            <span className="font-medium">提升 3D 模型精準度</span>
          </div>
          <div className="text-sm text-gray-600 mb-3">
            下載我們的寵物拍攝 App，獲得更精準的 3D 模型效果！
          </div>
          <Link 
            to="/downloads/app" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <span className="mr-2">⬇️</span>
            下載 App
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetStylist;