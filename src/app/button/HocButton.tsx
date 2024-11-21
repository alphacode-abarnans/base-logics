interface DivProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
  }
  
  const HocDiv: React.FC<DivProps> = ({ onClick, children, className  }) => {
    return (
      <div onClick={onClick} className={className}>
        {children}
      </div>
    );
  };
  
  export default HocDiv;