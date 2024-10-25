export const styles = {
    iconStyleTwo: (theme: any) => {
        return {
            borderRadius: '4px',
            height: '32px',
            width: '32px',
            padding: '0 6px',
            margin: "0 3px",
            border: `1px solid ${theme?.palette?.neutral?.[400]}`,
            backgroundColor: `${theme?.palette?.neutral?.[100]}`,
        };
    },
    tablePaginationStyle: (theme: any) => {
        return {
            '.MuiTablePagination-select:focus': {
                border: `1px solid ${theme?.palette?.custom?.dark}`,
                borderRadius: '4px',
            },
            '.MuiTablePagination-selectLabel': {
                fontWeight: '500',
                color: 'custom.main',
            },
            '& .MuiTablePagination-actions': {
                display: 'none',
            },
            '.MuiToolbar-root': {
                padding: 0,
            },
            "& .MuiTablePagination-displayedRows": {
                display: "none",
            },
            "& .css-vnpw3a-MuiInputBase-root-MuiTablePagination-select": {
                marginRight: "10px",
                borderRadius: '4px',
                padding: '0 6px',
                border: `1px solid ${theme?.palette?.neutral?.[400]}`,
                backgroundColor: `${theme?.palette?.neutral?.[100]}`,
            },
            "& .css-1joyzxy-MuiButtonBase-root-MuiPaginationItem-root": {
                borderRadius: '4px',
                margin: "0 3px",
                border: `1px solid ${theme?.palette?.neutral?.[400]}`,
                backgroundColor: `${theme?.palette?.neutral?.[100]}`,
            },
        };
    },
};