import SiginForm from "../components/signin/form";
import { SignInFormContainer } from "../components/signin/styles";

let SigninPage = () => {
    return(
        // <AppLayout breadcrumb={[{url:"/",name:'Home'},{url:'#',name:'Sign In'}]}>
            <SignInFormContainer>
                <SiginForm/>
            </SignInFormContainer>
        // </AppLayout>
    )
}
export default SigninPage;