import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import router from 'next/router';
// Import bootstrap CSS
export default function EventRawData(props: any) {
  const SendEventInfo = () => {
    alert('hi');
    router.push('/admin');
  };
  return (
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
          <td>Mark</td>
        </tr>
        <tr>
          <th scope="row">최저 가격</th>
          <td>Jacob</td>
        </tr>
        <tr>
          <th scope="row">최대 가격 (편집가능)</th>
          <td>
            <input
              type="number"
              className="form-control"
              placeholder=""
              value={props.MaxPrice}
              onChange={(e) => props.setMaxPrice(e.target.valueAsNumber)}
            />
          </td>
        </tr>
        <tr>
          <th scope="row">재고 수 (편집가능)</th>
          <td>
            <input
              type="number"
              className="form-control"
              placeholder=""
              value={props.InventoryNumber}
              onChange={(e) => props.setInventoryNumber(e.target.valueAsNumber)}
            />
          </td>
        </tr>
        <tr>
          <th scope="row">판매량</th>
          <td>Jacob</td>
        </tr>
        <tr>
          <th scope="row">판매 시작 시간</th>
          <td>Jacob</td>
        </tr>
        <tr>
          <th scope="row">판매 종료 시간 (편집가능)</th>
          <td>
            {' '}
            <input
              type="text"
              className="form-control"
              placeholder="yyyy-mm-dd-tt-mm"
              value={props.SalesEndTime}
              onChange={(e) => props.setSalesEndTime(e.target.value)}
            />
          </td>
        </tr>
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginTop: 15 }}
          onClick={() => SendEventInfo()}
        >
          Submit
        </button>
      </tbody>
    </table>
  );
}
