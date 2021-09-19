import classnames from 'classnames/bind';
import styles from './index.module.scss';

const CLASS_NAME = 'Header';
const cn = classnames.bind(styles);

export const Header = () => (
    <header className={cn(CLASS_NAME)}>
        <h1 className={cn(`${CLASS_NAME}__text`)}>Skyprogram</h1>
    </header>)
