import React, { useState } from 'react';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'; // Link 태그를 생성하여 다른 페이지 혹은 url로 이어지게 한다.
import { useRouter } from 'next/router';

import EventRawData from '../../../components/EventRawData';
import PriceChart from '../../../components/PriceChart';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS, 부트스태랩을 글로벌하게 쓸 수 있도록 한다.
// eslint-disable-next-line import/order
import { config } from '@fortawesome/fontawesome-svg-core'; // icon을 사용하기 위해 font
import '@fortawesome/fontawesome-svg-core/styles.css';
// eslint-disable-next-line import/order

// Admin 로그인 후 나올 첫 페이지

config.autoAddCss = false;

export default function EventPid() {
  const router = useRouter();
  const { pid } = router.query;
  const [TimeList, setTimeList] = useState([
    '2023-01',
    '2023-02',
    '2023-03',
    '2023-04',
    '2023-05',
    '2023-06',
    '2023-07',
  ]);
  const [RawDataList, setRawDataList] = useState([
    { name: '1차밋업', pid: '111' },
    { name: '2차밋업', pid: '222' },
    { name: '3차밋업', pid: '333' },
  ]);
  return (
    <div style={{ padding: '5%' }}>
      <Link href={`/admin`}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ height: 30, width: 30 }}
        />
      </Link>
      <div className="row mt-5">
        <div className="col-6">
          <span>Price Chart</span>
          <PriceChart TimeList={TimeList} />
          <span>Price Chart</span>
          <PriceChart TimeList={TimeList} />
        </div>
        <div className="col-6">
          <span>Event Raw Data</span>
          <EventRawData RawDataList={RawDataList} />
        </div>
        {/* <FontAwesomeIcon icon={faPen} style={{ marginLeft: 10 }} /> */}
      </div>
    </div>
  );
}
