
interface CarImageProps {
    src: string;
    alt?: string;
    className?: string;
}

const CarImage: React.FC<CarImageProps> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto rounded-md ${className}`}
    />
  );
};

export default CarImage;
