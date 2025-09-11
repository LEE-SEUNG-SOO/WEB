import { useEffect, useState, useRef } from "react"
import { fetchKobisAPI, searchMoviePoster } from '../util/commonData.js';
import { BestProductImage } from './shared/BestProductImage.jsx';
import { BestProductItem } from './BestProduct.jsx';

export function Boxoffice(){
    const [posterList, setPosterList] = useState([]);
    const hasRun = useRef(false); // 현재 레퍼런스하는 부분에 대해 체크

    useEffect( () => {
        if(!hasRun.current){
            const fetchKobis = async () => {
                const kobis = await fetchKobisAPI("20250910");
                let mList = kobis.boxOfficeResult.dailyBoxOfficeList;

                for(const movie of mList){
                    if(movie.rank < 10){
                        const poster = await searchMoviePoster(movie.movieNm, movie.openDt);
                        const posterObj = {
                            "img":poster,
                            "rank":movie.rank,
                            "title":movie.movieNm,
                            "like":true,
                            "icon":"🤍",
                            "style": {"width":"600px", "height":"800px"},
                            "icon_style":{
                                "color":"red",
                                "bg":"yellow",
                                "width":"10px",
                                "height":"20px"
                            },
                            "openDt":movie.openDt,
                            "salesAcc":movie.salesAcc,
                            "audiAcc":movie.audiAcc
                        }
        
                        setPosterList( prev => [...prev , posterObj] ); // 0 - prev(현재의 list): [] 빈배열
                    }
                }
            }

            fetchKobis();
            hasRun.current = true;
        } else {
            hasRun.current = false;
        }
    },[]);

    function handleEvent(){};

    return(
        <div>
            <h2>박스 오피스</h2>
            <ul className="best-product">
                {posterList.map( (item, index) => 
                    index === 0 ? 
                    <li key={index}>
                        <BestProductImage
                            img={item.img}
                            style={item.style}
                            rank={item.rank}
                            like={item.like}
                            icon={item.icon}
                            cartCount={handleEvent}
                            icon_style={item.icon_style}
                        />
                    </li>
                    :
                    <li><BestProductItem
                            items={item}
                            style={{width:"200px", height:"300px"}}
                            cartCount={handleEvent}
                            icon_style={item.icon_style}
                            openDt={item.openDt}
                            salesAcc={item.salesAcc}
                            audiAcc={item.audiAcc}
                            /></li>
                )}
            </ul>
        </div>
    )
}