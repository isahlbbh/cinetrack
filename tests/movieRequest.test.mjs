import assert from 'node:assert/strict';
import test from 'node:test';
import { runMovieRequest } from '../src/services/movieRequest.js';

const flush = () => new Promise((resolve) => setImmediate(resolve));
function handlers(events) {
  return {
    onSuccess: (value) => events.push(value),
    onError: (error) => events.push(error),
    onFinish: () => events.push('finished'),
  };
}

test('a failed active request reports the error and ends loading', async () => {
  const events = [];
  const error = new Error('HTTP 503');
  runMovieRequest(() => Promise.reject(error), handlers(events));
  await flush();
  assert.deepEqual(events, [error, 'finished']);
});

for (const staleFails of [false, true]) {
  test(`ignores a stale request that ${staleFails ? 'fails' : 'succeeds'} after newer results`, async () => {
    const events = [];
    const stale = Promise.withResolvers();
    const cancel = runMovieRequest(() => stale.promise, handlers(events));
    cancel();
    runMovieRequest(() => Promise.resolve('new results'), handlers(events));
    await flush();
    if (staleFails) stale.reject(new Error('old failure'));
    else stale.resolve('old results');
    await flush();
    assert.deepEqual(events, ['new results', 'finished']);
  });
}
