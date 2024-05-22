import Header from '../components/Header/Header'
import Products from '../components/Products/Products'
import Footer from '../components/footer/Footer';
import { useState } from 'react';

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className='Home'>
      <Header setSearch={setSearch}/>
      <main>
        <Products search={search}/>
      </main>
      <Footer />
    </div>
  )
}

export default Home