export const server = 'https://localhost:44391';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'qanda1.eu.auth0.com',
  client_id: '30oaRxBMm1YHxtyVVI35OTuInOKI6BXj',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
