import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Catalog from './components/paths/Catalog';
import Favorite from './components/paths/Favorite';
import NavHeader from './components/ui/buttons/NavHeader';
import { Provider } from 'react-redux';
import { hash, store } from './components/store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client';

const query = new ApolloClient({
  uri:"http://localhost:3000/",
  cache:new InMemoryCache()
});

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
        <ApolloProvider client={query}>
          <RouterProvider router={router} />
        </ApolloProvider>
      </PersistGate>
    </Provider>
  )
}