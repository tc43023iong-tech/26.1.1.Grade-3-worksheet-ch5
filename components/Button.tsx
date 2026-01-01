import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyle = "font-display font-bold rounded-2xl shadow-[0_4px_0_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-1 transition-all duration-150 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white border-2 border-primary hover:bg-red-500",
    secondary: "bg-secondary text-white border-2 border-secondary hover:bg-teal-500",
    neutral: "bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50",
  };

  const sizes = {
    sm: "px-5 py-3 text-base",
    md: "px-6 py-4 text-xl",
    lg: "px-8 py-5 text-2xl w-full",
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};