import React from 'react';
import './Visit.css';

const visit = () => {
    const images = [
        { src: 'https://plus.unsplash.com/premium_photo-1697729758639-d692c36557b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
        { src: 'https://images.unsplash.com/photo-1617128072203-310a93722ad8?q=80&w=1837&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 2' },
        { src: 'https://media.istockphoto.com/id/184944186/photo/quaid-e-azam.jpg?s=1024x1024&w=is&k=20&c=z6bPuEH5POYgNeJ7CtweLnGjrjq6kj81NxypwnDXo2c=', alt: 'Image 3' },
        { src: 'https://images.unsplash.com/photo-1679951124125-50cc4029d727?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 4' },
        { src: 'https://images.unsplash.com/photo-1630494878339-9ceb4a09ef5a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 5' },
        { src: 'https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.webp?s=1024x1024&w=is&k=20&c=0JB2ZrNnYr-_ql1cfJ23wxZ5o4h6c6We5j6I9YZmbwI=', alt: 'Image 5' },
    ];

    return (

        <div div className='bg-gray-100'>
            <h1 className='mb-4 font-mono text-3xl font-bold text-center text-red-800'>Visit the most beautiful places in the Pakistan</h1>

            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div key={index} className={`gallery-item gallery-item-${index}`}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>

        </div>




    );
};

export default visit;
