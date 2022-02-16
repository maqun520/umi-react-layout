/*
 * @Author: maqun520
 * @Email: 765463770@qq.com
 * @Github: https://github.com/maqun520
 * @Date: 2021-09-16 19:29:30
 * @LastEditors: maqun520
 * @LastEditTime: 2022-02-15 16:15:55
 * @Description: 
 */
import { useState } from 'react';
import { Tooltip } from 'antd';
import type { Settings as ProSettings } from '@ant-design/pro-layout';
import {
  QuestionCircleOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons';
import React from 'react';
import AvatarDropdown from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  theme?: ProSettings['navTheme'] | 'realDark';
} & Partial<ProSettings>;

const GlobalHeaderRight: React.SFC<GlobalHeaderRightProps> = (props) => {
  const [fullscreen, setFullscreen] = useState(false);
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  // 设置全屏
  const handleSetFullScreen = () => {
    const element = document.documentElement;
    console.log('点击全屏');
    if (fullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen();
      }
    }
    setFullscreen(!fullscreen);
  };

  return (
    <div className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="baidu"
        options={[
          {
            label: <a href="https://www.baidu.com">umi ui</a>,
            value: 'baidu',
          },
        ]}
        // onSearch={value => {
        //   //console.log('input', value);
        // }}
      />
      <Tooltip title="使用文档">
        <a
          style={{
            color: 'inherit',
          }}
          target="_blank"
          href="https://ronglian.yuque.com/rdg5tg/luchmi"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <QuestionCircleOutlined />
        </a>
      </Tooltip>
      <Tooltip title={fullscreen ? `取消全屏` : `全屏`} placement="bottom">
        <div className={styles.btnFullscreen} onClick={handleSetFullScreen}>
          {fullscreen ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
        </div>
      </Tooltip>
      <AvatarDropdown />
    </div>
  );
};

export default GlobalHeaderRight;
