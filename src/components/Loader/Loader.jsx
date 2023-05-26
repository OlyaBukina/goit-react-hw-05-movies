import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  height: 75vh;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <RotatingLines
        strokeColor="#00467f"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        wrapperStyle={{ margin: '50px' }}
        visible={true}
      />
    </LoaderWrapper>
  );
};
