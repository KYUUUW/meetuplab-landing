import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import bootstrap CSS
export default function EventRawData(props: any) {
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
          <th scope="row">재고 수</th>
          <td>Jacob</td>
        </tr>
        <tr>
          <th scope="row">재고 수</th>
          <td>Jacob</td>
        </tr>
        <tr>
          <th scope="row">판매 시작 시간</th>
          <td>Jacob</td>
        </tr>
        <tr>
          <th scope="row">판매 종료 시간</th>
          <td>{props.RawDataList[0].name}</td>
        </tr>
      </tbody>
    </table>
  );
}
