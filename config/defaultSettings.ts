/*
 * @Author: maqun520
 * @Email: 765463770@qq.com
 * @Github: https://github.com/maqun520
 * @Date: 2021-09-16 19:29:30
 * @LastEditors: maqun520
 * @LastEditTime: 2022-02-16 11:14:26
 * @Description: 
 */
import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  // navTheme: 'dark',
  // // 拂晓蓝
  // primaryColor: '#1890ff',
  // layout: 'mix',
  // splitMenus:true,
  // contentWidth: 'Fluid',
  // fixedHeader: false,
  // fixSiderbar: true,
  // colorWeak: false,
  // title: 'AI基础工程',
  // pwa: false,
  // logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  // iconfontUrl: '',
  "navTheme": "light",
  "primaryColor": "#1890ff",
  "layout": "side",
  "splitMenus": false,
  "contentWidth": "Fluid",
  "fixedHeader": true,
  "fixSiderbar": true,
  "pwa": false,
  "headerHeight": 48
};

export default Settings;
