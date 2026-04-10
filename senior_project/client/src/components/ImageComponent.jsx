import { useState, useEffect } from 'react';

function ImageComponent({folder, image_name, className = "rounded-lg"}) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const importImage = async () => {
      try {
        const module = await import(/* @vite-ignore */ `../assets/profile_pictures/sumrall.jpg`);
        setImageSrc(module.default);
      } catch (error) {
        console.error('Error loading image:', error);
        // Handle the error (e.g., display a placeholder image)
      }
    };

    importImage();
  }, [image_name]);

  return (
    <div>
      {imageSrc ? 
        <img src={imageSrc} className={className} /> 
        : <div>Loading image...</div>}
    </div>
  );
}

export default ImageComponent;