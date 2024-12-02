import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "./select"
import './BreedSelect.css'

export const BreedSelect = ({ petType, onBreedChange }) => {
  const [selectedBreed, setSelectedBreed] = useState('');

  const catBreeds = [
    { value: "米克斯貓", label: "米克斯貓（如黑貓、橘貓、虎斑貓）" },
    { value: "美國短毛貓", label: "美國短毛貓" },
    { value: "英國短毛貓", label: "英國短毛貓" },
    { value: "摺耳貓", label: "摺耳貓" },
    { value: "曼赤肯短腿貓", label: "曼赤肯短腿貓" },
    { value: "金吉拉", label: "金吉拉" },
    { value: "三花貓", label: "三花貓" },
    { value: "白貓", label: "白貓" },
    { value: "賓士貓", label: "賓士貓" },
  ];

  const dogBreeds = [
    { value: "米克斯", label: "米克斯（混種狗）" },
    { value: "貴賓犬", label: "貴賓犬" },
    { value: "柴犬", label: "柴犬" },
    { value: "柯基犬", label: "柯基犬" },
    { value: "法國鬥牛犬", label: "法國鬥牛犬" },
    { value: "黃金獵犬", label: "黃金獵犬" },
    { value: "吉娃娃", label: "吉娃娃" },
    { value: "瑪爾濟斯", label: "瑪爾濟斯" },
    { value: "博美犬", label: "博美犬" },
    { value: "臘腸犬", label: "臘腸犬" },
    { value: "哈士奇", label: "哈士奇" },
  ];

  const breeds = petType === "貓咪" ? catBreeds : dogBreeds;

  // 當 petType 改變時，重置選擇的品種
  useEffect(() => {
    setSelectedBreed(breeds[0].value);
  }, [petType]);

  const handleBreedChange = (value) => {
    setSelectedBreed(value);
    onBreedChange(value);
  };

  return (
    <div className="breed-select-container">
      <Select 
        key={petType}
        value={selectedBreed}
        onValueChange={handleBreedChange}
        className="breed-select"
      >
        <SelectTrigger>
          <SelectValue placeholder="選擇品種" />
        </SelectTrigger>
        <SelectContent className="breed-select-options">
          {breeds.map((breed) => (
            <SelectItem key={breed.value} value={breed.value}>
              {breed.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

}