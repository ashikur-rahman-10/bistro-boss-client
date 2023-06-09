// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import { useQuery } from "@tanstack/react-query";

// const UseAdmin = () => {
//     const { user } = useContext(AuthContext);
//     const token = localStorage.getItem("access-token");
//     const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
//         queryKey: ["isAdmin", user?.email],
//         queryFn: async () => {
//             const res = await fetch(
//                 ` http://localhost:5000/users/admin/${user?.email}`,
//                 {
//                     headers: {
//                         authorization: `bearer ${token}`,
//                     },
//                 }
//             );

//             return res.json();
//         },
//     });
//     return [isAdmin, isAdminLoading];
// };

// export default UseAdmin;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./UseAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ["isAdmin", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);

            return res.data.result.admin;
        },
    });
    return [isAdmin, isAdminLoading];
};
export default useAdmin;
