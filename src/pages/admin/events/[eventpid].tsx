import React, { useEffect, useState } from 'react';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Link from 'next/link'; // Link 태그를 생성하여 다른 페이지 혹은 url로 이어지게 한다.
import { useRouter } from 'next/router';

import EventRawData from '../../../components/EventRawData';
import PriceChart from '../../../components/PriceChart';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS, 부트스태랩을 글로벌하게 쓸 수 있도록 한다.
// eslint-disable-next-line import/order
import { config } from '@fortawesome/fontawesome-svg-core'; // icon을 사용하기 위해 font
import '@fortawesome/fontawesome-svg-core/styles.css';
import { serverUrl } from '../../../const';

// eslint-disable-next-line import/order

// Admin 로그인 후 나올 첫 페이지

config.autoAddCss = false;

export default function EventPid() {
  const router = useRouter();

  const [priceTimeList, setPriceTimeList] = useState<Date[]>([]);
  const [priceList, setPriceList] = useState<number[]>([]);
  const [soldTimeList, setSoldTimeList] = useState<Date[]>([]);
  const [soldList, setSoldList] = useState<number[]>([]);

  const [eventInfo, setEventInfo] = useState({
    start_price: 0,
    min_price: 0,
    quantity: 0,
    sold: 0,
    ticket_open_date: new Date(0),
  });
  const [maxPrice, setMaxPrice] = useState<number>(0); // 최대가격
  const [sold, setSold] = useState<number>(0); // 판매량
  const [eventDate, setEventDate] = useState<Date>(new Date()); // 이벤트 날짜

  /**
   * 현재의 이벤트 정보들을 가져온다.
   */
  const getEventInfo = () => {
    const { eventpid } = router.query;

    axios.get(`${serverUrl}/admin/events/${eventpid}`).then((res) => {
      const { max_price, min_price, price, quantity, sold, start_price } =
        res.data;
      const event_date = new Date(res.data.event_date);
      const ticket_open_date = new Date(res.data.ticket_open_date);

      setEventInfo({
        start_price,
        min_price,
        quantity,
        sold,
        ticket_open_date,
      });

      setMaxPrice(max_price);
      setSold(sold);
      setEventDate(event_date);
    });
  };

  /**
   * 가격 변동 내역을 불러온다.
   */
  const getPriceHistory = () => {
    const { eventpid } = router.query;

    axios
      .get(`${serverUrl}/admin/events/${eventpid}/history/prices`)
      .then((res) => {
        const dtos = res.data;
        const times = dtos.map((dto: any) => dto.created_at);
        const prices = dtos.map((dto: any) => dto.price);

        setPriceTimeList(times);
        setPriceList(prices);
      });
  };

  /**
   * 판매량 변동 내역을 불러온다.
   */
  const getSoldHistory = () => {
    const { eventpid } = router.query;

    axios
      .get(`${serverUrl}/admin/events/${eventpid}/history/sold`)
      .then((res) => {
        const dtos = res.data;
        const times = dtos.map((dto: any) => dto.created_at);
        const solds = dtos.map((dto: any) => dto.sold);

        setSoldTimeList(times);
        setSoldList(solds);
      });
  };

  const sendEventInfo = () => {
    const { eventpid } = router.query;

    axios
      .patch(`${serverUrl}/admin/events/${eventpid}`, {
        id: Number(eventpid),
        max_price: maxPrice,
        sold,
        event_date: eventDate.toISOString(),
      })
      .then((res) => {
        getPriceHistory();
        getSoldHistory();
        alert('성공적으로 업데이트 되었습니다.');
        console.log(res);
      });
  };

  /**
   * 현재의 이벤트 정보들을 가져온다.
   */
  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    getEventInfo();
    getPriceHistory();
    getSoldHistory();
  }, [router.isReady]);

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
          <PriceChart timeList={priceTimeList} dataList={priceList} />
          <span>Sold History</span>
          <PriceChart timeList={soldTimeList} dataList={soldList} />
        </div>
        <div className="col-6">
          <span>Event Raw Data</span>
          <EventRawData
            eventInfo={eventInfo}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            sold={sold}
            setSold={setSold}
            eventDate={eventDate}
            setEventDate={setEventDate}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginTop: 15 }}
          onClick={() => sendEventInfo()}
        >
          Submit
        </button>
        {/* <FontAwesomeIcon icon={faPen} style={{ marginLeft: 10 }} /> */}
      </div>
    </div>
  );
}
