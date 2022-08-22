import ZustandIcon from '@mui/icons-material/EnergySavingsLeaf';

export function ReactComponent(props: Parameters<typeof ZustandIcon>[0]) {
  return <ZustandIcon sx={{ color: '#4caf50' }} {...props} />;
}
