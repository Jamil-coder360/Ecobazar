const Container = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-(--container) mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;