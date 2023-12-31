// import {PolarisVizProvider, SparkBarChart, SparkLineChart, BarChart, LineChart, BarChart} from '@shopify/polaris-viz';
// import '@shopify/polaris-viz/build/esm/styles.css';



//  function Linechart({shopid}) {
//   const db = getFirestore(app);

//   const [Notifications, setNotifications] = useState([]);

//   const getanalytics = async (shopid) =>{
//     const docRef = doc(db, shopid, "Notificationsanalytics");
//     const docSnap = await getDoc(docRef);
//     var data = docSnap.data() ? docSnap.data().data : [];

//     setNotifications(data);
//   };


//   useEffect(() => {
//     if(shopid) getanalytics(shopid);
//   }, [shopid]); 


//   const dateRange = (startDate, endDate, steps = 1) => {
//     const dateArray = [];
//     let currentDate = new Date(startDate);
//     while (currentDate <= new Date(endDate)) {
//       dateArray.push(new Date(currentDate).toDateString());
//       currentDate.setUTCDate(currentDate.getUTCDate() + steps);
//     }
//     return dateArray;
//   }
  
//   const dates = dateRange('2023-08-1', new Date());
//   var notifiarray = [
//                   { value: 100, key: "Tue Aug 01 2023" },
//                   { value: 99, key: "Wed Aug 02 2023" },
//                   { value: 1000, key: "Tue Aug 15 2023" },
   
//                 ];
//   const arrayColumn = (arr, n) => arr.map(x => x[n]);
//   var comparray = arrayColumn(notifiarray, "key");
//   dates.map(function (val, index) {
//      comparray.indexOf(val) === -1 ? notifiarray.push({value: 0, key: val}) : console.log(val+"This item already exists");
//   });
  
//   notifiarray.sort(function(a, b) {
//     var keyA = new Date(a.key),
//       keyB = new Date(b.key);
//     if (keyA < keyB) return -1;
//     if (keyA > keyB) return 1;
//     return 0;
//   });
  
  
                
//                 console.log(notifiarray);


// return(

// <div style={{height: '300px'}} >
// <PolarisVizProvider>
//   <BarChart

//   theme='Light'
//  data={[
//   {
//     name: "Notifications",
//     data: [
//       { value: 100, key: "2020-04-01T12:00:00" },
//       { value: 99, key: "2020-04-02T12:00:00" },
//       { value: 1000, key: "2020-04-03T12:00:00" },
//       { value: 2, key: "2020-04-04T12:00:00" },
//       { value: 22, key: "2020-04-05T12:00:00" },
//       { value: 6, key: "2020-04-06T12:00:00" },
//       { value: 5, key: "2020-04-07T12:00:00" }
//     ]
//   },
//   {
//     name: "Notifications sent",
//     data: [
//       { value: 90, key: "2020-04-01T12:00:00" },
//       { value: 80, key: "2020-04-02T12:00:00" },
//       { value: 900, key: "2020-04-03T12:00:00" },
//       { value: 1, key: "2020-04-04T12:00:00" },
//       { value: 20, key: "2020-04-05T12:00:00" },
//       { value: 3, key: "2020-04-06T12:00:00" },
//       { value: 4, key: "2020-04-07T12:00:00" }
//     ]
//   },
//   {
//     name: "Order Value",
//     data: [
//       { value: 80, key: "2020-04-01T12:00:00" },
//       { value: 70, key: "2020-04-02T12:00:00" },
//       { value: 800, key: "2020-04-03T12:00:00" },
//       { value: 3, key: "2020-04-04T12:00:00" },
//       { value: 10, key: "2020-04-05T12:00:00" },
//       { value: 1, key: "2020-04-06T12:00:00" },
//       { value: 50, key: "2020-04-07T12:00:00" }
//     ]
//   }
//     ]}
//     // dimensions={{
//     //   height: 1000,
//     //   width: 1000
//     // }}
//     isAnimated
//     state="Success"
//   />

// </PolarisVizProvider>
// </div>

// );
// }

import { DatePicker, Button, Popover, LegacyCard } from "@shopify/polaris";
import { useState, useCallback, useEffect, useRef } from "react";
import { PolarisVizProvider, BarChart, LineChart } from "@shopify/polaris-viz";
import "@shopify/polaris-viz/build/esm/styles.css";
import app from "../fire-config.js";
import { doc, setDoc, getFirestore, getDoc, deleteDoc } from 'firebase/firestore';

