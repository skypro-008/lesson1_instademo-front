import './App.scss';
import { Header } from './components/header';
import { Layout } from './components/layout';
import classnames from 'classnames/bind';
import styles from './App.scss';
import { PostsList } from './containers/posts-list';

const CLASS_NAME = 'App';
const cn = classnames.bind(styles);

function App() {
  return (
    <div className={cn(CLASS_NAME)}>
      <Layout>
        <Header />
        <PostsList />
      </Layout>
    </div>
  );
}

export default App;
