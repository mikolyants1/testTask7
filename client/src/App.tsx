import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Catalog from './components/paths/Catalog';
import Favorite from './components/paths/Favorite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavHeader from './components/ui/buttons/NavHeader';
import { Provider } from 'react-redux';
import { hash, store } from './components/store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

const query:QueryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false
    }
  }
})

const router = createBrowserRouter([
   {
     path:'/',
     element:<NavHeader />,
     children:[
       {
         index:true,
         element:<Catalog />
       },
       {
        path:'/favorite',
        element:<Favorite />
       }
     ]
   }
])

export default function App():JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={hash}>
        <QueryClientProvider client={query}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}