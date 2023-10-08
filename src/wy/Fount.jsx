import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Input, TabBar } from 'antd-mobile';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  LeftOutline,
  TeamFill,
  ShopbagOutline,
  CollectMoneyOutline,
  AudioFill,
  UndoOutline,
  PlayOutline,
  SearchOutline
} from 'antd-mobile-icons';
import Link from '../components/Link';

const Div = styled.div`
  .adm-tab-bar-wrap {
    min-height: 0;
  }

  background-color: rgb(244, 244, 244);
  .head {
    width: 91vw;
    height: 20vw;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .relative {
      border-radius: 25px;
      display: flex;
      align-items: center;
      .adm-tab-bar {
        top: 3vw;
        height: 30px;
      }
      .adm-input {
        width: 55vw;
        height: 10vw;
        font-size: 3vw;
        border-radius: 25px;
      }
    }
  }
  .type {
    .adm-tab-bar-item {
      flex: 1 1;
      color: var(--adm-color-text-secondary);
      white-space: nowrap;
      padding: 4px 8px;
      width: min-content;
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }
    .adm-tab-bar-item-title-with-icon {
      margin-left: 2vw;
    }
  }
  .history {
    margin-top: 5vw;
    .like {
      padding-left: 3vw;
      padding-right: 3vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        font-weight: 600;
      }
    }
  }
  .m_list {
    display: flex;
    overflow: auto;
  }
`;

