import { AvatarContainer, StyledEditIcon, StyledImage } from "./style";
import { EditOutlined} from '@ant-design/icons';
import image from '../../public/logo192.png'
import { FC } from "react";


interface AvatarProps{
    handleClick:()=>void;
    photo:any;
}

let Avatar:FC<AvatarProps> = ({handleClick,photo}) => {
    return(
        <AvatarContainer>
            <StyledImage src={typeof photo === 'object' && photo ? URL.createObjectURL(photo) : image}/>
            <StyledEditIcon type="button" onClick={()=>handleClick()}>
                <EditOutlined height='5px' width='5px'  />
            </StyledEditIcon>
        </AvatarContainer>
    )
}
export default Avatar;