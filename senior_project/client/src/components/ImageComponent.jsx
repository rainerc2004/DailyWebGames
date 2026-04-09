import { useState, useEffect } from 'react';

function ImageComponent({folder, imageName, className = "rounded-lg"}) {
  const [imageSrc, setImageSrc] = useState(null);
  //const folder = '../assets';
  //const imageName = 'sumrall.jpg'; // Example image name

  useEffect(() => {
    const importImage = async () => {
      try {
        const module = await import(/* @vite-ignore */ `${folder}${imageName}`);
        setImageSrc(module.default);
      } catch (error) {
        console.error('Error loading image:', error);
        // Handle the error (e.g., display a placeholder image)
      }
    };

    importImage();
  }, [imageName]);

  return (
    <div>
      {imageSrc ? 
        <img src={imageSrc} alt="Dynamically loaded image" className={className} /> 
        : <div>Loading image...</div>}
    </div>
  );
}

export default ImageComponent;