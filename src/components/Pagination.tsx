import { PaginationModel } from "../models/pagination";

import "../styles/Pagination.css";

export default function Pagination(props: PaginationModel): JSX.Element {

    const { totalPages, currentPage, changeCurrentPage } = props;

    const changeToNextPage = (): void => changeCurrentPage(currentPage + 1);
    const changeToPreviousPage = (): void => changeCurrentPage(currentPage - 1);

    const getPaginationItems = (): Array<JSX.Element> => {

        const paginationItems = [];

        for (let numberPage = 1; numberPage <= totalPages; numberPage++) {
            const itemTheme = numberPage === currentPage ? "active" : "";
            const updateCurrentPage = () => changeCurrentPage(numberPage);
            paginationItems.push(<a key={numberPage} className={itemTheme} onClick={updateCurrentPage}>{numberPage}</a>);
        }

        return paginationItems;

    };

    const getPaginationComponent = (): JSX.Element => {

        const paginationContent = getPaginationItems();

        currentPage > 1 && paginationContent.unshift(<a key={0} onClick={changeToPreviousPage}>Regresar</a>);
        currentPage < totalPages && paginationContent.push(<a key={totalPages + 1} onClick={changeToNextPage}>siguiente</a>);

        return (
            <div className="pagination-indicators">
                {paginationContent}
            </div>
        );
        
    };

    return getPaginationComponent();

}