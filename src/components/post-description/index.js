import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { useState } from 'react';

const CLASS_NAME = 'Post-description';
const cn = classnames.bind(styles);

export const PostDescription = ({ content }) => {
  const [full, setFull] = useState(false);
  const handleShowFull = () => setFull(true);

  return (
    <div className={cn(`${CLASS_NAME}`)}>
      <p
        className={cn(`${CLASS_NAME}__text`, {
          [`${CLASS_NAME}__text--full`]: full,
        })}
      >
        {content}{' '}
      </p>

      {!full && (
        <p
          href={'#'}
          className={cn(`${CLASS_NAME}__show-full`)}
          onClick={handleShowFull}
        >
          Ещё
        </p>
      )}
    </div>
  );
};
