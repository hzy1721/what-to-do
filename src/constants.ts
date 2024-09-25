import { Choice } from './typings';

export const HZY_CHOICE: Choice = {
  title: '今天做什么',
  options: [
    {
      value: '休息',
      choice: {
        title: '休息多长时间',
        options: [{ value: '10min' }, { value: '30min' }, { value: '60min' }],
      },
    },
    {
      value: '运动',
      choice: {
        title: '做什么运动',
        options: [
          {
            value: '骑车',
            choice: {
              title: '去哪里骑车',
              options: [{ value: '奥森' }, { value: '四环' }],
            },
          },
          {
            value: '健身',
            choice: {
              title: '健身练什么',
              options: [
                { value: '跑步' },
                { value: '肩/背/胸/手臂' },
                { value: '腰腹' },
                { value: '腿' },
              ],
            },
          },
          {
            value: '滑雪',
            choice: {
              title: '去哪里滑雪',
              options: [{ value: '军都山' }, { value: '南山' }],
            },
          },
          {
            value: '游泳',
            choice: {
              title: '去哪里游泳',
              options: [{ value: 'JS' }],
            },
          },
        ],
      },
    },
    {
      value: '玩',
      choice: {
        title: '玩什么',
        options: [
          {
            value: '唱歌',
            choice: {
              title: '去哪里唱歌',
              options: [{ value: '万象汇 (华彩) 同乐迪' }],
              choice: {
                title: '唱谁的歌',
                options: [
                  { value: '王力宏' },
                  { value: '方大同' },
                  { value: '陶喆' },
                  { value: '周传雄' },
                  { value: '周杰伦' },
                  { value: '林俊杰' },
                ],
              },
            },
          },
          {
            value: '王者',
            choice: {
              title: '玩什么英雄',
              options: [
                { value: '白起' },
                { value: '哪吒' },
                { value: '亚连' },
                { value: '元流' },
                { value: '刘邦' },
                { value: '花木兰' },
                { value: '马超' },
                { value: '李信' },
                { value: '影' },
              ],
            },
          },
          {
            value: '看电影/剧',
            choice: {
              title: '看什么电影/剧',
              options: [
                { value: '异形' },
                { value: '梦魇绝镇' },
                { value: '明日边缘' },
              ],
            },
          },
          {
            value: '旅游',
            choice: {
              title: '去哪里旅游',
              options: [
                { value: '北京' },
                { value: '天津' },
                { value: '河北' },
                { value: '内蒙古' },
                { value: '山西' },
                { value: '山东' },
                { value: '河南' },
              ],
            },
          },
        ],
      },
    },
  ],
};
