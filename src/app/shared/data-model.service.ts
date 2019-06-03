import { Injectable } from '@angular/core';
import * as DataFactoryService from './data-factory.service';

@Injectable()
export class DataModelService {

  private dataFactory;

  constructor() {
    this.dataFactory = DataFactoryService.createDataFactory();
  }

  relayAPIData(apiData) {
    this.dataFactory.sendEvent(apiData);
  }
}
