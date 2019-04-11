// pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      nickname: '我的昵称',
      avatar: '/imgs/me/avatar.png'
    },
    orders: [
      {
        title: '待付款',
        icon: '/imgs/me/fukuan.png'
      }, {
        title: '待发货',
        icon: '/imgs/me/fahuo.png'
      },
      {
        title: '待收货',
        icon: '/imgs/me/shouhuo.png'
      },
      {
        title: '待评价',
        icon: '/imgs/me/pingjia.png'
      }, {
        title: '已完成',
        icon: '/imgs/me/wancheng.png'
      }
    ],
    list: [
      {
        title: '我的优惠券',
        icon: '/imgs/me/myquan.png'
      }, {
        title: '退款/售后',
        icon: '/imgs/me/tuikuan.png'
      },
      {
        title: '收货地址',
        icon: '/imgs/me/dizhi.png'
      },
      {
        title: '官方客服',
        icon: '/imgs/me/kefu.png'
      }, {
        title: '设置',
        icon: '/imgs/me/shezhi.png'
      }
    ]
  },

  /**
   * 点击订单中的一项
   */
  orderTap: function (event) {
    let index = parseInt(event.currentTarget.dataset.index);
    let order = this.data.orders[index];
    wx.showToast({
      title: `点击了${order.title}`,
      icon: 'none'
    })
  },

  /**
   * 点击个人设置中的一项
   */
  itemTap: function (event) {
    let index = parseInt(event.currentTarget.dataset.index);
    let order = this.data.list[index];
    wx.showToast({
      title: `点击了${order.title}`,
      icon: 'none'
    })
  }

})