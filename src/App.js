import './App.scss';
import { getPosts } from './api/posts';
import { useEffect, useState } from 'react';
import { Header } from './components/header';
import { Post } from './components/post';
import { Layout } from './components/layout';
import classnames from 'classnames/bind';
import styles from './App.scss';
import { Spin } from 'antd';

const CLASS_NAME = 'App';
const cn = classnames.bind(styles);

function App() {
  const [state, setState] = useState({ loading: true, posts: [] });

  useEffect(() => {
    (async () => {
      const { data } = await getPosts();
      setState({ loading: false, posts: data });
    })();
  }, []);

  const { loading, posts } = state;

  return (
    <div className={cn(CLASS_NAME)}>
      <Layout>
        <Header />

        {loading && (
          <div className={cn(`${CLASS_NAME}__loader`)}>
            <Spin size="large" />
          </div>
        )}

        <div className={cn(`${CLASS_NAME}__posts-list`)}>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </Layout>
    </div>
  );
}

export default App;
