import useAuthStore from "../store/AuthStore";
import NotFound from "../pages/NotFound";

function ProtectedRoutes({children }: any){
    const isLoggedIn = useAuthStore((state)=> state.isLoggedIn);

    if(!isLoggedIn){
        return <NotFound />;
    }
    return children;
}

export default ProtectedRoutes;
