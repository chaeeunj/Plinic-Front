import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import {
  Home,
  CE,
  TY,
  TestPagination,
  TestInput,
  TestSelectBox,
  TestCardSwipe,
  HL,
  TestProfile,
  TestThumbnail,
  TestScroll,
  TestSwitch,
} from './pages';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CE" element={<CE />} />
          <Route path="/TY" element={<TY />} />
          <Route path="/TY/pagination" element={<TestPagination />} />
          <Route path="/TY/input" element={<TestInput />} />
          <Route path="/TY/select" element={<TestSelectBox />} />
          <Route path="/TY/card-swipe" element={<TestCardSwipe />} />
          <Route path="/HL" element={<HL />} />
          <Route path="/HL/profile" element={<TestProfile />} />
          <Route path="/HL/thumbnail" element={<TestThumbnail />} />
          <Route path="/HL/scroll" element={<TestScroll />} />
          <Route path="/HL/switch" element={<TestSwitch />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
`;
