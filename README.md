play-today-cookie-overlay

## Installation

```bash
npm install play-today-cookie-overlay
```

## Usage

```javascript
import { CookieOverlay } from 'play-today-cookie-overlay';

<CookieOverlay />;
```

## Option

### `isMetaverse`

Type: `boolean`<br />
Optional: `true`<br />
Default: `false`<br />
Description: If true, the overlay will be displayed in the metaverse style.

```javascript
<CookieOverlay isMetaverse={true} />
```

### `privacyPolicyLink`

Type: `string`<br />
Optional: `true`<br />
Default: `/privacy-policy`<br />
Description: Link to the privacy policy.

```javascript
<CookieOverlay privacyPolicyLink={'/privacy-policy'} />
```

### `cookiePolicyLink`

Type: `string`<br />
Optional: `true`<br />
Default: `/privacy-policy#opt9`<br />
Description: Link to the cookie policy.

```javascript
<CookieOverlay cookiePolicyLink={'/privacy-policy#opt9'} />
```

### `privacyPolicyEvent`

Type: `() => void`<br />
Optional: `true`<br />
Description: Event that is triggered when the privacy policy is clicked. (GA Event can be triggered here)

```javascript
<CookieOverlay
  privacyPolicyEvent={() => console.log('Privacy Policy clicked')}
/>
```

### `cookiePolicyEvent`

Type: `() => void`<br />
Optional: `true`<br />
Description: Event that is triggered when the cookie policy is clicked. (GA Event can be triggered here)

```javascript
<CookieOverlay cookiePolicyEvent={() => console.log('Cookie Policy clicked')} />
```
