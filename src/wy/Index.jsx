import React, { useEffect, useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TabBar, Swiper } from 'antd-mobile';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import { AppstoreOutline, SearchOutline, ScanningOutline, AudioOutline } from 'antd-mobile-icons';
import Link from '../components/Link';

const Div = styled.div`
  margin-bottom: 30px;
  img {
    max-width: none;
  }
  .nav {
    margin-top: 2.666667vw;
    width: 100vw;
    /* height: 14.117647vw; */
    // background-color: firebrick;
    font-size: 3.2vw;
    display: flex;
    padding-bottom: 4vw;
  }
  .b_list {
    height: 20vw;
    // width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    overflow: auto;
    display: flex;
    white-space: nowrap;
  }
  .b_list::-webkit-scrollbar {
    display: none;
  }
  .imgdd {
    border: 1px solid;
  }
  .b_item {
    width: 20vw;
    height: 20vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .b_list .b_item img {
    width: 12.6vw;
    height: 12.6vw;
    background-color: red;
  }
  .b_list .b_item p {
    margin: 0;
    padding: 0;
    width: 40vw;
    text-align: center;
    font-size: 3.2vw;
  }
  margin-top: 4.666667vw;
  .b_tit {
    width: 100%;
    /* height: 12vw; */
    padding: 0 4vw;
    font-size: 3.73333vw;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .b_tit .tit2 {
    color: #9d9d9d;
  }

  .b_img_nav {
    margin-top: 4.666667vw;
    width: 100vw;
    font-size: 3.2vw;

    padding-bottom: 2vw;
  }
  .b_img {
    width: 100vw;
    overflow: auto;
    display: flex;
    white-space: nowrap;
    .b_img::-webkit-scrollbar {
      display: none;
    }
    .b_img-1 {
      width: 31.01333vw;
      /* height: 50.01333vw; */
      /* border: 1px solid; */
      padding-right: 2.666667vw;
      img {
        width: 30.66667vw;
        height: 30.66667vw;
        border-radius: 2vw;
      }
    }
  }

  span {
    width: 100%;
    height: 200px;
    word-break: break-all;
  }
`;

