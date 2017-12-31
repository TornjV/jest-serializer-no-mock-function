test('Mock test', () => {
  const mock = jest.fn().mockName('myMock');

  mock('hello', { foo: 'bar' });

  expect(mock).toMatchSnapshot();
});