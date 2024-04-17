import useUserStore from '@zustand/store';
import { useState } from 'react';
import SellerInfoEdit from './SellerInfoEdit';

function SellerInfo() {
  const { user } = useUserStore();
  const [info, setInfo] = useState(true);

  const onClick = () => {
    setInfo(!info);
  };

  return (
    <>
      <div className="l_wrapper">
        <div className="item-wrapper">
          <div className="main-title">
            <p className="main-contents-title">회원정보</p>
          </div>
          {info ? (
            <>
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
              <div className="button-area">
                <button onClick={onClick} className="button button-large btn-Fill btn-layout" type="button">
                  수정하기
                </button>
              </div>
            </>
          ) : (
            <SellerInfoEdit />
          )}
        </div>
      </div>
    </>
  );
}

export default SellerInfo;
