
import { DocumentNode, gql } from '@apollo/client';

const PHOTOS:DocumentNode = gql`
   query getPhotos($id:String!){
     photos(id:$id){
      albumId,
      id,
      title,
      url
     }
    } `

export default PHOTOS