import { Header } from './compornents/Header.jsx';
import { Content } from './compornents/Content.jsx';
import { Footer } from './compornents/Footer.jsx';
import { useState, useEffect } from 'react';
import './css/style.css';

export default function App() {
  const init = { header: { menus:[] }, 
                 content:{ homeData:{}, 
                          aboutData:{ majors:[], jobs:[] },
                          skillsData:{ skills:[], tools:[], etc:[] },
                          workData:{ catecorys:[], projects:[] },
                          testimonialsData: { testimonials:[] }
                         },
                 footer:{ links:[] } };
  const [data, setData] = useState(init);

  useEffect( () => {
    const load = async () => {
        const response = await fetch("/data/portfolio.json");
        const jsonData = await response.json();  
        setData(jsonData);
      } 
      
      load();
  }, [] );

  return (
      <>
        <Header data={data.header}/>
        <Content data={data.content}/>
        <Footer data={data.footer}/>
      </>
    );
}
