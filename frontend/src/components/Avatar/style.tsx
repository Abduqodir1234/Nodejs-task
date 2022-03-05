import styled from "styled-components";

export let AvatarContainer = styled.div`
    display:relative;
    width:fit-content;
`;

export const StyledImage = styled.img`
    width:90px;
    height:90px;
    border-radius:50px;
    border:2px solid lavender;
    object-fit:cover;
    object-position:center;
`;

export const StyledEditIcon = styled.button`
    position:absolute;

    bottom:-5px;
    right:78%;
    border-radius:25px;
    border:none;
`