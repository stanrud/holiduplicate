import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchOffers } from '../../actions/offer';
import Card from '../../components/CardUI';
import InfiniteScroll from '../../components/InfinityScroll';
import './offers.style.css';

const Offers = ({ offers, dispatch, isFetching }) => {
  const [page, setPage] = useState(0);

  function loadMore() {
    dispatch(fetchOffers(page));
    setPage(page + 1)
  }

  return (
    <InfiniteScroll
      isFetching={isFetching}
      loadMore={loadMore}
    >
      <div className='container-offers'>
        { offers.map(item => <Card offer={item} key={item.id} />) }
      </div>
    </InfiniteScroll>
  )
}

const mapStateToProps = state => ({
  offers: state.offersStore.offers,
  isFetching: state.offersStore.isFetching
});

export default connect(mapStateToProps)(Offers);