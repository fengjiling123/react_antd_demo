
const sideMenu = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
    api: ''
  },
  {
    name: '我的',
    icon: 'user',
    key: 'user',
    children: [
      { name: '个人中心', path: '/mine' },
    ]
  },
 
];

export default sideMenu;

