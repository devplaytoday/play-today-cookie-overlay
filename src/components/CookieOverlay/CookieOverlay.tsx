import React, { FC } from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import '../../sass/app.scss';
import { ICookieProps } from './cookieType';
import cookieImageUrl from './cookie.png';

const CookieOverlay: FC<ICookieProps> = ({
  isMetaverse = false,
  privacyPolicyLink,
  cookiePolicyLink,
  privacyPolicyEvent,
  cookiePolicyEvent,
}) => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [cookieRejected, setCookieRejected] = useState<boolean>(
    sessionStorage.getItem('cookieRejected') === 'true' ? true : false
  );

  const acceptCookieConsent = () => {
    setCookie('cookieConsent', true, { path: '/' });
  };

  const rejectCookieConsent = () => {
    sessionStorage.setItem('cookieRejected', 'true');
    setCookieRejected(true);
  };

  return (
    <>
      {!cookies.cookieConsent && !cookieRejected && (
        <div
          className={`cookie-consent ${
            isMetaverse && 'metaverse-cookie-consent'
          }`}
        >
          <div className="text-container">
            <div className="header-wrapper">
              <p className="header">You are in control of cookies used</p>
              <img className="image" src={cookieImageUrl} alt="cookie-img" />
            </div>
            <p className="text">
              We use cookies to deliver the best possible experience on our
              website. By accepting you consent to our use of cookies. For more
              detailed information, please check our{' '}
              <a
                href={privacyPolicyLink ?? '/privacy-policy'}
                onClick={() => {
                  if (privacyPolicyEvent) {
                    privacyPolicyEvent();
                  }
                }}
              >
                Privacy policy
              </a>{' '}
              and{' '}
              <a
                href={cookiePolicyLink ?? '/privacy-policy#opt9'}
                onClick={() => {
                  if (cookiePolicyEvent) {
                    cookiePolicyEvent();
                  }
                }}
              >
                Cookie Policy
              </a>
            </p>
          </div>
          <div className="button-container">
            <button className="button accept" onClick={acceptCookieConsent}>
              ACCEPT
            </button>
            <button className="button" onClick={rejectCookieConsent}>
              REJECT
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieOverlay;
