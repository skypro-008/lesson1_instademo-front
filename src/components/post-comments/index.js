import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { Comment } from '../comment';

const CLASS_NAME = 'PostComments';
const cn = classnames.bind(styles);

export const PostComments = ({ comments, show, onShow }) => (
  <div>
    {!show && (
      <p className={cn(`${CLASS_NAME}__show-comments`)} onClick={onShow}>
        Показать комментарии ({comments.length})
      </p>
    )}

    {show && (
      <div className={cn(`${CLASS_NAME}__comments`)}>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    )}
  </div>
);
