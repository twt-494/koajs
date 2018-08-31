import { Summary } from '../models';

export default {
    async createSummary(data) {
        const { userId } = data;
        const summaryCountByUserId = await Summary.count({userId});

        if (summaryCountByUserId === 3) {
            throw new AppError({status: 400, message: 'User cannot create more 3 resume'});
        }

        return Summary.create(data);
    },
    async updateSummary(data, summary) {
        summary.set(data);

        return summary.save();
    },
};
