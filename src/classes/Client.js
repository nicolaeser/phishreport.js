const axios = require("axios");

class Client {
  constructor(apiToken) {
    if (!apiToken) {
      throw new Error(
        "No API token is defined. Please obtain your API token from https://phish.report/user and provide it when creating a PhishReport instance.",
      );
    }
    this.apiToken = apiToken;
  }

  /**
   * @desciption Create Case
   * @param {String} link Link
   * @returns {Function}
   */
  async createCase(link) {
    try {
      const response = await axios.post(
        "https://phish.report/api/v0/cases",
        {
          url: link,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`, // Use the environment variable
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(
          `[${response.status}] | Error Creating Case: ${response.statusText}`,
        );
        return null;
      }
    } catch (error) {
      console.error(`Error Creating Case: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Get Case
   * @param {String} caseId Case-ID
   * @returns {Function}
   */
  async getCase(caseId) {
    try {
      const response = await axios.get(
        `https://phish.report/api/v0/cases/${caseId}`,
        {
          headers: {
            Authorization: `Bearer ${this.apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200) {
        return response.data;
      } else {
        console.error(
          `[${response.status}] | Error Getting Case: ${response.statusText}`,
        );
        return null;
      }
    } catch (error) {
      console.error(`Error Getting Case: ${error.message}`);
      return null;
    }
  }

  /**
   * @desciption Get Info
   * @param {String} domain Domain
   * @returns {Function}
   */
  async getInfo(domain) {
    try {
      const response = await axios.get(
        `https://phish.report/api/v0/hosting?url=${domain}`,
        {
          url: domain,
        },
      );
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(
          `[${response.status}] | Error Getting Info: ${response.statusText}`,
        );
        return null;
      }
    } catch (error) {
      console.error(`Error Getting Info: ${error.message}`);
      return null;
    }
  }
}

module.exports = Client;
