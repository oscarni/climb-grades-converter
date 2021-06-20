import Service from '@ember/service';

export default class ClimbingGradeRecognizerService extends Service {
  recognize(grade) {
    if (typeof grade !== 'string') {
      throw new Error('provided input is not a string.');
    }
    return this.gradeSystems
      .filter((system) => {
        return grade.search(system.regex) >= 0;
      })
      .map((system) => {
        return {
          name: system.name,
          value: system.value,
        };
      });
  }

  gradeSystems = [
    {
      name: 'YDS',
      value: 'yds',
      regex: /^5\.(\d{0,1}|1[0-5][abcd]?)$/gim,
    },
    {
      name: 'Sport',
      value: 'sport',
      regex: /^(2|3|[4-5][abc]|[6-9][abc]\+?)$/gim,
    },
    {
      name: 'UIAA',
      value: 'uiaa',
      regex: /^(III\+?|I{1,2}|(IV?|VI{0,3}|IX|XI{0,2})[-+]?)$/gim,
    },
    {
      name: 'Ewbank',
      value: 'ewbank',
      regex: /^([1-9]|1[0-9]|2[0-9]|3[0-9])$/gim,
    },
    {
      name: 'Swedish',
      value: 'swedish',
      regex: /^([1-3]|([4-9]|10|11)[+-]?)$/gim,
    },
    {
      name: 'Hueco',
      value: 'vermin',
      regex: /^V(B|0[-+]?|[1-9]|1[0-7])?$/gim,
    },
    {
      name: 'Font',
      value: 'font',
      regex: /^(2|3|4[+]?|5[+]?|[6-8][abc]\+?|9a)$/gim,
    },
  ];
}
