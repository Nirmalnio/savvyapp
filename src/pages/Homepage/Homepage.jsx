import React, { useEffect, useState,useMemo } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { getdata } from "../../fetch/FetchClient";
function Homepage() {
  const [list, setList] = useState();
  const [search, setsearch] = useState("");
  const [page, setpage] = useState(1);
  const [Loader, setLoader] = useState(false);

  const item_per_page = 10;
  const firstpage = (page - 1) * item_per_page;
  const lastpage = firstpage + item_per_page;
  const currentPosts = list?.slice(firstpage, lastpage);

  const respon = async () => {
    const data = await getdata().then((resp) => {
      const filterval = resp?.filter(
        (item) => item?.title.includes(search) || item?.body.includes(search)
      );
      if (filterval) {
        setList(filterval);
        setLoader(false);
      }
    });
  };


  const totalPages = useMemo(() => Math.ceil(list?.length / item_per_page), [list]);
  console.log(totalPages,"tolpages");

  useEffect(() => {
    setLoader(true);
    respon()
  }, [search,page]);



  const handleSearchInput = (e) => {
    setsearch(e.target.value);
    setpage(1);
  };

  const handlePageChange = (pageNo) => {
    setpage(pageNo);
  };


  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }



  return (
    <div className="home-bodyDiv">
      <div className="searchinput">
        <h2>Search</h2>
        <input
          type="search"
          onChange={(e) => handleSearchInput(e)}
          value={search}
          placeholder="search here"
        />
      </div>

      {Loader ? (
        <div className="loaderDiv">
          <h3>Loading...</h3>
        </div>
      ) : currentPosts?.length === 0 ? (
        <div className="loaderDiv">
          <h3>No search Results</h3>
        </div>
      ) : (
        <div>
          <div className="posts-Div">
            {currentPosts?.map((items, id) => {
              return (
                <div className="posters" key={id}>
                  <b>{items?.title}</b>
                  <small>{items?.body}</small>
                </div>
              );
            })}
          </div>

          <div className="paginationDiv">
            <div 
            className={page===1?"disablebtn":"Arrowbtn"}
            onClick={() =>page===1?"":handlePageChange(page-1)} 
            disabled={page===1?true:false}>
                    Prev
            </div>
            <ul className="pagesDiv">
              {pageNumbers?.map((item)=>{
                console.log(item,"itemss");
                return(
                  <li
                    key={item}
                    className={item === page ? "Activepagesbtn" : "pagesbtn"}
                    onClick={() => handlePageChange(item)}
                   >
                  {item}
                </li>
                )
              })

              }
            </ul>

            <div 
            className={page===totalPages?"disablebtn":"Arrowbtn"}
            onClick={() =>page===totalPages?"":handlePageChange(page+1)} 
            >
                   Next
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
