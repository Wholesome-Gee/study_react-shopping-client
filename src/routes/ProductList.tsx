import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { FaTshirt, FaHeart } from "react-icons/fa";

import { useRecoilValue } from "recoil";
import { productsState } from "../atoms";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding-left: 60px;
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
  overflow: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
`;
const Header = styled.div`
  padding: 40px 0 16px;
  display: flex;
  gap: 16px;
  position: sticky;
  top: 0;
  background-color: #fff;
`;
const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  font-size: 24px;
`;
const Icon = styled.div``;
const Category = styled.div`
  margin-right: 8px;
`;
const Arrow = styled.div``;
const OptionBox = styled(CategoryBox)`
  font-weight: 400;
`;
const Option = styled(Category)``;
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;
const ItemBox = styled.li`
  padding: 20px 10px 20px 10px;
  width: 450px;
  border-radius: 16px;
  display: flex;
  gap: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  & > img {
    width: 180px;
    height: 180px;
    border-radius: 16px;
  }
  &:hover {
    background-color: #eee;
    transform: scale(1.01);
  }
`;
const ItemInfo = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  & > a {
    position: absolute;
    bottom: 0;
    right: 0px;
    color: #888;
    transition: all 0.1s ease-in-out;
    &:hover {
      color: #333;
    }
  }
`;
const ItemName = styled.div`
  height: 50px;
  font-size: 1.2rem;
  font-weight: 600;
`;
const ItemPrice = styled.div`
  height: 50px;
  font-size: 1.1rem;
`;
const ItemMore = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ItemLikes = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #888;
`;
const ItemReviews = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #888;
`;

function ProductList() {
  const list = useRecoilValue(productsState);
  return (
    <Container>
      <Header>
        <CategoryBox>
          <Icon>
            <FaTshirt />
          </Icon>
          <Category>상의</Category>
          <Arrow>
            <IoIosArrowDown />
          </Arrow>
        </CategoryBox>
        <OptionBox>
          <Option>낮은 가격순</Option>
          <Arrow>
            <IoIosArrowDown />
          </Arrow>
        </OptionBox>
      </Header>
      <List>
        {list.map((item) => (
          <ItemBox key={item.id}>
            <img src={process.env.PUBLIC_URL + item.img} alt="" />
            <ItemInfo>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price}￦</ItemPrice>
              <ItemMore>
                <ItemLikes>
                  <span>
                    <FaHeart />
                  </span>
                  <span>{item.likes}</span>
                </ItemLikes>
                <ItemReviews>리뷰 {item.reviews}</ItemReviews>
              </ItemMore>
              <Link to={`/${item.id}`}>자세히 보기 </Link>
            </ItemInfo>
          </ItemBox>
        ))}
      </List>
    </Container>
  );
}

export default ProductList;
