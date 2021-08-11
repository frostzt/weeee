import React, { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  extraClasses?: string;
}

const ClientOnly: React.FC<Props> = ({ children, extraClasses, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className={extraClasses} {...delegated}>
      {children}
    </div>
  );
};
export default ClientOnly;
