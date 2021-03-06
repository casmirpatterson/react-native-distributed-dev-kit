import { SDKD_HOST } from 'react-native-dotenv'

export default class SDKDConfig {
  static init (apiKey) {
    global.sdkdConfig = {
      apiKey: apiKey,
      sdkdHost: SDKD_HOST,
      moduleConfig: {},
      unsignedApiKey: this._extractDataFromApiKey(apiKey)
    }
  }

  static _extractDataFromApiKey (apiKey) {
    return apiKey.split('.')[1]
  }
}
