import { Rings } from 'react-loader-spinner';
export function Loader() {
  return (
    <Rings
      height="80"
      width="80"
      color="orange"
      radius="6"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: '1000',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
}
