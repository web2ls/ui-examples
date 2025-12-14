import { Route, Routes } from 'react-router';

import { Layout } from './layout/layout';
import { BlogCardPage } from './pages/blog-card-page';
import Home from './pages/home';

import './App.css';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog-card-page" element={<BlogCardPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
