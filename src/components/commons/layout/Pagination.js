import React from 'react';

const Pagination = () => (
    <div style={{'marginLeft': "45%", 'font-size': '14px'}}>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#1" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#1">1</a></li>
                <li className="page-item">
                    <a className="page-link" href="#1" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
);

export default Pagination;
