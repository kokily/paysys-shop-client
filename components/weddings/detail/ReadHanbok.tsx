import React from 'react';
import { stringAccounting } from '../../../libs/utils';

interface Props {
  hanbok: HanbokType;
}

const ReadHanbok: React.FC<Props> = ({ hanbok }) => {
  return (
    <>
      <tr>
        <th>한복(선불)</th>
        <td>{stringAccounting(hanbok.hanbok_pre_husband)}원</td>
        <td>{stringAccounting(hanbok.hanbok_pre_bride)}원</td>
        <td className="sub">
          {stringAccounting(hanbok.hanbok_pre_husband + hanbok.hanbok_pre_bride)}원
        </td>
      </tr>

      <tr>
        <th>한복(후불)</th>
        <td>{stringAccounting(hanbok.hanbok_post_husband)}원</td>
        <td>{stringAccounting(hanbok.hanbok_post_bride)}원</td>
        <td className="sub">
          {stringAccounting(hanbok.hanbok_post_husband + hanbok.hanbok_post_bride)}원
        </td>
      </tr>
    </>
  );
};

export default ReadHanbok;
