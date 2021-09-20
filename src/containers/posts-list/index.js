import { Post } from '../post';
import { useEffect, useState } from 'react';
import { getPosts } from '../../api/posts';
import { Spin } from 'antd';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const CLASS_NAME = 'Posts-list';
const cn = classnames.bind(styles);

export const PostsList = () => {
  const [state, setState] = useState({ loading: true, posts: [] });

  useEffect(() => {
    (async () => {
      const { data } = await getPosts();
      setState({ loading: false, posts: data });
    })();
  }, []);

  const { loading, posts } = state;

  return (
    <>
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
    </>
  );
};
