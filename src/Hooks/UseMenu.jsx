import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const UseMenu = () => {
    // const [loading, setLoading] = useState(true);
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     fetch(" http://localhost:5000/menu")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setItems(data);
    //             setLoading(false);
    //         });
    // }, []);

    const {
        data: items = [],
        isloading: loading,
        refetch,
    } = useQuery({
        queryKey: ["item"],
        queryFn: async () => {
            const res = await fetch(" http://localhost:5000/menu");
            return res.json();
        },
    });

    return { items, loading, refetch };
};

export default UseMenu;
