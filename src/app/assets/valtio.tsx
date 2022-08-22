import ValtioIcon from '@mui/icons-material/ViewInAr';

export function ReactComponent(props: Parameters<typeof ValtioIcon>[0]) {
  return <ValtioIcon sx={{ color: '#9ee8ef' }} {...props} />;
}
