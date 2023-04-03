import {MdOutlineExplore} from 'react-icons/md/'
import {IoMdStats} from 'react-icons/io'
import {GrResources} from 'react-icons/gr'
import {BsMoonFill, BsMoon} from 'react-icons/bs'
import {FiChevronRight} from 'react-icons/fi'

import { FaBehance, FaFacebook, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
export const navLinks = [
    {
    id:1,
    url:'/explore',
    text:'explore',
    icon: <MdOutlineExplore/>
},
{
    id:2,
    url:'/stats',
    text:'stats',
    icon:<IoMdStats/>
},
{
    id:3,
    url:'/resources',
    text:'resources',
    icon:<GrResources/>
},
{
    id:4,
    url:'#',
    text:'create',
    icon: <BsMoonFill/>
}

]
export const mainLinks = [
    {
    id:1,
    url:'/explore',
    text:'explore',
    icon: <MdOutlineExplore/>,
    icon2:   <FiChevronRight/>
},
{
    id:2,
    url:'/stats',
    text:'stats',
    icon:<IoMdStats/>,
    icon2:   <FiChevronRight/>
},
{
    id:3,
    url:'/resources',
    text:'resources',
    icon:<GrResources/>,
    icon2:   <FiChevronRight/>
},
{
    id:4,
    url:'#',
    text:'night mode',
    icon: <BsMoonFill/>,
    icon2:   <div className='slideToggle'></div>
}

]



export const social = [
    {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FaFacebook />,
      },
      {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        url: 'https://www.github.com',
        icon: <FaGithub />,
      },
      {
        id: 4,
        url: 'https://www.twitter.com',
        icon: <FaBehance />,
      },
      {
          id:5,
          url:'https://www.youtube.com',
          icon:<FaYoutube/>
      }
]