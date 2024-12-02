import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { ImageUpload } from './ui/image-upload';

const PhotoUpload = ({ formData, setFormData }) => {
  const [photos, setPhotos] = useState({
    front: null,
    back: null,
    left: null,
    right: null
  });

  const [previews, setPreviews] = useState({
    front: null,
    back: null,
    left: null,
    right: null
  });

  const handlePhotoUpload = (position, file) => {
    if (file) {
      setPhotos(prev => ({
        ...prev,
        [position]: file
      }));

      const previewUrl = URL.createObjectURL(file);
      setPreviews(prev => ({
        ...prev,
        [position]: previewUrl
      }));

      setFormData(prev => ({
        ...prev,
        photos: {
          ...prev.photos,
          [position]: file
        }
      }));
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <ImageUpload
        label="正面照片"
        onImageUpload={(file) => handlePhotoUpload('front', file)}
        sampleImageSrc="/samples/front.jpg"
      />
      <ImageUpload
        label="背面照片"
        onImageUpload={(file) => handlePhotoUpload('back', file)}
        sampleImageSrc="/samples/back.jpg"
      />
      <ImageUpload
        label="左側照片"
        onImageUpload={(file) => handlePhotoUpload('left', file)}
        sampleImageSrc="/samples/left.jpg"
      />
      <ImageUpload
        label="右側照片"
        onImageUpload={(file) => handlePhotoUpload('right', file)}
        sampleImageSrc="/samples/right.jpg"
      />
    </div>
  );
};

export default PhotoUpload;