import { useState } from 'react';

export function usePagination(props) {
    const [rowsPerPage, setRowsPerPage] = useState(props?.rowsPerPage ?? 10);
    const [currentPage, setCurrentPage] = useState(props?.currenPage ?? 1);

    const handleRowsPerPage = (value) => {
        setRowsPerPage(value);
        setCurrentPage(1);
    };

    const handleCurrentPage = (e, value) => {
        setCurrentPage(value);
    };

    return {
        rowsPerPage,
        currentPage,
        //
        handleRowsPerPage,
        handleCurrentPage
    };
}
