/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const card = css`
  display: grid;
  padding: 28px;
  background-color: #fff;
  justify-items: center;
  align-items: center;
  height: 244px;
  width: 306px;
  border-radius: 10px;
  :hover {
    background-color: #e9e9e9;
  }
`;

const h5 = css`
  margin-top: 0;
  margin-bottom: 14px;
  font-size: 24px;
  line-height: 1em;
  font-weight: 700;
`;

const cardBottom = css`
  margin-bottom: 14px;
  font-weight: 400;
  font-size: 18px;
`;
export default function LandingTwo(props) {
  return (
    <div css={card}>
      <img src={props.image} alt="" width={props.sizes} />
      <h5 css={h5}>{props.title}</h5>
      <div css={cardBottom}>{props.description}</div>
    </div>
  );
}
