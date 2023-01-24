/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const navBar = css`
  background-color: lavenderblush;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0;
  padding: 14px 21px;
  border-radius: 8px;
`;
const rivermate = css`
  margin-right: 42px;
`;

const navBarTabs = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 732px;
  margin-right: 84px;
  text-align: left;

  //gap: 22px;
`;
const flamingPricing = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const rightNav = css`
  display: flex;
  justify-content: space-between;
  width: 355px;
  height: 46px;
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
  width: 125px;
`;
const getStarted = css`
  color: #ffffff;
  background-color: #454443;
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
  width:424px;
`;

const afterImageButtons = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 28px 0 0;


  button{
    padding:14px 28px;
    border-radius: 10px;
    font-size: 18px;
  }
 `
 const logoRow = css `
 display:flex;
 opacity: .5;
align-items: center;
justify-content: center;

img {
  vertical-align: middle;
    display: inline-block;
    max-width: 100%;
    object-fit: cover;
    margin-right: 35px;
margin-left: 35px;
}`

 const productHunt = css `
 display: flex;
 justify-content: center;
 padding: 30px 0px;`

 const h1= css`
  font-size: 64px;
  margin-bottom: 21px;
    font-family: Greycliffcf,sans-serif;
    font-size: 64px;
    line-height: 1em;
    font-weight: 900;
    letter-spacing: -.01em;
`

const h2 = css `
font-size: 24px;
line-height: 34px`

const h4 = css `
  text-align: center;
font-size: 32px;
margin-bottom: 56px;
`
const mainBottomContainer = css `
    width: 100%;
    max-width: 1328px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 28px;
    padding-left: 28px;
`
function App() {
  return (
    <div>
      <nav css={navBar}>
          <img
            css={rivermate}
            srcSet="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/6276d5749c10c960bc0422a4_rivermate.svg"
            height="22"
            alt="rivermate logo"
          />
        <div css={navBarTabs}>
          <p>
            How it Works
            <img
              srcSet="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/627275b349f6086248c336f5_icon-chevron-down.svg"
              alt="dropdown toggle"
            />
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
              srcSet="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/627275b349f6086248c336f5_icon-chevron-down.svg"
              alt="dropdown toggle"
            />
          </p>
        </div>
        <div css={rightNav}>
          <div css={login}>
            Login
            <img
              srcSet="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/627275b349f6082e5ac336f0_icon-arrow-up-right.svg"
              alt="upward arrow"
            />
          </div>
          <button css={[navbutton, getStarted]}>Get Started</button>
          <button css={navbutton}>Book A Call </button>
        </div>
      </nav>
      <section css={centerSection}>
        <img
          css={centerImage}
          src="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/62fbf3249195730b1cbce0f5_628f4e986736c7f8cc068928_rivermate-family-min%202.webp"
          alt=""
          //  srcSet="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/62fbf3249195730b1cbce0f5_628f4e986736c7f8cc068928_rivermate-family-min%202-p-500.webp 500w, https://uploads-ssl.webflow.com/627275b349f60885b6c33689/62fbf3249195730b1cbce0f5_628f4e986736c7f8cc068928_rivermate-family-min%202.webp 690w"
          // sizes="(max-width: 479px) 88vw, 423.6796875px"
        />
        <h1 css={h1}>Hire anyone, anywhere.</h1>
        <h2 css={h2}>Hire remote employees anywhere in the world 🌎</h2>
        <div css={afterImageButtons}>
          <button css={getStarted}>Get started </button>
          <button>Book a call</button>
        </div>
      </section>
       <div css={mainBottomContainer}>
      <h4 css={h4}> Trusted by </h4>
      <div css={logoRow}>
      <img src="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/62836901cd9bb0d3a485b5a1_tupu-logo.webp" width="100" alt="Logo of Tupu"/>
      <img src="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/62836901027da71f1888dcb6_boloo-logo.webp"  height="" width="100" alt="Logo of Boloo"/>
      <img src="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/62836901c72f39209cc5946f_grive-logo.webp"  width="100" height="" alt="Logo of Grive" />
      <img src="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/6283690156a51907473c476e_pe-logo.webp" width="100" height="" alt="Logo of PE" />
      <img src="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/62dfaaaa960a6e4a30dc9960_Mask%20group.svg" width="100" height="" alt="oscar's farm logo" />
      <img src="https://uploads-ssl.webflow.com/627275b349f60885b6c33689/62dfaaa90cb06d8069343761_Group.svg" width="100" height="" alt="generation company logo" />
      </div>
      <div css={productHunt}>
        <img src="https://www.producthunt.com/posts/rivermate?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-rivermate"  alt =""/><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=351495&amp;theme=light&amp;period=daily" alt="Rivermate" /></div>
    </div>
  </div>
  )}

export default App;
