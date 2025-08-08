

interface ButtonProps {
  label: string;
  width?: string;
  color?: string;
  onClick: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
}
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
}) => {
  const baseStyle = 'px-4 py-2 rounded text-sm font-medium';
  const variantStyles = variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-gray-300 text-gray-800 hover:bg-gray-400';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  );
};
