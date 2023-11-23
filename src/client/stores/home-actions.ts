import ROUTES from "../utilities/api-routes";
import api from "../services/api"

import { useHomeStore } from "./home-store"

const { setState } = useHomeStore;
export const getAllProducts = async () => {
    setState({
        loading: true,
    })
    try{
        const {data: result} = await api.get(ROUTES.getAllProducts())
        if(result.length){
            return setState({
                products: result,
                loading: false
            })
        }

    }catch(e: any){
        return setState({
            products: [],
            loading: false,
            error: e.messages
        })
    }
}



export const getProductDetail = async(slug: string) => {
    try {
        const { data: result } = await api.get(ROUTES.getProduct(slug))
        return {result: result, error: null} ;
    }catch(e: any){
        return { result: null, error: e.message}
    }
}

export const getProduct = async (slug: string) => {
    setState({
        loading: true,
    })
    try{
        const {data: result} = await api.get(ROUTES.getProduct(slug))
        if(result){
            return setState({
                product: result,
                loading: false
            })
        }

    }catch(e: any){
        return setState({
            product: {},
            loading: false,
            error: e.messages
        })
    }
}


