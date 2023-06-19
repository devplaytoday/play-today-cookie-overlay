export interface ICookieProps {
  /**
   * The overlay is use for the metaverse website?
   * @default false
   */
  isMetaverse: boolean;
  /**
   * Link to the privacy policy page
   */
  privacyPolicyLink?: string;
  /**
   * Link to the cookie policy page
   */
  cookiePolicyLink?: string;
  /**
   * Google event function for the privacy policy button
   */
  privacyPolicyEvent?: () => void;
  /**
   * Google event for the cookie policy button
   */
  cookiePolicyEvent?: () => void;
}
