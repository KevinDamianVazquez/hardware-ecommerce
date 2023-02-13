import { Inter } from '@next/font/google';
import Layout from '@/components/layout';
import data from "../utils/data";
import Cart from '@/components/cart';

export default function Home() {
  return (
    <Layout title="Home">
      <div className='grid grid-cols-4 h-auto'>
        {data.products.map((product)=> (
          <Cart product={product}/>
        ))}
      </div>
    </Layout>
  )
}
