import React, { forwardRef } from 'react';

/**
 * DecorativeElements - A component that renders decorative background elements
 * 
 * @param {Object} props
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.style - Additional inline styles
 * @param {string} props.variant - Variant of decorative elements: 'default', 'dense', 'minimal'
 * @param {boolean} props.animated - Whether to animate the elements
 */
const DecorativeElements = forwardRef(({
  className = "",
  style = {},
  variant = "default",
  animated = true,
  ...props
}, ref) => {
  // Base styles to ensure visibility
  const baseStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 2, // Higher z-index to ensure visibility
    opacity: 1,
    overflow: 'visible', // Allow elements to overflow
    ...style
  };

  // Generate decorative elements based on variant
  const renderElements = () => {
    switch (variant) {
      case 'dense':
        return (
          <>
            <div className="decor-element top-1/4 left-[5%] w-40 h-40 bg-primary/30 blur-3xl"></div>
            <div className="decor-element bottom-1/3 right-[5%] w-48 h-48 bg-primary/30 blur-3xl"></div>
            <div className="decor-element top-1/3 right-1/4 w-24 h-24 bg-primary/20 blur-2xl"></div>
            <div className="decor-element bottom-1/4 left-1/4 w-32 h-32 bg-primary/20 blur-2xl"></div>
            <div className="decor-element top-1/2 left-1/3 w-16 h-16 bg-primary/15 blur-xl"></div>
            <div className="decor-element bottom-1/2 right-1/3 w-20 h-20 bg-primary/15 blur-xl"></div>
            <div className="decor-element top-2/3 left-2/3 w-36 h-36 bg-primary/25 blur-2xl"></div>
            <div className="decor-element bottom-2/3 right-2/3 w-28 h-28 bg-primary/25 blur-2xl"></div>
            
            {animated && (
              <>
                <div className="decor-element top-[20%] left-[10%] w-2 h-2 bg-primary/90 animate-pulse"></div>
                <div className="decor-element top-[30%] left-[20%] w-3 h-3 bg-primary/80 animate-pulse-slow"></div>
                <div className="decor-element top-[25%] left-[80%] w-2 h-2 bg-primary/90 animate-pulse"></div>
                <div className="decor-element top-[60%] left-[85%] w-3 h-3 bg-primary/80 animate-pulse-slow"></div>
                <div className="decor-element top-[70%] left-[15%] w-2 h-2 bg-primary/90 animate-pulse"></div>
                <div className="decor-element top-[40%] left-[50%] w-3 h-3 bg-primary/80 animate-pulse-slow"></div>
                <div className="decor-element top-[15%] left-[40%] w-2 h-2 bg-primary/90 animate-pulse"></div>
                <div className="decor-element top-[80%] left-[60%] w-3 h-3 bg-primary/80 animate-pulse-slow"></div>
              </>
            )}
          </>
        );
        
      case 'minimal':
        return (
          <>
            <div className="decor-element top-1/4 left-10 w-40 h-40 bg-primary/20 blur-3xl"></div>
            <div className="decor-element bottom-1/3 right-10 w-48 h-48 bg-primary/20 blur-3xl"></div>
            
            {animated && (
              <>
                <div className="decor-element top-[20%] left-[10%] w-2 h-2 bg-primary/90 animate-pulse"></div>
                <div className="decor-element top-[60%] left-[85%] w-3 h-3 bg-primary/80 animate-pulse-slow"></div>
                <div className="decor-element top-[40%] left-[50%] w-2 h-2 bg-primary/90 animate-pulse"></div>
              </>
            )}
          </>
        );
        
      case 'default':
      default:
        return (
          <>
            <div className="decor-element top-1/4 left-10 w-40 h-40 bg-primary/30 blur-3xl"></div>
            <div className="decor-element bottom-1/3 right-10 w-48 h-48 bg-primary/30 blur-3xl"></div>
            <div className="decor-element top-1/3 right-1/4 w-24 h-24 bg-primary/20 blur-2xl"></div>
            <div className="decor-element bottom-1/4 left-1/4 w-32 h-32 bg-primary/20 blur-2xl"></div>
            
            {animated && (
              <>
                <div className="decor-element top-[20%] left-[10%] w-2 h-2 bg-primary/90 animate-pulse"></div>
                <div className="decor-element top-[30%] left-[20%] w-3 h-3 bg-primary/80 animate-pulse-slow"></div>
                <div className="decor-element top-[25%] left-[80%] w-2 h-2 bg-primary/90 animate-pulse"></div>
                <div className="decor-element top-[60%] left-[85%] w-3 h-3 bg-primary/80 animate-pulse-slow"></div>
                <div className="decor-element top-[70%] left-[15%] w-2 h-2 bg-primary/90 animate-pulse"></div>
              </>
            )}
          </>
        );
    }
  };

  return (
    <div 
      ref={ref}
      className={`decorative-elements-container ${className}`}
      style={baseStyle}
      {...props}
    >
      {renderElements()}
    </div>
  );
});

export default DecorativeElements;