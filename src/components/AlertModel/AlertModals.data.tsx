
import DeleteIcon from '@mui/icons-material/Delete';

const DELETE_STRING = 'delete';

export const checkModalTypeForImage = (type: string) =>
  type?.toLowerCase() === DELETE_STRING ? <DeleteIcon /> : undefined;
