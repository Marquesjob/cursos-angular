import { Component, OnInit } from '@angular/core';
import { Presenter } from './presenter-presenter';

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.scss']
})
export class PresenterComponent implements OnInit {

  response: any;

  constructor(
    private presenter: Presenter
  ) { }

  ngOnInit(): void {
    this.presenter.myObservableString('Subscribed');
    this.presenter.myString$.subscribe( res => console.log('Observable status:', res))

    this.presenter.myObservableV2('Subscribed V2');
    this.presenter.myStringv2$.subscribe( res => console.log('Observable V2 status:', res))
  }
}
