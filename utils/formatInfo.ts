import {InfoForm} from '../types';

export function formatInfo(data: InfoForm) {
  return {
    name: `${data.lastName}, ${data.firstName} ${
      data.middleName ? data.middleName : ''
    }`.trim(),
    job: data.job,
  };
}
