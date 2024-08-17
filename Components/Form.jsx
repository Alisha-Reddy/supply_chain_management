import { useState } from "react"

export default ({ setCreateShipmentModel, createShipmentModel, createShipment }) => {
    const [shipment, setShipment] = useState({
        receiver: "",
        pickupTime: "",
        distance: "",
        price: "",
    })

    const createItem = async () => {
        try {
            await createShipment(shipment)
        } catch (error) {
            console.log("Something wet wrong with creating item")
        }
    }

    return createShipment ? (
        <div className="fixed insert-0 z-10 overflow-y-auto">
            <div
                className="fixed insert-0 w-full h-full bg-black opacity-40"
                onClick={() => setCreateShipmentModel(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="flex justify-end">
                        <button
                            className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                            onClick={() => setCreateShipmentModel(false)}
                        >
                            <svg
                                fill="#000000"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="100px"
                                height="100px"
                                viewBox="0 0 113.488 113.488"
                            >
                                <g>
                                    <path
                                        d="M77.443,97.406H59.569v11.299c0,2.086,1.691,3.76,3.76,3.76h20.709c2.086,0,3.76-1.693,3.76-3.76V5.158
		c0-2.086-1.692-3.76-3.76-3.76H63.329c-2.087,0-3.76,1.693-3.76,3.76v9.41h17.874c0.513,0,0.944,0.414,0.944,0.945
		c0,0.531-0.413,0.945-0.944,0.945H59.569v5.65h10.354c0.513,0,0.945,0.413,0.945,0.945c0,0.531-0.412,0.945-0.945,0.945H59.569
		v3.76h17.874c0.513,0,0.944,0.414,0.944,0.945c0,0.532-0.413,0.945-0.944,0.945H59.569v5.649h10.354
		c0.513,0,0.945,0.414,0.945,0.945c0,0.531-0.412,0.945-0.945,0.945H59.569v3.76h17.874c0.513,0,0.944,0.414,0.944,0.945
		c0,0.532-0.413,0.945-0.944,0.945H59.569v5.65h10.354c0.513,0,0.945,0.414,0.945,0.945c0,0.532-0.412,0.945-0.945,0.945H59.569
		v3.76h17.874c0.513,0,0.944,0.414,0.944,0.945c0,0.532-0.413,0.945-0.944,0.945H59.569v5.65h10.354
		c0.513,0,0.945,0.413,0.945,0.944s-0.412,0.944-0.945,0.944H59.569v5.648h17.874c0.513,0,0.944,0.414,0.944,0.945
		s-0.413,0.945-0.944,0.945H59.569v3.76h10.354c0.513,0,0.945,0.414,0.945,0.945c0,0.53-0.412,0.944-0.945,0.944H59.569v5.648
		h17.874c0.513,0,0.944,0.413,0.944,0.944s-0.413,0.945-0.944,0.945H59.569v3.701h10.354c0.513,0,0.945,0.412,0.945,0.945
		c0,0.531-0.412,0.942-0.945,0.942H59.569v5.65h17.874c0.513,0,0.944,0.414,0.944,0.944C78.388,97.008,77.975,97.406,77.443,97.406z
		M52.029,13.17C52.029,5.906,46.125,0,38.859,0c-6.851,0-12.48,5.237-13.11,11.93c-0.039,0.414-0.059,0.827-0.059,1.26
		c0,0.02,0,0.965,0,2.362c0,0.295,0,0.61,0,0.945h0.944h23.525h0.945c0.512,0,0.944-0.413,0.944-0.945V13.17H52.029z M52.147,19.292
		v0.945c0,13.917,0,61.538,0,68.704c0,0.59-4.843,9.842-4.843,9.842c-0.157,0.314-0.492,0.512-0.847,0.512h-7.5h-0.078h-7.5
		c-0.354,0-0.688-0.197-0.847-0.512c0,0-4.842-9.252-4.842-9.842c0-7.166,0-54.806,0-68.704v-0.945c0-0.512,0.413-0.945,0.944-0.945
		h12.245h0.079h12.244C51.734,18.348,52.147,18.761,52.147,19.292z M45.77,101.047c0.177,0.295,0.177,0.65,0.02,0.926l-5.157,9.783
		c-0.513,0.965-0.887,1.732-1.831,1.732c-0.945,0-1.339-0.768-1.851-1.732l-5.473-10.02c-0.138-0.295-0.138-0.531,0.039-0.826
		c0.178-0.275,0.473-0.355,0.808-0.355h12.638C45.297,100.574,45.591,100.752,45.77,101.047z"
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
                        <h4 className="text-lg font-medium text-gray-800">
                            Track product, Create Shipment
                        </h4>
                        <p className="text-[15px] text-gray-60">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="relative mt-3">
                                <input
                                    type="text"
                                    placeholder="receiver"
                                    className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    onChange={(e) =>
                                        setShipment({
                                            ...shipment,
                                            receiver: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="relative mt-3">
                                <input
                                    type="date"
                                    placeholder="pickupTime"
                                    className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent online-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    onChange={(e) =>
                                        setShipment({
                                            ...shipment,
                                            pickupTime: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="relative mt-3">
                                <input
                                    type="text"
                                    placeholder="distance"
                                    className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent online-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    onChange={(e) =>
                                        setShipment({
                                            ...shipment,
                                            distance: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="relative mt-3">
                                <input
                                    type="text"
                                    placeholder="price"
                                    className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent online-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    onChange={(e) =>
                                        setShipment({
                                            ...shipment,
                                            price: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <button onClick={() => createItem()}
                               className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2" >Create Shipment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div></div>
    )
}
