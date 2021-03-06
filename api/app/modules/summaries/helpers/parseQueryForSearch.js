import {
    MAX_SIZE,
    PAGE,
} from '../constants/pagination';
export default (queryParams) => {
    const filter = {
        title: queryParams.title ? queryParams.title : '',
        tags: queryParams.tags ? queryParams.tags.split(',') : [],
        size: parseInt(queryParams.size),
        page: parseInt(queryParams.page),
    };

    if (!filter.size || filter.size > 20) {
        filter.size = MAX_SIZE;
    }

    if (!filter.page) {
        filter.page = PAGE;
    }

    return filter;
};
