import { useState } from 'react';
import { APP } from '../constants/app';

const usePagination = (totalItems, pageSize = APP.DEFAULT_PAGE_SIZE) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalItems / pageSize);
    const offset = (currentPage - 1) * pageSize;

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const nextPage = () => goToPage(currentPage + 1);
    const prevPage = () => goToPage(currentPage - 1);

    return { currentPage, totalPages, offset, pageSize, goToPage, nextPage, prevPage };
};

export default usePagination;
