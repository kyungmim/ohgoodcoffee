import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/store';
import { useEffect, useState } from 'react';

function UserInfo() {
  const { user } = useUserStore();

  // const item = data && data?.item?.map((item) => item);
  // console.log(item);

  return (
    <>
      <div className="l_wrapper">
        <div className="item-wrapper">
          <div className="main-title">
            <p className="main-contents-title">회원정보</p>
          </div>
          <div className="main-content">
            <div className="profile-settings">
              <div className="profile-setting">
                <div className="profile-item">
                  <h1 className="profile-item-title">Type</h1>
                  <p>{user.type}</p>
                </div>
                <div className="profile-item">
                  <h1 className="profile-item-title">Name</h1>
                  <p>{user.name}</p>
                </div>
                <div className="profile-item">
                  <h1 className="profile-item-title">Email</h1>
                  <p>{user.email}</p>
                </div>
                <div className="profile-item">
                  <h1 className="profile-item-title">Phone Number</h1>
                  <p>{user.phone}</p>
                </div>
                <div className="profile-item">
                  <h1 className="profile-item-title">Address</h1>
                  <p>{user.address}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-area with_margin">
            <button className="button button-large btn-Fill btn-layout" type="submit">
              수정하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
