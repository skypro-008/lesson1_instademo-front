import classnames from 'classnames/bind';
import styles from './index.module.scss';

const CLASS_NAME = 'Comment';
const cn = classnames.bind(styles);

export const Comment = ({ comment }) => (
  <div className={cn(CLASS_NAME)}>{comment}</div>
);
