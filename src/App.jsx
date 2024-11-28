import Card from './components/Card';
import Footer from './components/Footer';
import { posts } from '../data/posts';

function App() {

  return (
    <>
      <header>
        <h1>Il mio blog</h1>
      </header>
      <main className='container'>
        {posts.map((post) => post.published === true ? (
          <div key={posts.id}>
            <Card title={posts.title} content={posts.content} image={posts.image} tags={posts.tags} />
          </div>
        ) :
          console.log('ciao'))}
      </main>
      <Footer />
    </>
  )
}

export default App
