/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import logo from './logo.svg';

const navBar = css`
  //background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0;
  padding: 14px 21px;
  background-color: transparent;
  border-radius: 8px;
`;
const centerImage = css`
  display: inline-block;
  max-height: 280px;
  justify-content: center;
`;
const navBarTabs = css`
  display: flex;
  flex-direction: row;
`;
const rightNav = css`
  gap: 15px;
`;
const centerSection = css`
  text-align: center;
  padding-top: 112px;
  padding-bottom: 112px;
`;
const rivermate = css`
  font-family: sans-serif;
  font-size: 28px;
  color: #333333;
`;
const button = css`
  padding: 14px 28px;
  border-radius: 10px;
`;

function App() {
  return (
    <div>
      <nav css={navBar}>
        <div css={rivermate}>rivermate</div>
        <div css={navBarTabs}>
          <p>How it Works </p>
          <p>
            Pricing <span>🔥</span>
          </p>
          <p>Countries</p>
          <p>Partners</p>
          <p>Company</p>
        </div>
        <div scc={rightNav}>
          Login
          <img
            src="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/627275b349f6082e5ac336f0_icon-arrow-up-right.svg"
            loading="eager"
            alt=""
            class="arrow-link-icon"
          ></img>
          <button css={button}>Get Started</button>
          <button css={button}>Book A Call </button>
        </div>
      </nav>
      <section css={centerSection}>
        <img
          css={centerImage}
          src="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/62fbf3249195730b1cbce0f5_628f4e986736c7f8cc068928_rivermate-family-min%202.webp"
          alt=""
          srcset="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/62fbf3249195730b1cbce0f5_628f4e986736c7f8cc068928_rivermate-family-min%202-p-500.webp 500w, https://uploads-ssl.webflow.com/627275b349f60885b6c33689/62fbf3249195730b1cbce0f5_628f4e986736c7f8cc068928_rivermate-family-min%202.webp 690w"
          sizes="(max-width: 479px) 88vw, 423.6796875px"
          class="composite-graphic"
        ></img>
        <h1>Hire anyone, anywhere.</h1>
        <h2>Hire remote employees anywhere in the world.</h2>
        <button css={button}>Get started</button>
        <button css={button}>Book a call</button>
      </section>
    </div>
  );
}

export default App;
