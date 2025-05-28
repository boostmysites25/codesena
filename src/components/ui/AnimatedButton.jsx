import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

/**
 * AnimatedButton - A reusable button component with hover animations
 * 
 * @param {Object} props
 * @param {string} props.to - URL for Link component (optional)
 * @param {string} props.href - URL for anchor tag (optional)
 * @param {function} props.onClick - Click handler (optional)
 * @param {string} props.variant - Button style variant: 'primary', 'secondary', 'outline', 'text'
 * @param {string} props.size - Button size: 'sm', 'md', 'lg'
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {string} props.animation - Animation type: 'pulse', 'shimmer', 'float', 'none'
 */
const AnimatedButton = ({
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  disabled = false,
  animation = 'none',
  ...props
}) => {
  const buttonRef = useRef(null);
  
  // Base classes
  const baseClasses = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full overflow-hidden';
  
  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-4 py-2 min-w-[6rem]',
    md: 'text-sm px-6 py-3 min-w-[8rem]',
    lg: 'text-base px-8 py-4 min-w-[10rem]',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-gradient-to-b from-primary to-primary-dark text-white hover:shadow-primary-md',
    secondary: 'bg-gradient-to-b from-secondary to-tertiary text-white hover:shadow-lg',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10',
    text: 'bg-transparent text-primary hover:bg-primary/5',
  };
  
  // Animation classes
  const animationClasses = {
    pulse: 'pulse',
    shimmer: 'shimmer',
    float: 'floating',
    none: '',
  };
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1';
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Combined classes
  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size] || sizeClasses.md}
    ${variantClasses[variant] || variantClasses.primary}
    ${animationClasses[animation] || ''}
    ${disabledClasses}
    ${widthClasses}
    ${className}
  `;
  
  useEffect(() => {
    if (!buttonRef.current || disabled) return;
    
    // Hover effect
    const button = buttonRef.current;
    
    const handleMouseEnter = (e) => {
      gsap.to(button, {
        scale: 1.03,
        duration: 0.3,
        ease: 'power2.out',
      });
      
      // Create ripple effect on click
      const createRipple = (e) => {
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        const rect = button.getBoundingClientRect();
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - rect.left - radius}px`;
        circle.style.top = `${e.clientY - rect.top - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        
        if (ripple) {
          ripple.remove();
        }
        
        button.appendChild(circle);
      };
      
      button.addEventListener('click', createRipple);
      
      return () => {
        button.removeEventListener('click', createRipple);
      };
    };
    
    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };
    
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [disabled]);
  
  // Render as Link if 'to' prop is provided
  if (to) {
    return (
      <Link
        ref={buttonRef}
        to={to}
        className={combinedClasses}
        {...props}
      >
        {children}
      </Link>
    );
  }
  
  // Render as anchor if 'href' prop is provided
  if (href) {
    return (
      <a
        ref={buttonRef}
        href={href}
        className={combinedClasses}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // Render as button by default
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;