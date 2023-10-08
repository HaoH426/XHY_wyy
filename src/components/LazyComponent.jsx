import React from 'react';

export default function LazyComponent(props) {
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  const Component = React.lazy(() => import(`@/wy/${props.path}`));

  return (
    <React.Suspense fallback={<div>加载中...</div>}>
      <Component />
    </React.Suspense>
  );
}
