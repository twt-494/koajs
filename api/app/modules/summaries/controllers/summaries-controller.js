import pick from 'lodash/pick';
import { Summary } from '../models';
import { SummaryService } from '../services';

export default {
    async create(ctx) {
        const summaryData = {
            ...pick(ctx.request.body, Summary.createFields),
            userHash: ctx.state.user.hash,
        };

        const {_id} = await SummaryService.createSummary(summaryData);
        const summary = await Summary.findOne({_id});
        ctx.status = 201;

        ctx.body = {data: summary};
    },
    async update(ctx) {
        const {
            request: {
                body,
            },
            state: {
                user: {
                    hash,
                },
                summary,
            },
        } = ctx;

        if (summary.userHash !== hash) {
            ctx.throw(403, `Forbidden. Summary with hash "${summary.hash}" don't belong user`);
        }

        const newData = pick(body, Summary.createFields);
        const updatedSummary = await SummaryService.updateSummary(newData, summary);

        ctx.body = {data: updatedSummary};
    },
    async delete(ctx) {
        const {
            state: {
                user: {
                    hash,
                },
                summary,
            },
        } = ctx;

        if (summary.userHash !== hash) {
            ctx.throw(403, `Forbidden. Summary with hash "${summary.hash}" don't belong user`);
        }

        await summary.remove();

        ctx.body = {data: {hash: summary.hash}};
    },

    getSummary(ctx) {
        const { state: { summary } } = ctx;

        ctx.body = {data: pick(summary, Summary.createFields)};
    },
};
