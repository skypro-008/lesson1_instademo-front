import classnames from 'classnames/bind';
import styles from './index.module.scss';

const CLASS_NAME = 'Layout';
const cn = classnames.bind(styles);

export const Layout = ({ children }) => (
  <div className={cn(CLASS_NAME)}>{children}</div>
);