export default function Fount() {
  const [value, setValue] = useState([]);
  const [music, setMusic] = useState([]);

  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/search/hot/detail?cookie=')
      .then((res) => {
        // console.log(res.data.data.roll_data.map((item) => item.title));
        setValue(res.data.data.map((items) => items));
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=3779629&cookie='
      )
      .then((res) => {
        // console.log(res.data.data.roll_data.map((item) => item.title));
        setMusic(res.data.playlist.tracks.map((items) => items));
        console.log(res.data.playlist.tracks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const newArr = value.slice(0, 5);
  const newMusic = music.slice(0, 20);

  return (
    <Div>
      <div className="head">
        <span>
          <Link to="/">
            <TabBar>
              <TabBar.Item key="" icon={<LeftOutline style={{ color: 'black' }} />} />
            </TabBar>
          </Link>
        </span>
        <div className="relative flex items-center border-2 rounded-[20px] ">
          <span>
            <TabBar>
              <TabBar.Item
                key=""
                icon={<SearchOutline style={{ color: 'black', fontSize: '5vw' }} />}
              />
            </TabBar>
          </span>
          <Input />
        </div>
        <div style={{ fontWeight: '600', fontSize: '3.7vw' }}>搜索</div>
      </div>
      <div>
        <TabBar className="type">
          <TabBar.Item
            key=""
            title="歌手"
            icon={<TeamFill style={{ color: 'red' }} />}
            style={{ color: 'black', fontWeight: '800', fontSize: '3.4vw' }}
          />
          <TabBar.Item
            key=""
            title="曲风"
            icon={<ShopbagOutline style={{ color: 'red' }} />}
            style={{ color: 'black', fontWeight: '800', fontSize: '3.4vw' }}
          />
          <TabBar.Item
            key=""
            title="专区"
            icon={<CollectMoneyOutline style={{ color: 'red' }} />}
            style={{ color: 'black', fontWeight: '800', fontSize: '3.4vw' }}
          />
          <TabBar.Item
            key=""
            title="识曲"
            icon={<AudioFill style={{ color: 'red' }} />}
            style={{ color: 'black', fontWeight: '800', fontSize: '3.4vw' }}
          />
        </TabBar>
      </div>
      <div className="history">
        <div className="like">
          <h1>猜你喜欢</h1>
          <TabBar style={{ height: '18px' }}>
            <TabBar.Item
              key=""
              icon={<UndoOutline style={{ fontSize: 16, color: 'rgb(172, 175, 174)' }} />}
            />
          </TabBar>
        </div>
        <div className="flex px-[3vw] flex-wrap">
          {newArr.map((item) => (
            <div className="p-[2vw] mr-[2vw] text-[3.5vw] dark:bg-[#ffffff] dark:text-[#000000] text-[#535c6a] mt-[3vw] bg-[#fff] px-[3vw] rounded-[20px]">
              {item.searchWord}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100vw] overflow-hidden mt-[5vw]">
        <div className="m_list">
          <div className="bg-[#fff] dark:bg-[#ffffff] rounded-[2vw] ml-[2.344vw] van-swipe-item w-[243.75px]">
            <div className="dark:border-b-[#7d8397] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]">
              <span className="text-[4vw] text-[#000000] dark:text-[#000] mr-[3.359vw] ml-[4vw]">
                新歌榜
              </span>
              <div className="h-[5.235vw] bg-[#d9dbd982]  flex items-center  pr-[2vw] rounded-[3vw]">
                <TabBar>
                  <TabBar.Item
                    key=""
                    icon={
                      <PlayOutline
                        style={{ fontSize: 16, color: 'rgb(0, 0, 0)', width: '15px', height: 25 }}
                      />
                    }
                  />
                </TabBar>
                <span className="text-[2.6vw] text-[#000000] dark:text-[#000]">播放</span>
              </div>
            </div>
            <div className="pr-[2vw]">
              {newMusic.map((mitem, index) => (
                <div className="my-[2.7vw] flex items-center h-[8vw]">
                  <span className="text-[3.2vw] w-[8.83vw] text-center font-[400] text-[red]">
                    {index + 1}
                  </span>
                  <span className="text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">
                    {mitem.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#fff] dark:bg-[#ffffff] rounded-[2vw] ml-[2.344vw] van-swipe-item w-[243.75px]">
            <div className="dark:border-b-[#7d8397] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]">
              <span className="text-[4vw] text-[#000000] dark:text-[#000] mr-[3.359vw] ml-[4vw]">
                新歌榜
              </span>
              <div className="h-[5.235vw] bg-[#d9dbd982]  flex items-center  pr-[2vw] rounded-[3vw]">
                <TabBar>
                  <TabBar.Item
                    key=""
                    icon={
                      <PlayOutline
                        style={{ fontSize: 16, color: 'rgb(0, 0, 0)', width: '15px', height: 25 }}
                      />
                    }
                  />
                </TabBar>
                <span className="text-[2.6vw] text-[#000000] dark:text-[#000]">播放</span>
              </div>
            </div>
            <div className="pr-[2vw]">
              {newMusic.map((mitem, index) => (
                <div className="my-[2.7vw] flex items-center h-[8vw]">
                  <span className="text-[3.2vw] w-[8.83vw] text-center font-[400] text-[red]">
                    {index + 1}
                  </span>
                  <span className="text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">
                    {mitem.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#fff] dark:bg-[#ffffff] rounded-[2vw] ml-[2.344vw] van-swipe-item w-[243.75px]">
            <div className="dark:border-b-[#7d8397] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]">
              <span className="text-[4vw] text-[#000000] dark:text-[#000] mr-[3.359vw] ml-[4vw]">
                新歌榜
              </span>
              <div className="h-[5.235vw] bg-[#d9dbd982]  flex items-center  pr-[2vw] rounded-[3vw]">
                <TabBar>
                  <TabBar.Item
                    key=""
                    icon={
                      <PlayOutline
                        style={{ fontSize: 16, color: 'rgb(0, 0, 0)', width: '15px', height: 25 }}
                      />
                    }
                  />
                </TabBar>
                <span className="text-[2.6vw] text-[#000000] dark:text-[#000]">播放</span>
              </div>
            </div>
            <div className="pr-[2vw]">
              {newMusic.map((mitem, index) => (
                <div className="my-[2.7vw] flex items-center h-[8vw]">
                  <span className="text-[3.2vw] w-[8.83vw] text-center font-[400] text-[red]">
                    {index + 1}
                  </span>
                  <span className="text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">
                    {mitem.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#fff] dark:bg-[#ffffff] rounded-[2vw] ml-[2.344vw] van-swipe-item w-[243.75px]">
            <div className="dark:border-b-[#7d8397] ml-[2vw] w-[54vw] h-[12.422vw] flex items-center border-b-[1px] border-b-[#eaeaea]">
              <span className="text-[4vw] text-[#000000] dark:text-[#000] mr-[3.359vw] ml-[4vw]">
                新歌榜
              </span>
              <div className="h-[5.235vw] bg-[#d9dbd982]  flex items-center  pr-[2vw] rounded-[3vw]">
                <TabBar>
                  <TabBar.Item
                    key=""
                    icon={
                      <PlayOutline
                        style={{ fontSize: 16, color: 'rgb(0, 0, 0)', width: '15px', height: 25 }}
                      />
                    }
                  />
                </TabBar>
                <span className="text-[2.6vw] text-[#000000] dark:text-[#000]">播放</span>
              </div>
            </div>
            <div className="pr-[2vw]">
              {newMusic.map((mitem, index) => (
                <div className="my-[2.7vw] flex items-center h-[8vw]">
                  <span className="text-[3.2vw] w-[8.83vw] text-center font-[400] text-[red]">
                    {index + 1}
                  </span>
                  <span className="text-[3.2vw] text-[#2a344b] mr-[1vw] w-[50vw] overflow-hidden truncate">
                    {mitem.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}
