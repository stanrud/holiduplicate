import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchOffers, setPage, setInitialize } from '../../actions/offer';
import Card from '../../components/CardUI';
import InfiniteScroll from '../../components/InfinityScroll';
import './offers.style.css';

const Offers = ({ offers, dispatch, isFetching, total, isInitialized, page, match }) => {
  const loadMore = () => {
    const { search } = match.params;
    dispatch(fetchOffers(page, search));
    dispatch(setPage(page + 1));
    dispatch(setInitialize());
  }

  // eslint-disable-next-line
  useEffect(() => { !isInitialized && loadMore() }, []);

  return (
    <InfiniteScroll
      isFetching={isFetching}
      loadMore={loadMore}
      hasMore={total > offers.length}
    >
      <div className='container-offers'>
        {offers.map(item => <Card item={item} key={item.id} />)}
      </div>
    </InfiniteScroll>
  )
}

const mapStateToProps = state => ({
  offers: state.offersStore.offers,
  isFetching: state.offersStore.isFetching,
  isInitialized: state.offersStore.isInitialized,
  total: state.offersStore.total,
  page: state.offersStore.page
});

export default connect(mapStateToProps)(Offers);