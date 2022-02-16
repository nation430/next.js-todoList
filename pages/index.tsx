import Head from 'next/head'
import TodoPage from '../components/TodoPage';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>TodoApp</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center text-center">
        <h1 className="text-6xl font-bold text-gray-900">
          Next.js{' '}
          <span className="text-gray-600">
            Todo-App!
          </span>
        </h1>

        <p className="mt-3 text-2xl mb-8">
          Get started by listing your items
         
        </p>

       <TodoPage/>

      
      </main>

      <footer className="flex h-24 w-full items-center justify-center">
        <p
          className="flex items-center justify-center"
        >
          With &#128151; from{' '}
          T.Nation
        </p>
      </footer>
    </div>
  )
}
