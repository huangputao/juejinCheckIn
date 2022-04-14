// 配置文件,测试修改配置文件
module.exports = {
  // 请求地址
  baseUrl: 'https://api.juejin.cn',
  // api地址
  api: {
    // 签到
    checkIn: '/growth_api/v1/check_in',
    // 查询签到
    getCheckStatus: '/growth_api/v1/get_today_status',
    // 查询签到天数
    getCheckInDays: '/growth_api/v1/get_counts',
    // 查询当前矿石
    getCurrentPoint: '/growth_api/v1/get_cur_point',
    // 查询抽奖
    getlotteryStatus: '/growth_api/v1/lottery_config/get',
    // 抽奖
    draw: '/growth_api/v1/lottery/draw',
    // 获取沾喜气列表用户
    getLuckyUserList: '/growth_api/v1/lottery_history/global_big',
    // 沾喜气
    dipLucky: '/growth_api/v1/lottery_lucky/dip_lucky',
    // 推送
    // sendKey: 'SCT139146TRfrl1FypfGLsWb9hGmFTCgnL',
    sendKey: 'SCU103469T03605dc67ebcac33855fd708308f45365efb09aed848d',
  },
}
