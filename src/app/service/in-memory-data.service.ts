import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 0, name: 'Zero', mobile: "9142222222" },
      { id: 11, name: 'Mr. Nice', mobile: "9142222222" },
      { id: 12, name: 'Narco', mobile: "9142222222" },
      { id: 13, name: 'Bombasto', mobile: "9142222222" },
      { id: 14, name: 'Celeritas', mobile: "9142222222" },
      { id: 15, name: 'Magneta', mobile: "9142222222" },
      { id: 16, name: 'RubberMan', mobile: "9142222222" },
      { id: 17, name: 'Dynama', mobile: "9142222222" },
      { id: 18, name: 'Dr IQ', mobile: "9142222222" },
      { id: 19, name: 'Magma', mobile: "9142222222" },
      { id: 20, name: 'Tornado', mobile: "9142222222" }
    ];
    return { members };
  }
}