import React from 'react';
import { Download } from 'lucide-react';

const AppDownloadBanner = () => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">💡 提升 3D 模型精準度</h3>
          <p className="text-sm text-gray-600">
            下載我們的寵物拍攝 App，獲得更精準的 3D 模型效果！
          </p>
        </div>
        <button 
          className="px-4 py-2 border rounded-lg flex items-center hover:bg-white"
          onClick={() => window.open('您的 App 下載連結', '_blank')}
        >
          <Download className="w-4 h-4 mr-2" />
          下載 App
        </button>
      </div>
    </div>
  );
};

export default AppDownloadBanner;