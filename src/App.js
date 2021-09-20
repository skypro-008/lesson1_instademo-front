import { Header } from './components/header';
import { Layout } from './components/layout';
import { PostsList } from './containers/posts-list';
import classnames from 'classnames/bind';
import styles from './App.scss';

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
