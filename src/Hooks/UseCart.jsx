import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseCart = () => {
    const { user, loading } = useContext(AuthContext);

    const token = localStorage.getItem("access-token");
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ["carts", user?.email],

        queryFn: async () => {
            if (!loading && user?.email) {
                const res = await fetch(
                    ` http://localhost:5000/carts?email=${user?.email}`,
                    {
                        headers: {
                            authorization: `bearer ${token}`,
                        },
                    }
                );
                return res.json();
            }
        },
        enabled: !loading && !!user?.email,
    });
    return [cart, refetch];
};

export default UseCart;
