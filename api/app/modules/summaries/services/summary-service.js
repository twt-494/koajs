import { Summary } from '../models';
import AppError from '../../../helpers/appError';

export default {
    async createSummary(data) {
        const { userHash } = data;
        const summaryCountByUserId = await Summary.count({userHash});

        if (summaryCountByUserId === 3) {
            throw new AppError({status: 400, message: 'User cannot create more 3 resume'});
        }

        return Summary.create(data);
    },
    updateSummary(data, summary) {
        summary.set(data);
        try {
            return summary.save();
        } catch (e) {
            throw new AppError({status: 400, ...e});
        }
    },
};
