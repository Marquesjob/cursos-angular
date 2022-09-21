import { Observable, Subject, interval, BehaviorSubject } from "rxjs";


export class Presenter {

    private _myObservableVariable:Subject<string> = new Subject(); // definindo variavel que será um tipo de observable que possibilida ter vários subscribes
    readonly myObservableVariable$:Observable<string> = this._myObservableVariable.asObservable(); // variabel do tipo observable que recebe o valor que a funçao retorna

    private _myString:Subject<any> = new Subject();
    readonly myString$:Observable<any> = this._myString.asObservable();

    private _myStringv2:BehaviorSubject<any> = new BehaviorSubject(null);
    readonly myStringv2$:Observable<any> = this._myStringv2.asObservable();


    constructor() {}

    myObservableString(value: any): void{
      this._myString.next(value)
    }

    myObservableV2(value: any) {
        this._myStringv2.next(value)
    }
}