import { Puff } from 'react-loader-spinner';

export const Loader = ({color,size}) => {
  return (
    <Puff
      height={size}
      width={size}
      radius={1}
      color={color}
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
		  visible={true}
		  
    />
  );
};
