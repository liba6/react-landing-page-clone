/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import logo from './logo.svg';

const navBar = css`
  background-color: lavenderblush;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 14px 0;
  padding: 14px 21px;
  border-radius: 8px;
`;

const navBarTabs = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 22px;
`;
const flamingPricing = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const rightNav = css`
  display: flex;
  //justify-content: space-between;
  gap: 40px;
`;
const login = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const navbutton = css`
  padding: 9px 21px;
  border-radius: 10px;
  border: 2px solid #0f0f0f;
  background-color: transparent;
  color: #0f0f0f;
`;
const centerSection = css`
  text-align: center;
  padding-top: 112px;
  padding-bottom: 112px;
`;

const centerImage = css`
  display: inline-block;
  max-height: 280px;
  justify-content: center;
`;

function App() {
  return (
    <div>
      <nav css={navBar}>
        <img
          src="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/6276d5749c10c960bc0422a4_rivermate.svg"
          height="22"
          alt="rivermate logo"
        />
        <div css={navBarTabs}>
          <p>
            How it Works
            <img
              src="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/627275b349f6086248c336f5_icon-chevron-down.svg"
              alt="dropdown toggle"
            ></img>
          </p>
          <section css={flamingPricing}>
            <p>
              Pricing <span>🔥</span>
            </p>
          </section>
          <p>Countries</p>
          <p>Partners</p>
          <p>
            Company{' '}
            <img
              src="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/627275b349f6086248c336f5_icon-chevron-down.svg"
              alt="dropdown toggle"
            ></img>
          </p>
        </div>
        <div css={rightNav}>
          <div css={login}>
            Login
            <img
              src="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/627275b349f6082e5ac336f0_icon-arrow-up-right.svg"
              alt="upward arrow"
            ></img>
          </div>
          <button css={navbutton}>Get Started</button>
          <button css={navbutton}>Book A Call </button>
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
        <button>Get started</button>
        <button>Book a call</button>
      </section>
    </div>
  );
}

export default App;
