import './App.scss';
import {getPosts} from "./api/posts";
import {useEffect, useState} from "react";
import {Header} from "./components/header";
import {Post} from "./components/post";
import {Layout} from "./components/layout";
import classnames from 'classnames/bind';
import styles from './App.scss';

const CLASS_NAME = 'App';
const cn = classnames.bind(styles);

function App() {
    const [state, setState] = useState([]);

    useEffect(() => {
        (async () => {
            const {data} = await getPosts();
            setState(data);
        })();
    }, []);

    return (
        <div className={cn(CLASS_NAME)}>
            <Layout>
                <Header/>

                <div className={cn(`${CLASS_NAME}__posts-list`)}>
                    {state.map(post => <Post post={post} key={post.id}/>)}
                </div>
            </Layout>
        </div>
    );
}

export default App;
