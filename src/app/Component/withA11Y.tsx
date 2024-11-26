import React from 'react';

interface WithA11yProps {
  ariaLabel?: string;
  role?: string;
  dir?:string;
}

function withA11y<T extends object>(
  WrappedComponent: React.ComponentType<T>,
  a11yProps: WithA11yProps
): React.FC<T> {
  return (props: T) => {
    return <WrappedComponent {...props} {...a11yProps} />;
  };
}

export default withA11y;
