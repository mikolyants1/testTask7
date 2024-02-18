import { DocumentNode, gql } from '@apollo/client';

const ALBUMS:DocumentNode = gql`
     query getAlbums($id:String!){
      albums(id:$id){
        albumId,
        userId,
        title
      }
    }`

export default ALBUMS