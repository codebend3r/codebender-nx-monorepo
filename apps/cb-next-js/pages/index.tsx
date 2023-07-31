import { cbUtilsLib } from '@codebender/cb-utils-lib';
import styled from '@emotion/styled';

const StyledPage = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Button = styled.button`
  background-color: pink;
  font-size: 20px;
`;

export function Index() {
  const a = cbUtilsLib();

  return (
    <StyledPage>
      <Button>test button</Button>
      <p>{a}</p>
    </StyledPage>
  );
}

export default Index;
