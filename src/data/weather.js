/**
 * @class CurrentConditions
 *
 * A wrapper around Wunderground's weather api object, just to help with getters and make my life easier
 */
export default class Weather {
  constructor(json) {
    this.json = json;
  }

  get isError() {
    return !this.json || this.json.error;
  }

  get errorObject() {
    return this.json ? this.json.error : { type: 'unknown', description: 'Api did not return a properly structures json object' };
  }

  get response() {
    return this.json && this.json.response;
  }

  get conditions() {
    return this.json && this.json.current_observation;
  }

  get forecast() {
    return this.json && this.json.forecast;
  }
}
