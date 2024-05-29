import { useState } from 'react';
import Header from '../components/Header/Header'
import Products from '../components/Products/Products'
import { PrincipalContent } from '../styles/PrincipalContent';

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className='Home'>
      <Header setSearch={setSearch}/>
      <main>
        <PrincipalContent>
          <Products search={search}/>
        </PrincipalContent>
      </main>
    </div>
  )
}

export default Home