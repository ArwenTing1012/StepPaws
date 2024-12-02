import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import headerBg from '../assets/header-bg.jpg';

export const Header = () => {
  return (
    <>
      <header 
        className="bg-white shadow-sm relative h-48"
        style={{ 
          backgroundImage: `url(${headerBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 24%',
          backgroundRepeat: 'no-repeat',
          width: '100%'
        }}
      >
        <div className="container mx-auto px-8 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold flex items-center">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-32 mr-18"
              />
              StepPaws.AI<br/>寵物3D模型生成器
            </Link>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center gap-4 bg-blue-50 px-4 py-2 rounded-lg">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">💡</span>
              <span className="font-medium">提升 3D 模型精準度</span>
            </div>
            <div className="text-sm text-gray-600">
              下載我們的寵物拍攝 App，獲得更精準的 3D 模型效果！
            </div>
            <Link 
              to="/downloads/app" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-2"
            >
              <span className="mr-2">⬇️</span>
              下載 App
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
