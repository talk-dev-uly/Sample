import {formatInfo} from '../../utils/formatInfo';

it('formats correctly with complete name', () => {
  expect(
    formatInfo({
      firstName: 'Harry',
      lastName: 'Potter',
      middleName: 'Batumbakal',
      job: 'Wizard',
    }),
  ).toStrictEqual({name: 'Potter, Harry Batumbakal', job: 'Wizard'});
});

it('formats correctly without middle name', () => {
  expect(
    formatInfo({firstName: 'Harry', lastName: 'Potter', job: 'Wizard'}),
  ).toStrictEqual({name: 'Potter, Harry', job: 'Wizard'});
});
