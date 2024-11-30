import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';

export default function HomePicture() {
    const links = [
        { stt: '1', url: '/homepicture1.webp' },
        { stt: '2', url: '/homepicture2.png' },
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const timerRef = useRef(null);

    // Hàm thay đổi ảnh
    const changeImage = () => {
        setCurrentImage(prevImage => (prevImage + 1) % links.length);  // Thay đổi ảnh
    };

    // Thiết lập bộ đếm thời gian khi component mount
    useEffect(() => {
        // Dừng bộ đếm trước đó và thiết lập bộ đếm mới mỗi lần ảnh thay đổi
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        timerRef.current = setInterval(() => {
            changeImage();
        }, 7000); // Thời gian luôn là 7 giây

        return () => clearInterval(timerRef.current); // Cleanup bộ đếm khi component unmount
    }, [currentImage]); // Mỗi khi ảnh thay đổi, lại thiết lập bộ đếm mới

    // Hàm click vào dấu chấm để thay đổi ảnh và reset bộ đếm
    const handleImageClick = (index) => {
        setCurrentImage(index); // Cập nhật ảnh ngay lập tức
        clearInterval(timerRef.current); // Dừng bộ đếm hiện tại
        timerRef.current = setInterval(() => {
            changeImage();
        }, 7000); // Reset bộ đếm về 7 giây
    };

    return (
        <Box sx={{ marginTop: '120px' }}>
            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <img 
                    src={links[currentImage].url} 
                    style={{ 
                        width: '96vw', 
                        height: '600px', 
                        opacity: 1, 
                        transition: 'opacity 0.5s ease-in-out',
                    }} 
                    alt="home" 
                />
            </div>
            <div style={{ display: 'flex', width: '100vw', justifyContent: 'center', gap: '12px', marginTop: '15px' }}>
                {links.map((item, index) => (
                    <div
                        key={item.stt}
                        onClick={() => handleImageClick(index)} 
                        style={{
                            width: '30px',
                            height: '5px',
                            borderRadius: '7px',
                            backgroundColor: currentImage === index ? 'red' : '#d1cbcb',
                            cursor: 'pointer',
                        }}
                    ></div>
                ))}
            </div>
        </Box>
    );
}
