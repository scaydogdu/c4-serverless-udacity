const apiId = 'lr3fvi12xa'
export const apiEndpoint = `https://${apiId}.execute-api.eu-central-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-f84yocf7.us.auth0.com',            // Auth0 domain
  clientId: 'qiU9CvhEwlNvGRqiKSp1nKEHFV5LMlZ2',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
