import './App.css';
import React, {useEffect, useState} from "react";
import { products } from "./Components/data";

function App() {

    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedTodos, setPaginatedTodos] = useState([]);

    let pageSize = 6;
    let pagesNumbers;

    useEffect(() => {
        let endIndex = pageSize * currentPage;
        let startIndex = endIndex - pageSize;
        let allShownTodos = products.slice(startIndex, endIndex);
        setPaginatedTodos(allShownTodos);
    }, [currentPage]);

    const changePaginate = (newPage) => {
        setCurrentPage(newPage);
    };

    const pagesCount = Math.ceil(products.length / pageSize);
    pagesNumbers = Array.from(Array(pagesCount).keys());

    return (
        <>
            <div
                className="container mx-auto px-3 md:px-0 justify-evenly grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-10">
                {
                    paginatedTodos.map(paginatedTodo => {
                        return (
                            <>
                                <div key={paginatedTodo.id}
                                    className="max-w-sm cursor-pointer mt-5 md:mt-10 card mx-auto rounded overflow-hidden shadow-lg">
                                    <img className="w-full" src={paginatedTodo.image} alt="Sunset in the mountains" />
                                    <div className="px-6 py-4">
                                        <h2 className="font-bold text-xl mb-2">{paginatedTodo.title}</h2>
                                        <p className="opacity-[70%] text-sm">
                                            {paginatedTodo.description}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2 flex items-center justify-between">
                                        <div className="flex justify-between">
                                            <p className="sabzlearn-txt">{paginatedTodo.teachersLogo}</p>
                                            <span className="text-sm mr-1 sabzlearn-txt">{paginatedTodo.teachers}</span>
                                        </div>
                                        <div>
                                            <p className="sabzlearn-txt flex flex-row-reverse"><span
                                                className="mr-1">{paginatedTodo.logo}</span>5.0</p>
                                        </div>
                                    </div>
                                    <span className="border border-[#ffffff1a] flex mx-auto w-[90%] mt-2"></span>
                                    <div className="px-6 pt-4 pb-2 flex items-center justify-between">
                                        <div className="flex justify-between">
                                            <p className="sabzlearn-txt">{paginatedTodo.participant}</p>
                                            <span className="text-sm mr-1 sabzlearn-txt">{paginatedTodo.participantCount}</span>
                                        </div>
                                        <div>
                                            <p className="sabzlearn-txt flex flex-row-reverse">
                                                <span className="mr-1">
                                                    {paginatedTodo.price}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

            <div className="flex container mx-auto justify-center items-center gap-4 mt-10 mb-10">
                <div className="flex flex-row-reverse items-center gap-2">

                    {
                        pagesNumbers.map(pagesNumber => {
                            return(
                                <>
                                    <button
                                        onClick={() => changePaginate(pagesNumber + 1)}
                                        key={pagesNumber.id}
                                        className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase transition-all ${pagesNumber + 1 === currentPage && "bg-green-700 hover:bg-green-700"} hover:bg-[#ffffff1a] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                                        type="button"
                                    >
                                        <b className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                            {pagesNumber + 1}
                                        </b>
                                    </button>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default App;