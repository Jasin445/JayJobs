

interface imageProps extends React.HTMLAttributes<HTMLImageElement> {
  images: string;
  alt: string;
}

export default function Images({ images, alt, ...props }: imageProps) {
  return <img
    src={images}
    width='25px'
    height='20px'
    alt={alt}
    {...props} />
}