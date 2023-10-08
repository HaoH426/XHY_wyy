/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TabBar } from 'antd-mobile';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LeftOutline } from 'antd-mobile-icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import storejs from 'storejs';
import Link from '../components/Link';
import { createLoginQrKey, createLoginQrImage, checkLoginQr } from '../service';

function Login() {
  const Pic = 'https://admirable-jalebi-ce44af.netlify.app/static/queding.png';
  const navigate = useNavigate();
  const unikey = useRef('');
  const timer = useRef(null);
  const qr = useRef('');
  const [status, setStatus] = useState();
  const checkScanStatus = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      checkLoginQr({ key: unikey.current, timestamp: Date.now() })
        .then((res) => {
          setStatus(res.data.code);
          if ([800, 803].includes(res.data.code)) clearInterval(timer);
          if (res.data.code === 803) {
            storejs.set('cookie', res.data.cookie);
            navigate('/index');
          }
        })
        .catch(() => {
          clearInterval(timer);
        });
    }, 1500);
  };
  useEffect(() => {
    createLoginQrKey()
      // eslint-disable-next-line no-return-assign
      .then((res) => (unikey.current = res.data.data.unikey))
      .then((key) => createLoginQrImage({ key, qrimg: true }))
      // eslint-disable-next-line no-return-assign
      .then((res) => (qr.current = res.data.data.qrimg))
      .then(() => checkScanStatus())
      .catch((err) => console.log(err));
    return () => clearInterval(timer.current);
  }, []);
  return (
    <div>
      <div className=" flex items-center justify-between p-[4vw]">
        <span>
          <Link to="/">
            <TabBar>
              <TabBar.Item key="" icon={<LeftOutline style={{ color: 'black' }} />} />
            </TabBar>
          </Link>
        </span>
        <div className=" text-[4vw] text-[#696969]">游客登录</div>
      </div>
      <img
        src="https://admirable-jalebi-ce44af.netlify.app/static/logo.fill.svg"
        alt=""
        className="w-[38vw] mx-auto mt-[7vw] mb-[9vw]"
      />

      {[800, 801].includes(status) ? (
        <div className="relative">
          <img src={qr.current} alt="" className="w-[40vw] h-[40vw] m-auto relative z-[1]" />
          {status === 800 ? (
            <div className="z-[999] absolute h-[40vw] w-[40vw] top-0 left-1/2 transform -translate-x-1/2">
              <div className="absolute bg-[#DDDDDD] w-[40vw] h-[40vw] opacity-60 z-[2]" />
              <div className="shadow-lg absolute z-[3] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#FF5A35] to-[#F81227] text-[#fff] rounded-[200px] text-center leading-[7.6vw] h-[7.6vw] w-[20vw] text-[3vw]">
                <a href="">点击刷新</a>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
      {status === 802 ? (
        <div>
          <img src={Pic} alt="" className="h-[41vw] mx-auto" />
          <h1 className="h-[17vw] leading-[17vw] text-center text-[4vw] text-[#04090C]">
            扫描成功
          </h1>
          <p className="text-[#0F1619] text-[3.4vw] text-center">请在手机上确认登录</p>
        </div>
      ) : null}
      <div className="fixed bottom-0">
        <img
          src="https://admirable-jalebi-ce44af.netlify.app/static/bg-login.png"
          alt=""
          className="w-[100vw]"
        />
      </div>
    </div>
  );
}

export default Login;
