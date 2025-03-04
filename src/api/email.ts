'use server';

import { ReceiptType } from '@/model/type';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_USER,
    pass: process.env.NEXT_PUBLIC_GMAIL_APP_KEY,
  },
});

const makeReceiptTable = (receipt: ReceiptType) => `
<div>
  <p>${receipt.date}</p>
  <table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th>상품명</th>
        <th>갯수</th>
        <th>단가</th>
        <th>총합</th>
      </tr>
    </thead>
    <tbody>
      ${receipt.soldItems
        .map(
          (ele) => `
          <tr>
            <td>${ele.name}</td>
            <td>${ele.count}</td>
            <td>${ele.cost.toLocaleString()}</td>
            <td>${ele.totalCost.toLocaleString()}</td>
          </tr>
        `
        )
        .join('')}
    </tbody>
    <tfoot>
      <tr>
        <td>총 갯수</td>
        <td>${receipt.totalCount}</td>
        <td>총 합</td>
        <td>${receipt.result.toLocaleString()}</td>
      </tr>
    </tfoot>
  </table>
</div>
`;

const makeHtml = (data: ReceiptType[], result: ReceiptType) => `
  <h2>정산 목록</h2>
  ${data.map((receipt) => makeReceiptTable(receipt)).join('')}
  <h2>최종 정산</h2>
  ${makeReceiptTable(result)}
`;

export const sendEmail = async (
  email: string,
  receipt: ReceiptType[],
  result: ReceiptType
) => {
  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_GMAIL_USER,
      to: email,
      subject: '정산 내역',
      html: makeHtml(receipt, result),
    });

    return { message: '이메일 전송 성공' };
  } catch (error) {
    console.error(error);
  }
};
