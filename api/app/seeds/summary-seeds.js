import faker from 'faker';
import _ from 'lodash';
import { Summary } from '../modules/summaries';

export default (users) => {
    if (!users || !users.length) {
        throw Error('Users is required');
    }

    const promises = [];

    _.times(500, () => {
        const summaryPromise = Summary.create({
            title: faker.lorem.words(2, 5),
            description: faker.lorem.lines(4, 10),
            tags: faker.lorem.words(2, 6).split(' '),
            userHash: users[faker.random.number(499)].hash,
        });

        promises.push(summaryPromise);
    });

    return Promise.all(promises);
};
