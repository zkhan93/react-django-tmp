import useAuth from "./useAuth"
import useAxiosPrivate from "./usePrivate"

export default function useEthereum() {

    const { isLoggedIn, setEthereum } = useAuth()
    const axiosPrivateInstance = useAxiosPrivate()

    async function getEthereum() {
        if (!isLoggedIn) {
            return
        }

        try {
            const { data } = await axiosPrivateInstance.get('auth/user/ethereum')
            setEthereum(data)
        } catch (error) {
            console.log("===", error.response)
        }
    }

    return getEthereum
}
