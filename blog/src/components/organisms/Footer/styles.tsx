import Styled from 'styled-components';

export const FooterContainer = Styled.footer`
    background-color: #0e1015;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0px 16px;
` ;

export const LinksContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    min-width: 600px;
`;

export const FooterLinks = Styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    color: #ffffff;
`;

export const SocialIconsContainer = Styled.div`
    display: flex;
    flex-direction: row;
    margin: 16px 0px 8px;
`;

export const SocialIcon = Styled.div`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin: 0px 8px;
    padding-left: 7px;
`;
