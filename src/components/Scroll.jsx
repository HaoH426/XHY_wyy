/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import BScroll from '@better-scroll/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { debounce } from 'lodash';

export default function BetterScroll(props) {
  const wrapperRef = useRef(null);
  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    const { refresh } = new BScroll(wrapperRef.current, props.config ?? {});
    const resizeFn = debounce(refresh, 300);
    window.addEventListener('resize', resizeFn);
    return () => {
      window.removeEventListener('resize', resizeFn);
    };
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  }, [props.config, props.children]);
  return (
    <div
      ref={wrapperRef}
      style={{
        overflow: 'hidden',
        height: '300px',
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        ...(props.wrapperStyle ?? {})
      }}
      // eslint-disable-next-line react/jsx-no-comment-textnodes
    >
      <div style={{ ...(props.contentStyle ?? {}) }}>{props.children}</div>
    </div>
  );
}