export default function Index() {
  const [bnr, setBnr] = useState([]);

  const navList = [
    { to: '/Index', title: '首页' },
    { to: '/Mv', title: '排行榜' }
  ];

  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/?cookie=')
      .then((res) => {
        // console.log(res.data.data.roll_data.map((item) => item.title));
        setBnr(res.data.data.blocks[0].extInfo.banners);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  const [list, setList] = useState();
  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/dragon/ball')
      .then((res) => {
        setList(res.data.data);
      });
  }, []);

  const [btit, setBtit] = useState();

  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/?cookie=200'
      )
      .then((res) => {
        setBtit(res.data.data.blocks[1].creatives);
      });
  }, []);

  return (
    <div className="box">
      <div className=" dark:to-[#1a1c23] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2">
        <div className="w-[100vw] h-[20vw] p-[3vw] pl-[1vw] flex justify-between items-center">
          <span>
            <Link to="Login">
              <TabBar>
                <TabBar.Item key="" icon={<AppstoreOutline style={{ color: 'black' }} />} />
              </TabBar>
            </Link>
          </span>
          <div className="relative flex items-center border-2 rounded-[20px] ">
            <span>
              <TabBar>
                <TabBar.Item key="" icon={<SearchOutline style={{ color: 'black' }} />} />
              </TabBar>
            </span>
            <Link to="Fount">Love Is Gone (Acoustic)</Link>
            <span>
              <TabBar>
                <TabBar.Item key="" icon={<ScanningOutline style={{ color: 'black' }} />} />
              </TabBar>
            </span>
          </div>
          <span>
            <TabBar>
              <TabBar.Item key="" icon={<AudioOutline style={{ color: 'black' }} />} />
            </TabBar>
          </span>
        </div>
        <section className="w-[90vw] h-[36vw] rounded-2xl flex items-center overflow-hidden mx-auto">
          <div className="my-swipe w-[500vw] h-[100%] overflow-hidden relative flex van-swipe">
            <div className="van-swipe__track">
              <Swiper autoplay>
                {bnr.map((lbt) => (
                  <Swiper.Item>
                    <div className="w-[338px] van-swipe-item">
                      <img src={lbt.pic} className="w-[100%] h-[100%]" alt="" />
                    </div>
                  </Swiper.Item>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </div>
      <Div>
        <div className="nav">
          <div className="b_list">
            {list &&
              list.map((item) => (
                <div className="b_item">
                  <img src={item.iconUrl} alt="" />
                  <p>{item.name}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="b_tit">
          <div className="tit1">推荐歌单{'>'}</div>
          <div className="tit2">:</div>
        </div>
        <div className="b_img_nav">
          <div className="b_img">
            {btit &&
              btit.map((item) => (
                <div className="b_img-1">
                  <img src={item.uiElement.image.imageUrl} alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className="b_tit">
          <div className="tit1">新歌新碟\数字专辑{'>'}</div>
          <div className="tit2">:</div>
        </div>
        <div className="w-[98vw] pt-[1vw] pl-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]">
          <div className="scroll-content flex overflow-auto">
            <ul data-v-fcb07e44="" className="w-[88vw] scroll-item pb-[3.8vw]">
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/h-QUVdy-Sh1LbHXL9sVLdg==/109951168881858989.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      辗转
                    </h4>{' '}
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      小众推荐
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/ayBMyPzJx4FS4U3p3-fzeg==/109951168884686846.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      今此秋夏
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      超84%人播放
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/IpXZzvX4xgseWGfZhXHCyQ==/109951163115291601.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      错觉
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      克卜勒这张专辑能听十年
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <ul data-v-fcb07e44="" className="w-[88vw] scroll-item pb-[3.8vw]">
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/zCM-iFzx6_SHCQil7goKgw==/109951168894856447.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      来过了又走
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      小众推荐
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/v-hT3GNhq-ls6HVAxJ8pKw==/109951168898438688.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      寒门贵子
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      昨日上万播放
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/X5k0ldV70RTbKOhhZ10yng==/109951166916017949.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      暗恋
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      我永远都不会说 你永远都不会知道
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <ul data-v-fcb07e44="" className="w-[88vw] scroll-item pb-[3.8vw]">
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/RJp91O7h_prQjFWrS9TMxw==/109951168866710412.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      说不出口 feat. 伍佰
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      昨日上万播放
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/RoEDJdCPQ95SrA42n0YA3Q==/109951168890472651.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      和影子跳舞 (feat. 毛不易)
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    />
                  </div>
                </div>
              </li>
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/X3Q5VDsBhYAiPztqKNUNGA==/109951168892899327.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      恋与爱是不同的概念
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="b_tit">
          <div className="tit1">排行榜{'>'}</div>
          <div className="tit2">:</div>
        </div>
        <div className="w-[98vw] pt-[1vw] pl-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]">
          <div className="scroll-content overflow-auto flex ">
            <ul data-v-fcb07e44="" className="w-[88vw] scroll-item pb-[3.8vw]">
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/h-QUVdy-Sh1LbHXL9sVLdg==/109951168881858989.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      辗转
                    </h4>{' '}
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      小众推荐
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/ayBMyPzJx4FS4U3p3-fzeg==/109951168884686846.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      今此秋夏
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      超84%人播放
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/IpXZzvX4xgseWGfZhXHCyQ==/109951163115291601.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      错觉
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      克卜勒这张专辑能听十年
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <ul data-v-fcb07e44="" className="w-[88vw] scroll-item pb-[3.8vw]">
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/h-QUVdy-Sh1LbHXL9sVLdg==/109951168881858989.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      辗转
                    </h4>{' '}
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      小众推荐
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/ayBMyPzJx4FS4U3p3-fzeg==/109951168884686846.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      今此秋夏
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      超84%人播放
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/IpXZzvX4xgseWGfZhXHCyQ==/109951163115291601.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      错觉
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      克卜勒这张专辑能听十年
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <ul data-v-fcb07e44="" className="w-[88vw] scroll-item pb-[3.8vw]">
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/h-QUVdy-Sh1LbHXL9sVLdg==/109951168881858989.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      辗转
                    </h4>{' '}
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      小众推荐
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/ayBMyPzJx4FS4U3p3-fzeg==/109951168884686846.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      今此秋夏
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      超84%人播放
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-fcb07e44="" className="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]">
                <div data-v-fcb07e44="" className="flex">
                  <img
                    data-v-fcb07e44=""
                    src="http://p1.music.126.net/IpXZzvX4xgseWGfZhXHCyQ==/109951163115291601.jpg"
                    alt=""
                    className="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
                  />
                  <div data-v-fcb07e44="" className="flex-1 pt-[2.85vw] ml-[1vw]">
                    <h4
                      data-v-fcb07e44=""
                      className="dark:text-[#e3e5ec] text-[3.5vw] text-[#3E465B]"
                    >
                      错觉
                    </h4>
                    <p
                      data-v-fcb07e44=""
                      className="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                    >
                      克卜勒这张专辑能听十年
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="b_tit">
          <div className="tit1">热门话题{'>'}</div>
          <div className="tit2">:</div>
        </div>
        <div className="w-[95vw] ml-[4vw] overflow-hidden scroll-wrapper">
          <div className=" flex mb-[6.31vw] scroll-content overflow-auto">
            <div className="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]">
              <h4 className="text-[4vw] text-[#fff] flex items-center">与银河对视</h4>
              <p className="text-[2.6vw] text-[#D7D7D7]">484万热度</p>
              <p className="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden">
                我们是宇宙中最浪漫的乘车客。
              </p>
              <img
                src="http://p1.music.126.net/k6s_BYKfQk38jSyEWWdQuA==/109951165474239956.jpg"
                alt=""
                className="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]"
              />
            </div>
            <div className="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]">
              <h4 className="text-[4vw] text-[#fff] flex items-center">与银河对视</h4>
              <p className="text-[2.6vw] text-[#D7D7D7]">484万热度</p>
              <p className="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden">
                我们是宇宙中最浪漫的乘车客。
              </p>
              <img
                src="http://p1.music.126.net/k6s_BYKfQk38jSyEWWdQuA==/109951165474239956.jpg"
                alt=""
                className="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]"
              />
            </div>
            <div className="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]">
              <h4 className="text-[4vw] text-[#fff] flex items-center">与银河对视</h4>
              <p className="text-[2.6vw] text-[#D7D7D7]">484万热度</p>
              <p className="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden">
                我们是宇宙中最浪漫的乘车客。
              </p>
              <img
                src="http://p1.music.126.net/k6s_BYKfQk38jSyEWWdQuA==/109951165474239956.jpg"
                alt=""
                className="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]"
              />
            </div>
            <div className="relative bg-[#9C9C9C] w-[68vw] h-[28vw] scroll-item rounded-[10px] py-[4vw] px-[3vw] mr-[2.83vw]">
              <h4 className="text-[4vw] text-[#fff] flex items-center">与银河对视</h4>
              <p className="text-[2.6vw] text-[#D7D7D7]">484万热度</p>
              <p className="text-[2.6vw] text-[#fff] w-[42vw] text-ellipsis h-[10vw] overflow-hidden">
                我们是宇宙中最浪漫的乘车客。
              </p>
              <img
                src="http://p1.music.126.net/k6s_BYKfQk38jSyEWWdQuA==/109951165474239956.jpg"
                alt=""
                className="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]"
              />
            </div>
          </div>
        </div>
        <div className="b_tit">
          <div className="tit1">音乐日历{'>'}</div>
          <div className="tit2">:</div>
        </div>
        <div className="w-[91vw] pt-[1vw] ml-[2vw] overflow-hidden scroll-wrapper border-[#EBEDF2]">
          <div className="scroll-content flex w-[540vw] mb-[6.31vw]">
            <ul className="dark:bg-[#25272e] w-[91vw] scroll-item shadows bg-[#fff] mr-[2vw] rounded-[10px] px-[4vw] pt-[4vw] pb-[3.8vw]">
              <li className="flex mt-[3vw]">
                <div className="flex-1">
                  <p className="dark:text-[#ebeaf0] text-[2.72vw] text-[#AAADB5]">9/26</p>
                  <div className="dark:text-[#a5a7ae] text-[3.68vw] text-[#3E4558]">
                    白敬亭的专辑：Don’t Go
                  </div>
                </div>
                <div className="flex-4">
                  <img
                    src="http://p1.music.126.net/fYN8HLO_ZTzy_aYD0Hk2bQ==/109951168933478345.jpg"
                    alt=""
                    className="w-[15vw] h-[15vw] rounded-[10px]"
                  />
                </div>
              </li>
              <li className="flex mt-[3vw]">
                <div className="flex-1">
                  <p className="dark:text-[#ebeaf0] text-[2.72vw] text-[#AAADB5]">9/26</p>
                  <div className="dark:text-[#a5a7ae] text-[3.68vw] text-[#3E4558]">
                    时代少年团的专辑：时代少年团「造夏」音乐分享会Live音频
                  </div>
                </div>
                <div className="flex-4">
                  <img
                    src="http://p1.music.126.net/HlY7w0r0WK-3S7pCMlctfg==/109951168871961719.jpg"
                    alt=""
                    className="w-[15vw] h-[15vw] rounded-[10px]"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="btm bg-[#FFF] fixed w-[100%] h-[50px] flex items-center justify-around bottom-0">
          {navList.map(({ to, title }) => (
            <NavLink
              key={to}
              className={({ isActive }) => (isActive ? ' text-red-500' : 'text-black')}
              to={to}
            >
              {title}
            </NavLink>
          ))}
        </div>
      </Div>

      {/* <Btm className="btm">
            <div className="btm__item">
                <div className="iconfont2"></div>
                <p className="index">首页</p>
            </div>
            <div className="btm__item">
                <div className="iconfont2"></div>
                <p>排行榜</p>
            </div>
            <div className="btm__item">
                <div className="iconfont2"></div>
                <p>我的</p>
            </div>
            <div className="btm__item">
                <div className="iconfont2"></div>
                <p>关注</p>
            </div>
            <div className="btm__item">
                <div className="iconfont2"></div>
                <p>社区</p>
            </div>
        </Btm> */}
    </div>
  );
}
