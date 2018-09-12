import pick from 'lodash/pick';
import {
    connect,
    close,
    dropDb,
} from '../../../../utils/mongo';
import { SummaryService } from '../../services';

describe('Summary Service', () => {
    beforeAll(async () => {
        await connect();
        await dropDb();
    });

    afterAll(async () => {
        await dropDb();
        await close();
    });

    it('create summary as expected', async () => {
        const summaryData = {
            userHash: 'user-hash',
            title: 'Senior js developer',
            description: 'My desc',
            tags: ['js', 'php', 'java'],
        };

        const summaryModel = await SummaryService.createSummary(summaryData);
        const summary = summaryModel.toObject();

        expect(pick(summary, Object.keys(summaryData))).toEqual(summaryData);
        expect(summary).toHaveProperty('hash');
        expect(summary).toHaveProperty('createdAt');
        expect(summary).toHaveProperty('updatedAt');

        await dropDb();
    });
});
