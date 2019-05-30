
const sideMenu = [
  {
    name: '首页',
    path: '/',
    icon: 'HomeIcon',
    api: ''
  },
  {
    name: '商品管理',
    icon: 'CommodityIcon',
    key: 'commodityManagement',
    children: [
      { name: '商品列表', path: '/commodityList' },
    ]
  },
 
];

export default sideMenu;

