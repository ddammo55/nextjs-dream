import Image from 'next/image'
import os from 'os' //노드 APIs
import Counter from './components/Counter';



export default function Home() {
  console.log('안녕');
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지다</h1>
      <Counter />
      <Image src="https://images.unsplash.com/photo-1684619419581-39800cb71285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60" alt="shop"
      width={400}
      height={300}
      />
    </>
  )
}
