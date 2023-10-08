/* eslint-disable camelcase */
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Tabs, Swiper } from 'antd-mobile';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Scroll from '@/components/Scroll';

const Div = styled.div`
  .mv-tabs__wrap {
    margin-bottom: 3vw;
    border-radius: 15px;
    height: 44px;
    .mv-tabs__nav--line {
      box-sizing: content-box;
      height: 100%;
      padding-bottom: 15px;
      .buPmeF .tab .mv-tab--active {
        color: #2a3146;
        font-size: 4vw;
        font-weight: 500;
      }
      .mv-tab {
        position: relative;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 4px;
        color: #646566;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
`;

const tabItems = [
  { key: 'outback', title: '内地' },
  { key: 'hongk', title: '港台' },
  { key: 'EA', title: '欧美' },
  { key: 'Korea', title: '韩国' },
  { key: 'Japen', title: '日本' }
];

export default function Mv() {
  const navList = [
    { to: '/Index', title: '首页' },
    { to: '/Mv', title: '排行榜' }
  ];

  const [outback, setOutBack] = useState([]);
  const [hongk, setHongk] = useState([]);
  const [EA, setEA] = useState([]);
  const [Korea, setKorea] = useState([]);
  const [Japen, setJapen] = useState([]);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=50&area=%E5%86%85%E5%9C%B0&cookie='
      )
      .then((res) => {
        // console.log(res.data.data.roll_data.map((item) => item.title));
        setOutBack(res.data.data.map((items) => items));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=50&area=%E6%B8%AF%E5%8F%B0&cookie='
      )
      .then((res) => {
        // console.log(res.data.data.roll_data.map((item) => item.title));
        setHongk(res.data.data.map((items) => items));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=50&area=%E6%AC%A7%E7%BE%8E&cookie='
      )
      .then((res) => {
        // console.log(res.data.data.roll_data.map((item) => item.title));
        setEA(res.data.data.map((items) => items));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=50&area=%E9%9F%A9%E5%9B%BD&cookie='
      )
      .then((res) => {
        // console.log(res.data.data.roll_data.map((item) => item.title));
        setKorea(res.data.data.map((items) => items));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=50&area=%E6%97%A5%E6%9C%AC&cookie='
      )
      .then((res) => {
        // console.log(res.data.data.roll_data.map((item) => item.title));
        setJapen(res.data.data.map((items) => items));
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  return (
    <Div>
      <div className="flex items-center justify-center w-[100%] px-[4vw] py-[3vw] bg-[#fff] text-[#010101]  text-[4.2vw] font-[600]">
        MV排行榜
      </div>
      <div className="mv-tabs__wrap">
        <div className="mv-tabs__nav mv-tabs__nav--line">
          <Tabs
            activeKey={tabItems[activeIndex].key}
            onChange={(key) => {
              const index = tabItems.findIndex((item) => item.key === key);
              setActiveIndex(index);
              swiperRef.current?.swipeTo(index);
            }}
          >
            {tabItems.map((item) => (
              <Tabs.Tab title={item.title} key={item.key} />
            ))}
          </Tabs>
          <Swiper
            direction="horizontal"
            loop
            indicator={() => null}
            ref={swiperRef}
            defaultIndex={activeIndex}
            onIndexChange={(index) => {
              setActiveIndex(index);
            }}
          >
            <Swiper.Item>
              <div className="mv-tabs mv-tabs--line tab">
                <Scroll
                  wrapperStyle={{ height: '520px', border: '1px solid red' }}
                  contentStyle={{}}
                >
                  <div className=" pl-[4vw] pr-[4vw]">
                    {outback.map((m_item, index) => (
                      <div className="w-[92vw]">
                        <div className="w-[100%]">
                          <img
                            src={m_item.cover}
                            alt=""
                            className=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
                          />
                        </div>
                        <div className="h-[15vw] flex items-center flex-wrap">
                          <div className="flex h-[5vw] w-[100vw]">
                            <span className="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">
                              {index + 1}
                            </span>
                            <span className=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">
                              {m_item.name}
                            </span>
                          </div>
                          <div>
                            <span className=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                              {m_item.artistName}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Scroll>
              </div>
            </Swiper.Item>
            <Swiper.Item>
              <div className="mv-tabs mv-tabs--line tab">
                <Scroll
                  wrapperStyle={{ height: '520px', border: '1px solid red' }}
                  contentStyle={{}}
                >
                  <div className=" pl-[4vw] pr-[4vw]">
                    {hongk.map((hk_item, index) => (
                      <div className="w-[92vw]">
                        <div className="w-[100%]">
                          <img
                            src={hk_item.cover}
                            alt=""
                            className=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
                          />
                        </div>
                        <div className="h-[15vw] flex items-center flex-wrap">
                          <div className="flex h-[5vw] w-[100vw]">
                            <span className="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">
                              {index + 1}
                            </span>
                            <span className=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">
                              {hk_item.name}
                            </span>
                          </div>
                          <div>
                            <span className=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                              {hk_item.artistName}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Scroll>
              </div>
            </Swiper.Item>
            <Swiper.Item>
              <div className="mv-tabs mv-tabs--line tab">
                <Scroll
                  wrapperStyle={{ height: '520px', border: '1px solid red' }}
                  contentStyle={{}}
                >
                  <div className=" pl-[4vw] pr-[4vw]">
                    {EA.map((ea_item, index) => (
                      <div className="w-[92vw]">
                        <div className="w-[100%]">
                          <img
                            src={ea_item.cover}
                            alt=""
                            className=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
                          />
                        </div>
                        <div className="h-[15vw] flex items-center flex-wrap">
                          <div className="flex h-[5vw] w-[100vw]">
                            <span className="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">
                              {index + 1}
                            </span>
                            <span className=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">
                              {ea_item.name}
                            </span>
                          </div>
                          <div>
                            <span className=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                              {ea_item.artistName}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Scroll>
              </div>
            </Swiper.Item>
            <Swiper.Item>
              <div className="mv-tabs mv-tabs--line tab">
                <Scroll
                  wrapperStyle={{ height: '520px', border: '1px solid red' }}
                  contentStyle={{}}
                >
                  <div className=" pl-[4vw] pr-[4vw]">
                    {Korea.map((k_item, index) => (
                      <div className="w-[92vw]">
                        <div className="w-[100%]">
                          <img
                            src={k_item.cover}
                            alt=""
                            className=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
                          />
                        </div>
                        <div className="h-[15vw] flex items-center flex-wrap">
                          <div className="flex h-[5vw] w-[100vw]">
                            <span className="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">
                              {index + 1}
                            </span>
                            <span className=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">
                              {k_item.name}
                            </span>
                          </div>
                          <div>
                            <span className=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                              {k_item.artistName}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Scroll>
              </div>
            </Swiper.Item>
            <Swiper.Item>
              <div className="mv-tabs mv-tabs--line tab">
                <Scroll
                  wrapperStyle={{ height: '520px', border: '1px solid red' }}
                  contentStyle={{}}
                >
                  <div className=" pl-[4vw] pr-[4vw]">
                    {Japen.map((j_item, index) => (
                      <div className="w-[92vw]">
                        <div className="w-[100%]">
                          <img
                            src={j_item.cover}
                            alt=""
                            className=" w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
                          />
                        </div>
                        <div className="h-[15vw] flex items-center flex-wrap">
                          <div className="flex h-[5vw] w-[100vw]">
                            <span className="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]">
                              {index + 1}
                            </span>
                            <span className=" flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]">
                              {j_item.name}
                            </span>
                          </div>
                          <div>
                            <span className=" flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                              {j_item.artistName}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Scroll>
              </div>
            </Swiper.Item>
          </Swiper>
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
  );
}
