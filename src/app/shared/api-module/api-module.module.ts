import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModelService } from './../data-model.service';
import { DataFactoryService } from './../data-factory.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    DataModelService,
    DataFactoryService
  ]
})
export class ApiModule {
  static forRoot() {
    return {
      module: ApiModule,
      providers: [
        DataModelService,
        DataFactoryService
      ]
    };
  }
}
