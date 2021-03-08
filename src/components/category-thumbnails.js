import React, { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { connect } from 'react-redux';
import { getListData } from '../store/selectors/data.selector';
import CategoryThumbnailCard from './category-thumbnail-card';

const ThumbnailLoader = () => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
    <View
      style={{
        height: 70,
        width: 70,
        borderRadius: 20,
        backgroundColor: '#BDF096',
        justifyContent: 'center',
        paddingHorizontal: 5,
      }}>
      <Text style={{ fontSize: 10, textAlign: 'center' }}>Loading..</Text>
    </View>
  </View>
);

function CategoryThumbnails(props) {
  const { categories, request } = props;
  console.log(request);
  if (request.isLoading) {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <ThumbnailLoader />
        <ThumbnailLoader />
        <ThumbnailLoader />
        <ThumbnailLoader />
      </View>
    );
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      {categories.map((category) => (
        <CategoryThumbnailCard
          key={category.id}
          data={category}
          shouldRedirect={true}
        />
      ))}
      <CategoryThumbnailCard data={{ name: 'More' }} shouldRedirect={false} />
    </View>
  );
}

const mapStateToProps = () => {
  const getData = getListData();
  return (state) => ({
    categories: getData(state, 'category'),
    request: state.category.request,
  });
};

export default connect(mapStateToProps)(CategoryThumbnails);
