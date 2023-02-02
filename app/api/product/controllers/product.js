'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const axios = require('axios');

module.exports = {
  async getNotified(ctx) {

    let entry = ctx.request.body;

    const resquestTokenUrl = "https://creative-bear-hfmzrn-dev-ed.my.salesforce.com/services/oauth2/token"

    const params = new URLSearchParams()
    params.append( 'client_id', "3MVG9DREgiBqN9Wlc08xarFO3tVmkF4jJ4DQesea2yTvbYyy4VSmgCCtamrfOw..gcpPJ1MJjczDzr3AWvRvD")
    params.append('client_secret', "095ACD47546E836C22290C0A231CF85FFE1DA31D714F631D3BB015277ECA57C1",)
    params.append('username', 'abdedayemyosri@creative-bear-hfmzrn.com')
    params.append('password', 'work_team22X0tfFHPBAuhSXAvOdSeqYOkv')
    params.append('grant_type', 'password')

    console.log("*******************************")
    const response = await axios.post(resquestTokenUrl, params)
    console.log(response.data.access_token)

    console.log("*******************************")

    console.log(response)

    const url = 'https://creative-bear-hfmzrn-dev-ed.my.salesforce.com/services/data/v54.0/sobjects/GetNotified__c/'

    const config = {
      headers: {          'Content-Type': 'application/json',

        Authorization: `Bearer ${response.data.access_token}`,

      },
    }
    if (url != null) {
      const params2 = new URLSearchParams()
      params2.append("email__c",entry.email)
      params2.append("product_id__c",entry.product_id)

      const response = await axios.post(url, params2, config)
      console.log(response)


    }
  }
};
