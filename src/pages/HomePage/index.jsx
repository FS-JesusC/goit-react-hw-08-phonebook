import styled from "styled-components";
import { NavLink } from "react-router-dom";
import{ useSelector } from "react-redux";
import authSelectors  from "redux/auth/authSelectors";
import { breakpoints } from "styleConfig/breakpoints";
import { TbHandClick } from "react-icons/tb";
import { Title, Button } from "components/ui";




const HomePage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const user = useSelector(authSelectors.getUserName);
  const userName = user ? `, ${user.slice(0,1).toUpperCase()}${user.slice(1)}` : '';

  return (
    <HomeWrapper>
      <Title>Welcome to your Phonebook{userName}!</Title>
      {isLoggedIn ? (
        <>
          <NotifyAuth>To add a new contact</NotifyAuth>
          <Button>
            <StyledLink to="/contacts">Click here&nbsp;<TbHandClick/></StyledLink>
          </Button>
        </>
        ) : (
        <NotifyBox>
          <Notify>To keep your contacts private, log in to your account.</Notify>
          <NotifyAuth>If you haven't registered yet</NotifyAuth>
          <Button>
            <StyledLink to="/signup">Click here&nbsp;<TbHandClick/></StyledLink>
          </Button>        
          <NotifyAuth>If you already have an account</NotifyAuth>
          <Button>
            <StyledLink to="/login">Click here&nbsp;<TbHandClick/></StyledLink>
          </Button>
        </NotifyBox>
        )
      }
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
const NotifyBox = styled.div`
  width: 340px;
  @media (${breakpoints.tablet}) {
    width: 380px;
  };
  @media (${breakpoints.laptop}) {
    width: 500px;
  };
`;
const Notify = styled.p`
  margin: ${p => p.theme.space[0]}px 0;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semibold};
   @media (${breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
  };
  @media (${breakpoints.laptop}) {
    font-size: ${p => p.theme.fontSizes.xl};
  };
`;
const NotifyAuth = styled(Notify)`
  margin-top: ${p => p.theme.space[1]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
`;
const StyledLink = styled(NavLink)`
  transition: all .3s ease;
  margin: 0 auto;
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semibold};
  @media (${breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
  };
  &:hover{
    color: ${p => p.theme.colors.accent};
  };
`
export default HomePage;