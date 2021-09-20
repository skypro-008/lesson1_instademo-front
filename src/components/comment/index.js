import classnames from 'classnames/bind';
import styles from './index.module.scss';

const CLASS_NAME = 'Comment';
const cn = classnames.bind(styles);

export const Comment = ({ comment }) => {
  const { author, content } = comment;
  return (
    <p className={cn(CLASS_NAME)}>
      <span className={cn(`${CLASS_NAME}__author`)}>{author}: </span>
      {content}
    </p>
  );
};
