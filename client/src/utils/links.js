import { CgProfile } from 'react-icons/cg'
import { FaWpforms } from 'react-icons/fa'
import {MdComputer} from 'react-icons/md'


const links = [
  {
    id: 1,
    text: 'IDE',
    path: '/',
    icon: <MdComputer />,
  },
  {
    id: 2,
    text: 'Profile',
    path: 'profile',
    icon: <CgProfile />,
  },
  {
    id: 3,
    text: 'Question',
    path: 'question',
    icon: <FaWpforms />,
  },

]

export default links