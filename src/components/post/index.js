import { User } from '../user';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { HeartOutlined, MessageOutlined } from '@ant-design/icons';
import { Comment } from '../comment';
import { CommentForm } from '../comment-form/comment-form';
import { addComment, like } from '../../api/posts';
import { useState } from 'react';

const CLASS_NAME = 'Post';
const cn = classnames.bind(styles);

export const Post = ({ post }) => {
  const { author, image, content, comments, likes } = post;

  const defaultState = {
    showComments: false,
    showForm: false,
    showFull: false,
  };

  const [state, setState] = useState(defaultState);

  const { showComments, showForm } = state;

  // useEffect(() => {
  //     (async () => {
  //         const {data} = await getComments(post.id);
  //         console.log(data)
  //     })();
  // }, [post])

  const handleSubmit = (data) => {
    addComment(post.id, data);
  };

  const handleLike = () => {
    like(post.id);
  };

  const handleComment = () => {
    setState({ ...state, showForm: true });
  };

  const handleCloseForm = () => {
    setState({ ...state, showForm: false });
  };

  const handleShowComments = () => {
    setState({ ...state, showComments: true });
  };

  const handleShowFull = () => {
    setState({ ...state, showFull: true });
  };

  return (
    <div className={cn(CLASS_NAME)}>
      <User author={author} />
      <img className={cn(`${CLASS_NAME}__image`)} src={image} alt="" />
      <div className={cn(`${CLASS_NAME}__buttons`)}>
        <HeartOutlined onClick={handleLike} />
        <MessageOutlined onClick={handleComment} />
      </div>
      {/*<p className={cn(`${CLASS_NAME}__views`)}>Просмотры: {views}</p>*/}
      <p className={cn(`${CLASS_NAME}__views`)}>Нравится: {likes}</p>
      <p className={cn(`${CLASS_NAME}__content`)}>
        {content}{' '}
        <span
          className={cn(`${CLASS_NAME}__show-more`)}
          onClick={handleShowFull}
        >
          Ещё
        </span>
      </p>
      {comments.length > 0 && !showComments && (
        <p
          className={cn(`${CLASS_NAME}__show-comments`)}
          onClick={handleShowComments}
        >
          Показать комментарии ({comments.length})
        </p>
      )}
      <div className={cn(`${CLASS_NAME}__comments`)}>
        {comments.map((comment) => (
          <Comment comment={comment}></Comment>
        ))}
      </div>

      {showForm && (
        <CommentForm onSubmit={handleSubmit} onClose={handleCloseForm} />
      )}
    </div>
  );
};
