import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function EventRawData(props: {
  eventInfo: any;
  maxPrice: number;
  setMaxPrice: (maxPrice: number) => any;
  sold: number;
  setSold: (sold: number) => any;
  eventDate: Date;
  setEventDate: (eventDate: Date) => any;
}) {
  console.log(props.maxPrice);

  // const sendEventInfo = () => {
  //   const { eventpid } = router.query;

  //   axios
  //     .patch(`${serverUrl}/admin/events/${eventpid}`, {
  //       id: Number(eventpid),
  //       max_price: props.maxPrice,
  //       sold: props.sold,
  //       event_date: props.eventDate.toISOString(),
  //     })
  //     .then((res) => {
  //       alert("성공적으로 업데이트 되었습니다.");
  //     });
  // };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">최초 가격</th>
            <td>{props.eventInfo.start_price}</td>
          </tr>
          <tr>
            <th scope="row">최저 가격</th>
            <td>{props.eventInfo.min_price}</td>
          </tr>
          <tr>
            <th scope="row">최대 가격 (편집가능)</th>
            <td>
              <input
                type="number"
                className="form-control"
                placeholder=""
                value={props.maxPrice}
                onChange={(e) => props.setMaxPrice(e.target.valueAsNumber)}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">판매량</th>
            <td>
              <input
                type="number"
                className="form-control"
                placeholder=""
                value={props.sold}
                onChange={(e) => props.setSold(e.target.valueAsNumber)}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">재고 수</th>
            <td>{props.eventInfo.quantity}</td>
          </tr>
          <tr>
            <th scope="row">판매 시작 시간</th>
            <td>{props.eventInfo.ticket_open_date.toString()}</td>
          </tr>
          <tr>
            <th scope="row">판매 종료 시간 (편집가능)</th>
            <td>
              <input
                type="datetime-local"
                className="form-control"
                value={props.eventDate.toISOString().slice(0, 16)}
                onChange={() => props.setEventDate(new Date())}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
