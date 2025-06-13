import { FiBookOpen, FiClipboard, FiGlobe, FiHome, FiMail, FiUser } from 'react-icons/fi'

export const HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'

export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: FiHome },
  { path: '/about', label: 'About', Icon: FiUser },
  { path: '/education', label: 'Education', Icon: FiGlobe },
  { path: '/work', label: 'Work', Icon: FiBookOpen },
  { path: '/projects', label: 'Projects', Icon: FiClipboard },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/education': 'Education',
  '/work': 'Work',
  '/projects': 'Projects',
}

export const SOCIALS = {
  GH: 'https://github.com/James-Studio',
  GM: 'https://mail.google.com/mail/?view=cm&fs=1&to=hongjames111@gmail.com',
  IN: 'https://www.linkedin.com/in/chun-ho-hung-025400184/',
}

export const RESUME_URL = 'https://drive.google.com/file/d/1ltHz1sN8XfzpaJSobbomg8o2koNaJAEc/view?usp=sharing'

export const FORMSPREE_KEY = 'xoqyaqqe'

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCVXW6MTdRVtYPTOoV92ruBQ3ZQcF5Ho0g',
  authDomain: 'dede-ard.firebaseapp.com',
  databaseURL: 'https://dede-ard.firebaseio.com',
  projectId: 'dede-ard',
  storageBucket: 'dede-ard.appspot.com',
  messagingSenderId: '120930847292',
  appId: '1:120930847292:web:eb77034f59e9ee37b65139',
  measurementId: 'G-KJRFL3X06T',
}
