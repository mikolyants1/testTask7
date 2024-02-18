
import { DocumentNode, gql } from '@apollo/client';

const USERS:DocumentNode =  gql`
  {
   users {
      id,
      name,
      username,
      email
   }}`

export default USERS