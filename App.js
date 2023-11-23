import React from 'react';
import {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import globalStyle from './assets/fonts/styles/globalStyle';
import UserStory from './components/userStory/userStory';
import UserPost from './components/UserPost/UserPost';

const App = () => {
  // User Stories properties
  const userStoriesPageSize = 4;
  const [page, setPage] = useState(1); // because - 1
  const [UserStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  // User Posts properties
  const userPostsPageSize = 2;
  const [pagePosts, setPagePosts] = useState(1); // because - 1
  const [UserPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  // Pagination TODO fix last element not fetching, move to other module
  const pagination = (database, currentPage, pageSize) => {
    console.log(`CurrentPage = ${currentPage}`);
    const startIndex = (currentPage - 1) * pageSize; // 0
    const endIndex = startIndex + pageSize; // 4
    if (endIndex >= database.length) {
      console.log(
        'No more data, database length = ' + database.length,
        'endIndex = ' + endIndex,
      );
      return [];
    }
    console.log(`Getting data from ${startIndex} to ${endIndex}`);
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  // Dependancies

  const userStories = [
    {
      id: 1,
      firstName: 'Koka',
      profileImage: require('./assets/images/rm.jpg'),
    },
    {
      id: 2,
      firstName: 'Tashik',
      profileImage: require('./assets/images/dummy.png'),
    },
    {
      id: 3,
      firstName: 'Kadanit',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 4,
      firstName: 'Sikik',
      profileImage: require('./assets/images/rm.jpg'),
    },
    {
      id: 5,
      firstName: 'Geroinchik',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 6,
      firstName: 'Dima',
      profileImage: require('./assets/images/rm.jpg'),
    },
    {
      id: 7,
      firstName: 'Cardana',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 8,
      firstName: 'Ada',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 9,
      firstName: 'Nana',
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  const userPosts = [
    {
      id: 1,
      firstName: 'Koka',
      lastName: 'Kolya',
      location: 'New York, USA',
      likes: 10,
      comments: 455,
      bookmarks: 6,
      image: require('./assets/images/default_post.png'),
    },
    {
      id: 2,
      firstName: 'Shni',
      lastName: 'S',
      location: 'London, UK',
      likes: 6,
      comments: 78,
      bookmarks: 12,
      image: require('./assets/images/default_post.png'),
    },
    {
      id: 3,
      firstName: 'Max',
      lastName: 'Smetanin',
      location: 'Sary-Oi, Kyrgyzstan',
      likes: 56,
      comments: 220,
      bookmarks: 98,
      image: require('./assets/images/default_post.png'),
    },
    {
      id: 4,
      firstName: 'Narik',
      lastName: 'Garik',
      location: 'Bishkek, Kyrgyzstan',
      likes: 1,
      comments: 500,
      bookmarks: 5,
      image: require('./assets/images/default_post.png'),
    },
    {
      id: 5,
      firstName: 'Koka',
      lastName: 'Sssyka',
      location: 'Kemin, Kyrgyzstan',
      likes: 1,
      comments: 500,
      bookmarks: 5,
      image: require('./assets/images/default_post.png'),
    },
  ];

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={globalStyle.header}>
              <Title title={`Let's explore`} />
              <TouchableOpacity style={globalStyle.icon}>
                <FontAwesomeIcon icon={faEnvelope} size={24} color="#898DAE" />
                <View style={globalStyle.iconNumberContainer}>
                  <Text style={globalStyle.messageNumber}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={globalStyle.userStoriesContainer}>
              <FlatList
                onEndReachedThreshold={0.9}
                horizontal={true}
                keyExtractor={(item, index) => String(index)}
                showsHorizontalScrollIndicator={false}
                data={UserStoriesRenderedData}
                onEndReached={() => {
                  // TODO: Move to separate function
                  console.log(
                    `STORIES REACHED END DATA ${UserStoriesRenderedData.length}`,
                  );
                  if (isLoadingUserStories) {
                    console.log('Already loading');
                    return;
                  }
                  setIsLoadingUserStories(true);
                  const newData = pagination(
                    userStories,
                    page + 1,
                    userStoriesPageSize,
                  );
                  console.log(`newData.length = ${newData.length}`);
                  if (newData.length > 0) {
                    console.log(`Got some data: ${newData.length}`);
                    setPage(page + 1);
                    setUserStoriesRenderedData(prev => [...prev, ...newData]);
                  }
                  setIsLoadingUserStories(false);
                }}
                renderItem={({item}) => (
                  <UserStory
                    firstName={item.firstName}
                    profileImage={item.profileImage}
                  />
                )}
              />
            </View>
          </>
        }
        onEndReachedThreshold={0.9}
        onEndReached={() => {
          // TODO: Move to separate function
          if (isLoadingUserPosts) {
            console.log('Already loading posts');
            return;
          }
          setIsLoadingUserPosts(true);
          const newData = pagination(
            userPosts,
            pagePosts + 1,
            userPostsPageSize,
          );
          console.log(`POSTS newData.length = ${newData.length}`);
          console.log(newData);
          if (newData.length > 0) {
            console.log(`Got some posts data: ${newData.length}`);
            setPagePosts(pagePosts + 1);
            setUserPostsRenderedData(prev => [...prev, ...newData]);
          }
          setIsLoadingUserPosts(false);
        }}
        keyExtractor={(item, index) => String(index)}
        data={UserPostsRenderedData}
        renderItem={({item}) => (
          <View style={globalStyle.userPostsContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              location={item.location}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              image={item.image}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
