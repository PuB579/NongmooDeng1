import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [level, setLevel] = useState(0); // ระดับเริ่มต้น
  const [imageSrc, setImageSrc] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqT5_DKd6P3FMKmyOuvhZk8dSKjh7xyzV8g&s.jpg'); // รูปภาพด้านบนเริ่มต้น
  const maxLevel = 100; // ระดับสูงสุด
  
  // เลเวลที่เพิ่มขึ้นตามการกดรูปภาพด้านล่าง
  const levelIncrements = [5, 10, 20];
  
  // รูปภาพด้านล่างและรูปภาพสำรองสำหรับเปลี่ยนเมื่อเลเวลถึง 100
  const bottomImages = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gpeGq4l3zQ4pYFDISuPCGzQdHc8jX9m_Cw&s.jpg', 'https://www.calforlife.com/image/food/pumpkin.jpg', 'https://www.chokchai.go.th/wp-content/uploads/2022/08/image-photo2-95902.jpg'];
  const alternateTopImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBs24St52YK72IbKcoUCt6ely9YGtuqnf8Q&s.jpg'; // รูปภาพที่จะเปลี่ยนเมื่อเลเวลถึง 100
  
  // ฟังก์ชั่นการอัปเดตเลเวลและจัดการการเปลี่ยนรูปภาพ
  const handleClick = (increment) => {
    let newLevel = level + increment;
    if (newLevel >= maxLevel) {
      newLevel = maxLevel;
      setImageSrc(alternateTopImage); // เปลี่ยนรูปภาพด้านบนเมื่อเลเวลครบ 100
    }
    setLevel(newLevel);
  };
  
  return (
    <div className="container">
      <div className="top-image">
        <img
          src={imageSrc}
          alt="Main"
          style={{ width: `${200 + level * 2}px` }} // ขยายขนาดตามเลเวล
        />
        <div className="level-display">Level: {level}</div>
      </div>
      
      <div className="bottom-images">
        {bottomImages.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Image ${index + 2}`}
            className="bottom-image"
            onClick={() => handleClick(levelIncrements[index])}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
