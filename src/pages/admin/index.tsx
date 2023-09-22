import React, { useEffect, useState } from 'react';

import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'; // Link 태그를 생성하여 다른 페이지 혹은 url로 이어지게 한다.
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS, 부트스태랩을 글로벌하게 쓸 수 있도록 한다.
// eslint-disable-next-line import/order
import { config } from '@fortawesome/fontawesome-svg-core'; // icon을 사용하기 위해 font
import '@fortawesome/fontawesome-svg-core/styles.css';
import AdminPassword from '../../components/AdminPassword';
import axios from 'axios';
import { serverUrl } from '../../const';
// Admin 로그인 후 나올 첫 페이지

config.autoAddCss = false;

const Admin = () => {
  const [EventList, setEventList] = useState([]); // 이벤트 리스트를 받을 수 있는 리스트예시, 클릭시 이름과 id 값을 가져와서 리스트 업하고, id에 맞춰 개별 페이지를 보여준다.
  // const [ProductList, setProductList] = useState([
  //   '1차밋업',
  //   '2차밋업',
  //   '3차밋업',
  // ]); // product 리스트를 받을 수 있는 리스트
  const [Password, setPassword] = useState<boolean>(false);

  useEffect(() => {
    axios.get(`${serverUrl}/admin/events`).then((res) => {
      const dtos = res.data;
      const eventList = dtos.map((dto: any) => ({
        name: dto.name,
        pid: dto.id,
      }));
      setEventList(eventList);
    });
  }, [])

  return (
    <div>
      {/* {Password === true ? ( */}
      {true ? (
        <>
          <Link href={'/admin/addevent'}>
            <div
              className="list-group-item list-group-item-action active w-50"
              style={{
                backgroundColor: '#cfcfcf',
                textAlign: 'center',
                marginTop: '10%',
                marginLeft: '25%',
              }}
            >
              Add Event / Product <FontAwesomeIcon icon={faPlus} />
            </div>
          </Link>
          <div
            className="list-group w-50"
            style={{ marginTop: '10%', marginLeft: '25%' }}
          >
            <div className="list-group-item list-group-item-action active  ">
              Event
            </div>
            {EventList.map((item) => (
              <>
                <Link href={`/admin/events/${item.pid}`}>
                  {item.name}{' '}
                  <FontAwesomeIcon icon={faPen} style={{ marginLeft: 10 }} />
                </Link>
              </>
            ))}
          </div>

          <span onClick={() => temp()}>temp</span>
        </>
      ) : (
        <div>
          <AdminPassword Password={Password} setPassword={setPassword} />
        </div>
      )}
    </div>
  );
};

export default Admin;
