import React from "react";

export default function Pagination({
  cardPerPage,
  totalCards,
  pagination,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); ++i) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination pagination-lg">
        {pageNumbers.length <= 1 ? (
          <></>
        ) : (
          <nav>
            <ul className="pagination pagination-lg">
              {pageNumbers?.map((p, i) => (
                <li
                  key={i}
                  className="page-item "
                  onClick={() => pagination(p)}
                >
                  <button
                    className={
                      p === currentPage
                        ? "page-link bg-warning text-dark fw-bolder  border border-warning "
                        : "page-link bg-dark text-warning fw-bolder  border border-warning "
                    }
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </ul>
    </nav>
    // <div>
    //   <ul className="pagination">
    //     {pageNumbers.length <= 1 ? (
    //       <></>
    //     ) : (
    //       <nav>
    //         <ul>
    //           {pageNumbers?.map((p) => (
    //             <div className="pag" key={p}>
    //               <button className="page-link" onClick={() => pagination(p)}>
    //                 {p}
    //               </button>
    //             </div>
    //           ))}
    //         </ul>
    //       </nav>
    //     )}
    //   </ul>
    // </div>
  );
}
