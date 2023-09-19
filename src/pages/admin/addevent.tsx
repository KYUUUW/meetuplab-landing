'use client';

import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS, 부트스태랩을 글로벌하게 쓸 수 있도록 한다.
// eslint-disable-next-line import/order
import { config } from '@fortawesome/fontawesome-svg-core'; // icon을 사용하기 위해 font
import '@fortawesome/fontawesome-svg-core/styles.css';
// Link 태그를 생성하여 다른 페이지 혹은 url로 이어지게 한다.
import { useRouter } from 'next/router';

config.autoAddCss = false;
export default function AddEvent() {
  const [EventName, setEventName] = useState<string>(''); // 이벤트 이름을 입력받는 변수
  const [FirstPrice, setFirstPrice] = useState<number>(0); // 최초 가격
  const [LowestPrice, setLowesttPrice] = useState<number>(0); // 최소 가격
  const [InventoryNumber, setInventoryNumber] = useState<number>(0); // 재고 수, 좌석 수
  const [SalesStartTime, setSalesStartTime] = useState<string>(''); //
  const [SalesEndTime, setSalesEndTime] = useState<string>(''); //
  const router = useRouter();
  const SendEventInfo = () => {
    alert(EventName + FirstPrice + LowestPrice + InventoryNumber);
    router.push('/admin');
  };

  return (
    <div className="d-flex justify-content-center ">
      {/* 이벤트 이름 입력 받기 */}
      <form style={{ marginTop: '10%' }} className="w-75">
        <div className="form-group ">
          <label htmlFor="exampleInputEmail1">Event Name(이벤트 이름)</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Event Name"
            value={EventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        {/* 이벤트 티켓 1개당 최초가격 설정 */}
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">최초 가격</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Event Name"
            value={FirstPrice}
            onChange={(e) => setFirstPrice(e.target.valueAsNumber)}
          />
        </div>
        {/* 이벤트 티켓 1개당 최저가격 설정 */}
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">최저 가격</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Event Name"
            value={LowestPrice}
            onChange={(e) => setLowesttPrice(e.target.valueAsNumber)}
          />
        </div>
        {/* 상품의 재고 혹은 좌석수  */}
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">재고 수</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Event Name"
            value={InventoryNumber}
            onChange={(e) => setInventoryNumber(e.target.valueAsNumber)}
          />
        </div>
        {/* 핀메 시작 시간 */}
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">판매 시작 시간</label>
          <input
            type="text"
            className="form-control"
            placeholder="yyyy-mm-dd-tt-mm"
            value={SalesStartTime}
            onChange={(e) => setSalesStartTime(e.target.value)}
          />
        </div>
        {/* 핀메 종료 시간 */}
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">판매 종료 시간</label>
          <input
            type="text"
            className="form-control"
            placeholder="yyyy-mm-dd-tt-mm"
            value={SalesEndTime}
            onChange={(e) => setSalesEndTime(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary mt-5"
          onClick={() => SendEventInfo()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
