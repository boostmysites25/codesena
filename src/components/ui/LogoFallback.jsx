import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * LogoFallback - A component that displays the logo with a text fallback if the image fails to load
 * 
 * @param {Object} props
 * @param {string} props.src - Source URL for the logo image
 * @param {string} props.alt - Alt text for the logo image
 * @param {string} props.className - Additional CSS classes for the image
 * @param {string} props.to - URL for the Link component (defaults to home page)
 * @param {string} props.fallbackText - Text to display if the image fails to load
 */
const LogoFallback = ({
  src,
  alt = "Logo",
  className = "",
  to = "/",
  fallbackText = "Code Sena",
  ...props
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.warn("Logo image failed to load, using text fallback");
    setImageError(true);
  };

  return (
    <Link to={to} aria-label="Home" className="cursor-pointer">
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          className={className}
          onError={handleImageError}
          {...props}
        />
      ) : (
        <div className="text-primary font-bold text-2xl bg-tertiary/50 px-4 py-2 rounded-lg">
          {fallbackText}
        </div>
      )}
    </Link>
  );
};

export default LogoFallback;