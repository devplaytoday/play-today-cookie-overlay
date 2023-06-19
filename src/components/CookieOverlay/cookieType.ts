export interface ICookieProps {
  /**
   * The overlay is use for the metaverse website?
   * @default false
   */
  isMetaverse: boolean;
  /**
   * Link to the privacy policy page
   * @default '/privacy-policy'
   */
  privacyPolicyLink?: string;
  /**
   * Link to the cookie policy page
   * @default '/privacy-policy#opt9'
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
