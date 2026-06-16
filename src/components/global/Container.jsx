const Container = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-(--container) mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;