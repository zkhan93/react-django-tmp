import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser';
import useEthereum from '../hooks/useEthereum';

export default function Home() {
    const { user, ethereum } = useAuth();
    const getUser = useUser()
    const getEthereum = useEthereum()

    useEffect(() => {
        getUser()
        getEthereum()
    }, [])
    

    return (
        <div className='container mt-3'>
            <h2>
                <div className='row'>
                    <div className="mb-12">
                        {user?.email !== undefined ? 'List user Ethereum balance' : 'Please login first'}
                    </div>
                    <div>
                        Address: {ethereum.address}
                        <br/>
                        Wallet Balance: {ethereum.balance}
                    </div>
                </div>
            </h2>
        </div>
    )
}
