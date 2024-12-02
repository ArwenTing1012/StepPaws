import React from 'react';

const PetForm = ({ formData, setFormData, formErrors }) => {
  // 品種列表
  const breedOptions = {
    dog: [
      '米克斯(混種)',
      '貴賓犬(巨型貴賓)',
      '貴賓犬(迷你型)',
      '貴賓犬(玩具型)',
      '柴犬',
      '柯基犬',
      '法國鬥牛犬',
      '黃金獵犬'
    ],
    cat: [
      '米克斯貓(包含黑貓、虎斑貓、橘貓)',
      '美國短毛貓',
      '英國短毛貓',
      '摺耳貓',
      '曼赤肯短腿貓',
      '金吉拉'
    ]
  };

  // 性格特徵選項
  const traitOptions = [
    { id: 'active', label: '活潑好動' },
    { id: 'independent', label: '獨立自主' },
    { id: 'playful', label: '愛玩愛鬧' },
    { id: 'gentle', label: '溫柔親人' },
    { id: 'timid', label: '膽小怕生' },
    { id: 'alert', label: '警戒性強' }
  ];

  // 生活習性選項
  const habitOptions = [
    { id: 'sleepy', label: '愛睡大覺' },
    { id: 'foodie', label: '貪好好食' },
    { id: 'water', label: '喜歡玩水' },
    { id: 'climb', label: '喜歡曬高' },
    { id: 'clean', label: '愛乾淨' },
    { id: 'hide', label: '喜歡躲藏' }
  ];

  const handleTraitChange = (traitId) => {
    const currentTraits = formData.traits || [];
    if (currentTraits.includes(traitId)) {
      setFormData({
        ...formData,
        traits: currentTraits.filter(id => id !== traitId)
      });
    } else if (currentTraits.length < 3) {
      setFormData({
        ...formData,
        traits: [...currentTraits, traitId]
      });
    }
  };

  const handleHabitChange = (habitId) => {
    const currentHabits = formData.habits || [];
    if (currentHabits.includes(habitId)) {
      setFormData({
        ...formData,
        habits: currentHabits.filter(id => id !== habitId)
      });
    } else if (currentHabits.length < 3) {
      setFormData({
        ...formData,
        habits: [...currentHabits, habitId]
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* 寵物類型選擇 */}
      <div className="space-y-4">
        {/* 寵物類型 */}
        <div>
          <h2 className="text-lg font-medium mb-4">寵物類型</h2>
          <div className="flex space-x-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="petType"
                value="dog"
                checked={formData.petType === 'dog'}
                onChange={(e) => setFormData({
                  ...formData,
                  petType: e.target.value,
                  breed: '' // 重置品種
                })}
                className="form-radio text-blue-600"
              />
              <span className="flex items-center">
                <span className="mr-2">🐕</span>
                狗狗
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="petType"
                value="cat"
                checked={formData.petType === 'cat'}
                onChange={(e) => setFormData({
                  ...formData,
                  petType: e.target.value,
                  breed: '' // 重置品種
                })}
                className="form-radio text-blue-600"
              />
              <span className="flex items-center">
                <span className="mr-2">🐱</span>
                貓咪
              </span>
            </label>
          </div>
        </div>

        {/* 品種選擇 */}
        <div>
          <h2 className="text-lg font-medium mb-4">品種選擇</h2>
          <select
            value={formData.breed || ''}
            onChange={(e) => setFormData({
              ...formData,
              breed: e.target.value
            })}
            className={`w-full p-2 border rounded-lg ${
              formErrors?.breed ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">請選擇品種</option>
            {formData.petType && breedOptions[formData.petType].map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          {formErrors?.breed && (
            <p className="text-red-500 text-sm mt-1">請選擇寵物品種</p>
          )}
        </div>

        {/* 性格特徵 */}
        <div>
          <h2 className="text-lg font-medium mb-4">
            性格特徵（選擇3個）
            <span className="text-gray-500 text-sm ml-2">
              {formData.traits?.length || 0}/3
            </span>
          </h2>
          <div className="feature-hint">
            <span style={{ fontSize: '1.2em' }}>💡</span>
            每種特徵會影響 3D 模型的行為表現
          </div>
          <div className="grid grid-cols-2 gap-4">
            {traitOptions.map((trait) => (
              <label
                key={trait.id}
                className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                  formData.traits?.includes(trait.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.traits?.includes(trait.id)}
                  onChange={() => handleTraitChange(trait.id)}
                  disabled={!formData.traits?.includes(trait.id) && (formData.traits?.length || 0) >= 3}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2">{trait.label}</span>
              </label>
            ))}
          </div>
          {formErrors?.traits && (
            <p className="text-red-500 text-sm mt-1">請選擇3個性格特徵</p>
          )}
        </div>

        {/* 生活習性 */}
        <div>
          <h2 className="text-lg font-medium mb-4">
            生活習性（選擇3個）
            <span className="text-gray-500 text-sm ml-2">
              {formData.habits?.length || 0}/3
            </span>
          </h2>
          <div className="feature-hint">
            <span style={{ fontSize: '1.2em' }}>💡</span>
            每種特徵會影響 3D 模型的行為表現
          </div>
          <div className="grid grid-cols-2 gap-4">
            {habitOptions.map((habit) => (
              <label
                key={habit.id}
                className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                  formData.habits?.includes(habit.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.habits?.includes(habit.id)}
                  onChange={() => handleHabitChange(habit.id)}
                  disabled={!formData.habits?.includes(habit.id) && (formData.habits?.length || 0) >= 3}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2">{habit.label}</span>
              </label>
            ))}
          </div>
          {formErrors?.habits && (
            <p className="text-red-500 text-sm mt-1">請選擇3個生活習性</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetForm;