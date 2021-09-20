import { User } from '../user';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { HeartOutlined, MessageOutlined } from '@ant-design/icons';
import { Comment } from '../comment';
import { CommentForm } from '../comment-form/comment-form';
import { addComment, getComments, like } from '../../api/posts';
import { useState } from 'react';
import { PostDescription } from '../post-description';

const CLASS_NAME = 'Post';
const cn = classnames.bind(styles);

export const Post = ({ post }) => {
  const defaultState = {
    showComments: false,
    showForm: false,
    showFull: false,
    comments: [],
    commentsLength: post.comments.length,
    likes: post.likes,
  };

  const [state, setState] = useState(defaultState);

  const { showComments, showForm, comments, commentsLength, likes } = state;
  const { author, image, content } = post;

  const handleSubmit = async (comment) => {
    try {
      const { data } = await addComment(post.id, comment);
      const newComments = [...comments, data];
      setState({
        ...state,
        comments: newComments,
        commentsLength: commentsLength + 1,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleLike = async () => {
    try {
      await like(post.id);
      setState({ ...state, likes: likes + 1 });
    } catch (err) {
      console.error(err);
    }
  };

  const handleComment = () => setState({ ...state, showForm: true });

  const handleCloseForm = () => setState({ ...state, showForm: false });

  const handleShowComments = async () => {
    const { data } = await getComments(post.id);
    setState({ ...state, showComments: true, comments: data });
  };

  return (
    <div className={cn(CLASS_NAME)}>
      <User author={author} />
      <div className={cn(`${CLASS_NAME}__image-wrapper`)}>
        <img className={cn(`${CLASS_NAME}__image`)} src={image} alt="" />
      </div>
      <div className={cn(`${CLASS_NAME}__buttons`)}>
        <HeartOutlined onClick={handleLike} />
        <MessageOutlined onClick={handleComment} />
      </div>
      <p className={cn(`${CLASS_NAME}__views`)}>Нравится: {likes}</p>
      <PostDescription content={content} />
      {commentsLength > 0 && !showComments && (
        <p
          className={cn(`${CLASS_NAME}__show-comments`)}
          onClick={handleShowComments}
        >
          Показать комментарии ({commentsLength})
        </p>
      )}

      {showComments && (
        <div className={cn(`${CLASS_NAME}__comments`)}>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment}></Comment>
          ))}
        </div>
      )}

      {showForm && (
        <CommentForm onSubmit={handleSubmit} onClose={handleCloseForm} />
      )}
    </div>
  );
};
