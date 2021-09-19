import {Avatar} from "antd";
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const CLASS_NAME = 'User';
const cn = classnames.bind(styles);

export const User = ({author}) => (
    <div className={cn(CLASS_NAME)}>
        <Avatar className={cn(`${CLASS_NAME}__avatar`)} size="large" gap={'16px'}>
            {author[0]}
        </Avatar>
        <span className={cn(`${CLASS_NAME}__name`)}>{author}</span>
    </div>
)
