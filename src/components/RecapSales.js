

const RecapSales = () =>  {

    return (
        <div className="p-5 h-screen bg-gray-100">
                <div className="text-xl mb-2">
                    <h2>Rekap Penjualan</h2>
                </div>
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className='p-3 text-sm font-bold tracking-wide text-left'>Product</th>
                                <th className='p-3 text-sm font-bold tracking-wide text-left'>Harga</th>
                                <th className='p-3 text-sm font-bold tracking-wide text-left'>Terjual</th>
                                <th className='p-3 text-sm font-bold tracking-wide text-left'>Pendapatan</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">

                        </tbody>
                        <thead className="bg-blue-100 border-b-2 border-blue-200">
                        <tr className='p-3 text-sm font-bold tracking-wide text-right'>TOTAL PENDAPATAN</tr>
                        </thead>
                    </table>



        </div>
    );
}

export default RecapSales;