import React from "react";
import "./paginado.css";

export default function Pagination({ cardPerPage, totalCards, pagination }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); ++i) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-lg">
        {pageNumbers.length <= 1 ? (
          <></>
        ) : (
          <nav aria-label="...">
            <ul className="pagination pagination-lg">
              {pageNumbers?.map((p, i) => (
                <li
                  key={i}
                  className="page-item "
                  onClick={() => pagination(p)}
                >
                  <button className="page-link bg-black text-warning fw-bolder bg-gradient ">
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