import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import {
  Box,
  IconButton,
  Pagination,
  TablePagination,
  Typography,
  useTheme,
} from "@mui/material";
import { styles } from "./custom-pagination-style";

const PAGINATION = {
  PAGE_LIMIT: 10,
  OPTIONAL_PAGE_LIMIT: 5,
  ROWS_PER_PAGE: [5, 10, 15, 20],
  CURRENT_PAGE: 1,
  PAGE_COUNT: 1,
  TOTAL_RECORDS: 0,
  DROPDOWNS_RECORD_LIMIT: 50,
};

export function CustomPagination(props: any): JSX.Element {
  const {
    count = PAGINATION?.PAGE_COUNT,
    rowsPerPageOptions = PAGINATION?.ROWS_PER_PAGE,
    pageLimit = PAGINATION?.PAGE_LIMIT,
    currentPage = PAGINATION?.CURRENT_PAGE,
    onPageChange,
    setPageLimit,
    totalRecords = PAGINATION?.TOTAL_RECORDS,
  } = props;

  const theme = useTheme();

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= count) {
      onPageChange?.(newPage);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      gap={2}
    >
      <Box>
        <Typography variant="subtitle1">
          Showing {currentPage} of {count} page(s)
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <TablePagination
          component="div"
          count={totalRecords}
          page={currentPage - 1}
          onPageChange={(_: any, page) => handlePageChange(page + 1)}
          rowsPerPage={pageLimit}
          onRowsPerPageChange={(event: any) => {
            const newPageLimit = parseInt(event?.target?.value, 10);
            const newPage =
              Math.floor(((currentPage - 1) * pageLimit) / newPageLimit) + 1;
            
            setPageLimit?.(newPageLimit);
            handlePageChange(newPage);
          }}
          rowsPerPageOptions={rowsPerPageOptions}
          sx={styles?.tablePaginationStyle(theme)}
        
          labelRowsPerPage={ "Results Per Page"}
          
        />
        <IconButton
          disabled={currentPage === 1 || currentPage < 1}
          onClick={() => handlePageChange(currentPage - 1)}
          sx={styles?.iconStyleTwo(theme)}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Pagination
          count={count}
          page={currentPage}
          onChange={(_: any, page) => handlePageChange(page)}
          hidePrevButton
          hideNextButton
          variant="outlined"
          shape="rounded"
        />
        <IconButton
          disabled={currentPage === count}
          onClick={() => handlePageChange(currentPage + 1)}
          sx={styles?.iconStyleTwo(theme)}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default CustomPagination;