import React,{ useState,useEffect,useRef } from 'react'
import throttle from 'lodash/throttle';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import Pv1 from '../assets/Pv1.pdf'
import Pv2 from '../assets/Pv2.pdf'
import Pv3 from '../assets/Pv3.pdf'
import Pv4 from '../assets/Pv4.pdf'
import Pv5 from '../assets/Pv5.pdf'
import Pv6 from '../assets/Pv6.pdf'
import Pv7 from '../assets/Pv7.pdf'
import Pv8 from '../assets/Pv8.pdf'
import Pv9 from '../assets/Pv9.pdf'
import Pv10 from '../assets/Pv10.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
const Certifications =()=> {
    const [initialWidth, setInitialWidth] = useState(null);
    const options = {
        cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
      };
    const pdfWrapper = useRef(null);   
     const setPdfSize = () => {
        if (pdfWrapper && pdfWrapper.current) {
          setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
        }
      };
  
  
const array=[
    {url:Pv1,title:"Mesure de la Portance d'une Plate-Forme par essais à la plaque"},
    {url:Pv2,title:"Rapport d'essai"},
    {url:Pv3,title:"Rapport d'essai"},
    {url:Pv4,title:"Proces Verbale De Controle De Comptage "},
    {url:Pv5,title:"Mesure de la Portance d'une Plate-Forme par essais à la plaque"},
    {url:Pv6,title:"Rapport des essais:Analayse Granalumétrique et Limites d'Aterberg"},
    {url:Pv7,title:"Mesure de la Portance d'une Plate-Forme par essais à la plaque"},
    {url:Pv8,title:"Rapport des essais:Analayse Granalumétrique et Limites d'Aterberg"},
    {url:Pv9,title:"Rapport d'essai"},
    {url:Pv10,title:"Norme Européenne"}]
    useEffect(() => {
        window.addEventListener('resize', throttle(setPdfSize, 3000));
        setPdfSize();
        return () => {
          window.removeEventListener('resize', throttle(setPdfSize, 3000));
        };
      }, []);


  return (<>
  {array.map((pv,index)=>{
    return(
    <><h1 className='text-center py-4 text-xl md:text-xxl font-semibold w-1/2 mx-auto border-b-2 border-greenlight/50'>{pv.title}</h1>
  <div className='flex   py-4 justify-center px-12   ' key={index}  ref={pdfWrapper} >
        
      <Document file={pv.url}  className="flex  justify-center border md:border-8 border-4 border-greenlight/25 rounded-md " options={options}>
        
        <Page pageNumber={1} renderMode="canvas" renderTextLayer={false} renderAnnotationLayer={false} className='md:hidden ' width={initialWidth} />
        <Page pageNumber={1} renderMode="canvas" renderTextLayer={false} renderAnnotationLayer={false} className='md:block hidden'  />

      </Document>
      {/* <iframe src={Pv1} width="100%" height="500px" /> */}
      
    </div></>
    );
  })}
  
    
  </>
    
  );
}
export default Certifications