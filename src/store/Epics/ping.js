import { delay,mapTo } from "rxjs/operators";
import { ofType } from 'redux-observable';

const ping = action$ => action$.pipe(
    ofType('PING'),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: 'PONG' })
  );

export default ping;