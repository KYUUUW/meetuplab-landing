'use client';

import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS, 부트스태랩을 글로벌하게 쓸 수 있도록 한다.
// eslint-disable-next-line import/order
import { config } from '@fortawesome/fontawesome-svg-core'; // icon을 사용하기 위해 font
import '@fortawesome/fontawesome-svg-core/styles.css';
import axios from 'axios';
// Link 태그를 생성하여 다른 페이지 혹은 url로 이어지게 한다.
import { useRouter } from 'next/router';

import { serverUrl } from '../../const';

config.autoAddCss = false;
export default function AddEvent() {
  const [eventName, setEventName] = useState<string>(''); // 이벤트 이름을 입력받는 변수
  const [startPrice, setStartPrice] = useState<number>(0); // 최초 가격
  const [minPrice, setMinPrice] = useState<number>(0); // 최소 가격
  const [maxPrice, setMaxPrice] = useState<number>(0); // 최대 가격
  const [ticketQuantity, setticketQuantity] = useState<number>(0); // 재고 수, 좌석 수
  const [ticketOpenDate, setTicketOpenDate] = useState<string>(
    '2023-08-31T11:00:00Z'
  ); //
  const [SalesEndTime, setSalesEndTime] = useState<string>(
    '2023-10-31T11:00:00Z'
  ); //
  const router = useRouter();

  const SendEventInfo = async () => {
    try {
      await axios({
        method: 'post',
        data: {
          name: eventName,
          description: '',
          start_price: startPrice,
          min_price: minPrice,
          max_price: maxPrice,
          quantity: ticketQuantity,
          ticket_open_date: ticketOpenDate,
          event_date: SalesEndTime,
        },
        url: `${serverUrl}/admin/events/new`,
      }).then((response) => {
        alert('성공적으로 이벤트가 등록되었습니다.');
        router.push('/admin');
        console.log(response);
      });
    } catch (response: any) {
      alert(response);
    }
  };
  return (
    <div
      className="d-flex justify-content-center"
      style={{ paddingBottom: '5%' }}
    >
      {/* 이벤트 이름 입력 받기 */}
      <form style={{ marginTop: '5%' }} className="w-75">
        <h1>Add Event/Product </h1>
        <div className="form-group ">
          <label htmlFor="exampleInputEmail1">Event Name(이벤트 이름)</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Event Name"
            value={eventName}
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
            value={startPrice}
            onChange={(e) => setStartPrice(e.target.valueAsNumber)}
          />
        </div>
        {/* 이벤트 티켓 1개당 최저가격 설정 */}
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">최저 가격</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Event Name"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.valueAsNumber)}
          />
        </div>
        {/* 이벤트 티켓 1개당 최고가격 설정 */}
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">최대 가격</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Event Name"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.valueAsNumber)}
          />
        </div>
        {/* 상품의 재고 혹은 좌석수  */}
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">재고 수</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Event Name"
            value={ticketQuantity}
            onChange={(e) => setticketQuantity(e.target.valueAsNumber)}
          />
        </div>
        {/* 핀메 시작 시간 */}
        <div className="form-group mt-5">
          <label htmlFor="exampleInputEmail1">판매 시작 시간</label>
          <input
            type="text"
            className="form-control"
            placeholder="yyyy-mm-dd-tt-mm"
            value={ticketOpenDate}
            onChange={(e) => setTicketOpenDate(e.target.value)}
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
