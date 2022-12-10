import { Observable } from "rxjs";

// This way  isn't used any more, for declare an observable
// const obs$ = Observable.create();

// The correct way for declare an Observable 
const obs$ = new Observable<string>( sub => {
    sub.next('Hello');
    console.log('1');
    sub.next('World');
    console.log('2');
    sub.next('Hello');
    console.log('3');
    sub.next('World');
    console.log('4');
    sub.complete();    // The code after "complete" is not sended to the subscribers.
    console.log('c');
    sub.next('Hello');
    console.log('1');
    sub.next('World');
    console.log('2');
});


// Subscriber to the Observable -> We can use the console.log if we receive a paramether and just print
// Instead of> obs$.subscribe( data => console.log(data))
obs$.subscribe( console.log );