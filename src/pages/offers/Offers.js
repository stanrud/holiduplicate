import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchOffers } from '../../actions/offer';
import Card from '../../components/CardUI';
import InfiniteScroll from '../../components/InfinityScroll';
import './offers.style.css';

const Offers = ({ offers, dispatch, isFetching, total }) => {
  const [page, setPage] = useState(0);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) loadMore();
  });

  function loadMore() {
    dispatch(fetchOffers(page));
    setPage(page + 1);
    setInitialized(true);
  }

  return (
    <InfiniteScroll
      isFetching={isFetching}
      loadMore={loadMore}
      hasMore={total > offers.length}
    >
      <div className='container-offers'>
        { offers.map(item => <Card offer={item} key={item.id} />) }
      </div>
    </InfiniteScroll>
  )
}

const mapStateToProps = state => ({
  offers: state.offersStore.offers,
  isFetching: state.offersStore.isFetching,
  total: state.offersStore.total
});

export default connect(mapStateToProps)(Offers);