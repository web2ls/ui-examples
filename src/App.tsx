import { Route, Routes } from 'react-router';

import { BlogCard } from './components/blog-card/blog-card';
import { Layout } from './layout/layout';
import Home from './pages/home';

import './App.css';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-card" element={<BlogCard />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
