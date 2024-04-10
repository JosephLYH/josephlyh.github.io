const header = {
  homepage: 'https://josephlyh.github.io',
  title: 'JL.',
}

const about = {
  name: 'Lam Yuen Ho Joseph',
  role: 'Software Engineer',
  description:
    'Passionate in developing software applications and solving problems.',
  resume: 'Resume_2024_03_04.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/lam-yuen-ho-joseph',
    github: 'https://github.com/JosephLYH',
    email: 'yuenholam@gmail.com',
    mobile: '+85291726708',
  },
}

const projects = [
  {
    name: 'Court Booking Bot with Captcha Solver',
    description:
      'A bot that automates the booking of courts. It is able to solve simple captchas and book courts automatically.',
    stack: ['Python, Tensorflow'],
    sourceCode: 'https://github.com/JosephLYH/HKUCSE_Captcha_Breaking',
    livePreview: '',
  },
]

const blog = [
  {
    id: 0,
    timestamp: '2024-04-10T22:01:04+08:00',
    title: 'Hello World!',
    description: 'This is my first blog post!',
    content:
      'This is my first blog post! I will be sharing my thoughts and experiences here. Stay tuned!',
  },
]

const skills = [
  'Git',
  'SQL',
  'Python',
  'C/C++',
  'Lua',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Docker',
  'AWS',
]

const useContact = null

export { header, about, projects, skills, useContact, blog }
