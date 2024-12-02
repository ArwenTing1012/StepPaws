import React, { useState } from 'react';
import PetForm from './PetForm';
import PhotoUpload from './PhotoUpload';
import AppDownloadBanner from './ui/AppDownloadBanner';

const PetCreator = () => {
  const [formData, setFormData] = useState({
    petType: '',
    breed: '',
    traits: [],
    habits: [],
    photos: {
      front: null,
      back: null,
      left: null,
      right: null
    }
  });

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (!Object.values(errors).some(error => error)) {
      // 處理表單提交
      console.log('Form submitted:', formData);
    }
    setFormErrors(errors);
  };

  const validateForm = () => {
    return {
      breed: !formData.breed,
      traits: formData.traits.length !== 3,
      habits: formData.habits.length !== 3,
      photos: !Object.values(formData.photos).every(photo => photo)
    };
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-[var(--font-size-xxl)] font-bold mb-[var(--spacing-xl)] text-[var(--text-primary)]">
        StepPaws.AI 寵物造型師
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-[var(--spacing-xxl)]">
        {/* 寵物基本資料區塊 */}
        <section className="backdrop-blur-lg bg-[var(--glass-overlay)] rounded-[var(--radius-l)] p-[var(--spacing-xl)] shadow-lg">
          <h2 className="text-[var(--font-size-xl)] font-semibold mb-[var(--spacing-l)] text-[var(--text-primary)]">
            寵物基本資料
          </h2>
          <PetForm
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
          />
        </section>

        {/* 照片上傳區塊 */}
        <section className="backdrop-blur-lg bg-[var(--glass-overlay)] rounded-[var(--radius-l)] p-[var(--spacing-xl)] shadow-lg">
          <h2 className="text-[var(--font-size-xl)] font-semibold mb-[var(--spacing-l)] text-[var(--text-primary)]">
            上傳照片
          </h2>
          <PhotoUpload
            formData={formData}
            setFormData={setFormData}
          />
        </section>

        {/* 提交按鈕 */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-[var(--spacing-l)] py-[var(--spacing-m)] 
                     bg-gradient-to-r from-[var(--primary-gradient-start)] to-[var(--primary-gradient-end)]
                     text-[var(--text-primary)] rounded-[var(--radius-m)] 
                     hover:shadow-lg transition-all duration-300
                     text-[var(--font-size-l)] font-medium"
          >
            開始生成 3D 模型
          </button>
        </div>
      </form>

      {/* 補充說明 */}
      <div className="mt-[var(--spacing-xl)] text-[var(--text-secondary)]">
        <h3 className="font-medium mb-[var(--spacing-s)] text-[var(--font-size-m)]">注意事項：</h3>
        <ul className="list-disc list-inside space-y-[var(--spacing-xxs)] text-[var(--font-size-s)]">
          <li>請確保上傳的照片光線充足，背景簡單</li>
          <li>建議使用白色或淺色背景</li>
          <li>確保寵物完整入鏡，避免遮擋</li>
          <li>照片越清晰，生成的 3D 模型效果越好</li>
        </ul>
      </div>
    </div>
  );
};

export default PetCreator;