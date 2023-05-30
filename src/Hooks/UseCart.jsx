import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UseCart = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ["carts", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `https://bistro-boss-server-iota.vercel.app/carts?email=${user?.email}`
            );
            return res.json();
        },
    });
    return [cart, refetch];
};

export default UseCart;
