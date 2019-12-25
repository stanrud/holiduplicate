import React from 'react';
import Infinity from 'react-infinite-scroller';
import { BeatLoader } from 'react-spinners';
import './infinity-scroll.style.css';

const InfiniteScroll = ({ children, loadMore, isFetching, hasMore }) => (
  <Infinity
    pageStart={0}
    loadMore={isFetching ? () => {} : loadMore}
    hasMore={hasMore}
    loader={
      <div className='spinner'>
        <BeatLoader size={15} color={"#ffcf43"} loading={isFetching} />
      </div>
    }
  >
    {children}
  </Infinity>
);

export default InfiniteScroll;
