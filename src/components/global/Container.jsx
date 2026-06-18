const Container = ({ children, className = "" , ...props }) => {
  return (
    <div {...props} className={`w-full max-w-(--container) mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;