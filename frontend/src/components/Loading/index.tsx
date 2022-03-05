import { Space,Spin} from 'antd'
import { LoadingContainer } from './styles';
let Loading = () =>{
    return(
        <LoadingContainer>
            <Space size='large'>
                <Spin size='large'/>
            </Space>
        </LoadingContainer>
    )
}

export default Loading;