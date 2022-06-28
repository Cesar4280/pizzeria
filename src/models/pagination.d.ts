export interface Pizza {
    name: string;
    description: string;
    image: string;
    prices: Array<{ size: string; value: number; }>;
}

export interface PaginationModel {
    currentPage: number;
    totalPages: number;
    changeCurrentPage: (pageNumber: number) => void;
}