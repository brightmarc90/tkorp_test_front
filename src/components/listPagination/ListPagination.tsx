"use client" 

import TablePagination from "@mui/material/TablePagination";
import { useEffect, useState } from "react";

const ListPagination = ({count, limit, changePage}: {
    count:number, 
    limit: number, 
    changePage: (skip: number, limit: number) => void}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(limit);
  const totalPages = Math.ceil(count / rowsPerPage);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    changePage(rowsPerPage*newPage, rowsPerPage) // prev ou next
    console.log(page, newPage)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = parseInt(event.target.value, 10)
    changePage(0, temp)
    setPage(0)
    setRowsPerPage(temp);
  };

  useEffect(() => {
    if (page >= totalPages && totalPages > 0) {
        setPage(0);
      }
  }, [totalPages, page])
  
  return (
    <div>
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Éléments par page :"
        labelDisplayedRows={({ from, to, count }: {from: number, to: number, count: number}) =>
            `${from}-${to} sur ${count !== -1 ? count : `plus de ${to}`}`
        }
      />
    </div>
  );
};

export default ListPagination;