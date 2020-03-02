import { submitForm } from './submitForm';

export default function *rootSaga() {
  yield [submitForm()]
}