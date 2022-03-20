// IMG
import JS from 'src/assets/images/Logo/JS.svg'
import HTML5 from 'src/assets/images/Logo/HTML5.svg'
import CSS3 from 'src/assets/images/Logo/CSS3.svg'
import ReactJS from 'src/assets/images/Logo/ReactJS.svg'
import bootstrap from 'src/assets/images/Logo/bootstrap.svg'
import github from 'src/assets/images/Logo/github.svg'
import m365 from 'src/assets/images/Logo/m365.svg'
import redux from 'src/assets/images/Logo/redux.svg'
import Router from 'src/assets/images/Logo/Router.svg'
import sass from 'src/assets/images/Logo/sass.svg'
import rest from 'src/assets/images/Logo/rest.png'
import styled from 'src/assets/images/Logo/styled.png'
import swiperJS from 'src/assets/images/Logo/swiperJS.PNG'
import framerMotion from 'src/assets/images/Logo/framerMotion.PNG'
import mui from 'src/assets/images/Logo/materialUI.png'

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin
} from 'react-icons/fa'

export const educationalList = [
  {
    id: 1,
    date: '2015-2021',
    title: [
      {
        itemTile: 'Ton Duc Thang University',
        subTitle: ['Elictrical Technology Engirneering ']
      }
    ]
  },
  {
    id: 2,
    date: '2019',
    title: [
      {
        itemTile: 'TOEIC (500/990)',
        subTitle: [
          'IIG Vietnam',
          'Certificate of reading and listening English proficiency'
        ]
      }
    ]
  },
  {
    id: 3,
    date: 'April 2021 - Present',
    title: [
      {
        itemTile: 'Offline Web Development Course ',
        subTitle: [
          '•	Front End Developer ( Cybersoft Academy HCM City - Offline Course)'
        ]
      },
      {
        itemTile: 'Online Web Development Course ',
        subTitle: [
          '•	Master React JS (Du Thang Duoc - Academy)',
          '•	The Modern React Bootcamp (The Udemy Platfrom - Online Course)'
        ]
      }
    ]
  }
]

export const worksList = [
  {
    id: 1,
    date: '9/2020-present',
    title: 'Teky Holding',
    subTitlt: 'Part-time teacher'
  }
]

export const skillGrids = [
  {
    id: 1,
    text: 'HTML5',
    svg: <img src={HTML5} alt="" />
  },
  {
    id: 1,
    text: 'CSS3',
    svg: <img src={CSS3} alt="" />
  },
  {
    id: 1,
    text: 'Javascript',
    svg: <img src={JS} alt="" />
  },
  {
    id: 1,
    text: 'React',
    svg: <img src={ReactJS} alt="" />
  },
  {
    id: 1,
    text: 'BootStrap4',
    svg: <img src={bootstrap} alt="" />
  },
  {
    id: 1,
    text: 'GitHub',
    svg: <img src={github} alt="" />
  },

  {
    id: 1,
    text: 'REST API',
    svg: <img src={rest} alt="" />
  },
  {
    id: 1,
    text: 'React Router',
    svg: <img src={Router} alt="" />
  },
  {
    id: 1,
    text: 'Redux',
    svg: <img src={redux} alt="" />
  },
  {
    id: 1,
    text: 'Styled Component',
    svg: <img src={styled} alt="" />
  },
  {
    id: 1,
    text: 'M365',
    svg: <img src={m365} alt="" />
  },
  {
    id: 1,
    text: 'SASS',
    svg: <img src={sass} alt="" />
  }
]

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/'
  },
  {
    id: 2,
    text: 'about',
    url: '/about'
  },
  {
    id: 3,
    text: 'project',
    url: '/project'
  },
  {
    id: 4,
    text: 'contact',
    url: '/contact'
  }
]

// Footer
export const media = [
  {
    id: 1,
    text: 'fb',
    url: 'https://www.facebook.com/buivinh.1997'
  },
  {
    id: 2,
    text: 'git',
    url: 'https://github.com/vinh4979'
  }
]

export const socials = [
  {
    id: 1,
    text: 'Facebook',
    url: 'https://www.facebook.com/buivinh.1997/',
    image: <FaFacebookSquare />
  },
  {
    id: 2,
    text: 'Github',
    url: 'https://github.com/vinh4979',
    image: <FaGithubSquare />
  },
  {
    id: 3,
    text: 'Twitter',
    url: 'https://github.com/vinh4979',
    image: <FaTwitterSquare />
  },
  {
    id: 4,
    text: 'Linkedin',
    url: 'https://github.com/vinh4979',
    image: <FaLinkedin />
  }
]

export const projectSkillGridsCinema = [
  {
    id: 1,
    text: 'HTML5',
    svg: <img src={HTML5} alt="" />
  },
  {
    id: 1,
    text: 'CSS3',
    svg: <img src={CSS3} alt="" />
  },
  {
    id: 1,
    text: 'Javascript',
    svg: <img src={JS} alt="" />
  },
  {
    id: 1,
    text: 'React',
    svg: <img src={ReactJS} alt="" />
  },
  {
    id: 1,
    text: 'Redux/Redux Thunk',
    svg: <img src={redux} alt="" />
  },
  {
    id: 1,
    text: 'REST API',
    svg: <img src={rest} alt="" />
  },
  {
    id: 1,
    text: 'React Router',
    svg: <img src={Router} alt="" />
  },

  {
    id: 1,
    text: 'Styled Component',
    svg: <img src={styled} alt="" />
  }
]

export const projectSkillGridsLibUICinema = [
  {
    id: 1,
    text: 'Material UI',
    svg: <img src={mui} alt="" />
  },
  {
    id: 1,
    text: 'Framer Motion',
    svg: <img src={framerMotion} alt="" />
  },
  {
    id: 1,
    text: 'Swiper JS',
    svg: <img src={swiperJS} alt="" />
  }
]

export const projectSkillGridsProtfolio = [
  {
    id: 1,
    text: 'HTML5',
    svg: <img src={HTML5} alt="" />
  },
  {
    id: 1,
    text: 'CSS3',
    svg: <img src={CSS3} alt="" />
  },
  {
    id: 1,
    text: 'Javascript',
    svg: <img src={JS} alt="" />
  },
  {
    id: 1,
    text: 'React',
    svg: <img src={ReactJS} alt="" />
  },

  {
    id: 1,
    text: 'React Router',
    svg: <img src={Router} alt="" />
  },

  {
    id: 1,
    text: 'Styled Component',
    svg: <img src={styled} alt="" />
  }
]

export const projectSkillGridsLibUIPortfolio = [
  {
    id: 1,
    text: 'Framer Motion',
    svg: <img src={framerMotion} alt="" />
  },
  {
    id: 1,
    text: 'Swiper JS',
    svg: <img src={swiperJS} alt="" />
  }
]
