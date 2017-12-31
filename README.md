# Jest snapshot serializer that prevents serializing mocked functions

Upon upgrading to Jest 22 I've ran into snapshot size increase due to serialization of mocked functions. This pacakge makes it serialize to a normal function.

## Install

Add the package as a dev-dependency:

```bash
# With npm
npm install --save-dev jest-serializer-no-mock-function

# With yarn
yarn add --dev jest-serializer-no-mock-function
```

Update package.json to [let Jest know about the serializer](https://facebook.github.io/jest/docs/configuration.html#snapshotserializers-array-string):

```json
"jest": {
  "snapshotSerializers": ["jest-serializer-no-mock-function"]
}
```

## Example

```js
test('Mock test', () => {
  const mock = jest.fn().mockName('myMock');

  mock('hello', { foo: 'bar' });

  expect(mock).toMatchSnapshot();
});
```

Output with:

```js
exports[`Mock test 1`] = `[Function]`;
```

Output without:

```js
exports[`Mock test 1`] = `
[MockFunction myMock] {
  "calls": Array [
    Array [
      "hello",
      Object {
        "foo": "bar",
      },
    ],
  ],
}
`;
```
