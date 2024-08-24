import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useGetUserQuery } from "../../redux/api/baseApi";


type Tchildren = {
    children: ReactNode
}


const ProtectRoute = ({ children }: Tchildren) => {

    const { data, isLoading } = useGetUserQuery(undefined)
    
    if (isLoading) {
        return <h1 className="text-2xl bg-white">Loading...</h1>
    }

    
    if (data?.message ==='jwt expired') {
        return <Navigate to='/sign-in' />
    }

    return children



};

export default ProtectRoute;