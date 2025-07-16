export default function Container({ children, className = "" }) {
  return (
    <div className={`px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