function Linechart({shopid,installeddate}) {
    const db = getFirestore(app);
    const notidataref = useRef([]);
    const notisentdataref = useRef([]);
    const orderdataref = useRef([]);

    const [state, setstate] = useState("Loading");
    const [popoverActive, setPopoverActive] = useState(false);
    const [notificationsdata, setnotificationsdata] = useState([]);
    const [notificationssentdata, setnotificationssentdata] = useState([]);
    const [orderdata, setorderdata] = useState([]);

    const [{ month, year }, setDate] = useState({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
      });
      const [selectedDates, setSelectedDates] = useState({
        start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        end: new Date()
      });
    
      const handleMonthChange = useCallback(
        (month, year) => setDate({ month, year }),
        []
      );

      const datepickmarkup = (
        <DatePicker
        month={month}
        year={year}
        onChange={setSelectedDates}
        onMonthChange={handleMonthChange}
        selected={selectedDates}
        multiMonth
        allowRange
      />
      );

      const togglePopoverActive = useCallback(
        () => setPopoverActive((popoverActive) => !popoverActive),
        [],
      );
    
      const activator = (
        <Button onClick={togglePopoverActive} disclosure>
          Select Date
        </Button>
      );
      
      const dateRange = (startDate, endDate, steps = 1) => {
        const dateArray = [];
        let currentDate = new Date(startDate);
        while (currentDate <= new Date(endDate)) {
          dateArray.push(new Date(currentDate).toDateString());
          currentDate.setUTCDate(currentDate.getUTCDate() + steps);
        }
        return dateArray;
      };

      const getanalyticdatanoti = async (installeddate) => {
        const dates = dateRange(installeddate, new Date());
        const arrayColumn = (arr, n) => arr.map(x => x[n]);

        const docRef = doc(db, shopid, "Notificationsanalytics");
        const docSnap = await getDoc(docRef);
        var notifiarray = docSnap.data() ? docSnap.data().data : [];

        var comparray = arrayColumn(notifiarray, "key");
        dates.map(function (val, index) {
           if(comparray.indexOf(val) === -1){
              notifiarray.push({value: 0, key: val})
           }
        });
        notifiarray.sort(function(a, b) {
          var keyA = new Date(a.key),
            keyB = new Date(b.key);
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });

        notidataref.current = notifiarray;

        handledatesubmit();
      };

      const getanalyticdatanotisent = async (installeddate) => {
        const dates = dateRange(installeddate, new Date());
        const arrayColumn = (arr, n) => arr.map(x => x[n]);

        const docRef = doc(db, shopid, "Notificationssentanalytics");
        const docSnap = await getDoc(docRef);
        var notifiarray = docSnap.data() ? docSnap.data().data : [];

        var comparray = arrayColumn(notifiarray, "key");
        dates.map(function (val, index) {
           if(comparray.indexOf(val) === -1){
              notifiarray.push({value: 0, key: val})
           }
        });
        notifiarray.sort(function(a, b) {
          var keyA = new Date(a.key),
            keyB = new Date(b.key);
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });

        notisentdataref.current = notifiarray;

        handledatesubmit();
      };

      const getanalyticdataorder = async (installeddate) => {
        const dates = dateRange(installeddate, new Date());
        const arrayColumn = (arr, n) => arr.map(x => x[n]);

        const docRef = doc(db, shopid, "Ordersanalytics");
        const docSnap = await getDoc(docRef);
        var notifiarray = docSnap.data() ? docSnap.data().data : [];

        var comparray = arrayColumn(notifiarray, "key");
        dates.map(function (val, index) {
           if(comparray.indexOf(val) === -1){
              notifiarray.push({value: 0, key: val})
           }
        });
        notifiarray.sort(function(a, b) {
          var keyA = new Date(a.key),
            keyB = new Date(b.key);
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });

        orderdataref.current = notifiarray;

        handledatesubmit();
      };

      const handledatesubmit = () =>{
        setstate("Loading");
        let absolute = notidataref.current.filter(function(item){
            if(selectedDates.start <= new Date(item.key) && selectedDates.end >= new Date(item.key)){
                return item;
            }
        });

        setnotificationsdata(absolute);

        let absolute2 = notisentdataref.current.filter(function(item){
          if(selectedDates.start <= new Date(item.key) && selectedDates.end >= new Date(item.key)){
              return item;
          }
      });

      setnotificationssentdata(absolute2);

      let absolute3 = orderdataref.current.filter(function(item){
        if(selectedDates.start <= new Date(item.key) && selectedDates.end >= new Date(item.key)){
            return item;
        }
    });

    
    setorderdata(absolute3);



          setPopoverActive(false);
          setstate("Success");
      };
      
      useEffect(() => {
        if(installeddate) getanalyticdatanoti(installeddate);
        if(installeddate) getanalyticdatanotisent(installeddate);
        if(installeddate) getanalyticdataorder(installeddate);
      }, [installeddate]);

     


    return (
        <div >
        
        <Popover
        active={popoverActive}
        activator={activator}
        autofocusTarget="first-node"
        onClose={togglePopoverActive}
        preferredAlignment="left"
      >
        <Popover.Pane>
        <LegacyCard sectioned>
        {datepickmarkup}
        </LegacyCard>
        </Popover.Pane>

        <Popover.Pane fixed>
        <LegacyCard sectioned>
        <Button primary onClick={handledatesubmit}>Submit</Button>
        </LegacyCard>
        </Popover.Pane>

        
      </Popover>
      <br></br>

        <PolarisVizProvider>
        <LineChart
          data={[
            {
              name: "Notifications",
              data: notificationsdata
            },
            {
              name: "Notifications sent",
              data: notificationssentdata
            },
            {
              name: "Order value",
              data: orderdata
            }
        ]}
          theme="Light"
          isAnimated
          state={state}
        />

        </PolarisVizProvider>
     </div>
    );
}


export default Linechart;