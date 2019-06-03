import { Injectable } from '@angular/core';

declare var mhe: any;

@Injectable()

export class DataFactoryService {

  private MHE_API;

  constructor() {
    this.MHE_API = new mhe.SensorApi();
  }

  callback(status) {
    console.log(`isSuccess : ${status.success}`);
  }

  sendEvent(apiData) {
    switch (apiData.eventType) {
      case 'activityStarted':
        this.sendActivityStartedEvent('activityStarted', apiData.sequence, apiData.payload, this.callback);
        break;
      case 'activityItem':
        this.sendActivityStartedEvent('activityItem', apiData.sequence, apiData.payload, this.callback);
        break;
      case 'activityCompleted':
        this.sendActivityStartedEvent('activityCompleted', apiData.sequence, apiData.payload, this.callback);
        break;
    }
  }

  // ----------------------ACTIVITY EVENT--------------------//

  sendActivityStartedEvent(event, sequence, payload, callback) {
    // send event, sequence, payload to MHE_API and call the callback function onsuccess || onerror
    this.MHE_API.sendEvent(event, payload).success(function (data, xhr) {
      callback({ success: true, data: data });
      console.log(data);
    }).error(function (xhr) {
      callback({ success: false, error: xhr.status });
    });
  }
}

export function createDataFactory() {
  return new DataFactoryService();
}
